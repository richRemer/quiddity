var quiddity = require("../quiddity.js"),
    expect = require("expect.js");

describe("quiddity", function() {
    it("should decorate an object and return it", function() {
        var obj = {};
        expect(quiddity(obj)).to.be(obj);
        expect(obj.create).to.be.a("function");
        expect(obj.init).to.be.a("function");
    });

    describe("create", function() {
        it("should return a derivation of current prototype", function() {
            var obj = quiddity({}),
                derivation = obj.create();
            expect(obj.isPrototypeOf(derivation));
        });

        it("should call prototype init", function() {
            var init = function() {this.foo = 42;},
                obj = quiddity({}, init);

            expect(obj.foo).to.be(undefined);
            expect(obj.create().foo).to.be(42);
        });
    });
});
