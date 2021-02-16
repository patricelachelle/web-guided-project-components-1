const divMaker = (text, color) => {
  const newDiv = document.createElement('div') //initialized DOM element
  newDiv.textContent = text // manipulating DOM element
  newDiv.style.backgroundColor = color // manipulating DOM element

  return newDiv //returns DOM element
}

// document.body.prepend(divMaker('lambda', 'red'))
// document.body.prepend(divMaker('forest', 'green'))
// document.body.prepend(divMaker('ocean', 'blue'))


// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]

const makeImage = ({ imageURL }) => {
  //initialize DOM element
  const newImg = document.createElement('img')
  //manipulate DOM attributes
  newImg.src = imageURL
  //newImg.setAttribute('src', imageURL)
  return newImg
}

// imageData.forEach(imageDatum => {
//   const img = makeImage(imageDatum)
//   console.log(img)
//   document.body.appendChild(img)
// })

// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants
import panelData from './data/panelData'
import constants from './data/constants'

const { open, close } = constants

// TASK 2- Verify our imports using log statements
console.log(panelData) // log the panelData
console.log(open) // log the open arrow
console.log(close) // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector('div.accordion')


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel(title, content) {


  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement('div')
  const panelBar = document.createElement('div')
  const panelContent = document.createElement('div')
  const panelTitle = document.createElement('h3')
  const panelButtons = document.createElement('div')
  const openButton = document.createElement('button')
  const closeButton = document.createElement('button')


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */
 panel.appendChild(panelBar)
 panel.appendChild(panelContent)
 panelBar.appendChild(panelTitle)
 panelBar.appendChild(panelButtons)
 panelButtons.appendChild(openButton)
 panelButtons.appendChild(closeButton)

 



  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden
  panel.classList.add('panel')
  panelBar.classList.add('panel-bar')
  panelButtons.classList.add('panel-buttons')
  openButton.classList.add('panel-btn-open')
  closeButton.classList.add('panel-btn-close', 'hide-btn')
  panelContent.classList.add('panel-content', 'toggle-on')
  console.log(panel)
  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)


  // don't forget to return the panel!
  return null
}

makePanel()


// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.


// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.
