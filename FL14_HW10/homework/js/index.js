// Your code goed here

function Employees(arg) {
    this._arg = arg
}

Employees.prototype = {
    constructor: Employees,

    draw: function () {
        this._arg.draw();
        console.log("and with stripes");
    },
    inc: function () {
        return this._arg.inc();
    }
}

function Units(arg) {
    this._arg = arg
}

Units.prototype = {
    constructor: Units,

    draw: function () {
        this._arg.draw();
        console.log("and with dots!");
    },
    inc: function () {
        return this._arg.inc();
    }
}