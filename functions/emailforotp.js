import nodemailer from "nodemailer";

export default async (req, res) => {
  console.log("the api is get called:", req.body);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "hello@coherentbs.com", // your email address
      pass: "Chat@2024" // your email password
    }
  });

  // send mail with defined transport object
  try {
    let info = await transporter.sendMail({
      from: "hello@coherentbs.com", // sender address
      to: req.body.emailid, // list of receivers
      subject: "Email verification for Conevene Chat Application.", // Subject line
      text: `Hello world?`, // plain text body
      html: `<p>The OTP for the verification is <b>${req.body.emailotp}</b>. Please enter this in the app to verify. Thank you!</p>` // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json("Message sent");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json("Error sending email");
  }
};
