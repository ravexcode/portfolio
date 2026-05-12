import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const { subject, email, message } = body;

    if (!subject || !email || !message) {
      return new Response(
        JSON.stringify({
          error: "Missing fields",
        }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "RavexCode <contact@ravexcode.com>",
      to: "contact@ravexcode.com",
      replyTo: email,
      subject: `Nuevo trabajo solicitado: ${subject}`,
      html: `
        <h1>Nuevo mensaje</h1>

        <p><strong>Email:</strong> ${email}</p>

        <p>${message}</p>
      `,
    })
    .catch((e) => {
      console.error(e);
    });

    return new Response(
      JSON.stringify({
        success: true,
      }),
      { status: 200 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error
      }),
      { status: 500 }
    );
  }
};