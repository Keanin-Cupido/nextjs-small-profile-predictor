"use client";

import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    push(`/prediction/${inputVal}`);
  }

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
      <div>
        <h1 className="text-center text-3xl text-yellow-400">Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-8">
        <input type="text" name="" id="" placeholder="Enter your name..." 
          value={inputVal}
          className="text-yellow-400 p-2 pl-4 text-lg rounded-lg outline-none bg-zinc-950 focus:bg-zinc-900"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit" className="px-6 py-4 text-black rounded-lg cursor-pointer bg-yellow-400 hover:bg-yellow-500">Predict Data</button>
      </form>
    </main>
  );
}
