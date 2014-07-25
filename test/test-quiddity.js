var quidditize = require("../quiddity.js").quidditize,
    expect = require("expect.js");

describe("quidditize", function() {
    it("should accept a prototype object", function() {
        expect(quidditize).withArgs("foo").to.throwError();
        expect(quidditize).withArgs(1).to.throwError();
        expect(quidditize).withArgs([2,3]).to.throwError();
        expect(quidditize).withArgs({}).to.be.ok();
    });
    
    it("should optionally accept an init method", function() {
        var init = function() {};
        expect(quidditize({}, init).init).to.be(init);
    });
    
    it("should return the prototype object", function() {
        var obj = {};
        expect(quidditize(obj)).to.be(obj);
    });
    
    it("should decorate prototype with create method", function() {
        expect(quidditize({}).create).to.be.a("function");
    });
    
    it("should decorate prototype with default init method", function() {
        expect(quidditize({}).init).to.be.a("function");
    });
    
    it("should call init for created object", function() {
        var init = function() {this.foo = 42;},
            proto = quidditize({}, init),
            obj = proto.create();
        expect(obj.foo).to.be(42);
    });
    
    describe("create", function() {
        it("should create object derived from this", function() {
            var obj = {};
            expect(obj.isPrototypeOf(quidditize(obj).create()))
                .to.be.ok();
        });
    });
});
