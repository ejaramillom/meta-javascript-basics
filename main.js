import { create, createReportList } from './javascript_in_browser/canvas.js';
import { name, draw, reportArea, reportPerimeter } from './javascript_in_browser/square.js';
import randomSquare from './javascript_in_browser/square.js';

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);