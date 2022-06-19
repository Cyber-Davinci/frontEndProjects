
// ###################################### Hard coded quotes ###############################################

// let quotes = {
//     "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
//     "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
//     "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
//     "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
//     "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
//     "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
//     "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
//     "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
//     "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
//     "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
//     "- Babe Ruth": '"Every strike brings me closer to the next home run."',
//     "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
//     "- Earl Nightingale": '"We become what we think about."',
//     "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
//     "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
//     "- Buddah": '"The mind is everything. What you think you become."',
//     "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
//     "- Woody Allen": '"Eighty percent of success is showing up."',
//     "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
//     "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
//     "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
//     "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
//     "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
//     "- Jim Rohn": '"Either you run the day, or the day runs you."',
//     "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
//     "- Frank Sinatra": '"The best revenge is massive success."',
//     "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
//     "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
//     "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
//     "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
//     "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
//     "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
//     "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."'
//   };

// //get the button, left and right arrows
// const generateQuoteBtn = document.querySelector("#generate-quote"),
//       nextQuote = document.querySelector(".fa-angles-right"),
//       prevQuote = document.querySelector(".fa-angles-left");

// let quoteAuthor = document.querySelector("#quote-author"),
//     quoteText =  document.querySelector("#quote-text");

// //get all the keys from the quotes dictionary and store in quoteAuthors as arrray
// let quoteAuthors = Object.keys(quotes);
// let quote_author = quoteAuthors[Math.floor(Math.random() * quoteAuthors.length)];

// quoteText.textContent = quotes[quote_author]
// quoteAuthor.textContent = quote_author;


// const getQuote = (index) =>{

//     generateQuoteBtn.addEventListener("click", () =>{
//         quoteAuthor = quoteAuthors[Math.floor(Math.random() * quoteAuthors.length)]

//         quoteText.textContent = quotes[quoteAuthor]
//         quoteAuthor.textContent = quoteAuthor;
//     })

//     nextQuote.addEventListener("click", () =>{
//         quoteAuthors[index] ? quoteAuthor = quoteAuthors[index++] : index = 0;
//         console.log(quoteAuthor,index)
//         quoteText.textContent = quotes[quoteAuthor]
//         quoteAuthor.textContent = quoteAuthor;
//     })

//     prevQuote.addEventListener("click", () =>{
//         console.log(index)
//         quoteAuthors[index] ? quoteAuthor = quoteAuthors[index--] : index = quoteAuthors.length -1;

//         quoteText.textContent = quotes[quoteAuthor]
//         quoteAuthor.textContent = quoteAuthor;

//         console.log(quoteAuthor,index)
//     })


// }

// getQuote(0)






// ########################### get quotes using freeCodeCamp API #######################################
document.addEventListener("DOMContentLoaded",getQuote)
const generateQuoteBtn = document.querySelector("#generate-quote").addEventListener("click", getQuote),
      nextQuote = document.querySelector(".fa-angles-right"),
      prevQuote = document.querySelector(".fa-angles-left");

let quoteAuthor = document.querySelector("#quote-author"),
    quoteText =  document.querySelector("#quote-text");

index = 0

function getQuote(){
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
        // console.log(data[index++])
       let  quote = data[Math.floor(Math.random() * data.length)]
        // console.log(quote.author)
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `~ ${quote.author}`;
    })
}