"use server"
import mailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

import { FormType } from "@/app/_components/RecruitForm/formSchema"

export default async function sendData(formData: FormType) {
  const { name, email, phone, file, message } = formData

  const optionsMailer: SMTPTransport.Options = {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  }

  const transporter = mailer.createTransport(optionsMailer)

  await new Promise((res, rej) => {
    transporter.verify((error, sucess) => {
      if (error) {
        rej(error)
      } else {
        res(sucess)
      }
    })
  })

  const date = new Date().toLocaleDateString("pt-br", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `${date} - Nova inscrição de ${name.split(" ")[0]}`,
    file: file,
    html: `<p>${file}</p>`,
  }

  return await new Promise<boolean>((res, rej) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error)
        rej(false)
        return false
      } else {
        console.log(info)
        res(true)
      }
    })
  })
}
