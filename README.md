Quiddity
========

**quiddity** /ˈkwidətē/ *n.* the inherent nature or essence of something

What is Quiddity?
-----------------
Quiddity is a module to help build a prototypal inheritance hierarchy.  The
classical inheritance paradigm with the new keyword, Function.prototype, etc.
are avoided.

### Usage
````js
var quiddity = require("quiddity");

// quidditize a new root object
var Root = {};
quiddity(Root);

// set some properties on the object
Root.name = "root";
Root.data = {a:1,b:2};
Root.stuff = [3,6];

// create a new root instance
var thing = Root.create();

// instance inherits prototype properties
assert(thing.name === "root");

// use Object.prototype.isPrototypeOf to verify inheritance
assert(Root.isPrototypeOf(thing));

// instanceof won't work because quiddity does not use classical inheritance
assert(!(thing instanceof Root));

// init can be provided to initialize created instances
var Timed = Root.create(function(timed) {
    timed.created = new Date();
});
assert(Timed.create().created instanceof Date);

// can extend simple properties without an init
var foo = Root.create({name: "foo"});
assert(foo.name === "foo");
````
