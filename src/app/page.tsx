import { serverClient } from "./_trpc/serverClient";

import TodoList from "./_components/TodoList";
import {Parent} from "@/app/_components/jotai/Parent";

export const dynamic = "force-dynamic";

export default async function Home() {
  console.log("here")
  const todos = await serverClient.getTodos();
  const todo = await serverClient.getTodo(1);
  return (
    <main className="max-w-3xl mx-auto mt-5">
      <div>{todo?.content}</div>
      <TodoList initialTodos={todos} />
      <Parent />
    </main>
  );
}
