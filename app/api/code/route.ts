import { checkApiLimit, increaseLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown snippets. Use code comments for explanations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) return new NextResponse("unauthorized", { status: 401 });

    if (!configuration.apiKey)
      return new NextResponse("OpenAI API key not configured ", {
        status: 500,
      });

    if (!messages) return new NextResponse("no messages", { status: 400 });

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Free trial expired", { status: 403 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    await increaseLimit();

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]: ", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
