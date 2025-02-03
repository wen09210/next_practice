export async function fetchOllamaResponse(prompt) {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    model: "deepseek-r1:1.5b",
    //   model: "mistral:latest",
    //model: "qwen:0.5b",
      prompt: prompt,
      options: { temperature: 0.7 },
      stream: false,
    }),
  });

  const data = await res.json();
  let jsonString = data.response;

  try {
    // 嘗試提取 ```json ... ``` 內的 JSON
    const match = jsonString.match(/```json\n([\s\S]*?)\n```/);
    if (match) {
      jsonString = match[1]; // 取得 JSON 內容
    }

    return JSON.parse(jsonString);
  } catch (error) {
    console.error("JSON 解析失敗", error);
    return { error: "回應格式錯誤", rawResponse: jsonString };
  }
}


// streaming


// export async function fetchOllamaResponse(prompt, onData) {
//   const res = await fetch("http://localhost:11434/api/generate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "mistral:latest",
//       prompt: prompt,
//       options: { temperature: 0.7 },
//       stream: true,
//     }),
//   });

//   const reader = res.body.getReader();
//   const decoder = new TextDecoder();
//   let fullResponse = "";

//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;

//     const chunk = decoder.decode(value, { stream: true });
//     const lines = chunk.split("\n").filter(line => line.trim() !== "");

//     for (const line of lines) {
//       try {
//         const json = JSON.parse(line);
//         if (json.response) {
//           onData(json.response); // ✅ 即時回傳片段
//           fullResponse += json.response;
//         }
//       } catch (error) {
//         console.error("JSON 解析失敗", error);
//       }
//     }
//   }

//   return fullResponse;
// }
