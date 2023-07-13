const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Want to hear a construction joke? Oh never mind, I'm still working on that one.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "How do you organize a space party? You planet!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call fake spaghetti? An impasta!",
    
  ];
  
const generateBtn = document.getElementById("jokeGenerateBtn");
const joke = document.querySelector(".joke");

// generate random number 
generateRandomNumber = () => {
    return Math.floor(Math.random()*jokes.length);
}
// generate random color 
generateBtn.addEventListener("click" , () => {
    joke.textContent = jokes[generateRandomNumber()];
})








  