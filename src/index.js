import panelData from './data/panelData'
import constants from './data/constants'
import linkData from './data/linkData'

// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]


// imageComponent
// INPUT: url string
// OUTPUT: DOM element (img)

function imageComponent(url) {
  const img = document.createElement('img')
  img.src = url

  return img
}

// for (let i = 0; i < imageData.length; i++) {
//   const imgElement = imageComponent(imageData[i].imageURL)

//   document.body.appendChild(imgElement)
// }

// imageData.forEach(({imageURL}) => {
//   const imgElement = imageComponent(imageURL)

//   document.body.appendChild(imgElement)
// })

// imageData.forEach(({imageURL}) => document.body.appendChild(imageComponent(imageURL)))

// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants

const { open: upTriangle, close: downTriangle } = constants
// TASK 2- Verify our imports using log statements
console.log(panelData) // log the panelData
console.log(upTriangle) // log the open arrow
console.log(downTriangle) // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector('div.accordion')


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel({title, content}) {


  // TASK 5- Instantiate all the elements needed for a panel
  const newDiv = () => document.createElement('div')
  const panel = newDiv()
  const panelBar = newDiv()
  const panelContent = newDiv()
  const panelTitle = document.createElement('h3')
  const panelButtons = newDiv()
  const openButton = document.createElement('button')
  const closeButton = document.createElement('button')


  // TASK 6- Setup the structure of our elements
  panel.appendChild(panelBar)
  panel.appendChild(panelContent)
  panelBar.appendChild(panelTitle)
  panelBar.appendChild(panelButtons)
  panelButtons.appendChild(openButton)
  panelButtons.appendChild(closeButton)
  /*
    <div class="panel">
      <div class="panel-bar">
        <h3>Title of Panel</h3>
        <div class="panel-buttons">
          <button class="panel-btn-open">&#9660</button>
          <button class="panel-btn-close hide-btn">Close</button>
        </div>
      </div>
      <div class="panel-content toggle-on">
        Content of panel
      </div>
    </div>
  */
  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden
  panel.classList.add('panel')
  panelBar.classList.add('panel-bar')
  panelButtons.classList.add('panel-buttons')
  openButton.classList.add('panel-btn-open')
  closeButton.classList.add('panel-btn-close', 'hide-btn')
  panelContent.classList.add('panel-content')


  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file
  panelTitle.textContent = title
  panelContent.textContent = content

  openButton.textContent = upTriangle
  closeButton.textContent = downTriangle


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)

  panelButtons.addEventListener('click', () => {
    openButton.classList.toggle('hide-btn')
    closeButton.classList.toggle('hide-btn')

    panelContent.classList.toggle('toggle-on')
  })


  // don't forget to return the panel!
  return panel
}


// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.

// panelData.forEach(data => {
//   const panel = makePanel(data)
//   document.body.appendChild(panel)
// })

const panelElements = panelData.map(data => makePanel(data))
panelElements.forEach(element => accordion.appendChild(element))

// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.

const nav = document.querySelector('nav.main-nav')

const linkMaker = ({ href, className, text }) => {
  const a = document.createElement('a')
  a.classList.add(className)
  a.setAttribute('href', href)
  a.textContent = text
  
  return a
}

linkData.forEach(link => {
  const a = linkMaker(link)
  nav.appendChild(a)
})