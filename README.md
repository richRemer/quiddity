Quiddity
========

**quiddity** /ˈkwidətē/ *n.* the inherent nature or essence of something

What is Quiddity?
-----------------
Quiddity is a module to help build a prototypal inheritance hierarchy.  This
might be useful for modeling a well-defined domain, but is probably woefully
insufficient for more complicated systems.

### Usage
````js
var quidditize = require("quiddity").quidditize;

// quidditize a new root object
var Root = quidditize({name: "root", data: {a:1,b:2}, stuff: [3,6]);

// create a new root instance
var thing = Root.create();

// instance inherits prototype properties
assert(thing.name === "root");

// use Object.prototype.isPrototypeOf to verify inheritance
assert(Root.isPrototypeOf(thing));

// instanceof won't work because quiddity does not use classical inheritance
assert(!(thing instanceof Root));

// ctor can be provided to initialize created instances
var Timed = Root.create(function(timed) {
    timed.created = new Date();
});
assert(Timed.create().created instanceof Date);

// constructor should be used to extend or override member objects
var Extended = Root.create({name: "extended"}, function(extended) {
    // extend prototype data (or create new data)
    this.data = this.data ? Object.create(this.data) : {};

    // extend prototype stuff
    // quidditize works a bit different with lists
    this.stuff = quidditize(this.stuff);
});
````
