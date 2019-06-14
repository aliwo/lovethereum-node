(function () {
    let assert = require("assert");
    let { nothing } = require("../src/Libs/RandomUrl");
    suite("nothing", function() {
        test("nothing 3", function() {
            assert.equal(3, nothing())
        });
    });
}).call(this);