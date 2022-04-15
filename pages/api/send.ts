import { NextApiRequest, NextApiResponse  } from 'next';
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SEDGRID_API_KEY!)

type Data = {
    success: boolean
}

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    if(req.method === 'POST') {
        const {name, email, phone, message}: {name: string, email: string, phone: string, message: string} = req.body
        const msg = {
            to: "andreiavova@protonmail.com",
            from: "contact@clouditdev.com",
            subject: "A message from: " + name,
            html: "<h2>Message: </h2>" + message + "<h2>Email:</h2>" + email + "<h2>Phone:</h2> " + phone
        }
        try {
            await sgMail.send(msg)
            res.status(200).json({ success: true })
        } catch (err) {
            res.status(200).json({ success: false })
        }
    }
}