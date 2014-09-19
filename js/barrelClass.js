function Barrel(_barreltype, _posx, _posy, _id, _sprite, _charge, _visible) {
	this.barrelType = _barreltype;
	this.posX = _posx;
	this.posY = _posy;
	this.barrelId = _id;
	this.barrelSprite = _sprite;
	this.charges = _charge;
    this.visible = _visible;
}

Barrel.prototype.barrelInfo = function() {
	console.log("BarrelId:  " + this.barrelId + "  row:  " + this.posX + " col: " + this.posY + "  Type: " + this.barrelType + " Charges: " + this.charges + " visible: " + this.visible);
}