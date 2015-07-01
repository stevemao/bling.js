# bling.js

Because you want the $ of jQuery without the jQuery.

------------------------------------

You could call this a microlibrary, but really it's just some code that works.

You may be interested in this library if you get tired of the `[].slice.call( document.querySelectorAll('.foo'), function(){ … ` rodeo.

What bling'll do for ya:

```js
// forEach over the qSA result, directly.
document.querySelectorAll('input').forEach(function (el) {
  // …
})

// on() rather than addEventListener()
document.body.on('dblclick', function (e) {
  // …
})

// classic $ + on()
$('p').on('click', function (e) {
  // …
})
```

It doesn't do anything else. This is **not** a jQuery equivalent.

#### Notes:
* `on()` works on elements, `document`, `window`, and results from `querySelector` & `querySelectorAll`.
* `$` is qSA so if you're grabbing a single element you'll have to `[0]` it.
* Bling plays well with authoring ES6
* Resig explored this stuff a while ago: [github.com/jeresig/nodelist](http://github.com/jeresig/nodelist)
* Bling doesn't work on Android 2.3 or iOS 5.0. Works everywhere else including IE8 (assuming Function.bind)

#### Nerdy implementation notes:
* The NodeList prototype usually inherits from Object, so we move it to Array.
* I'm curious how ES6/7 would let a NodeList be iterable and inherit from EventTarget
* Setting `Node.prototype.on = EventTarget.prototype.addEventListener` is awesome. It works in Chrome/FF but not yet in IE/Safari.
* I haven't set up any off() or trigger() to map to `dispatchEvent` & `removeEventListener`. I'm OK with that.
* I'm using [semi-standard](https://github.com/Flet/semistandard) for style. I tried standard sans-semicolons, but can't get used to it.
