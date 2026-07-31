import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const name = (formData.get('name')?.toString() || '').trim();
        const email = (formData.get('email')?.toString() || '').trim();
        const rawPhone = (formData.get('phone')?.toString() || '').replace(/[^0-9]/g, '');
        const countryCode = (formData.get('country_code')?.toString() || '+880').trim();
        const phone = rawPhone ? `${countryCode} ${rawPhone}` : '';
        const service = (formData.get('service')?.toString() || '').trim();
        const message = (formData.get('message')?.toString() || '').trim();

        // Server-side validation
        if (!name || name.length < 2 || name.length > 100) {
            return new Response(JSON.stringify({
                success: false,
                message: "Please enter a valid full name (2-100 characters)."
            }), { status: 400 });
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !emailRegex.test(email) || email.length > 150) {
            return new Response(JSON.stringify({
                success: false,
                message: "Please enter a valid email address (e.g. name@domain.com)."
            }), { status: 400 });
        }

        // For BD (+880), phone number must start with 1 (e.g. 17XXXXXXXX) and be exactly 10 digits
        if (countryCode === '+880') {
            if (!rawPhone || rawPhone.length !== 10 || !rawPhone.startsWith('1')) {
                return new Response(JSON.stringify({
                    success: false,
                    message: "Bangladeshi phone numbers must start with 1 and be exactly 10 digits (e.g. 1707568468)."
                }), { status: 400 });
            }
        } else if (!rawPhone || rawPhone.length < 6 || rawPhone.length > 12) {
            return new Response(JSON.stringify({
                success: false,
                message: "Please enter a valid phone number."
            }), { status: 400 });
        }

        if (!message || message.length < 10 || message.length > 3000) {
            return new Response(JSON.stringify({
                success: false,
                message: "Project brief must be between 10 and 3000 characters."
            }), { status: 400 });
        }

        // SAVE TO LARAVEL BACKEND API
        try {
            const apiRes = await fetch("http://127.0.0.1:8000/api/contact/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone: phone || null,
                    service: service || null,
                    message
                })
            });
            if (!apiRes.ok) {
                console.error("AI Chat: Failed to submit to Laravel API status:", apiRes.status);
            }
        } catch (e) {
            console.error("AI Chat: Error submitting to Laravel API:", e);
        }

        // SAVE TO FILE BACKUP
        try {
            const fs = await import('node:fs/promises');
            const path = await import('node:path');
            const filePath = path.join(process.cwd(), 'submissions.json');

            let submissions = [];
            try {
                const data = await fs.readFile(filePath, 'utf-8');
                submissions = JSON.parse(data);
            } catch (e) {
                // File doesn't exist yet
            }

            const newSubmission = {
                id: Date.now().toString(),
                name,
                email,
                phone,
                service,
                message,
                timestamp: new Date().toISOString()
            };

            submissions.unshift(newSubmission); // Newest first
            await fs.writeFile(filePath, JSON.stringify(submissions, null, 2));
        } catch (e) {
            console.error("AI Chat: Failed to save submission file backup:", e);
        }

        console.log("--- New Contact Form Submission ---");
        console.log(`From: ${name} (${email})`);
        console.log(`Phone: ${phone || 'N/A'}`);
        console.log(`Service: ${service || 'None specified'}`);
        console.log(`Message: ${message}`);
        console.log("-----------------------------------");

        const resendApiKey = import.meta.env.RESEND_API_KEY;
        const contactEmail = import.meta.env.CONTACT_EMAIL || 'info@globix.tech';

        if (resendApiKey) {
            try {
                const { Resend } = await import('resend');
                const resend = new Resend(resendApiKey);
                await resend.emails.send({
                    from: 'Globix Website <onboarding@resend.dev>',
                    to: contactEmail,
                    subject: `New Lead: ${name} - ${service || 'General'}`,
                    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service || 'General'}\n\nMessage:\n${message}`
                });
                console.log("Email notification sent successfully");
            } catch (e) {
                console.error("Failed to send email notification:", e);
            }
        }

        return new Response(JSON.stringify({
            success: true,
            message: "Thank you! Your message has been received."
        }), { status: 200 });

    } catch (error: any) {
        console.error("Contact Form Error:", error);
        return new Response(JSON.stringify({
            success: false,
            message: "An error occurred while sending your message. Please try again later."
        }), { status: 500 });
    }
};
