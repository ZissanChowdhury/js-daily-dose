function Employee(id, name){
    this.id = id;
    this.name = name;
}


Employee.prototype.valueOf = function() {
    return +this.id
}

var emp = new Employee(1, 'John');



console.log(+emp);

let str = 'JS will, JS will, JS will rock you.';
let newStr = str.replaceAll('JS','JavaScript');
