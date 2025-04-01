import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log('send email called');
    
    const { firstname, lastname, email, phone, district, block, village } = await req.json();

    if (!firstname || !lastname || !email || !district || !block || !village) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    // return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    // Configure Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Website owner's email
      subject: "New Library Establishment Request - Pind Pind Library",
      text: `Dear Admin,
    
    You have received a new request for establishing a library in a village through the Pind Pind Library website. Here are the details:
    
    📌 **Name:** ${firstname} ${lastname}  
    📧 **Email:** ${email}  
    📞 **Phone:** ${phone}  
    
    🏠 **Location Details:**  
    - **District:** ${district}  
    - **Block:** ${block}  
    - **Village:** ${village}  
    
    Please review this submission and take the necessary steps to assist in setting up the library.
    
    Best regards,  
    Pind Pind Library Team`
    };
    

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
