import { NextRequest, NextResponse } from "next/server"
import mailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

import { emailTemplate } from "./_functions/emailTemplate"

const optionsMailer: SMTPTransport.Options = {
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: Boolean(process.env.EMAIL_SECURE),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
}

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()

    const name = form.get("name") as string
    const email = form.get("email") as string
    const phone = form.get("phone") as string
    const message = form.get("message") as string
    const file = form.get("file") as File

    if (!name || !email || !phone || !file) {
      return NextResponse.json(
        { message: "Está faltando campos obrigatórios!" },
        { status: 400 }
      )
    }

    const fileBuffer = await file.arrayBuffer()
    const fileBase64 = Buffer.from(fileBuffer).toString("base64")

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

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `${date} - Nova inscrição de ${name.split(" ")[0]}`,
      html: emailTemplate({ name, email, phone, message }),
      attachments: [
        {
          filename: file.name,
          content: fileBase64,
          encoding: "base64",
          contentType: file.type,
        },
      ],
    }

    await new Promise<boolean>((res, rej) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) rej(false)
        else res(true)
      })
    })

    return NextResponse.json(
      { message: "Currículo enviado com sucesso!" },
      { status: 200 }
    )
  } catch (er) {
    console.error(er)
    return NextResponse.json(
      { message: "Erro ao enviar! Tente novamente mais tarde." },
      { status: 500 }
    )
  }
}
