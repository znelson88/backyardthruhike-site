import { EmailMessage } from "cloudflare:email";

export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const name = formData.get("name") || "(no name)";
    const email = formData.get("email") || "(no email)";
    const note = formData.get("note") || "(no message)";

    const raw = [
      `From: Backyard Thru Hike <contact@backyardthruhike.com>`,
      `To: znelson88@gmail.com`,
      `Subject: Library access request from ${name}`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `Message:`,
      note,
    ].join("\r\n");

    const msg = new EmailMessage(
      "contact@backyardthruhike.com",
      "znelson88@gmail.com",
      raw
    );

    await context.env.SEND_EMAIL.send(msg);

    return Response.redirect("/library/?sent=1", 303);
  } catch (err) {
    return Response.redirect("/library/?error=1", 303);
  }
}
