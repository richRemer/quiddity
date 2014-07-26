/**
 * @mixin
 */
var Quiddity = {
    /**
     * Create a derived object from this prototype.
     * @param {object} [opts] Options to set on object
     * @param {function} [init] Call on created object's create()
     * @return {object}
     */
    create: function(opts, init) {
        var proto = this,
            obj = Object.create(proto);
        
        // handle optional args
        if (typeof opts === "function") init = opts, opts = {};
        
        // set options
        for (var prop in opts) obj[prop] = opts[prop];
        
        // initialize object
        if (obj.init) obj.init();
        
        // set init
        if (init) obj.init = init;

        // return result
        return obj;
    },
    
    /**
     * Initialize this object.  Usually called by create.
     */
    init: function() {}
}

/**
 * Decorate an object with the Quiddity mixin and optional init.
 * @param {object} obj
 * @param {function} init
 * @return {object}
 */
function quiddity(obj, init) {
    if (typeof obj !== "object" || obj instanceof Array) {
        throw new Error("invalid argument");
    }

    mix(obj, Quiddity);
    if (init) obj.init = init;
    return obj;
}

/**
 * Mix an object into another; call the mix method if present.
 * @param {object} obj
 * @param {object} mixin
 */
function mix(obj, mixin) {
    for (var prop in mixin)
        if (prop !== "mix") obj[prop] = mixin[prop];
    if (mixin.mix) mixin.mix.call(obj);
}

// attach mix to quiddity so we can just export the function
quiddity.mix = mix;

/** Exports */
module.exports = quiddity;

