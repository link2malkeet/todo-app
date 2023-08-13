import prisma from "../utils/prisma";

export async function POST(request: Request) {
  const { content } = await request.json();
  if (!content || content === "") {
    return new Response(JSON.stringify({ success: false }), {
      status: 400,
    });
  }
  await prisma.todos.create({
    data: {
      content,
    },
  });
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
