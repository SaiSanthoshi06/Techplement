const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "The more you care the more you loose.", author: "Harry Potter"},
    {text: "The future belongs to those who believe in the beauty of their dreams." , author: "Eleanor Roosevel"},
    {text: "Life is either a daring adventure or nothing at all.", author: " Helen Keller"},
    {text: "Turn your wounds into wisdom.", author: "Oprah Winfrey"},
    {text: "Life is a succession of lessons which must be lived to be understood.", author: "Helen Keller"}
];

function NewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerHTML = `<p>"${quote.text}"</p><p><em>- ${quote.author}</em></p>`;
}

function searchQuotes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(searchTerm));
    
    let displayText = '';
    if (filteredQuotes.length > 0) {
        filteredQuotes.forEach(quote => {
            displayText += `<p>"${quote.text}"<br><em>- ${quote.author}</em></p>`;
        });
    } else {
        displayText = '<p>No quotes found for this author.</p>';
    }
    document.getElementById('quoteDisplay').innerHTML = displayText;
}
