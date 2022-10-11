// introduction to javascript: 03. conditionals and loops

var place = 'second';

if(place == 'first') {
  console.log('gold');
} else if(place == 'second') {
  console.log('silver');
} else if(place == 'third') {
  console.log('bronze');
} else {
  console.log('no medal');
};

switch(place) {
  case 'first':
    console.log('gold');
    break;
  case 'second':
    console.log('silver');
    break;
  case 'third':
    console.log('bronze');
    break;
  default:
    console.log('no medal');
};