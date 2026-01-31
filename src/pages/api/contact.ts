import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');

        // Validation
        if (!name || !email || !message) {
            return new Response(JSON.stringify({
                success: false,
                message: "Please fill in all required fields."
            }), { status: 400 });
        }

        // SAVE TO FILE
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
            console.log("AI Chat: Submission saved to submissions.json");
        } catch (e) {
            console.error("AI Chat: Failed to save submission:", e);
        }

        // LOGGING DATA (This is how the owner sees it in production logs)
        console.log("--- New Contact Form Submission ---");
        console.log(`From: ${name} (${email})`);
        console.log(`Service: ${service || 'None specified'}`);
        console.log(`Message: ${message}`);
        console.log("-----------------------------------");

        /* 
        DEVELOPER NOTE: To send an email instead of just logging, 
        you can use services like Resend or Nodemailer here.
        
        Example with Resend:
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'Globix Website <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'info@globix.tech',
            subject: `New Lead: ${name} - ${service}`,
            text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
        });
        */

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
