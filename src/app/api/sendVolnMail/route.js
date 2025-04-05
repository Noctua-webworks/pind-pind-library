import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { fullname, dob, phone, qualification } = await req.json();
    
        if (!fullname || !dob || !phone || !qualification) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
    
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
    
    You have received a new request to volunteer for the library through the Pind Pind Library website. Here are the details:
    
    📌 Name: ${fullname}
    🎂 Date of Birth: ${dob}
    📞 Phone: ${phone}
    🎓 Qualification: ${qualification}
    
    Please review this submission and take the necessary steps to assist the volunteer.
    
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
