function Car(model,brand,year,price,photo){
	this.model=model;
	this.brand=brand;
	this.year=year;
	this.price=price;
	this.photo=photo;
	console.log("The car is running!!");
}

Car.prototype.added=fucntion(){
	console.log("This is an added functionality!");
}