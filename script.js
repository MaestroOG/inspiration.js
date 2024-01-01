const quote = document.querySelector(".quote h1");
const author = document.querySelector(".author");
const apiURL = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuote(apiURL);