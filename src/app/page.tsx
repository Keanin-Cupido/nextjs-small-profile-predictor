"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  }

  return (
    <main>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="Enter your name..." 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </main>
  );
}
