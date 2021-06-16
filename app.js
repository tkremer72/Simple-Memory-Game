document.addEventListener('DOMContentLoaded', () => {
     //card options
     const cardArray = [
       {
         name: 'camera',
         img: 'images/camera-icon.png'
       },
       {
         name: 'cheeseburger',
         img: 'images/cheeseburger.png'
       },
       {
         name: 'ice-cream',
         img: 'images/ice-cream.png'
       },
       {
         name: 'pizza',
         img: 'images/pizza.png'
       },
       {
         name: 'milkshake',
         img: 'images/milkshake.png'
       },
       {
         name: 'hotdog',
         img: 'images/hotdog.png'
       },
       {
         name: 'fries',
         img: 'images/fries.png'
       },
       {
         name: 'cheeseburger',
         img: 'images/cheeseburger.png'
       },
       {
         name: 'ice-cream',
         img: 'images/ice-cream.png'
       },
       {
         name: 'pizza',
         img: 'images/pizza.png'
       },
       {
         name: 'milkshake',
         img: 'images/milkshake.png'
       },
       {
         name: 'hotdog',
         img: 'images/hotdog.png'
       }
     ]
   
     cardArray.sort(() => 0.5 - Math.random())
   
     const grid = document.querySelector('.grid')
     
   
     //create your board
     function createBoard() {
       for (let i = 0; i < cardArray.length; i++) {
         const card = document.createElement('img')
         card.setAttribute('src', 'images/blank.png')
         card.setAttribute('data-id', i)
         // card.addEventListener('click', flipCard)
         grid.appendChild(card)
       }
     }
   
     
     createBoard()
   })
   document.addEventListener('DOMContentLoaded', () => {
     const cardsArray = [
         /*  {
               name: 'camera',
               img: 'images/camera.png'
          }, */
          {
               name: 'cheeseburger',
               img: 'images/cheeseburger.png'
          },
          {
               name: 'ice-cream',
               img: 'images/ice-cream.png'
          },
          {
               name: 'pizza',
               img: 'images/pizza.png'
          },
          {
               name: 'milkshake',
               img: 'images/milkshake.png'
          },
          {
               name: 'hotdog',
               img: 'images/hotdog.png'
          },
          {
               name: 'fries',
               img: 'images/fries.png'
          },
         /*  {
               name: 'camera',
               img: 'images/camera.png'
          }, */
          {
               name: 'cheeseburger',
               img: 'images/cheeseburger.png'
          },
          {
               name: 'ice-cream',
               img: 'images/ice-cream.png'
          },
          {
               name: 'pizza',
               img: 'images/pizza.png'
          },
          {
               name: 'milkshake',
               img: 'images/milkshake.png'
          },
          {
               name: 'hotdog',
               img: 'images/hotdog.png'
          },
          {
               name: 'fries',
               img: 'images/fries.png'
          },
     ]
   
     //Use the query selector to get the grid div
     const grid = document.querySelector('.grid')
   
     //Draw the game board 
     function createBoard() {
          for(let i = 0; i < cardsArray.length; i++) {
               const card = document.createElement('img')
               card.setAttribute('src', 'images/blank.png')
               card.setAttribute('data-id', i)
               //card.addEventListener('click', flipCard)
               grid.appendChild(card)
          }
     }
   
   
   
   
     createBoard()
   })