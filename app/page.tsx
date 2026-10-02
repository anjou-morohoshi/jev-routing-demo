"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

const judge = () => {
  if (text.includes("配送")) {
    setResult("物流");
  } else if (text.includes("請求")) {
    setResult("経理");
  } else if (text.includes("パソコン")) {
    setResult("情報システム");
  } else {
    setResult("判定不可");
  }
};

  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        問い合わせ振分けアプリ
      </h1>

      <div className="mb-4">
        <label className="block mb-2">
          問い合わせ内容
        </label>

        <textarea
          className="w-full border p-3 rounded"
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={judge}
      >
        判定
      </button>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">
          判定結果
        </h2>

        <p className="mt-2 text-xl">
          {result}
        </p>
      </div>
    </main>
  );
}
