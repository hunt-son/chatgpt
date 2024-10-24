import OpenAI from "openai";
async function callChatGPT(topic: string): Promise<string> {
    const openai = new OpenAI({ apiKey: "" }); // # TODO: Add your OpenAI API key here / set environment variable
    // # TODO: best practice is probably to call this SSR or in an API route

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: topic,
                },
            ],
        });

        return completion.choices[0].message.content ?? "";
    } catch (error) {
        console.error("Error fetching completion:", error);
    }

    return "";
}

export default callChatGPT;
