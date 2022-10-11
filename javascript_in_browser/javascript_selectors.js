// Ase the DOM exists in the 'document' object, we need a way to access and manipulate the different parts that compose this object, for example:

document.querySelector('p');
// returns the first element that is a child of the node which is a paragraph

document.querySelectorAll('p'); // this selects all the paragraph elements in the document

document.getElementById('heading'); // returns the first element with id equal 'heading'

document.getElementsByClassName('txt'); // this brings nodes including objects in arrays, a collection of txt elements