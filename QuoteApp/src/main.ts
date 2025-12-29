interface Quote {
  text: string;
  author: string;
}

const form = document.getElementById("quoteForm") as HTMLFormElement;
const textInput = document.getElementById("textInp") as HTMLTextAreaElement;
const authorInput = document.getElementById("authInp") as HTMLInputElement;
const quoteList = document.getElementById("quoteList") as HTMLUListElement;

const quotes: Quote[] = [];

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const text = textInput.value.trim();
  const author = authorInput.value.trim();

  if (!text || !author) return;

  const newQuote: Quote = {
    text,
    author
  };

  quotes.push(newQuote);
  renderQuotes();

  form.reset();
});

function renderQuotes(): void {
  quoteList.innerHTML = "";

  quotes.forEach((quote: Quote) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>"${quote.text}"</strong><br>
      <span>— ${quote.author}</span>
    `;
    quoteList.appendChild(li);
  });
}
renderQuotes();