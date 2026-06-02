import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, phone, email, message } = await req.json();

    if (!fullName || !phone || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "Sva polja su obavezna" }), { status: 400 });
    }

    // Konfiguracija Nodemailer-a (samo server-side)
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Slanje maila
    await transporter.sendMail({
      from: `"Kontakt forma" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Nova poruka sa forme od ${fullName}`,
      html: `
        <h3>Nova poruka sa contact forme</h3>
        <p><strong>Ime:</strong> ${fullName}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: "Greška pri slanju maila" }), { status: 500 });
  }
}