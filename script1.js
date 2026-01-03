let arr = [
  {
    author: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
  },
  {
    author: "Maya Angelou",
    quote: "You will face many defeats in life, but never let yourself be defeated."
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started."
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    author: "Steve Jobs",
    quote: "Innovation distinguishes between a leader and a follower."
  },
  {
    author: "Nelson Mandela",
    quote: "It always seems impossible until it’s done."
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop."
  },
  {
    author: "Helen Keller",
    quote: "The only thing worse than being blind is having sight but no vision."
  },
  {
    author: "Rumi",
    quote: "What you seek is seeking you."
  },
  {
    author: "Winston Churchill",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
  },
  {
    author: "Mother Teresa",
    quote: "Peace begins with a smile."
  },
  {
    author: "Leonardo da Vinci",
    quote: "Simplicity is the ultimate sophistication."
  },
  {
    author: "Buddha",
    quote: "The mind is everything. What you think you become."
  },
  {
    author: "Bruce Lee",
    quote: "Be water, my friend."
  },
  {
    author: "Paulo Coelho",
    quote: "When you want something, all the universe conspires in helping you to achieve it."
  }
]

const auth = document.getElementById('m');
const quot = document.getElementById('p');
const press = document.getElementById('b');

const quotesgenerator = function(ax){
  const i = Math.floor(Math.random()*arr.length);

  auth.innerText= ` Author :  ${arr[i].author}`;
  quot.innerHTML= `Quotes:  ${arr[i].quote}`;
}
press.addEventListener('click',function(){
  quotesgenerator(arr);
}
);

