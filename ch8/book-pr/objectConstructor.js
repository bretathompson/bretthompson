// Then the assignment needs to be updated this is what is on page 197

// this is the code in the middle of the page under the paragraph that starts with "Here, a property named..."  that is listed on the assignment
let car = new Object();
    car.seats = "cloth",
    car.engine = "V-6",
    car.show_features = function() {
        document.write("car: " + car.seats + " seats, " + car.engine + " engine");
    };
car.show_features();


// is one is at the bottom of the page under "as you can see, a function expression"

let car = new Object();
    car.seats = "cloth",
    car.engine = "V-6",
    car.show_features = function() {
        window.alert("car: " + car.seats + " seats, " + car.engine + " engine");
    };
    car.show_features = my_alert;
    car.show_features();
