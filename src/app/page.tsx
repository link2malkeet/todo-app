import prisma from "./utils/prisma";

export default async function Page() {
  const todos = await prisma.todos.findMany();
  return <>{JSON.stringify(todos, undefined, 2)}</>;
}
