const getRandomQuote = async () => {
    const response = await fetch('https://api.quotable.io/random?tags=technology&minLength=150');
    const myJson = await response.json();
    var quote = myJson.content;
    var author = myJson.author;
    var qel = document.getElementById('quote-txt');
    var ael = document.getElementById('quote-auth');
    qel.textContent = quote;
    ael.textContent = author;
  }