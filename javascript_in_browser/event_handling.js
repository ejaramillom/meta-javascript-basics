// in the case we want to listen to different events in our web page, we include addEventListener to the element of the DOM we need to evaluate an action in

const target = document.querySelector('body');

// then we create a function that will run when the target is hit

var handleClick = () => {
  console.log('clicked the body')
}

// we say target should run this function

target.addEventListener('click', handleClick)

var handleClickTwo = () => {
  console.log('clicked the header')
}

// we would edit a h1 element in the html

<h1 onclick='handleClickTwo()'>  </h1>


  