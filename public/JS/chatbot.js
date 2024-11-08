/**
 * Chatbot Handler - handles Chatbot Interaction
 */

async function askQuestion() {
  const questionInput = document.getElementById("questionInput").value;
  const answerOutput = document.getElementById("answerOutput");

  try {
    const response = await fetch("/ask-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: questionInput }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      const answer = data.choices[0].message.content;
      answerOutput.innerHTML = `<p>${answer}</p>`;
    } else {
      answerOutput.innerHTML = `<p>Sorry, I couldn't understand your question.</p>`;
    }
  } catch (error) {
    console.error("Error:", error);
    answerOutput.innerHTML = `<p>Sorry, an error occurred while processing your request.</p>`;
  }
}
