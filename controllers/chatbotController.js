const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/chatbot", (req, res) => {
  res.render("chatbot");
});

router.post("/ask-question", async (req, res) => {
  const { question } = req.body;
  const apiKey = "sk-proj-FCQZ8GvZEj0gjBPW6IHXT3BlbkFJjjqTrKZy22qrp5XEQKi7";
  console.log(question);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        max_tokens: 150,
        messages: [
          {
            role: "system",
            content: "you are a shop assistent. answer the technical question",
          },
          {
            role: "user",
            content: question,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    console.log(data.choices[0].message.content);

    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

module.exports = router;
