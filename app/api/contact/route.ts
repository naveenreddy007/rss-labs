import { NextResponse } from "next/server"

type ContactPayload = {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  message?: string
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

    console.log("[contact] form submission:", payload)

    return NextResponse.json({ ok: true, message: "Contact request received." })
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    )
  }
}
