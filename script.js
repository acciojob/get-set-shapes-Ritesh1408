class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set width(width) {
        this._width = width;
    }

    set height(height) {
        this._height = height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side); 
    }

    getPerimeter() {
        return 4 * this.width; 
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
