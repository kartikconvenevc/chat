import nodemailer from "nodemailer"

export default async (req, res) => {
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount()
console.log("the api is get called :",req.body)

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "prasanna@convenevc.com", // generated ethereal user
      pass: "Mukta@3511" // generated ethereal password
    }
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "prasanna@convenevc.com", // sender address
    to: req.body.emailid, // list of receivers
    subject: "Email verification for Conevene Chat Application.", // Subject line
    text: `Hello world? `, // plain text body
    html: `<p>The otp for the verification is <b>${req.body.emailotp} </b>. Please enter this in app to verify.Thank you! </p>` // html body
  })

  console.log("Message sent: %s", info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))

  res.json("Message sent")
}