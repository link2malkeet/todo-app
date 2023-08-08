import TodoSubmit from "@/components/todoSubmit";
import prisma from "./utils/prisma";

export default async function Page() {
  const todos = await prisma.todos.findMany();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      <h1 className="text-base font-light my-5">Todo application</h1>
      <div className="flex flex-col space-y-4 justify-center items-center w-full">
        {todos.map((todo, i) => (
          <div
            key={i}
            className="bg-white text-lg text-black p-4 rounded-xl w-full"
          >
            <>{todo.content}</>
          </div>
        ))}
        <TodoSubmit />
      </div>
    </div>
  );
}
