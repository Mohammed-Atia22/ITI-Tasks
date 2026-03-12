var Counter = /** @class */ (function () {
    function Counter(counter) {
        if (counter === void 0) { counter = 0; }
        this._counter = counter;
    }
    Object.defineProperty(Counter.prototype, "Counter", {
        get: function () {
            return this._counter;
        },
        set: function (counter) {
            this._counter = counter;
        },
        enumerable: false,
        configurable: true
    });
    return Counter;
}());
var tr = 0;
var c = new Counter(tr);
console.log(c.Counter);
var counter5 = document.querySelector(".counter");
counter5.innerText = c.Counter.toString();
var Increase = document.querySelector(".Increase");
Increase.addEventListener("click", function (e) {
    tr += 1;
    c = new Counter(tr);
    counter5.innerText = c.Counter.toString();
});
var Reset = document.querySelector(".Reset");
Reset.addEventListener("click", function (e) {
    tr = 0;
    c = new Counter(tr);
    counter5.innerText = c.Counter.toString();
});
var Decrease = document.querySelector(".Decrease");
Decrease.addEventListener("click", function (e) {
    tr -= 1;
    c = new Counter(tr);
    counter5.innerText = c.Counter.toString();
});
