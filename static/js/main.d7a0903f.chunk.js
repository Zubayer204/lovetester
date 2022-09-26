(this.webpackJsonprobofriends = this.webpackJsonprobofriends || []).push([
    [0],
    {
      16: function (e, t, s) {},
      17: function (e, t, s) {},
      18: function (e, t, s) {
        "use strict";
        s.r(t);
        var a = s(0),
          n = s(1),
          c = s(5),
          r = s.n(c),
          i = (s(16), s(6)),
          l = s(7),
          j = s(8),
          d = s(10),
          o = s(9),
          h =
            (s(4),
            s(3),
            function (e) {
              return Object(a.jsx)("div", {
                children: Object(a.jsx)("input", {
                  onChange: function (t) {
                    e.inputChange(t, e.name);
                  },
                  className: "mb2 pa3 ba b--green bg-lightest-blue",
                  type: "text",
                  placeholder: e.placeholder,
                }),
              });
            }),
          m = s.p + "static/media/heart.fb824694.svg",
          b = function (e) {
            return "" === e.isLoaded
              ? Object(a.jsxs)("div", {
                  className: "none",
                  children: [
                    Object(a.jsxs)("div", {
                      className: "block",
                      children: [
                        Object(a.jsx)("h3", { children: e.fname }),
                        Object(a.jsxs)("div", {
                          className: "container",
                          children: [
                            Object(a.jsx)("img", {
                              alt: "Heart",
                              className: "svg",
                              src: m,
                            }),
                            Object(a.jsx)("h2", {
                              className: "centered",
                              children: e.result,
                            }),
                          ],
                        }),
                        Object(a.jsx)("h3", { children: e.sname }),
                      ],
                    }),
                    Object(a.jsx)("p", {
                      className: "result",
                      children: e.message,
                    }),
                  ],
                })
              : "none" === e.isLoaded
              ? Object(a.jsxs)("div", {
                  children: [
                    Object(a.jsx)("div", {
                      class: "lds-heart",
                      children: Object(a.jsx)("div", {}),
                    }),
                    Object(a.jsxs)("div", {
                      className: "none",
                      children: [
                        Object(a.jsxs)("div", {
                          className: "block",
                          children: [
                            Object(a.jsx)("h3", { children: e.fname }),
                            Object(a.jsxs)("div", {
                              className: "container",
                              children: [
                                Object(a.jsx)("img", {
                                  alt: "Heart",
                                  className: "svg",
                                  src: m,
                                }),
                                Object(a.jsx)("h2", {
                                  className: "centered",
                                  children: e.result,
                                }),
                              ],
                            }),
                            Object(a.jsx)("h3", { children: e.sname }),
                          ],
                        }),
                        Object(a.jsx)("p", {
                          className: "result",
                          children: e.message,
                        }),
                      ],
                    }),
                  ],
                })
              : Object(a.jsxs)("div", {
                  children: [
                    Object(a.jsxs)("div", {
                      className: "block",
                      children: [
                        Object(a.jsx)("h3", { children: e.fname }),
                        Object(a.jsxs)("div", {
                          className: "container",
                          children: [
                            Object(a.jsx)("img", {
                              alt: "Heart",
                              className: "svg",
                              src: m,
                            }),
                            Object(a.jsx)("h2", {
                              className: "centered",
                              children: e.result,
                            }),
                          ],
                        }),
                        Object(a.jsx)("h3", { children: e.sname }),
                      ],
                    }),
                    Object(a.jsx)("p", {
                      className: "result",
                      children: e.message,
                    }),
                  ],
                });
          },
          u = function (e) {
            return Object(a.jsxs)("button", {
              className: "button",
              onClick: e.test,
              children: [
                Object(a.jsx)("div", {
                  className: "pattern",
                  children: Object(a.jsx)("div", {
                    className: "target inner bg2",
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "text",
                  children: "Let's Calculate",
                }),
              ],
            });
          },
          O = s.p + "static/media/made_with_love.74a7c067.svg",
          x =
            (s(17),
            (function (e) {
              Object(d.a)(s, e);
              var t = Object(o.a)(s);
              function s() {
                var e;
                return (
                  Object(l.a)(this, s),
                  ((e = t.call(this)).onInputChange = function (t, s) {
                    e.setState(Object(i.a)({}, s, t.target.value));
                  }),
                  (e.test = function (t) {
                    e.setState({ isLoaded: "none" });
                    var s =
                      "https://love-calculator.p.rapidapi.com/getPercentage?fname="
                        .concat(e.state.fname, "&sname=")
                        .concat(e.state.sname);
                    fetch(s, {
                      method: "GET",
                      headers: {
                        "x-rapidapi-key":
                          "82218d1bc9msh252b777237daea7p11b255jsna2718e2791d9",
                        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                      },
                    })
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (t) {
                        e.setState({
                          rfname: t.fname,
                          rsname: t.sname,
                          result: t.percentage,
                          message: t.result,
                          isLoaded: "yes",
                        });
                        var s =
                          "https://us-central1-zubayer-learning.cloudfunctions.net/love?fname="
                            .concat(t.fname, "&sname=")
                            .concat(t.sname, "&result=")
                            .concat(t.percentage);
                        fetch(s, { method: "GET" })
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            console.log(e.success);
                          });
                      });
                  }),
                  (e.state = {
                    fname: "",
                    sname: "",
                    rfname: "",
                    rsname: "",
                    result: "",
                    message: "",
                    isLoaded: "",
                  }),
                  e
                );
              }
              return (
                Object(j.a)(s, [
                  {
                    key: "render",
                    value: function () {
                      return Object(a.jsxs)("div", {
                        children: [
                          Object(a.jsxs)("p", {
                            className: "contributer",
                            children: [
                              "Made with ",
                              Object(a.jsx)("img", {
                                className: "love_svg",
                                alt: "love",
                                src: O,
                              }),
                              " by Zubayer Rahaman",
                            ],
                          }),
                          Object(a.jsxs)("div", {
                            className: "tc",
                            children: [
                              Object(a.jsx)("h1", {
                                className: "tc",
                                children: "Love Tester",
                              }),
                              Object(a.jsx)(h, {
                                name: "fname",
                                inputChange: this.onInputChange,
                                placeholder: "Enter Your Name",
                              }),
                              Object(a.jsx)(h, {
                                name: "sname",
                                inputChange: this.onInputChange,
                                placeholder: "Enter Your GF/BF Name",
                              }),
                              Object(a.jsx)(u, { test: this.test }),
                              Object(a.jsx)(b, {
                                fname: this.state.rfname,
                                sname: this.state.rsname,
                                result: this.state.result,
                                message: this.state.message,
                                isLoaded: this.state.isLoaded,
                              }),
                            ],
                          }),
                        ],
                      });
                    },
                  },
                ]),
                s
              );
            })(n.Component)),
          p = function (e) {
            e &&
              e instanceof Function &&
              s
                .e(3)
                .then(s.bind(null, 19))
                .then(function (t) {
                  var s = t.getCLS,
                    a = t.getFID,
                    n = t.getFCP,
                    c = t.getLCP,
                    r = t.getTTFB;
                  s(e), a(e), n(e), c(e), r(e);
                });
          };
        r.a.render(Object(a.jsx)(x, {}), document.getElementById("root")), p();
      },
      3: function (e, t, s) {},
    },
    [[18, 1, 2]],
  ]);
  //# sourceMappingURL=main.d7a0903f.chunk.js.map
  