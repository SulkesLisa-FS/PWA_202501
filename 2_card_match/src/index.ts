// Imports your SCSS stylesheet
import "@/styles/index.scss";

//  Front Face Content of the Cards
const cards: string[] = ["A", "A", "B", "B", "C", "C"];

// Number of Flipped Cards
let flippedCards: HTMLElement[] = [];
// Number of Match Cards
let matchedCards: number = 0;
// Number of Attempts Left Counter
let attempts: number = 3;

//  Shuffle The Deck of Cards
const shuffle = (array: string[]): void => {
  for (let i = array.length - 1; i > 0; i--) {
    const a = Math.floor(Math.random() * (i + 1));
    [array[i], array[a]] = [array[a], array[i]];
  }
};
// Update - Nuber of Attempts Left  
const updateAttempts = (): void => {
  const attemptsCounter = document.querySelector("#h2");
    if (attemptsCounter) {
      attemptsCounter.textContent = `Attempts Left: ${attempts}`;
    }
}
// Display alerts in the h3 element
const displayAlert = (message: string): void => {
  const alerts = document.querySelector("#h3") as HTMLElement;
    if (alerts) {
      alerts.textContent = message;
    }
}
// Create The Deck of Cards
 const createCard = (content: string): HTMLElement  => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.content = content;
  // Card Click Event Listener
  card.addEventListener("click", () => {
 // Return a card not already flipped
    if (
      card.classList.contains("flipped") ||
      card.classList.contains("matched")
    ) {
      return;
    }
    // Check to see if number attempts = to 0
    if (attempts === 0) {
      displayAlert("No more attempts! Try Again!");
      return;
    }
    // Adds Content to the card face 
    card.classList.add("flipped");
    card.textContent = content;
    flippedCards.push(card);
    // Check if two cards are flipped
    if (flippedCards.length === 2) {
    //  subtracts 1 to the number of attempts and update
      attempts--;
      updateAttempts();
      checkForMatch();
    }
  });
   return card;
 }
// Check if card 1 and card 2 mathch
const checkForMatch = (): void => {
  const [card1, card2] = flippedCards;
  // If the cards match, mark them as matched
  if (card1.dataset.content === card2.dataset.content) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards += 2;
    // Check if all cards are matched - Alert
    if (matchedCards === cards.length) {
      setTimeout(() => {
        displayAlert("You won!");
      }, 300);
    }
  }
  // If the cards do not match - Flip them back over
  else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      card1.textContent = "";
      card2.textContent = "";
    }, 900);
  }
  // Reset the flipped cards array
  flippedCards = [];
}
// Start the game
const playGame = (): void  => {
  const gameBox = document.querySelector("#game-box");
  if (!gameBox) {
    console.error("Game Box Can Not Be Found");
    return;
  }
  // Clear existing cards
  gameBox.innerHTML = "";
  // Shuffle the deck of cards
  shuffle(cards);
  // Add the cards to the interface
  cards.forEach((content) => {
    const card = createCard(content);
    gameBox.appendChild(card);
  });
  // Reset the attempts
  attempts = 3;
  matchedCards = 0;
  updateAttempts();
  displayAlert(""); // Clear any alerts
}
// Reset the Game
const resetGame = (): void => {
    playGame();
  }
//  Select HTML Button
const button = document.querySelector("#button") as HTMLButtonElement;
//  Click Event Handler
const mouseClick  = (event: MouseEvent) => {
  resetGame();
}
//  Button Event Listener - For Click
button.addEventListener("click", mouseClick);
// Start the game when the script loads
playGame();
