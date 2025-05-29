let quotes = [
  {
    author: "Oscar Wilde",
    content: "“Be yourself; everyone else is already taken.”"
  },
  {
    author: "Marilyn Monroe",
    content: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
  },
  {
    author: "Frank Zappa",
    content: "“So many books, so little time.”"
  },
  {
    author: "Albert Einstein",
    content: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
  },
  {
    author: "Marcus Cicero",
    content: "“A room without books is like a body without a soul.”"
  },
  {
    author: "Bernard M. Baruch",
    content: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
  },
  {
    author: "Dr. Seuss",
    content: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
  },
  {
    author: "Mae West",
    content: "“You only live once, but if you do it right, once is enough.”"
  },
  {
    author: "Mahatma Gandhi",
    content: "“Be the change that you wish to see in the world.”"
  },
  {
    author: "Robert Frost",
    content: "“In three words I can sum up everything I've learned about life: it goes on.”"
  },
  {
    author: "Mark Twain",
    content: "“If you tell the truth, you don't have to remember anything.”"
  },
  {
    author: "Oscar Wilde",
    content: "“To live is the rarest thing in the world. Most people exist, that is all.”"
  },
  {
    author: "Elbert Hubbard",
    content: "“A friend is someone who knows all about you and still loves you.”"
  },
  {
    author: "Mahatma Gandhi",
    content: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”"
  },
  {
    author: "Narcotics Anonymous",
    content: "“Insanity is doing the same thing, over and over again, but expecting different results.”"
  }
]
let currentIndex = Math.trunc(Math.random() * quotes.length);
let quoteContent = document.querySelector(".quote p")
let quoteAuthor = document.querySelector(".quote h2")
quoteAuthor.innerHTML = `--${quotes[currentIndex].author}`;
quoteContent.innerHTML = quotes[currentIndex].content;

function getQuote() {
  let randIndex = Math.trunc(Math.random() * quotes.length);
  if (randIndex == currentIndex) {
    currentIndex += 1;
  } else {
    currentIndex = randIndex
  }

  quoteAuthor.innerHTML = `--${quotes[currentIndex].author}`;
  quoteContent.innerHTML = quotes[currentIndex].content;
}