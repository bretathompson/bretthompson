function car(seats, engine, radio) {
    this.seats = seats,
    this.engine = engine,
    this.radio = radio;        
}
    let work_car = new car("cloth", "V-6", "Tape Deck");
    let fun_car = new car("leather", "V-8", "CD Player");

document.write("I want a car with " + fun_car.seats + " seats.<br>");
document.write("It also needs a " + work_car.engine + " engine.<br>");
document.write("Oh, and i would like a " + fun_car.radio + " also.<br>");
