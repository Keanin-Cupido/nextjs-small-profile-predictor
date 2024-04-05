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
    <main>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="Enter your name..." 
          value={inputVal}
          className="text-cyan-900"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </main>
  );
}
