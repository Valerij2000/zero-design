(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      const e = document.querySelector("#hamb"),
        t = document.querySelector("#popup"),
        o = document.querySelector("#menu").cloneNode(1),
        n = document.body;
      function c() {
        t.classList.remove("open"),
          e.classList.remove("active"),
          n.classList.remove("noscroll");
      }
      e.addEventListener("click", function (c) {
        c.preventDefault(),
          t.classList.toggle("open"),
          e.classList.toggle("active"),
          n.classList.toggle("noscroll"),
          t.appendChild(o);
      }),
        Array.from(o.children).forEach((e) => {
          e.addEventListener("click", c);
        });
    })();
})();
