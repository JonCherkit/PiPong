import {BrickBreaker} from './BrickBreaker.js';
import {Bricks} from './Bricks.js';

'use strict';

document.addEventListener('DOMContentLoaded',function(){
	let bricks = new Bricks().init();
	//--- Canvas Manipulation
	// 1 - Game display
	const canvas = document.querySelector('#Pong')
	const ctx = canvas.getContext('2d');
	drawBackGround(ctx,canvas.offsetWidth,canvas.offsetHeight);
});

function drawBackGround(ctx,width,height)
{
	//Couleur Grey/Gris Background
	ctx.fillStyle = '#B8B8B8';
	//Remplissage
	ctx.fillRect(0,0,width,height);
}

/** RAF
 * 1 - finir le rendu des elements dans canevas
 * 2 - gérer l'interactivité ( gauche, droite, départ, fin, collision, trajectoire, ...)
 * 3 - gestion cycle de jeu ( nb de vie, cdt victoire/défaite )
 */