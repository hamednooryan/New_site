
var carsAndModels = {};
carsAndModels['VO'] = ['i3', 'i5', 'i7','i9'];
carsAndModels['VW'] = ['i3', 'i5', 'i7','i9'];
carsAndModels['BMW'] = ['i3', 'i5', 'i7','i9'];
 
function ChangeCarList() {
    var carList = document.getElementById("car");
    var modelList = document.getElementById("carmodel");
    var selCar = carList.options[carList.selectedIndex].value;
    while (modelList.options.length) {
        modelList.remove(0);
    }
    var cars = carsAndModels[selCar];
    if (cars) {
        var i;
        for (i = 0; i < cars.length; i++) {
            var car = new Option(cars[i], i);
            modelList.options.add(car);
        }
    }
} 
