import callChatGPT from "./chatgpt";
 
export async function POST(request: Request) {
    const formData = await request.json();
    const topic = formData.topic as string;
    const response = await callChatGPT(topic);
    return new Response(response);
}