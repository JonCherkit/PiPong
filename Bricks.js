import { Brick } from './Brick.js';

'use strict';

export class Bricks
{
	constructor()
	{

		this._brickList = [];
		
	}

	init(n = 3,m = 3)
	{
		let brick = new Brick();
		let spaceAroundX = 500 - n*brick.getWidth();
		let horiSpace = spaceAroundX/n+1;
		let spaceAroundY = 500*1/2 - n*brick.getHeight();
		let vertSpace = spaceAroundY/m;
		for(let i = 0; i< n;i++)
		{
			for(let j = 0; j < m ; j++)
			{
				this._brickList.push(new Brick(i*brick.getWidth()+spaceAroundX,j*brick.getHeight()+spaceAroundY));
			}
		}
		return(this);
	}
}