import { NextResponse } from "next/server"
import { company } from "@/lib/site-data"

type ContactPayload = {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  message?: string
}

function buildWhatsAppUrl(payload: ContactPayload) {
  const message = [
    "New RSS Labs inquiry",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : "",
    `Service: ${payload.service}`,
    payload.message ? `Message: ${payload.message}` : "",
  ].filter(Boolean).join("\n")

  return `${company.whatsappHref}?text=${encodeURIComponent(message)}`
}

export async function POST(request: Request) {
  try {
    const payload: ContactPayload = await request.json()

    if (!payload.name || !payload.email || !payload.phone || !payload.service) {
      return NextResponse.json(
        { ok: false, error: "Please fill all required fields." },
        { status: 400 }
      )
    }

    const whatsappUrl = buildWhatsAppUrl(payload)

    console.log("[contact] form submission:", {
      ...payload,
      notifyTo: company.whatsappNumber,
    })

    return NextResponse.json({
      ok: true,
      message: "Contact request received.",
      whatsappUrl,
    })
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    )
  }
}
