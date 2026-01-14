import { NextRequest, NextResponse } from "next/server";
import { events } from "../../../../lib/mock-data";

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(_: NextRequest, { params }: Context) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return NextResponse.json({ error: "Event not found." }, { status: 404 });
  }

  return NextResponse.json({ event });
}
