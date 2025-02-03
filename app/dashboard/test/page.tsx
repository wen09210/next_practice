"use client";
import { useState } from "react";
import { fetchOllamaResponse } from "./utils/ollama";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    const result = await fetchOllamaResponse("請用 JSON 格式寫出20個字的自我介紹,回覆內容格式要符合json");
    setData(result);
    setLoading(false);
  };

  return (
    <div className="p-6">
      <button onClick={handleFetch} className="bg-blue-500 text-white px-4 py-2 rounded">
        取得 Ollama 回應
      </button>

      {loading && <p>loading...</p>}

      {data && (
        <pre className="mt-4 p-2 bg-gray-100">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}


// streaming


// "use client";
// import { useState } from "react";
// import { fetchOllamaResponse } from "./utils/ollama";

// export default function Home() {
//   const [data, setData] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFetch = async () => {
//     setData("");
//     setLoading(true);

//     await fetchOllamaResponse(
//       "請用 JSON 格式寫出 20 個字的自我介紹, 回覆內容格式要符合 JSON",
//       (chunk:string) => {
//         setData((prev) => prev + chunk);
//       }
//     );

//     setLoading(false);
//   };

//   return (
//     <div className="p-6">
//       <button onClick={handleFetch} className="bg-blue-500 text-white px-4 py-2 rounded">
//         取得 Ollama 回應
//       </button>

//       {loading && <p>loading...</p>}

//       {data && (
//         <pre className="mt-4 p-2 bg-gray-100">
//           {data}
//         </pre>
//       )}
//     </div>
//   );
// }
