// bling

// the kind of thing you toss into the page as you start prototyping


Window.prototype.$ = document.querySelectorAll.bind(document)

Node.prototype.on = Window.prototype.on = function (name, fn) {
  this.addEventListener(name, fn)
}

// NodeList needs all Array goodies
NodeList.prototype.__proto__ = Array.prototype

// NodeList needs EventTarget goodies but iterated
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn)
  })
} // 




// Notes:
//   it's all resig's fault.  github.com/jeresig/nodelist
//   setting `Node.prototype.on = EventTarget.prototype.addEventListener` would be sweet but, no funciona in IE/Saf
//   not done: dispatchEvent & removeEventListener shortcuts, but who caaares