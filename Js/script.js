var text = document.getElementById("text");
var author = document.getElementById("author");
var BtnQoute = document.getElementById("qoute");
var twitter = document.getElementById("twitter");
var localQoutes = [
  {
    text: " ““Genius is one percent inspiration and ninety-nine percent perspiration. ”",
    author: "_Thomas Edison",
  },
  {
    text: " “You can observe a lot just by watching. ”",
    author: "_Yogi Berra",
  },
  {
    text: " “A house divided against itself cannot stand. ”",
    author: "_Abraham Lincoln",
  },
  {
    text: " “Difficulties increase the nearer we get to the goal. ”",
    author: "_Johann Wolfgang von Goethe",
  },
  {
    text: " “Fate is in your hands and no one elses ”",
    author: "_Byron Pulsifer",
  },
  {
    text: " “Be the chief but never the lord. ”",
    author: "_Lao Tzu",
  },
  {
    text: " “Nothing happens unless first we dream. ”",
    author: "_Carl Sandburg",
  },
  {
    text: " “Well begun is half done. ”",
    author: "_Aristotle",
  },
  {
    text: " “Life is a learning experience, only if you learn. ”",
    author: "_Yogi Berra",
  },
  {
    text: " “Self-complacency is fatal to progress. ”",
    author: "_Margaret Sangster",
  },
  {
    text: " “Peace comes from within. Do not seek it without .”",
    author: "_Buddha",
  },
  {
    text: " “What you give is what you get. ”",
    author: "_Byron Pulsifer",
  },
  {
    text: " “We can only learn to love by loving. ”",
    author: "_Iris Murdoch",
  },
  {
    text: " “Life is change. Growth is optional. Choose wisely. ”",
    author: "_Karen Clark",
  },
  {
    text: " “You'll see it when you believe it. ”",
    author: "_Wayne Dyer",
  },
  {
    text: " “Today is the tomorrow we worried about yesterday. ”",
    author: null,
  },
  {
    text: " “It's easier to see the mistakes on someone else's paper. ”",
    author: null,
  },
  {
    text: " “Every man dies. Not every man really lives. ”",
    author: null,
  },
  {
    text: " “To lead people walk behind them. ”",
    author: "_Lao Tzu",
  },
  {
    text: " “Having nothing, nothing can he lose .”",
    author: "_William Shakespeare",
  },
  {
    text: " “Trouble is only opportunity in work clothes.",
    author: "_Henry J. Kaiser",
  },
  {
    text: " “A rolling stone gathers no moss.",
    author: "_Publilius Syrus",
  },
  {
    text: " “Ideas are the beginning points of all fortunes.",
    author: "_Napoleon Hill",
  },
  {
    text: " “Everything in life is luck.”",
    author: "_Donald Trump",
  },
];

var beforeNum;
const loadQoute = function () {
  author.style.opacity = "1";
  var randomNunuber = Math.trunc(Math.random() * localQoutes.length);
  //Check if random num == Beforenum
  if (randomNunuber === beforeNum) {
    randomNunuber = randomNunuber + 1;
  }
  beforeNum = randomNunuber;

  //Update text
  text.textContent = localQoutes[randomNunuber].text;

  //Check If author In object ==Null
  if (localQoutes[randomNunuber].author == null) {
    author.textContent = "Unknown person";
  } else author.textContent = localQoutes[randomNunuber].author;
  console.log(randomNunuber);
};

/* Twwet Qoute */
const tweetQoute = function () {
  const twiterURL = `https://twitter.com/intent/tweet?text=${text.textContent} - ${author.textContent}`;
  window.open(twiterURL, "_blank");
};
BtnQoute.addEventListener("click", loadQoute);
twitter.addEventListener("click", tweetQoute);
