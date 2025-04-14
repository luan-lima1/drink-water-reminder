import { config } from "dotenv";
config();

import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILLIO_AUTH_TOKEN!
);

export const sendReminder = async () => {
  try {
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER!,
      to: process.env.DESTINATARIO!,
      body: "Hora de tomar água!",
    });
    console.log("Enviado com sucesso");
    return;
  } catch (error: any) {
    console.error("Erro ao enviar!", error);
  }
};
