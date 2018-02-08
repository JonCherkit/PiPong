'use strict';

export class Ball
{
	constructor(x = 0,y = 0,radius = 12)
	{
		this._x = x;
		this._y = y;
		this._radius = radius;
	}

	getXCoord()
	{
		return(this._x);
	}

	getYCoord()
	{
		return(this._y);
	}

	getCoords()
	{
		return({'x': this._x,'y' : this._y});
	}

	getRadius()
	{
		return(this._radius);
	}
	
}