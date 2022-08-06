import { SMTPClient } from 'emailjs';
export default async function handler(req, res,) {

    const client = new SMTPClient({
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
        host: 'smtp.gmail.com',
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: req.body.message + " | Sent from: " + req.body.email,
            from: process.env.EMAIL,
            to: process.env.RECIPIENT,
            cc: process.env.CC,
            subject: `@AB Academy : Message From ${ req.body.name }`,
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }

    res.status(200)
    res.send()
}
