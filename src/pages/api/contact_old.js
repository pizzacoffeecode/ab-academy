

// export default async function handler(req, res,) {

//     const pw = process.env.PASSWORD
//     const email = process.env.EMAIL
//     const recipient = process.env.RECIPIENT


//     let nodemailer = require('nodemailer')
//     const transporter = nodemailer.createTransport({
//         port: 465,
//         host: "smtp.gmail.com",
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD,
//         },
//         secure: true,
//     })
//     console.log(pw, email, recipient);
//     const mailData = {
//         from: email,
//         to: recipient,
//         subject: `Message From ${ req.body.name }`,
//         text: req.body.message + " | Sent from: " + req.body.email,
//         html: `<div>${ req.body.message }</div><p>Sent from:
//     ${ req.body.email }</p>`
//     }
//     await transporter.sendMail(mailData, function (err, info) {
//         if (err)
//             console.log(err)
//         else
//             console.log(info.response)
//     })
//     await res.status(200)
//     await res.send()
// }
