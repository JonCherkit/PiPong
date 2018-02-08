import {BrickBreaker} from './BrickBreaker.js';
import {Bricks} from './Bricks.js';

'use strict';

document.addEventListener('DOMContentLoaded',function(){
	let bricks = new Bricks();
	console.log(bricks.init());
});