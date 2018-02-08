'use strict';

export class Brick
{
	constructor(x = 0,y = 0)
	{
		this._x = x;
		this._y = y;
		this.element_width = 25;
		this.element_height = 15;
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

	getWidth()
	{
		return(this.element_width);
	}

	getHeight()
	{
		return(this.element_height);
	}

}