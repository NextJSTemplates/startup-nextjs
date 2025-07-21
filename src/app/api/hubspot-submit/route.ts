import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, company, email, phone, message, budget} =
    await req.json();

  const portalId = "146401910";
  const formGuid = "0e91e58b-2190-4f52-9ce7-d5af612442d3";

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

  const payload = {
    fields: [
      { name: "name", value: name },
      { name: "company", value: company },
      { name: "email", value: email },
      { name: "phone", value: phone },
      { name: "message", value: message },
      { name: "budget", value: budget },
      // { name: "file", value: file },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return NextResponse.json({ success: true });
  } else {
    const error = await response.text();
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
