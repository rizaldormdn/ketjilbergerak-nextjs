import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function mail(req: NextApiRequest, res: NextApiResponse) {     
     const { name, email, phone, company, message } = req.body;

     const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
               user: 'rizaldormdn@gmail.com',
               pass: 'rizaldoramadhoni',
          },
     });

     try {
          await transporter.sendMail({
               from: `${name}, ${email}`,
               to: 'rizaldormd@gmail.com',
               subject: `New message from ${name}`,
               html: `
              <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li>
                <li>Company: ${company}</li>
              </ul>
              <p>${message}</p>
            `,
          });

          return res.status(200).json({
               success: true,
               message: 'Email sent successfully'
          });
     } catch (error) {
          return res.status(500).json({
               success: false,
               message: 'Something went wrong'
          });
     }
}