"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {}

const TodoSubmit = (props: Props) => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const saveTodo = async () => {
    try {
      await axios.post("/todos/", { content });
      setContent("");
      router.refresh();
    } catch (e) {
      console.error("err:", e);
    }
  };
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await saveTodo();
      }}
      className="w-full flex item-center space-x-2"
    >
      <input
        className="px-4 py-2 text-gray-600 rounded-xl outline-none my-4"
        type="text"
        name="todo"
        id="todo"
        placeholder="Submit a todo"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button
        className="my-4 whitespace-nowrap active:scale-90 transition-transform px-4 py-2 bg-white text-black rounded-xl"
        type="submit"
      >
        Save todo
      </button>
    </form>
  );
};

export default TodoSubmit;
