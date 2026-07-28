import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const phone = formData.get('phone')?.toString() || '';
        const service = formData.get('service')?.toString() || '';
        const message = formData.get('message')?.toString() || '';

        if (!name || !email || !message) {
            return new Response(JSON.stringify({
                success: false,
                message: "Please fill in all required fields."
            }), { status: 400 });
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
