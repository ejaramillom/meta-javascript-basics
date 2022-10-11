// JSON are plain javascript objects with a special notation, because they are regular strings that can be read by the browser, or javascript in general

'{"greeting":"hello"}';
const jsonStr = '{"greeting":"hello"}';
const aPlainObj = JSON.parse(jsonStr);

// and then i can rewrite the attributes of the object

aPlainObj.greeting = 'hi';

// i can also convert an object to JSON like this

JSON.stringify(aPlainObj);