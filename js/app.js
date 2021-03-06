(() => {
  "use strict";
  let e = (e, t = 500, o = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = o ? `${o}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !o),
            !o && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !o && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    t = (e, t = 500, o = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          o && e.style.removeProperty("height");
        let n = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = o ? `${o}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = n + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    o = !0,
    n = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    };
  function s(e) {
    setTimeout(() => {
      window.FLS;
    }, 0);
  }
  function i(e, t) {
    const o = Array.from(e).filter(function (e, o, n) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (o.length) {
      const e = [];
      o.forEach((o) => {
        const n = {},
          s = o.dataset[t].split(",");
        (n.value = s[0]),
          (n.type = s[1] ? s[1].trim() : "max"),
          (n.item = o),
          e.push(n);
      });
      let n = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      n = (function (e) {
        return e.filter(function (e, t, o) {
          return o.indexOf(e) === t;
        });
      })(n);
      const s = [];
      if (n.length)
        return (
          n.forEach((t) => {
            const o = t.split(","),
              n = o[1],
              i = o[2],
              r = window.matchMedia(o[0]),
              a = e.filter(function (e) {
                if (e.value === n && e.type === i) return !0;
              });
            s.push({ itemsArray: a, matchMedia: r });
          }),
          s
        );
    }
  }
  let r = (e, t = !1, o = 500, i = 0) => {
    const r = document.querySelector(e);
    if (r) {
      let e = "",
        a = 0;
      t &&
        ((e = "header.header"), (a = document.querySelector(e).offsetHeight));
      let l = {
        speedAsDuration: !0,
        speed: o,
        header: e,
        offset: i,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (n(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(r, "", l);
      else {
        let e = r.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
      }
      s();
    } else s();
  };
  let a = !1;
  setTimeout(() => {
    if (a) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    AOS.init(),
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
      function s() {
        t.classList.remove("open"),
          e.classList.remove("active"),
          n.classList.remove("noscroll");
      }
      e.addEventListener("click", function (s) {
        s.preventDefault(),
          t.classList.toggle("open"),
          e.classList.toggle("active"),
          n.classList.toggle("noscroll"),
          t.appendChild(o);
      }),
        Array.from(o.children).forEach((e) => {
          e.addEventListener("click", s);
        });
    })(),
    (function () {
      const o = document.querySelectorAll("[data-showmore]");
      let n, s;
      function r(o, n) {
        o.forEach((o) => {
          !(function (o, n = !1) {
            const s = (o = n ? o.item : o).querySelector(
                "[data-showmore-content]"
              ),
              i = o.querySelector("[data-showmore-button]"),
              r = a(o, s);
            (n.matches || !n) &&
            r <
              (function (e) {
                let t = e.offsetHeight;
                e.style.removeProperty("height");
                let o = e.offsetHeight;
                return (e.style.height = `${t}px`), o;
              })(s)
              ? (e(s, 0, r), (i.hidden = !1))
              : (t(s, 0, r), (i.hidden = !0));
          })(o, n);
        });
      }
      function a(e, t) {
        let o = 0;
        if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
          const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
            n = t.children;
          for (let t = 1; t < n.length; t++) {
            if (((o += n[t - 1].offsetHeight), t === e)) break;
          }
        } else {
          o = t.dataset.showmoreContent ? t.dataset.showmoreContent : 150;
        }
        return o;
      }
      function l(o) {
        const n = o.target,
          s = o.type;
        if ("click" === s && n.closest("[data-showmore-button]")) {
          const o = n
              .closest("[data-showmore-button]")
              .closest("[data-showmore]"),
            s = o.querySelector("[data-showmore-content]"),
            i = o.dataset.showmoreButton ? o.dataset.showmoreButton : "500",
            r = a(o, s);
          s.classList.contains("_slide") ||
            (o.classList.contains("_showmore-active") ? e(s, i, r) : t(s, i, r),
            o.classList.toggle("_showmore-active"));
        }
      }
      o.length &&
        ((n = Array.from(o).filter(function (e, t, o) {
          return !e.dataset.showmoreMedia;
        })),
        n.length && r(n),
        document.addEventListener("click", l),
        window.addEventListener("resize", l),
        (s = i(o, "showmoreMedia")),
        s &&
          s.length &&
          (s.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              r(e.itemsArray, e.matchMedia);
            });
          }),
          (function (e) {
            e.forEach((e) => {
              r(e.itemsArray, e.matchMedia);
            });
          })(s)));
    })(),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const o = t.closest("[data-goto]"),
              n = o.dataset.goto ? o.dataset.goto : "",
              s = !!o.hasAttribute("data-goto-header"),
              i = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : "500";
            r(n, s, i), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            o = t.target;
          if ("navigator" === o.dataset.watch) {
            const e = o.id,
              n =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? n && n.classList.add("_navigator-active")
              : n && n.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
