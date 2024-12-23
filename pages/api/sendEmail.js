import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { to, subject, text, pdfBuffer } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      attachments: [
        {
          filename: 'receipt.pdf',
          content: pdfBuffer,
          encoding: 'base64',
        },
      ],
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

    });

    console.log(process.env.EMAIL_USER, "EMAIL");
    ;

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
