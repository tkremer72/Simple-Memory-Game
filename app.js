document.addEventListener("DOMContentLoaded", () => {
  //Card Options
  const cardsArray = [
    {
      name: "camera",
      img: "images/camera.png",
    },
    {
      name: "fire",
      img: "images/fire.png",
    },
    {
      name: "kitten",
      img: "images/kitten.png",
    },
    {
      name: "pirate",
      img: "images/pirate.png",
    },
    {
      name: "pokemon",
      img: "images/pokemon.png",
    },
    {
      name: "thumbs",
      img: "images/thumbs.png",
    },
    {
      name: "camera",
      img: "images/camera.png",
    },
    {
      name: "fire",
      img: "images/fire.png",
    },
    {
      name: "kitten",
      img: "images/kitten.png",
    },
    {
      name: "pirate",
      img: "images/pirate.png",
    },
    {
      name: "pokemon",
      img: "images/pokemon.png",
    },
    {
      name: "thumbs",
      img: "images/thumbs.png",
    },
  ];

  //Use Math.random to sort the cards
  cardsArray.sort(() => 0.5 - Math.random());

  //Use the query selector to get the grid div
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //Draw the game board
  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You Found A Match!");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, Please Try Again!");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardsArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You Found Them All!";
    }
  }

  //Flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardsArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
