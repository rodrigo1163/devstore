import data from "../data.json";
import { z } from "zod";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const slug = z.string().parse((await params).slug);
  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 400 });
  }

  return Response.json(product);
}
