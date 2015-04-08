// blinggggggggggg

Window.prototype.$ = document.querySelectorAll.bind(document);

Node.prototype.on = function (name, fn) {
	this.addEventListener(name, fn);
}

// NodeList needs all Array goodies
NodeList.prototype.__proto__ = Array.prototype;

// NodeList needs EventTarget goodies but iterated
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    this.forEach(function(elem, i) { 
      elem.on(name, fn); 
    });
}; // todo: dispatchEvent & removeEventListener
