// Write a JavaScript program that creates a class called 'Shape' 
// with a method to calculate the area. 
// Create two subclasses, 'Circle' and 'Triangle', that
// inherit from the 'Shape' class and 
// override the area calculation method. 
// Create an instance of the 'Circle' class and calculate its area. 
// Similarly, do the same for the 'Triangle' class.

class Shape{
	constructor(){
		
	}
}

class Circle extends Shape{
	constructor(r){
		super();
		this.r=r;
	}
	circlearea(){
		let cirarea=3.14*this.r*this.r
		console.log(`circle area: ${cirarea}`)
	}
}
let subr=new Circle(2)
subr.circlearea()


class Triangle extends Shape{
	constructor(b,h){
		super();
		this.b=b;
		this.h=h;
	}
	trianglearea(){
		let triarea=(this.b*this.h)/2
		console.log(`triangle area: ${triarea}`)
	}
}
let subT=new Triangle(5,4)
subT.trianglearea()

