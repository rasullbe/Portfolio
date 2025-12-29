"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById("quoteForm");
const textInput = document.getElementById("textInp");
const authorInput = document.getElementById("authInp");
const quoteList = document.getElementById("quoteList");
const quotes = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = textInput.value.trim();
    const author = authorInput.value.trim();
    if (!text || !author)
        return;
    const newQuote = {
        text,
        author
    };
    quotes.push(newQuote);
    renderQuotes();
    form.reset();
});
function renderQuotes() {
    quoteList.innerHTML = "";
    quotes.forEach((quote) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <strong>"${quote.text}"</strong><br>
      <span>— ${quote.author}</span>
    `;
        quoteList.appendChild(li);
    });
}
renderQuotes();
//# sourceMappingURL=main.js.map