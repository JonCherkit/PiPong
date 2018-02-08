import { Brick } from './Brick.js';

'use strict';

export class Bricks extends Brick
{
	constructor(x,y)
	{
		super(x,y);
		this._brickList = [];
		
	}

	init(n = 3,m = 3)
	{
		let spaceAroundX = 500 - n*this._width;
		let horiSpace = spaceAroundX/n+1;
		let spaceAroundY = 500*1/2 - n*this._height;
		let vertSpace = spaceAroundY/m;
		for(let i = 0; i< n;i++)
		{
			for(let j = 0; j < m ; j++)
			{
				console.log(i*this.getWidth()+spaceAroundX);
				this._brickList.push(new Brick(i*this.getWidth()+spaceAroundX,j*this.getHeight()+spaceAroundY));
			}
		}
		return(this);
	}
}