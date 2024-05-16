import nodemailer from "nodemailer"

export default async (req, res) => {
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount()
console.log("the api is get called :",req.body)

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "hello@coherentbs.com", // generated ethereal user
      pass: "Chat@2024" // generated ethereal password
    }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "hello@coherentbs.com", // sender address
    to: "kartik@convenevc.com", // list of receivers
    subject: "New contact form has been Submitted", // Subject line
    text: `Hello world? `, // plain text body
    html: `<p> Please Click on link to check details.Thank you! </p> <a href="https://cbswebsiteapi.convenevc.com/admin" /> ` // html body
  })

  console.log("Message sent: %s", info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

  res.json("Message sent")
}