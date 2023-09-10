import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;


    const verificationToken = uuidv4();


    const hashedPassword = await bcrypt.hash(password, 10);



    const transporter = nodemailer.createTransport({
    
    });

    const mailOptions = {
      from: 'your@email.com',
      to: email,
      subject: 'Email Verification',
     
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Email sending failed' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Registration successful. Please check your email for verification.' });
      }
    });
  } else {
    res.status(405).end();
  }
};