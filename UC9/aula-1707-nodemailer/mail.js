const nodemailer = require("nodemailer")

async function getMailClient() {
  const account = await nodemailer.createTestAccount()
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  })
  return transporter
}

async function sendMail(email, subject, text) {
  const mail = await getMailClient()
  const message = await mail.sendMail({
    from: "testenodemailer@email.com",
    to: email,
    subject: subject,
    text: text,
  })
  console.log(nodemailer.getTestMessageUrl(message))
}

module.exports = { sendMail }