!(function (e) {
  var t = {};
  function n(s) {
    if (t[s]) return t[s].exports;
    var i = (t[s] = { i: s, l: !1, exports: {} });
    return e[s].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, s) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (n.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            s,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return s;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    var s = {
      hooks: {},
      extensions: [],
      navbar: { add: !0, title: "Menu", titleLink: "parent" },
      slidingSubmenus: !0,
    };
    var i = {
      classNames: {
        divider: "Divider",
        nolistview: "NoListview",
        nopanel: "NoPanel",
        panel: "Panel",
        selected: "Selected",
        vertical: "Vertical",
      },
      language: null,
      panelNodetype: ["ul", "ol", "div"],
      screenReader: {
        closeSubmenu: "Close submenu",
        openSubmenu: "Open submenu",
        toggleSubmenu: "Toggle submenu",
      },
    };
    const a = (e, t) => {
        "object" != o(e) && (e = {}), "object" != o(t) && (t = {});
        for (let n in t)
          t.hasOwnProperty(n) &&
            (void 0 === e[n]
              ? (e[n] = t[n])
              : "object" == o(e[n]) && a(e[n], t[n]));
        return e;
      },
      o = (e) =>
        ({}.toString
          .call(e)
          .match(/\s([a-zA-Z]+)/)[1]
          .toLowerCase()),
      r = () => "mm-" + l++;
    let l = 0;
    const m = (e) => ("mm-clone-" == e.slice(0, 9) ? e : "mm-clone-" + e),
      c = (e) => ("mm-clone-" == e.slice(0, 9) ? e.slice(9) : e),
      d = {},
      h = (e, t) => {
        void 0 === d[t] && (d[t] = {}), a(d[t], e);
      };
    var p = {
        "Close submenu": "بستن زیرمنو",
        Menu: "منو",
        "Open submenu": "بازکردن زیرمنو",
        "Toggle submenu": "سوییچ زیرمنو",
      },
      u = {
        "Close submenu": "Submenu sluiten",
        Menu: "Menu",
        "Open submenu": "Submenu openen",
        "Toggle submenu": "Submenu wisselen",
      },
      f = {
        "Close submenu": "Fechar submenu",
        Menu: "Menu",
        "Open submenu": "Abrir submenu",
        "Toggle submenu": "Alternar submenu",
      },
      b = {
        "Close submenu": "Закрыть подменю",
        Menu: "Меню",
        "Open submenu": "Открыть подменю",
        "Toggle submenu": "Переключить подменю",
      },
      v = {
        "Close submenu": "Zatvoriť submenu",
        Menu: "Menu",
        "Open submenu": "Otvoriť submenu",
        "Toggle submenu": "Prepnúť submenu",
      };
    const g = (e) => {
        const t = e.split("."),
          n = document.createElement(t.shift());
        return n.classList.add(...t), n;
      },
      L = (e, t) => (t.length ? [].slice.call(e.querySelectorAll(t)) : []),
      _ = (e, t) => {
        const n = Array.prototype.slice.call(e.children);
        return t ? n.filter((e) => e.matches(t)) : n;
      },
      E = (e) => e.filter((e) => !e.matches(".mm-hidden")),
      y = (e) => {
        let t = [];
        return (
          E(e).forEach((e) => {
            t.push(..._(e, "a.mm-listitem__text"));
          }),
          t.filter((e) => !e.matches(".mm-btn--next"))
        );
      },
      w = (e, t, n) => {
        e.matches("." + t) && e.classList.add(n);
      };
    let P = {};
    const S = (e, t, n) => {
        "number" == typeof e && (e = "(min-width: " + e + "px)"),
          (P[e] = P[e] || []),
          P[e].push({ yes: t, no: n });
      },
      x = (e, t) => {
        var n = t.matches ? "yes" : "no";
        for (let t = 0; t < P[e].length; t++) P[e][t][n]();
      };
    h(
      {
        "Close submenu": "Untermenü schließen",
        Menu: "Menü",
        "Open submenu": "Untermenü öffnen",
        "Toggle submenu": "Untermenü wechseln",
      },
      "de"
    ),
      h(p, "fa"),
      h(u, "nl"),
      h(f, "pt_br"),
      h(b, "ru"),
      h(v, "sk");
    class M {
      constructor(e, t, n) {
        return (
          (this.opts = a(t, s)),
          (this.conf = a(n, i)),
          (this._api = [
            "i18n",
            "bind",
            "openPanel",
            "closePanel",
            "setSelected",
          ]),
          (this.node = {}),
          (this.hook = {}),
          (this.node.menu =
            "string" == typeof e ? document.querySelector(e) : e),
          "function" == typeof this._deprecatedWarnings &&
            this._deprecatedWarnings(),
          this.trigger("init:before"),
          this._initObservers(),
          this._initAddons(),
          this._initExtensions(),
          this._initHooks(),
          this._initAPI(),
          this._initMenu(),
          this._initPanels(),
          this._initOpened(),
          (() => {
            for (let e in P) {
              let t = window.matchMedia(e);
              x(e, t),
                (t.onchange = (n) => {
                  x(e, t);
                });
            }
          })(),
          this.trigger("init:after"),
          this
        );
      }
      openPanel(e, t = !0, n = !0) {
        if (e) {
          if (
            (e.matches(".mm-panel") || (e = e.closest(".mm-panel")),
            this.trigger("openPanel:before", [
              e,
              { animation: t, setfocus: n },
            ]),
            e.parentElement.matches(".mm-listitem--vertical"))
          )
            e.parentElement.classList.add("mm-listitem--opened");
          else {
            const s = _(this.node.pnls, ".mm-panel--opened")[0];
            e.matches(".mm-panel--parent") &&
              s &&
              s.classList.add("mm-panel--highest");
            const i = ["mm-panel--opened", "mm-panel--parent"],
              a = [];
            t
              ? i.push("mm-panel--noanimation")
              : a.push("mm-panel--noanimation"),
              _(this.node.pnls, ".mm-panel").forEach((e) => {
                e.classList.add(...a),
                  e.classList.remove(...i),
                  e !== s && e.classList.remove("mm-panel--highest");
              }),
              e.classList.add("mm-panel--opened");
            let o = L(this.node.pnls, "#" + e.dataset.mmParent)[0];
            for (; o; )
              (o = o.closest(".mm-panel")),
                o.classList.add("mm-panel--parent"),
                (o = L(this.node.pnls, "#" + o.dataset.mmParent)[0]);
            n && this.node.pnls.focus();
          }
          this.trigger("openPanel:after", [e, { animation: t, setfocus: n }]);
        }
      }
      closePanel(e, t = !0) {
        if (e) {
          if (
            (this.trigger("closePanel:before", [e]),
            e.parentElement.matches(".mm-listitem--vertical"))
          )
            e.parentElement.classList.remove("mm-listitem--opened");
          else if (e.dataset.mmParent) {
            const n = L(this.node.pnls, "#" + e.dataset.mmParent)[0];
            this.openPanel(n, t);
          } else {
            const n = _(this.node.pnls, ".mm-panel")[0];
            e !== n && this.openPanel(n, t);
          }
          this.trigger("closePanel:after", [e]);
        }
      }
      togglePanel(e) {
        let t = "openPanel";
        (e.parentElement.matches(".mm-listitem--opened") ||
          e.matches(".mm-panel--opened")) &&
          (t = "closePanel"),
          this[t](e);
      }
      setSelected(e) {
        this.trigger("setSelected:before", [e]),
          L(this.node.menu, ".mm-listitem--selected").forEach((e) => {
            e.classList.remove("mm-listitem--selected");
          }),
          e.classList.add("mm-listitem--selected"),
          this.trigger("setSelected:after", [e]);
      }
      bind(e, t) {
        (this.hook[e] = this.hook[e] || []), this.hook[e].push(t);
      }
      trigger(e, t) {
        if (this.hook[e])
          for (var n = 0, s = this.hook[e].length; n < s; n++)
            this.hook[e][n].apply(this, t);
      }
      _initObservers() {
        (this.panelObserver = new MutationObserver((e) => {
          e.forEach((e) => {
            e.addedNodes.forEach((e) => {
              e.matches(this.conf.panelNodetype.join(", ")) &&
                this._initListview(e);
            });
          });
        })),
          (this.listviewObserver = new MutationObserver((e) => {
            e.forEach((e) => {
              e.addedNodes.forEach((e) => {
                this._initListitem(e);
              });
            });
          })),
          (this.listitemObserver = new MutationObserver((e) => {
            e.forEach((e) => {
              e.addedNodes.forEach((e) => {
                console.log(e),
                  (null == e
                    ? void 0
                    : e.matches(this.conf.panelNodetype.join(", "))) &&
                    this._initSubPanel(e);
              });
            });
          }));
      }
      _initAPI() {
        const e = this;
        (this.API = {}),
          this._api.forEach((t) => {
            this.API[t] = function () {
              return e[t].apply(e, arguments);
            };
          }),
          (this.node.menu.mmApi = this.API);
      }
      _initHooks() {
        for (let e in this.opts.hooks) this.bind(e, this.opts.hooks[e]);
      }
      _initAddons() {
        this.trigger("initAddons:before");
        for (let e in M.addons) M.addons[e].call(this);
        this.trigger("initAddons:after");
      }
      _initExtensions() {
        this.trigger("initExtensions:before"),
          "array" == o(this.opts.extensions) &&
            (this.opts.extensions = { all: this.opts.extensions }),
          Object.keys(this.opts.extensions).forEach((e) => {
            let t = this.opts.extensions[e].map((e) => "mm-menu--" + e);
            t.length &&
              S(
                e,
                () => {
                  this.node.menu.classList.add(...t);
                },
                () => {
                  this.node.menu.classList.remove(...t);
                }
              );
          }),
          this.trigger("initExtensions:after");
      }
      _initMenu() {
        this.trigger("initMenu:before"),
          (this.node.wrpr = this.node.wrpr || this.node.menu.parentElement),
          this.node.wrpr.classList.add("mm-wrapper"),
          this.node.menu.classList.add("mm-menu"),
          (this.node.menu.id = this.node.menu.id || r()),
          this.node.menu.setAttribute("tabindex", "-1");
        const e = _(this.node.menu).filter((e) =>
          e.matches(this.conf.panelNodetype.join(", "))
        );
        (this.node.pnls = g("div.mm-panels")),
          this.node.menu.append(this.node.pnls),
          this.node.pnls.setAttribute("tabindex", "-1"),
          e.forEach((e) => {
            this._initPanel(e);
          }),
          this.trigger("initMenu:after");
      }
      _initPanels() {
        this.trigger("initPanels:before"),
          this.node.menu.addEventListener(
            "click",
            (e) => {
              var t, n;
              const s =
                (null ===
                  (n =
                    null === (t = e.target) || void 0 === t
                      ? void 0
                      : t.closest("a[href]")) || void 0 === n
                  ? void 0
                  : n.getAttribute("href")) || "";
              if ("#" === s.slice(0, 1))
                try {
                  const t = L(this.node.menu, s)[0];
                  t && (e.preventDefault(), this.togglePanel(t));
                } catch (e) {}
            },
            { capture: !0 }
          ),
          this.trigger("initPanels:after");
      }
      _initPanel(e) {
        var t;
        if (
          !e.matches(".mm-panel") &&
          (w(e, this.conf.classNames.panel, "mm-panel"),
          w(e, this.conf.classNames.nopanel, "mm-nopanel"),
          !e.matches(".mm-nopanel"))
        ) {
          if (
            (this.trigger("initPanel:before", [e]),
            (e.id = e.id || r()),
            e.matches("ul, ol"))
          ) {
            const t = g("div");
            (t.id = e.id),
              e.removeAttribute("id"),
              [].slice
                .call(e.classList)
                .filter((e) => "mm-" === e.slice(0, 3))
                .forEach((n) => {
                  t.classList.add(n), e.classList.remove(n);
                }),
              Object.keys(e.dataset)
                .filter((e) => "mm" === e.slice(0, 2))
                .forEach((n) => {
                  (t.dataset[n] = e.dataset[n]), delete e.dataset[n];
                }),
              e.before(t),
              t.append(e),
              (e = t);
          }
          return (
            e.classList.add("mm-panel"),
            (null === (t = e.parentElement) || void 0 === t
              ? void 0
              : t.matches(".mm-listitem--vertical")) ||
              this.node.pnls.append(e),
            this._initNavbar(e),
            _(e, "ul, ol").forEach((e) => {
              this._initListview(e);
            }),
            this.panelObserver.observe(e, { childList: !0 }),
            this.trigger("initPanel:after", [e]),
            e
          );
        }
      }
      _initNavbar(e) {
        if (_(e, ".mm-navbar").length) return;
        let t = null,
          n = null;
        if (e.dataset.mmParent)
          for (
            t = L(this.node.pnls, "#" + e.dataset.mmParent)[0],
              n = t.closest(".mm-panel");
            n.closest(".mm-listitem--vertical");

          )
            n = n.parentElement.closest(".mm-panel");
        if (null == t ? void 0 : t.matches(".mm-listitem--vertical")) return;
        this.trigger("initNavbar:before", [e]);
        const s = g("div.mm-navbar");
        if ((this.opts.navbar.add || s.classList.add("mm-hidden"), n)) {
          const e = g("a.mm-btn.mm-btn--prev.mm-navbar__btn");
          (e.href = "#" + n.id),
            (e.title = this.i18n(this.conf.screenReader.closeSubmenu)),
            s.append(e);
        }
        let i = null;
        t
          ? (i = _(t, ".mm-listitem__text")[0])
          : n && (i = L(n, 'a[href="#' + e.id + '"]')[0]);
        const a = g("a.mm-navbar__title");
        switch (
          ((a.tabIndex = -1),
          (a.ariaHidden = "true"),
          this.opts.navbar.titleLink)
        ) {
          case "anchor":
            i && (a.href = i.getAttribute("href"));
            break;
          case "parent":
            n && (a.href = "#" + n.id);
        }
        const o = g("span");
        var r;
        (o.innerHTML =
          e.dataset.mmTitle ||
          ((r = i)
            ? [].slice
                .call(r.childNodes)
                .filter((e) => e.nodeType === Node.TEXT_NODE)
                .map((e) => e.nodeValue.trim())
                .join(" ")
            : "") ||
          this.i18n(this.opts.navbar.title) ||
          this.i18n("Menu")),
          e.prepend(s),
          s.append(a),
          a.append(o),
          this.trigger("initNavbar:after", [e]);
      }
      _initListview(e) {
        ["htmlulistelement", "htmlolistelement"].includes(o(e)) &&
          (e.matches(".mm-listview") ||
            (w(e, this.conf.classNames.nolistview, "mm-nolistview"),
            e.matches(".mm-nolistview") ||
              (this.trigger("initListview:before", [e]),
              e.classList.add("mm-listview"),
              _(e).forEach((e) => {
                this._initListitem(e);
              }),
              this.listviewObserver.observe(e, { childList: !0 }),
              this.trigger("initListview:after", [e]))));
      }
      _initListitem(e) {
        ["htmllielement"].includes(o(e)) &&
          (e.matches(".mm-listitem") ||
            (w(e, this.conf.classNames.divider, "mm-divider"),
            e.matches(".mm-divider") ||
              (this.trigger("initListitem:before", [e]),
              e.classList.add("mm-listitem"),
              w(e, this.conf.classNames.selected, "mm-listitem--selected"),
              _(e, "a, span").forEach((e) => {
                e.classList.add("mm-listitem__text");
              }),
              _(e, this.conf.panelNodetype.join(", ")).forEach((e) => {
                this._initSubPanel(e);
              }),
              this.listitemObserver.observe(e, { childList: !0 }),
              this.trigger("initListitem:after", [e]))));
      }
      _initSubPanel(e) {
        if (e.matches(".mm-panel")) return;
        const t = e.parentElement;
        (e.matches("." + this.conf.classNames.vertical) ||
          !this.opts.slidingSubmenus) &&
          t.classList.add("mm-listitem--vertical"),
          (t.id = t.id || r()),
          (e.id = e.id || r()),
          (t.dataset.mmChild = e.id),
          (e.dataset.mmParent = t.id);
        let n = _(t, ".mm-btn")[0];
        n ||
          ((n = g("a.mm-btn.mm-btn--next.mm-listitem__btn")),
          _(t, "a, span").forEach((e) => {
            e.matches("span")
              ? (n.classList.add("mm-listitem__text"),
                (n.innerHTML = e.innerHTML),
                t.insertBefore(n, e.nextElementSibling),
                e.remove())
              : t.insertBefore(n, e.nextElementSibling);
          }),
          (n.title = this.i18n(
            this.conf.screenReader[
              t.matches(".mm-listitem--vertical")
                ? "toggleSubmenu"
                : "openSubmenu"
            ]
          ))),
          (n.href = "#" + e.id),
          this._initPanel(e);
      }
      _initOpened() {
        this.trigger("initOpened:before");
        const e = L(this.node.pnls, ".mm-listitem--selected").pop();
        let t = _(this.node.pnls, ".mm-panel")[0];
        e && (this.setSelected(e), (t = e.closest(".mm-panel"))),
          this.openPanel(t, !1, !1),
          this.trigger("initOpened:after");
      }
      i18n(e) {
        return ((e, t) =>
          ("string" == typeof t && void 0 !== d[t] && d[t][e]) || e)(
          e,
          this.conf.language
        );
      }
      static i18n(e = {}, t = "") {
        if (!e || !t) return d;
        h(e, t);
      }
    }
    (M.addons = {}), (M.node = {}), (M.vars = {});
    var k = { use: !0 };
    var T = {
      clone: !1,
      menu: { insertMethod: "prepend", insertSelector: "body" },
      page: { nodetype: "div", selector: null, noSelector: [] },
      screenReader: { closeMenu: "Close menu", openMenu: "Open menu" },
    };
    (M.prototype.open = function () {
      if (!this.node.menu.matches(".mm-menu--opened")) {
        this.trigger("open:before");
        this.node.wrpr.classList.add("mm-wrapper--opened"),
          this.node.menu.classList.add("mm-menu--opened"),
          this.node.wrpr.classList.add("mm-wrapper--opened"),
          this.node.menu.focus(),
          this.trigger("open:after");
      }
    }),
      (M.prototype.close = function () {
        var e;
        if (!this.node.menu.matches(".mm-menu--opened")) return;
        this.trigger("close:before"),
          this.node.menu.classList.remove("mm-menu--opened"),
          this.node.wrpr.classList.remove("mm-wrapper--opened");
        null ===
          (e =
            document.querySelector(`[href="#${this.node.menu.id}"]`) ||
            this.node.page ||
            null) ||
          void 0 === e ||
          e.focus(),
          this.trigger("close:after");
      }),
      (M.prototype.setPage = function (e) {
        var t = this.conf.offCanvas;
        if (!e) {
          let n =
            "string" == typeof t.page.selector
              ? L(document.body, t.page.selector)
              : _(document.body, t.page.nodetype);
          if (
            ((n = n.filter(
              (e) => !e.matches(".mm-menu, .mm-wrapper__blocker")
            )),
            t.page.noSelector.length &&
              (n = n.filter((e) => !e.matches(t.page.noSelector.join(", ")))),
            n.length > 1)
          ) {
            let e = g("div");
            n[0].before(e),
              n.forEach((t) => {
                e.append(t);
              }),
              (n = [e]);
          }
          e = n[0];
        }
        this.trigger("setPage:before", [e]),
          e.setAttribute("tabindex", "-1"),
          e.classList.add("mm-page", "mm-slideout"),
          (e.id = e.id || r()),
          M.node.blck.setAttribute("href", "#" + e.id),
          (M.node.page = e),
          this.trigger("setPage:after", [e]);
      });
    var C = { fix: !0 };
    const O = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1;
    var N = { close: !1, open: !1 };
    var A = { add: !1 };
    var j = { use: !1, top: [], bottom: [], position: "left", type: "default" };
    var H = { add: !1, blockPanel: !0, visible: 3 };
    var q = { breadcrumbs: { separator: "/", removeFirst: !1 } };
    function I() {
      (this.opts.navbars = this.opts.navbars || []),
        (this.conf.navbars = this.conf.navbars || {}),
        a(this.conf.navbars, q);
      let e = this.opts.navbars;
      if (void 0 !== e && (e instanceof Array || (e = [e]), e.length)) {
        var t = {};
        e.forEach((e) => {
          if (
            !(e = (function (e) {
              return (
                "boolean" == typeof e && e && (e = {}),
                "object" != typeof e && (e = {}),
                void 0 === e.content && (e.content = ["prev", "title"]),
                e.content instanceof Array || (e.content = [e.content]),
                void 0 === e.use && (e.use = !0),
                e
              );
            })(e)).use
          )
            return;
          const n = g("div.mm-navbar");
          let { position: s } = e;
          "bottom" !== s && (s = "top"),
            t[s] || (t[s] = g("div.mm-navbars.mm-navbars--" + s)),
            t[s].append(n);
          for (let t = 0, s = e.content.length; t < s; t++) {
            const s = e.content[t];
            if ("string" == typeof s) {
              const e = I.navbarContents[s];
              if ("function" == typeof e) e.call(this, n);
              else {
                let e = g("span");
                e.innerHTML = s;
                const t = _(e);
                1 == t.length && (e = t[0]), n.append(e);
              }
            } else n.append(s);
          }
          if ("string" == typeof e.type) {
            const t = I.navbarTypes[e.type];
            "function" == typeof t && t.call(this, n);
          }
          let i = () => {
              n.classList.remove("mm-hidden");
            },
            a = () => {
              n.classList.add("mm-hidden");
            };
          "boolean" == typeof e.use
            ? this.bind("initMenu:after", i)
            : S(e.use, i, a);
        }),
          this.bind("initMenu:after", () => {
            for (let e in t)
              this.node.pnls["bottom" == e ? "after" : "before"](t[e]);
          });
      }
    }
    (I.navbarContents = {
      breadcrumbs: function (e) {
        var t = g("div.mm-navbar__breadcrumbs");
        e.append(t),
          this.bind("initNavbar:after", (e) => {
            if (!e.querySelector(".mm-navbar__breadcrumbs")) {
              _(e, ".mm-navbar")[0].classList.add("mm-hidden");
              for (
                var t = [], n = g("span.mm-navbar__breadcrumbs"), s = e, i = !0;
                s;

              ) {
                if (
                  !(s = s.closest(".mm-panel")).parentElement.matches(
                    ".mm-listitem--vertical"
                  )
                ) {
                  let e = L(s, ".mm-navbar__title span")[0];
                  if (e) {
                    let n = e.textContent;
                    n.length &&
                      t.unshift(
                        i
                          ? `<span>${n}</span>`
                          : `<a \n                                    href="#${
                              s.id
                            }" \n                                    title="${this.i18n(
                              this.conf.screenReader.openSubmenu
                            )}"\n                                    >${n}</a>`
                      );
                  }
                  i = !1;
                }
                s = L(this.node.pnls, "#" + s.dataset.mmParent)[0];
              }
              this.conf.navbars.breadcrumbs.removeFirst && t.shift(),
                (n.innerHTML = t.join(
                  '<span class="mm-separator">' +
                    this.conf.navbars.breadcrumbs.separator +
                    "</span>"
                )),
                _(e, ".mm-navbar")[0].append(n);
            }
          }),
          this.bind("openPanel:before", (e) => {
            var n = e.querySelector(".mm-navbar__breadcrumbs");
            t.innerHTML = n ? n.innerHTML : "";
          });
      },
      close: function (e) {
        const t = g("a.mm-btn.mm-btn--close.mm-navbar__btn");
        (t.title = this.i18n(this.conf.offCanvas.screenReader.closeMenu)),
          e.append(t),
          this.bind("setPage:after", (e) => {
            t.href = "#" + e.id;
          });
      },
      prev: function (e) {
        let t = g("a.mm-btn.mm-hidden");
        e.append(t),
          this.bind("initNavbar:after", (e) => {
            _(e, ".mm-navbar")[0].classList.add("mm-hidden");
          }),
          this.bind("openPanel:before", (e) => {
            if (e.parentElement.matches(".mm-listitem--vertical")) return;
            t.classList.add("mm-hidden");
            const n = e.querySelector(".mm-navbar__btn.mm-btn--prev");
            if (n) {
              const e = n.cloneNode(!0);
              t.after(e), t.remove(), (t = e);
            }
          });
      },
      searchfield: function (e) {
        let t = g("div.mm-navbar__searchfield");
        (t.id = r()),
          e.append(t),
          (this.opts.searchfield = this.opts.searchfield || {}),
          (this.opts.searchfield.add = !0),
          (this.opts.searchfield.addTo = "#" + t.id);
      },
      title: function (e) {
        let t = g("a.mm-navbar__title");
        e.append(t),
          this.bind("openPanel:before", (e) => {
            if (e.parentElement.matches(".mm-listitem--vertical")) return;
            const n = e.querySelector(".mm-navbar__title");
            if (n) {
              const e = n.cloneNode(!0);
              t.after(e), t.remove(), (t = e);
            }
          });
      },
    }),
      (I.navbarTypes = {
        tabs: function (e) {
          function t(n) {
            const s = _(e, `.mm-navbar__tab[href="#${n.id}"]`)[0];
            if (s)
              s.classList.add("mm-navbar__tab--selected"),
                (s.ariaExpanded = "true");
            else {
              const e = L(this.node.pnls, "#" + n.dataset.mmParent)[0];
              e && t.call(this, e.closest(".mm-panel"));
            }
          }
          e.classList.add("mm-navbar--tabs"),
            e.closest(".mm-navbars").classList.add("mm-navbars--has-tabs"),
            _(e, "a").forEach((e) => {
              e.classList.add("mm-navbar__tab");
            }),
            this.bind("openPanel:before", (n) => {
              _(e, "a").forEach((e) => {
                e.classList.remove("mm-navbar__tab--selected"),
                  (e.ariaExpanded = "false");
              }),
                t.call(this, n);
            }),
            this.bind("initPanels:after", () => {
              e.addEventListener(
                "click",
                (e) => {
                  var t, n, s;
                  const i =
                    null ===
                      (n =
                        null === (t = e.target) || void 0 === t
                          ? void 0
                          : t.closest(".mm-navbar__tab")) || void 0 === n
                      ? void 0
                      : n.getAttribute("href");
                  try {
                    null === (s = L(this.node.pnls, i + ".mm-panel")[0]) ||
                      void 0 === s ||
                      s.classList.add("mm-panel--noanimation");
                  } catch (e) {}
                },
                { capture: !0 }
              );
            });
        },
      });
    var R = { scroll: !1, update: !1 };
    var B = { scrollOffset: 0, updateOffset: 50 };
    var D = {
      add: !1,
      addTo: "panels",
      noResults: "No results found.",
      placeholder: "Search",
      searchIn: "panels",
      splash: "",
      title: "Search",
    };
    var F = {
        cancel: !0,
        clear: !0,
        form: {},
        input: {},
        panel: {},
        submit: !1,
      },
      $ = {
        cancel: "انصراف",
        "Cancel searching": "لغو جستجو",
        "Clear searchfield": "پاک کردن فیلد جستجو",
        "No results found.": "نتیجه‌ای یافت نشد.",
        Search: "جستجو",
      },
      Z = {
        cancel: "annuleren",
        "Cancel searching": "Zoeken annuleren",
        "Clear searchfield": "Zoekveld leeg maken",
        "No results found.": "Geen resultaten gevonden.",
        Search: "Zoeken",
      },
      z = {
        cancel: "cancelar",
        "Cancel searching": "Cancelar pesquisa",
        "Clear searchfield": "Limpar campo de pesquisa",
        "No results found.": "Nenhum resultado encontrado.",
        Search: "Buscar",
      },
      V = {
        cancel: "отменить",
        "Cancel searching": "Отменить поиск",
        "Clear searchfield": "Очистить поле поиска",
        "No results found.": "Ничего не найдено.",
        Search: "Найти",
      },
      U = {
        cancel: "zrušiť",
        "Cancel searching": "Zrušiť vyhľadávanie",
        "Clear searchfield": "Vymazať pole vyhľadávania",
        "No results found.": "Neboli nájdené žiadne výsledky.",
        Search: "Vyhľadávanie",
      };
    h(
      {
        cancel: "abbrechen",
        "Cancel searching": "Suche abbrechen",
        "Clear searchfield": "Suchfeld löschen",
        "No results found.": "Keine Ergebnisse gefunden.",
        Search: "Suche",
      },
      "de"
    ),
      h($, "fa"),
      h(Z, "nl"),
      h(z, "pt_br"),
      h(V, "ru"),
      h(U, "sk");
    const Y = function () {
        const e = this.opts.searchfield,
          t = this.conf.searchfield;
        let n = _(this.node.pnls, ".mm-panel--search")[0];
        return (
          n ||
          ((n = g("div.mm-panel--search")),
          te(n, t.panel),
          e.title.length && (n.dataset.mmTitle = this.i18n(e.title)),
          n.append(g("ul")),
          this._initPanel(n),
          n)
        );
      },
      K = function (e) {
        const t = this.opts.searchfield;
        if (e.matches(t.addTo)) {
          const t = e.matches(".mm-panel--search");
          if (!L(e, ".mm-searchfield").length) {
            const n = W.call(this, t);
            t && n.classList.add("mm-searchfield--cancelable"),
              e.prepend(n),
              G.call(this, n);
          }
        }
        if (
          t.splash.length &&
          e.matches(".mm-panel--search") &&
          !L(e, ".mm-panel__splash").length
        ) {
          const n = g("div.mm-panel__splash");
          (n.innerHTML = t.splash), e.append(n);
        }
        if (t.noResults.length && !L(e, ".mm-panel__noresults").length) {
          const n = g("div.mm-panel__noresults");
          (n.innerHTML = this.i18n(t.noResults)), e.append(n);
        }
      },
      W = function (e = !1) {
        const t = this.opts.searchfield,
          n = this.conf.searchfield,
          s = g("form.mm-searchfield");
        te(s, n.form);
        const i = g("div.mm-searchfield__input");
        s.append(i);
        const a = g("input");
        if (
          (i.append(a),
          (a.type = "text"),
          (a.autocomplete = "off"),
          (a.placeholder = this.i18n(t.placeholder)),
          a.setAttribute("aria-label", this.i18n(t.placeholder)),
          te(a, n.input),
          n.submit)
        ) {
          const e = g(
            "button.mm-btnreset.mm-btn.mm-btn--next.mm-searchfield__btn"
          );
          (e.type = "submit"), i.append(e);
        } else if (n.clear) {
          const e = g(
            "button.mm-btnreset.mm-btn.mm-btn--close.mm-searchfield__btn"
          );
          (e.type = "reset"),
            (e.title = this.i18n("Clear searchfield")),
            i.append(e),
            s.addEventListener("reset", () => {
              window.requestAnimationFrame(() => {
                a.dispatchEvent(new Event("input"));
              });
            });
        }
        if (n.cancel && e) {
          const e = g("a.mm-searchfield__cancel");
          (e.href = "#"),
            (e.title = this.i18n("Cancel searching")),
            (e.textContent = this.i18n("cancel")),
            s.append(e),
            e.addEventListener("click", () => {
              this.closePanel(_(this.node.pnls, ".mm-panel--search")[0], !1);
            });
        }
        return s;
      },
      G = function (e) {
        const t = this.opts.searchfield,
          n =
            e.closest(".mm-panel") || L(this.node.pnls, ".mm-panel--search")[0],
          s = L(e, "input")[0];
        let i = n.matches(".mm-panel--search")
          ? L(this.node.pnls, t.searchIn)
          : [n];
        i = i.filter((e) => !e.matches(".mm-panel--search"));
        const a = () => {
          const t = s.value.toLowerCase().trim(),
            a = [];
          if (
            (i.forEach((e) => {
              (e.scrollTop = 0), a.push(...L(e, ".mm-listitem"));
            }),
            t.length)
          ) {
            this.trigger("search:before"),
              e.classList.add("mm-searchfield--searching"),
              n.classList.add("mm-panel--searching"),
              a.forEach((e) => {
                const n = _(e, ".mm-listitem__text")[0];
                var s;
                (!n ||
                  ((s = n),
                  Array.prototype.slice
                    .call(s.childNodes)
                    .filter((e) => 3 == e.nodeType)
                    .map((e) => e.textContent)
                    .join(" "))
                    .toLowerCase()
                    .indexOf(t) > -1) &&
                  (e.dataset.mmSearchresult = t);
              });
            let s = 0;
            (s = n.matches(".mm-panel--search") ? X(n, t, i) : Q(t, i)),
              n.classList[0 == s ? "add" : "remove"]("mm-panel--noresults"),
              this.trigger("search:after");
          } else
            this.trigger("clear:before"),
              e.classList.remove("mm-searchfield--searching"),
              n.classList.remove("mm-panel--searching", "mm-panel--noresults"),
              n.matches(".mm-panel--search") ? J(n) : ee(i),
              this.trigger("clear:after");
        };
        s.addEventListener("input", a), a();
      },
      X = (e, t, n) => {
        const s = L(e, ".mm-listview")[0];
        s.innerHTML = "";
        let i = 0;
        return (
          n.forEach((e) => {
            const n = L(e, `[data-mm-searchresult="${t}"]`);
            if (((i += n.length), n.length)) {
              const t = L(e, ".mm-navbar__title")[0];
              if (t) {
                const e = g("li.mm-divider");
                (e.innerHTML = t.innerHTML), s.append(e);
              }
              n.forEach((e) => {
                s.append(e.cloneNode(!0));
              });
            }
          }),
          i
        );
      },
      J = (e) => {
        L(e, ".mm-listview")[0].innerHTML = "";
      },
      Q = (e, t) => {
        let n = 0;
        return (
          t.forEach((t) => {
            const s = L(t, `[data-mm-searchresult="${e}"]`);
            (n += s.length),
              s.length &&
                s.forEach((t) => {
                  const n = ((e, t) => {
                    let n = [],
                      s = e.previousElementSibling;
                    for (; s; )
                      (t && !s.matches(t)) || n.push(s),
                        (s = s.previousElementSibling);
                    return n;
                  })(t, ".mm-divider")[0];
                  n && (n.dataset.mmSearchresult = e);
                }),
              L(t, ".mm-listitem, .mm-divider").forEach((t) => {
                t.classList[t.dataset.mmSearchresult === e ? "remove" : "add"](
                  "mm-hidden"
                );
              });
          }),
          n
        );
      },
      ee = (e) => {
        e.forEach((e) => {
          L(e, ".mm-listitem, .mm-divider").forEach((e) => {
            e.classList.remove("mm-hidden");
          });
        });
      },
      te = (e, t) => {
        t &&
          Object.keys(t).forEach((n) => {
            e[n] = t[n];
          });
      };
    var ne = { add: !1, addTo: "panels" };
    var se = { current: !0, hover: !1, parent: !1 };
    var ie = {
      collapsed: { use: !1, blockMenu: !0 },
      expanded: { use: !1, initial: "open" },
    };
    /*!
     * mmenu.js
     * mmenujs.com
     *
     * Copyright (c) Fred Heusschen
     * frebsite.nl
     */ M.addons = {
      offcanvas: function () {
        (this.opts.offCanvas = this.opts.offCanvas || {}),
          (this.conf.offCanvas = this.conf.offCanvas || {});
        const e = a(this.opts.offCanvas, k),
          t = a(this.conf.offCanvas, T);
        e.use &&
          (this._api.push("open", "close", "setPage"),
          M.node.blck ||
            this.bind("initMenu:before", () => {
              const e = g("a.mm-wrapper__blocker.mm-slideout");
              (e.id = r()),
                (e.title = this.i18n(t.screenReader.closeMenu)),
                e.setAttribute("tabindex", "-1"),
                document.querySelector(t.menu.insertSelector).append(e),
                (M.node.blck = e);
            }),
          this.bind("initMenu:before", () => {
            t.clone &&
              ((this.node.menu = this.node.menu.cloneNode(!0)),
              this.node.menu.id && (this.node.menu.id = m(this.node.menu.id)),
              L(this.node.menu, "[id]").forEach((e) => {
                e.id = m(e.id);
              })),
              (this.node.wrpr = document.querySelector(t.menu.insertSelector)),
              document
                .querySelector(t.menu.insertSelector)
                [t.menu.insertMethod](this.node.menu);
          }),
          this.bind("initMenu:after", () => {
            this.setPage(M.node.page),
              this.node.menu.classList.add("mm-menu--offcanvas");
            let e = window.location.hash;
            if (e) {
              let t = c(this.node.menu.id);
              t &&
                t == e.slice(1) &&
                setTimeout(() => {
                  this.open();
                }, 1e3);
            }
          }),
          document.addEventListener("click", (e) => {
            var t;
            switch (
              null === (t = e.target.closest("a")) || void 0 === t
                ? void 0
                : t.getAttribute("href")
            ) {
              case "#" + c(this.node.menu.id):
                e.preventDefault(), this.open();
                break;
              case "#" + c(M.node.page.id):
                e.preventDefault(), this.close();
            }
          }),
          document.addEventListener("keyup", (e) => {
            "Escape" == e.key && this.close();
          }),
          document.addEventListener("keyup", (e) => {
            var t;
            "Tab" == e.key &&
              this.node.menu.matches(".mm-menu--opened") &&
              !(null === (t = document.activeElement) || void 0 === t
                ? void 0
                : t.closest("#" + this.node.menu.id)) &&
              (console.log(document.activeElement), this.close());
          }));
      },
      scrollBugFix: function () {
        if (!O || !this.opts.offCanvas.use) return;
        this.opts.scrollBugFix = this.opts.scrollBugFix || {};
        if (!a(this.opts.scrollBugFix, C).fix) return;
        const e = ((e) => {
          let t = "",
            n = null;
          return (
            e.addEventListener("touchstart", (e) => {
              1 === e.touches.length && ((t = ""), (n = e.touches[0].pageY));
            }),
            e.addEventListener("touchend", (e) => {
              0 === e.touches.length && ((t = ""), (n = null));
            }),
            e.addEventListener("touchmove", (e) => {
              if (((t = ""), n && 1 === e.touches.length)) {
                const s = e.changedTouches[0].pageY;
                s > n ? (t = "down") : s < n && (t = "up"), (n = s);
              }
            }),
            { get: () => t }
          );
        })(this.node.menu);
        this.node.menu.addEventListener(
          "scroll",
          (e) => {
            e.preventDefault(), e.stopPropagation();
          },
          { passive: !1 }
        ),
          this.node.menu.addEventListener(
            "touchmove",
            (t) => {
              let n = t.target.closest(
                ".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom"
              );
              n &&
                n.closest(".mm-listitem--vertical") &&
                (n = ((e, t) => {
                  let n = [],
                    s = e.parentElement;
                  for (; s; ) n.push(s), (s = s.parentElement);
                  return t ? n.filter((e) => e.matches(t)) : n;
                })(n, ".mm-panel").pop()),
                n
                  ? (n.scrollHeight === n.offsetHeight ||
                      (0 == n.scrollTop && "down" == e.get()) ||
                      (n.scrollHeight == n.scrollTop + n.offsetHeight &&
                        "up" == e.get())) &&
                    t.stopPropagation()
                  : t.stopPropagation();
            },
            { passive: !1 }
          ),
          this.bind("open:after", () => {
            var e = _(this.node.pnls, ".mm-panel--opened")[0];
            e && (e.scrollTop = 0);
          }),
          window.addEventListener("orientationchange", (e) => {
            var t = _(this.node.pnls, ".mm-panel--opened")[0];
            t &&
              ((t.scrollTop = 0),
              (t.style["-webkit-overflow-scrolling"] = "auto"),
              (t.style["-webkit-overflow-scrolling"] = "touch"));
          });
      },
      backButton: function () {
        if (
          ((this.opts.backButton = this.opts.backButton || {}),
          !this.opts.offCanvas.use)
        )
          return;
        const e = a(this.opts.backButton, N),
          t = "#" + this.node.menu.id;
        if (e.close) {
          var n = [];
          const e = () => {
            (n = [t]),
              _(this.node.pnls, ".mm-panel--opened, .mm-panel--parent").forEach(
                (e) => {
                  n.push("#" + e.id);
                }
              );
          };
          this.bind("open:after", () => {
            history.pushState(null, document.title, t);
          }),
            this.bind("open:after", e),
            this.bind("openPanel:after", e),
            this.bind("close:after", () => {
              (n = []),
                history.back(),
                history.pushState(
                  null,
                  document.title,
                  location.pathname + location.search
                );
            }),
            window.addEventListener("popstate", (e) => {
              if (this.node.menu.matches(".mm-menu--opened") && n.length) {
                var s = (n = n.slice(0, -1))[n.length - 1];
                s == t
                  ? this.close()
                  : (this.openPanel(this.node.menu.querySelector(s)),
                    history.pushState(null, document.title, t));
              }
            });
        }
        e.open &&
          window.addEventListener("popstate", (e) => {
            this.node.menu.matches(".mm-menu--opened") ||
              location.hash != t ||
              this.open();
          });
      },
      counters: function () {
        this.opts.counters = this.opts.counters || {};
        if (!a(this.opts.counters, A).add) return;
        const e = (e) => {
            const t = this.node.pnls.querySelector("#" + e.dataset.mmParent);
            if (!t) return;
            const n = t.querySelector(".mm-counter");
            if (!n) return;
            const s = [];
            _(e, ".mm-listview").forEach((e) => {
              s.push(..._(e));
            }),
              (n.innerHTML = E(s).length.toString());
          },
          t = new MutationObserver((t) => {
            t.forEach((t) => {
              "class" == t.attributeName && e(t.target.closest(".mm-panel"));
            });
          });
        this.bind("initListview:after", (t) => {
          const n = t.closest(".mm-panel"),
            s = this.node.pnls.querySelector("#" + n.dataset.mmParent);
          if (s) {
            if (!L(s, ".mm-counter").length) {
              const e = _(s, ".mm-btn")[0];
              null == e || e.prepend(g("span.mm-counter"));
            }
            e(n);
          }
        }),
          this.bind("initListitem:after", (e) => {
            const n = e.closest(".mm-panel");
            if (!n) return;
            this.node.pnls.querySelector("#" + n.dataset.mmParent) &&
              t.observe(e, { attributes: !0 });
          });
      },
      iconbar: function () {
        this.opts.iconbar = this.opts.iconbar || {};
        const e = a(this.opts.iconbar, j);
        if (!e.use) return;
        let t;
        if (
          (["top", "bottom"].forEach((n, s) => {
            let i = e[n];
            "array" != o(i) && (i = [i]);
            const a = g("div.mm-iconbar__" + n);
            for (let e = 0, t = i.length; e < t; e++)
              "string" == typeof i[e] ? (a.innerHTML += i[e]) : a.append(i[e]);
            a.children.length && (t || (t = g("div.mm-iconbar")), t.append(a));
          }),
          t)
        ) {
          this.bind("initMenu:after", () => {
            this.node.menu.prepend(t);
          });
          let n = "mm-menu--iconbar-" + e.position,
            s = () => {
              this.node.menu.classList.add(n);
            },
            i = () => {
              this.node.menu.classList.remove(n);
            };
          if (
            ("boolean" == typeof e.use
              ? this.bind("initMenu:after", s)
              : S(e.use, s, i),
            "tabs" == e.type)
          ) {
            t.classList.add("mm-iconbar--tabs"),
              t.addEventListener("click", (e) => {
                const t = e.target.closest(".mm-iconbar__tab");
                if (t)
                  if (t.matches(".mm-iconbar__tab--selected"))
                    e.stopImmediatePropagation();
                  else
                    try {
                      const n = L(
                        this.node.menu,
                        t.getAttribute("href") + ".mm-panel"
                      )[0];
                      n &&
                        (e.preventDefault(),
                        e.stopImmediatePropagation(),
                        this.openPanel(n, !1));
                    } catch (e) {}
              });
            const e = (n) => {
              L(t, "a").forEach((e) => {
                e.classList.remove("mm-iconbar__tab--selected");
              });
              const s = L(t, '[href="#' + n.id + '"]')[0];
              if (s) s.classList.add("mm-iconbar__tab--selected");
              else {
                const t = L(this.node.pnls, "#" + n.dataset.mmParent)[0];
                t && e(t.closest(".mm-panel"));
              }
            };
            this.bind("openPanel:before", e);
          }
        }
      },
      iconPanels: function () {
        this.opts.iconPanels = this.opts.iconPanels || {};
        const e = a(this.opts.iconPanels, H);
        let t = !1;
        if (
          ("first" == e.visible && ((t = !0), (e.visible = 1)),
          (e.visible = Math.min(3, Math.max(1, e.visible))),
          e.visible++,
          e.add)
        ) {
          if (
            (this.bind("initMenu:after", () => {
              this.node.menu.classList.add("mm-menu--iconpanel");
            }),
            this.bind("initPanel:after", (e) => {
              e.tabIndex = -1;
            }),
            this.bind("initPanels:after", () => {
              document.addEventListener("keyup", (e) => {
                var t;
                if (
                  "Tab" === e.key &&
                  (null === (t = document.activeElement) || void 0 === t
                    ? void 0
                    : t.closest(".mm-menu")) === this.node.menu
                ) {
                  const t = document.activeElement.closest(".mm-panel");
                  !document.activeElement.matches(".mm-panel__blocker") &&
                    (null == t ? void 0 : t.matches(".mm-panel--parent")) &&
                    (e.shiftKey
                      ? _(t, ".mm-panel__blocker")[0].focus()
                      : _(this.node.pnls, ".mm-panel--opened")[0].focus());
                }
              });
            }),
            t)
          )
            this.bind("initMenu:after", () => {
              var e;
              null === (e = _(this.node.pnls, ".mm-panel")[0]) ||
                void 0 === e ||
                e.classList.add("mm-panel--iconpanel-first");
            });
          else {
            const t = [
              "mm-panel--iconpanel-0",
              "mm-panel--iconpanel-1",
              "mm-panel--iconpanel-2",
              "mm-panel--iconpanel-3",
            ];
            this.bind("openPanel:after", (n) => {
              if (n.parentElement.matches(".mm-listitem--vertical")) return;
              let s = _(this.node.pnls, ".mm-panel");
              (s = s.filter((e) => e.matches(".mm-panel--parent"))),
                s.push(n),
                (s = s.slice(-e.visible)),
                s.forEach((e, n) => {
                  e.classList.remove(...t),
                    e.classList.add("mm-panel--iconpanel-" + n);
                });
            });
          }
          this.bind("initPanel:after", (t) => {
            if (
              e.blockPanel &&
              !t.parentElement.matches(".mm-listitem--vertical") &&
              !_(t, ".mm-panel__blocker")[0]
            ) {
              const e = g("a.mm-panel__blocker");
              (e.href = "#" + t.closest(".mm-panel").id),
                (e.title = this.i18n(this.conf.screenReader.closeSubmenu)),
                t.prepend(e);
            }
          });
        }
      },
      navbars: I,
      pageScroll: function () {
        (this.opts.pageScroll = this.opts.pageScroll || {}),
          (this.conf.pageScroll = this.conf.pageScroll || {});
        const e = a(this.opts.pageScroll, R),
          t = a(this.conf.pageScroll, B);
        var n;
        function s() {
          n &&
            window.scrollTo({
              top:
                n.getBoundingClientRect().top +
                document.scrollingElement.scrollTop -
                t.scrollOffset,
              behavior: "smooth",
            }),
            (n = null);
        }
        function i(e) {
          try {
            if ("#" == e.slice(0, 1)) return L(M.node.page, e)[0];
          } catch (e) {}
          return null;
        }
        if (
          (this.opts.offCanvas.use &&
            e.scroll &&
            (this.bind("close:after", () => {
              s();
            }),
            this.node.menu.addEventListener("click", (e) => {
              var t, a;
              const o =
                (null ===
                  (a =
                    null === (t = e.target) || void 0 === t
                      ? void 0
                      : t.closest("a[href]")) || void 0 === a
                  ? void 0
                  : a.getAttribute("href")) || "";
              (n = i(o)) &&
                (e.preventDefault(),
                this.node.menu.matches(".mm-menu--sidebar-expanded") &&
                this.node.wrpr.matches(".mm-wrapper--sidebar-expanded")
                  ? s()
                  : this.close());
            })),
          e.update)
        ) {
          let e = [];
          this.bind("initListview:after", (t) => {
            const n = _(t, ".mm-listitem");
            y(n).forEach((t) => {
              const n = i(t.getAttribute("href"));
              n && e.unshift(n);
            });
          });
          let n = -1;
          window.addEventListener(
            "scroll",
            (s) => {
              const i = window.scrollY;
              for (var a = 0; a < e.length; a++)
                if (e[a].offsetTop < i + t.updateOffset) {
                  if (n !== a) {
                    n = a;
                    let t = _(this.node.pnls, ".mm-panel--opened")[0],
                      s = L(t, ".mm-listitem"),
                      i = y(s);
                    (i = i.filter((t) =>
                      t.matches('[href="#' + e[a].id + '"]')
                    )),
                      i.length && this.setSelected(i[0].parentElement);
                  }
                  break;
                }
            },
            { passive: !0 }
          );
        }
      },
      searchfield: function () {
        (this.opts.searchfield = this.opts.searchfield || {}),
          (this.conf.searchfield = this.conf.searchfield || {});
        const e = a(this.opts.searchfield, D);
        a(this.opts.searchfield, F);
        if (e.add) {
          switch (e.addTo) {
            case "panels":
              e.addTo = ".mm-panel";
              break;
            case "searchpanel":
              e.addTo = ".mm-panel--search";
          }
          switch (e.searchIn) {
            case "panels":
              e.searchIn = ".mm-panel";
          }
          this.bind("initPanel:after", (t) => {
            t.matches(e.addTo) &&
              !t.closest(".mm-listitem--vertical") &&
              K.call(this, t);
          }),
            this.bind("initMenu:after", () => {
              const t = Y.call(this);
              K.call(this, t),
                L(this.node.menu, e.addTo).forEach((n) => {
                  if (!n.matches(".mm-panel")) {
                    const s = W.call(this, !0);
                    n.append(s);
                    const i = L(s, "input")[0];
                    e.splash.length
                      ? (i.addEventListener("focusin", () => {
                          this.openPanel(t, !1, !1);
                        }),
                        this.bind("openPanel:after", (e) => {
                          e.matches(".mm-panel--search")
                            ? s.classList.add("mm-searchfield--cancelable")
                            : s.classList.remove("mm-searchfield--cancelable");
                        }))
                      : (this.bind("search:after", () => {
                          this.openPanel(t, !1, !1);
                        }),
                        i.addEventListener("focusout", () => {
                          i.value.length || this.closePanel(t, !1);
                        })),
                      G.call(this, s);
                  }
                });
            }),
            this.bind("close:before", () => {
              L(this.node.menu, ".mm-searchfield input").forEach((e) => {
                e.blur();
              });
            });
        }
      },
      sectionIndexer: function () {
        this.opts.sectionIndexer = this.opts.sectionIndexer || {};
        a(this.opts.sectionIndexer, ne).add &&
          this.bind("initPanels:after", () => {
            if (!this.node.indx) {
              let e = "";
              "abcdefghijklmnopqrstuvwxyz".split("").forEach((t) => {
                e += '<a href="#">' + t + "</a>";
              });
              let t = g("div.mm-sectionindexer");
              (t.innerHTML = e),
                this.node.pnls.prepend(t),
                (this.node.indx = t),
                this.node.indx.addEventListener("click", (e) => {
                  e.target.matches("a") && e.preventDefault();
                });
              let n = (e) => {
                if (!e.target.matches("a")) return;
                const t = e.target.textContent,
                  n = _(this.node.pnls, ".mm-panel--opened")[0];
                let s = -1,
                  i = n.scrollTop;
                (n.scrollTop = 0),
                  L(n, ".mm-divider")
                    .filter((e) => !e.matches(".mm-hidden"))
                    .forEach((e) => {
                      s < 0 &&
                        t == e.textContent.trim().slice(0, 1).toLowerCase() &&
                        (s = e.offsetTop);
                    }),
                  (n.scrollTop = s > -1 ? s : i);
              };
              O
                ? (this.node.indx.addEventListener("touchstart", n),
                  this.node.indx.addEventListener("touchmove", n))
                : this.node.indx.addEventListener("mouseover", n);
            }
            this.bind("openPanel:before", (e) => {
              const t = L(e, ".mm-divider").filter(
                (e) => !e.matches(".mm-hidden")
              ).length;
              this.node.indx.classList[t ? "add" : "remove"](
                "mm-sectionindexer--active"
              );
            });
          });
      },
      setSelected: function () {
        this.opts.setSelected = this.opts.setSelected || {};
        const e = a(this.opts.setSelected, se);
        if ("detect" == e.current) {
          const e = (t) => {
            t = t.split("?")[0].split("#")[0];
            const n = this.node.menu.querySelector(
              'a[href="' + t + '"], a[href="' + t + '/"]'
            );
            if (n) this.setSelected(n.parentElement);
            else {
              const n = t.split("/").slice(0, -1);
              n.length && e(n.join("/"));
            }
          };
          this.bind("initMenu:after", () => {
            e.call(this, window.location.href);
          });
        } else
          e.current ||
            this.bind("initListview:after", (e) => {
              _(e, ".mm-listitem--selected").forEach((e) => {
                e.classList.remove("mm-listitem--selected");
              });
            });
        e.hover &&
          this.bind("initMenu:after", () => {
            this.node.menu.classList.add("mm-menu--selected-hover");
          }),
          e.parent &&
            (this.bind("openPanel:after", (e) => {
              L(this.node.pnls, ".mm-listitem--selected-parent").forEach(
                (e) => {
                  e.classList.remove("mm-listitem--selected-parent");
                }
              );
              let t = e;
              for (; t; ) {
                let e = L(this.node.pnls, "#" + t.dataset.mmParent)[0];
                (t = null == e ? void 0 : e.closest(".mm-panel")),
                  e &&
                    !e.matches(".mm-listitem--vertical") &&
                    e.classList.add("mm-listitem--selected-parent");
              }
            }),
            this.bind("initMenu:after", () => {
              this.node.menu.classList.add("mm-menu--selected-parent");
            }));
      },
      sidebar: function () {
        if (!this.opts.offCanvas.use) return;
        this.opts.sidebar = this.opts.sidebar || {};
        const e = a(this.opts.sidebar, ie);
        if (e.collapsed.use) {
          this.bind("initMenu:after", () => {
            if (
              (this.node.menu.classList.add("mm-menu--sidebar-collapsed"),
              e.collapsed.blockMenu &&
                !_(this.node.menu, ".mm-menu__blocker")[0])
            ) {
              const e = g("a.mm-menu__blocker");
              e.setAttribute("href", "#" + this.node.menu.id),
                this.node.menu.prepend(e),
                (e.title = this.i18n(this.conf.screenReader.openMenu));
            }
          });
          let t = () => {
              this.node.wrpr.classList.add("mm-wrapper--sidebar-collapsed");
            },
            n = () => {
              this.node.wrpr.classList.remove("mm-wrapper--sidebar-collapsed");
            };
          "boolean" == typeof e.collapsed.use
            ? this.bind("initMenu:after", t)
            : S(e.collapsed.use, t, n);
        }
        if (e.expanded.use) {
          this.bind("initMenu:after", () => {
            this.node.menu.classList.add("mm-menu--sidebar-expanded");
          });
          let t = !1,
            n = () => {
              (t = !0),
                this.node.wrpr.classList.add("mm-wrapper--sidebar-expanded"),
                this.open();
            },
            s = () => {
              (t = !1),
                this.node.wrpr.classList.remove("mm-wrapper--sidebar-expanded"),
                this.close();
            };
          "boolean" == typeof e.expanded.use
            ? this.bind("initMenu:after", n)
            : S(e.expanded.use, n, s),
            this.bind("close:after", () => {
              t &&
                window.sessionStorage.setItem("mmenuExpandedState", "closed");
            }),
            this.bind("open:after", () => {
              t && window.sessionStorage.setItem("mmenuExpandedState", "open");
            });
          let i = e.expanded.initial;
          const a = window.sessionStorage.getItem("mmenuExpandedState");
          switch (a) {
            case "open":
            case "closed":
              i = a;
          }
          "closed" == i &&
            this.bind("init:after", () => {
              this.close();
            });
        }
      },
    };
    t.default = M;
    window && (window.Mmenu = M);
  },
]);
