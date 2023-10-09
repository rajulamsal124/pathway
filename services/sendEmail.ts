import { Resend } from "resend"
const resend = new Resend(process.env.RESEND_API_KEY)
console.log(resend)

export const sendEmail = async (formdata) => {
  resend.sendEmail({
    from: "pathway@resend.dev",
    to: "rajulamsal62@gmail.com",
    subject: "Pathway Contact Form",
    text: "hello world from pathway",
  })
}
