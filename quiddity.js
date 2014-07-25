var decorations = {
    /**
     * Create a derived object from this prototype.
     * @param {object} [opts] Options to set on object
     * @param {function} [init] Call on created object's creations
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
    },
    
    /**
     * Initialize this object.  Usually called by create.
     */
    init: function() {}
}

/**
 * Decorate an object with quiddity helpers.
 */
function quidditize(obj) {
    if (typeof obj !== "object")
        throw new Error("invalid argument; expected object");
        
    for (var prop in decorations) obj[prop] = decorations[prop];
    return obj;
}

/** Exports */
module.exports = {
    quidditize: quidditize
};

