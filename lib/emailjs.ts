import emailjs from "@emailjs/browser"

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const CLIENT_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID

export type InquiryParams = {
  source: "form" | "popup"
  name: string
  email: string
  phone: string
  message?: string
  pagePath?: string
}

export async function sendInquiry(params: InquiryParams): Promise<void> {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    console.warn(
      "EmailJS: set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID",
    )
    throw new Error("Email není nakonfigurován.")
  }

  const templateParams = {
    source: params.source,
    name: params.name.trim(),
    email: params.email.trim(),
    phone: params.phone.trim(),
    message: (params.message ?? "").trim(),
    page_path: params.pagePath ?? "",
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })

  const clientEmail = params.email.trim()
  if (params.source === "form" && clientEmail.includes("@") && CLIENT_TEMPLATE_ID) {
    await emailjs
      .send(
        SERVICE_ID,
        CLIENT_TEMPLATE_ID,
        {
          email: clientEmail,
          to_email: clientEmail,
          name: params.name.trim(),
          phone: params.phone.trim(),
          message: (params.message ?? "").trim(),
        },
        { publicKey: PUBLIC_KEY },
      )
      .catch((err) => console.warn("Client confirmation email failed:", err))
  }
}

/** Rohový popup – pouze telefon (stejné šabloně předá prázdné jméno/e-mail). */
export async function sendPopupPhone(phone: string, pagePath?: string): Promise<void> {
  await sendInquiry({
    source: "popup",
    name: "",
    email: "",
    phone,
    message: "Žádost o zpětný kontakt (popup)",
    pagePath,
  })
}
