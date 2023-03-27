import axios from "axios";

const apiKey = process.env.GPT_KEY;
export const chatData = {
  temperature: 0.2,
  max_tokens: 500,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
};

export const apiChatGPT = axios.create({
  baseURL: "https://api.openai.com/v1/engines/text-davinci-003",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${apiKey}`,
  },
  data: chatData,
});
