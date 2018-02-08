'use strict'

export class Base
{
	constructor(x = 0,y = 0)
	{
		this._x = x;
		this._y = y;
		this._width = 35;
		this._height = 15;
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
}