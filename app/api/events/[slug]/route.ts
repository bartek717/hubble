import { NextResponse } from "next/server";
import { events } from "../../../../lib/mock-data";

type Context = {
  params: { slug: string };
};

export async function GET(_: Request, { params }: Context) {
  const event = events.find((item) => item.slug === params.slug);

  if (!event) {
    return NextResponse.json({ error: "Event not found." }, { status: 404 });
  }

  return NextResponse.json({ event });
}
