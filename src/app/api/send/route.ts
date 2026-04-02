import { NextRequest, NextResponse } from "next/server";

const WHATSAPP_NUMBER = "212631176756";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type } = body;

    let message = "";

    if (type === "contact") {
      const { firstname, lastname, company, email, phone, message: userMessage } = body;
      message = `🔔 *Nouveau contact — ZEG Website*\n\n` +
        `👤 *Nom:* ${firstname} ${lastname}\n` +
        `🏢 *Entreprise:* ${company || "—"}\n` +
        `📧 *Email:* ${email}\n` +
        `📱 *Téléphone:* ${phone || "—"}\n\n` +
        `💬 *Message:*\n${userMessage || "Aucun message."}`;
    } else if (type === "diagnostic") {
      const { name, company, email, phone, needs } = body;
      message = `📋 *Demande de Diagnostic Flash — ZEG Website*\n\n` +
        `👤 *Nom:* ${name}\n` +
        `🏢 *Entreprise:* ${company || "—"}\n` +
        `📧 *Email:* ${email}\n` +
        `📱 *Téléphone:* ${phone || "—"}\n\n` +
        `🎯 *Défis actuels:*\n${needs || "Non spécifié."}`;
    } else {
      return NextResponse.json({ error: "Type invalide" }, { status: 400 });
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return NextResponse.json({ success: true, whatsappUrl });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
