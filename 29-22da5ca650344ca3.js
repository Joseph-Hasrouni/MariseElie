"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [29], {
        7043: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return f
                }
            });
            var s = l(5893),
                r = l(7294),
                a = l(6486),
                n = l.n(a),
                i = l(3838),
                o = l(6066),
                c = l(9417),
                d = l(7814),
                u = l(3321),
                m = l(3104),
                p = l(1069),
                x = l(3405);
            let h = {
                    horizontal: "slider.swipe.left",
                    vertical: "slider.swipe.up"
                },
                v = {
                    horizontal: c.acZ,
                    vertical: c.FPD
                };

            function f(e) {
                var t, l, a, f, g, y, j, N;
                let {
                    children: b,
                    wedding: w,
                    slides: S
                } = e, {
                    setSlideIndex: k
                } = (0, r.useContext)(p.x), q = (0, r.useRef)(null), {
                    isMobile: C,
                    isDesktop: _
                } = (0, m.Z)(), [T, M] = (0, r.useState)(!1), [L, U] = (0, r.useState)(!0), [F, E] = (0, r.useState)(0), {
                    getKeyword: I
                } = (0, x.Z)(), A = n().get(w, "attributes.mainSliderAutoPlaySpeed", -1), Z = n().lowerCase(n().get(w, "attributes.Orientation", "Horizontal")), G = n().findIndex(S, ["__typename", "ComponentSlidesGuestForm"]), H = {
                    autoplay: A > 0,
                    autoplaySpeed: A,
                    className: "mainSlider ".concat(C && "is-mobile", " ").concat(Z, "-mainSlider w-full h-full"),
                    arrows: !1,
                    dots: !0,
                    slidesToShow: 1,
                    swipeToSlide: !0,
                    draggable: !0,
                    slidesToScroll: 1,
                    infinite: !1,
                    pauseOnFocus: !1,
                    pauseOnHover: !1,
                    vertical: "vertical" === Z,
                    verticalSwiping: "vertical" === Z,
                    beforeChange: (e, t) => {
                        if (k && k(t), E(t), (null == q ? void 0 : q.current) && !T) {
                            var l;
                            null == q || null === (l = q.current) || void 0 === l || l.play(), M(!0)
                        }
                    }
                }, O = (0, r.useCallback)(() => {
                    var e, t, l;
                    (null === (e = q.current) || void 0 === e ? void 0 : e.paused) ? null == q || null === (t = q.current) || void 0 === t || t.play(): null == q || null === (l = q.current) || void 0 === l || l.pause(), U(!1), setTimeout(() => {
                        M(!0)
                    }, 200)
                }, [q]);
                (0, r.useEffect)(() => {
                    U(C)
                }, [C, _]);
                let R = C && T || _ || !(null == w ? void 0 : null === (t = w.attributes) || void 0 === t ? void 0 : null === (l = t.music) || void 0 === l ? void 0 : l.data),
                    z = {
                        opacity: 1,
                        display: "block"
                    },
                    P = {
                        opacity: 0,
                        transitionEnd: {
                            display: "none"
                        }
                    };
                return (0, s.jsxs)("div", {
                    className: "relative h-full w-full overflow-auto touch-auto",
                    children: [(null == w ? void 0 : null === (a = w.attributes) || void 0 === a ? void 0 : null === (f = a.music) || void 0 === f ? void 0 : f.data) && (0, s.jsx)("audio", {
                        preload: "auto",
                        loop: null == w ? void 0 : null === (g = w.attributes) || void 0 === g ? void 0 : g.musicLoop,
                        ref: q,
                        children: (0, s.jsx)("source", {
                            src: (0, u.$0)(null == w ? void 0 : null === (y = w.attributes) || void 0 === y ? void 0 : y.music) || "",
                            type: "audio/mpeg"
                        })
                    }), (0, s.jsx)(i.E.div, {
                        className: "relative flex h-full w-full justify-center items-center",
                        animate: L ? z : P,
                        children: (0, s.jsxs)(i.E.div, {
                            className: "flex flex-col text-center justify-center items-center h-full w-full",
                            children: [(0, s.jsx)(i.E.button, {
                                whileTap: {
                                    scale: .95
                                },
                                onClick: O,
                                className: "text-3xl w-28 h-28 rounded-full border-2 border-[var(--default-color)]",
                                children: I("slider.start.button")
                            }), (0, s.jsx)("p", {
                                onClick: O,
                                children: I("slider.start.description")
                            })]
                        })
                    }), (0, s.jsx)(i.E.div, {
                        className: "w-full h-full",
                        animate: R ? z : P,
                        children: (0, s.jsx)(o.Z, {
                            ...H,
                            children: b
                        })
                    }), R && (0, s.jsxs)(i.E.div, {
                        className: "text-xl absolute bottom-0 pb-8 text-center left-0 right-0",
                        animate: n().includes([((null == S ? void 0 : S.length) || 0) - 1, G], F) ? P : z,
                        children: [(0, s.jsxs)("p", {
                            children: [I("slider.swipe"), " ", I(n().get(h, Z))]
                        }), (0, s.jsx)("span", {
                            children: (0, s.jsx)(d.G, {
                                icon: n().get(v, Z)
                            })
                        })]
                    }), (null == w ? void 0 : null === (j = w.attributes) || void 0 === j ? void 0 : null === (N = j.music) || void 0 === N ? void 0 : N.data) && (0, s.jsx)("button", {
                        onClick: O,
                        className: "absolute bottom-0 left-5 text-xl pb-3",
                        children: (0, s.jsx)(d.G, {
                            icon: c.Xig
                        })
                    })]
                })
            }
        },
        7607: function(e, t, l) {
            l.d(t, {
                Z: function() {
                    return Z
                }
            });
            var s = l(5893),
                r = l(8130),
                a = l(1782),
                n = l(7294),
                i = l(7019),
                o = l(6486),
                c = l.n(o),
                d = l(8038),
                u = l(3405),
                m = l(7814),
                p = l(9417),
                x = l(8),
                h = l.n(x),
                v = l(867),
                f = l.n(v),
                g = l(1163),
                y = l(2175);

            function j(e) {
                return "".concat("https://api.inviteme.events").concat(e)
            }
            async function N(e) {
                let t = !0;
                try {
                    let l = await fetch(j("/api/wedding/guest/confirm"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    });
                    t = l.ok
                } catch (s) {
                    t = !1
                }
                return t
            }
            async function b(e) {
                let t = !0;
                try {
                    let l = await fetch(j("/api/wedding/guest/upload-media"), {
                        method: "POST",
                        body: e
                    });
                    t = l.ok
                } catch (s) {
                    t = !1
                }
                return t
            }
            l(3454);
            var w = l(6310);
            let S = w.Ry({
                    firstName: w.Z_().required("First Name is required").trim().test("not-only-whitespace", "This field cannot be empty or contain only whitespace.", e => !c().isEmpty(e)),
                    lastName: w.Z_().required("Last Name is required").trim().test("not-only-whitespace", "This field cannot be empty or contain only whitespace.", e => !c().isEmpty(e))
                }),
                k = w.Ry().shape({
                    guests: w.IX().of(S).required("Guests array is required").min(1, "At least one guest is required")
                }),
                q = {
                    name: "",
                    checked: !0
                };

            function C(e) {
                let {
                    errors: t = {},
                    touched: l = {},
                    name: s
                } = e, r = c().get(t, s, !1);
                return r && "border-2 border-rose-600"
            }
            var _ = l(3321);
            let T = w.Ry({
                    mediaList: w.nK().required("File is required")
                }),
                M = w.Ry({
                    firstName: w.Z_().required("First Name is required").trim().test("not-only-whitespace", "This field cannot be empty or contain only whitespace.", e => !c().isEmpty(e)),
                    lastName: w.Z_().required("Last Name is required").trim().test("not-only-whitespace", "This field cannot be empty or contain only whitespace.", e => !c().isEmpty(e))
                }),
                L = w.Ry().shape({
                    guests: w.IX().of(M).required("Guests array is required").min(1, "At least one guest is required")
                }),
                U = {
                    name: "",
                    checked: !0
                };

            function F(e) {
                let {
                    errors: t = {},
                    touched: l = {},
                    name: s
                } = e, r = c().get(t, s, !1);
                return r && "border-2 border-rose-600"
            }

            function E(e) {
                let {
                    acceptedFileTypes: t,
                    url: l,
                    maxFileSize: r = 5,
                    allowMultiple: a = !1,
                    label: i = "",
                    labelAlt: o = "",
                    additionalFormData: c = {}
                } = e, d = 1048576 * r, {
                    getKeyword: x
                } = (0, u.Z)(), [h, v] = (0, n.useState)({}), [f, g] = (0, n.useState)({}), [y, j] = (0, n.useState)(null), [N, b] = (0, n.useState)(!1), w = Object.values(f).some(e => "Uploaded" !== e), S = (0, n.useRef)(null), k = () => {
                    v({}), g({}), j(null), b(!1), S.current && (S.current.value = "")
                }, q = e => {
                    if (j(null), e.target.files) {
                        let l = Array.from(e.target.files),
                            s = !0,
                            a = {};
                        for (let n of l) n.size > d && (a[n.name] = "File size cannot exceed ".concat(r, " MB"), s = !1), t && !t.includes(n.type) && (a[n.name] = "File type not accepted. Accepted types: " + t.join(", "), s = !1);
                        s ? l.forEach(e => {
                            v(t => ({
                                ...t,
                                [e.name]: 0
                            })), C(e)
                        }) : g(a)
                    }
                }, C = e => {
                    let t = new FormData;
                    t.append("mediaList", e), c && Object.entries(c).forEach(e => {
                        let [l, s] = e;
                        t.append(l, s)
                    });
                    let s = new XMLHttpRequest;
                    s.open("POST", l, !0), s.upload.addEventListener("progress", t => {
                        if (t.lengthComputable) {
                            let l = Math.round(t.loaded / t.total * 100);
                            v(t => ({
                                ...t,
                                [e.name]: l
                            }))
                        }
                    }), s.addEventListener("readystatechange", () => {
                        4 === s.readyState && (200 === s.status ? (g(t => ({
                            ...t,
                            [e.name]: "Uploaded"
                        })), b(!0)) : g(t => ({
                            ...t,
                            [e.name]: "An error occurred while uploading the file. Server response: " + s.statusText
                        })))
                    }), s.send(t)
                };
                return (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4 w-full h-60 md:h-48",
                    children: [N ? (0, s.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [w ? (0, s.jsx)("span", {
                            className: "text-xs text-red-500",
                            children: "Upload completed, but with errors."
                        }) : (0, s.jsx)(s.Fragment, {}), (0, s.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, s.jsx)("span", {
                                className: "btn btn-success w-1/2 p-1",
                                children: x("slider.media.submitted-successfully")
                            }), (0, s.jsx)("button", {
                                className: "border-[var(--default-color)] bg-[#484848]/50 placeholder:text-[var(--default-color-inverted)] w-1/2 p-1",
                                onClick: k,
                                children: x("upload")
                            })]
                        })]
                    }) : (0, s.jsxs)("div", {
                        className: "form-control",
                        children: [(0, s.jsxs)("label", {
                            className: "label",
                            children: [(0, s.jsx)("span", {
                                className: "label-text",
                                children: i
                            }), (0, s.jsx)("span", {
                                className: "label-text-alt",
                                children: o
                            })]
                        }), (0, s.jsx)("input", {
                            type: "file",
                            className: "block w-full text-sm rounded-lg cursor-pointer focus:outline-none border-2 border-[var(--default-color)] bg-[#484848]/50 placeholder:text-[var(--default-color-inverted)]",
                            onChange: q,
                            accept: t ? t.join(",") : void 0,
                            ref: S,
                            multiple: a
                        }), (0, s.jsx)("label", {
                            className: "label",
                            children: (0, s.jsx)("span", {
                                className: "label-text-alt text-red-500",
                                children: y
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: "overflow-x-auto flex gap-2 flex-col-reverse",
                        children: Object.entries(h).map(e => {
                            let [t, l] = e;
                            return (0, s.jsxs)("div", {
                                className: "text-xs flex flex-col gap-1",
                                children: [(0, s.jsx)("p", {
                                    children: t
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [(0, s.jsx)("progress", {
                                        className: "progress progress-primary w-full",
                                        value: l,
                                        max: "100"
                                    }), 100 === l && (0, s.jsx)(s.Fragment, {
                                        children: "Uploaded" === f[t] ? (0, s.jsx)(m.G, {
                                            className: "text-xl text-green-500 mr-4",
                                            icon: p.LEp
                                        }) : (0, s.jsx)(m.G, {
                                            className: "text-xl text-green-500 mr-4",
                                            icon: p.NBC
                                        })
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "text-red-500",
                                    children: "Uploaded" !== f[t] ? f[t] : ""
                                })]
                            }, t)
                        })
                    })]
                })
            }
            w.Ry({
                mediaList: w.nK().required("File is required")
            });
            let I = {
                    ComponentSlidesIntroduction: function(e) {
                        let {
                            data: t
                        } = e, {
                            countdownTimer: l,
                            title: o,
                            titleFont: m
                        } = t, p = (0, i.S)(), {
                            getKeyword: x
                        } = (0, u.Z)(), [h, v] = (0, n.useState)(!1), f = (0, n.useMemo)(() => {
                            if (m) return p[m]
                        }, [p, m]);
                        (0, n.useEffect)(() => {
                            v(!0)
                        }, []);
                        let g = c().lowerCase(c().get(t, "verticalAlignment3", "top")),
                            y = c().get(d.qU, g, d.qU.top),
                            j = (0, n.useMemo)(() => {
                                let e = "inline-block text-center mr-3 relative after:content-[':'] after:block after:absolute after:text-[var(--default-color)] after:text-[17px] after:right-[-11px] after:top-0",
                                    t = "text-[25px] block leading-none",
                                    a = "text-[10px]";
                                return (null == l ? void 0 : l.date) && (0, s.jsx)(r.ZP, {
                                    date: null == l ? void 0 : l.date,
                                    renderer: l => {
                                        let {
                                            days: r,
                                            hours: n,
                                            minutes: i,
                                            seconds: o,
                                            completed: c
                                        } = l;
                                        return c ? "" : (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsxs)("div", {
                                                className: e,
                                                children: [(0, s.jsx)("span", {
                                                    className: t,
                                                    children: r
                                                }), (0, s.jsx)("span", {
                                                    className: a,
                                                    children: x("slider.landing.days")
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: e,
                                                children: [(0, s.jsx)("span", {
                                                    className: t,
                                                    children: n
                                                }), (0, s.jsx)("span", {
                                                    className: a,
                                                    children: x("slider.landing.hours")
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: e,
                                                children: [(0, s.jsx)("span", {
                                                    className: t,
                                                    children: i
                                                }), (0, s.jsx)("span", {
                                                    className: a,
                                                    children: x("slider.landing.minutes")
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "inline-block text-center relative",
                                                children: [(0, s.jsx)("span", {
                                                    className: t,
                                                    children: o
                                                }), (0, s.jsx)("span", {
                                                    className: a,
                                                    children: x("slider.landing.seconds")
                                                })]
                                            })]
                                        })
                                    }
                                })
                            }, [x, l]);
                        return (0, s.jsxs)("div", {
                            className: "relative h-full w-full flex ".concat(y, " items-center flex-col overflow-auto touch-auto"),
                            children: [(0, s.jsx)(a.Z, {
                                children: (0, s.jsx)("p", {
                                    className: "whitespace-pre-wrap my-5 text-5xl text-center ease-in-out ".concat(null == f ? void 0 : f.className),
                                    children: o
                                })
                            }), (null == l ? void 0 : l.countdownTitle) && (0, s.jsx)("p", {
                                className: "text-center text-xl",
                                children: null == l ? void 0 : l.countdownTitle
                            }), h && (0, s.jsx)("p", {
                                className: "my-3 text-center",
                                children: j
                            })]
                        })
                    },
                    ComponentSlidesCoupleIntroduction: function(e) {
                        let {
                            data: t
                        } = e, {
                            content: l
                        } = t, r = c().lowerCase(c().get(t, "verticalAlignment1", "top")), n = c().get(d.qU, r, d.qU.top), i = c().get(t, "title1");
                        return (0, s.jsxs)("div", {
                            className: "relative h-full w-full flex items-center flex-col px-5 text-center ".concat(n, " overflow-auto touch-auto"),
                            children: [(0, s.jsx)(a.Z, {
                                children: (0, s.jsx)("h1", {
                                    className: "text-3xl capitalize font-bold m-0 pt-5",
                                    children: i
                                })
                            }), (0, s.jsx)("div", {
                                className: " prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2 ",
                                dangerouslySetInnerHTML: {
                                    __html: l || ""
                                }
                            })]
                        })
                    },
					ComponentSlidesEventME: function(e) {
                        var t, l;
                        let {
                            data: r
                        } = e, {
                            Title: a,
                            //date: n,
                            location: i,
                            location2: o = {}
                        } = r, x = c().lowerCase(c().get(r, "verticalAlignment", "top")), v = c().get(d.qU, x, d.qU.top), {
                            language: g,
                            getKeyword: y
                        } = (0, u.Z)(), j = "";
                        return (0, s.jsxs)("div", {
                            className: "relative h-full w-full flex ".concat(v, " items-center flex-col text-center overflow-auto touch-auto"),
                            children: [(0, s.jsx)("h1", {
                                className: "text-1xl  py-5 font-italics",
                                children: a
                            }), (0, s.jsxs)("div", {
                                className: "py-3",
                                children: [(0, s.jsx)("p", {
                                    className: "text-5xl pb-2",
                                    children: (0, s.jsx)(m.G, {
                                        //icon: p.fT7
                                    })
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("p", {
                                        className: "text-xl",
                                        //children: j.format("MMMM DD, YYYY")
                                    }), (0, s.jsx)("p", {
                                        className: "text-xl",
                                        //children: j.format("h:mm a")
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "py-3",
                                children: [(0, s.jsx)("p", {
                                    className: "text-5xl pb-2",
                                    children: (0, s.jsx)(m.G, {
                                        //icon: p.opg
                                    })
                                }), (0, s.jsxs)("div", {
                                    children: [(null == i ? void 0 : i.Address) && (0, s.jsx)("div", {
                                        className: " block mb-10 relative px-5 text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2 ",
                                        dangerouslySetInnerHTML: {
                                            __html: (null == i ? void 0 : i.Address) || ""
                                        }
                                    }), ((null == o ? void 0 : null === (t = o.details) || void 0 === t ? void 0 : t.url) || (null == i ? void 0 : i.googleMapUrl)) && (0, s.jsx)("a", {
                                        className: "text-center m-10 rounded-lg py-4 px-7 cursor-pointer border-2 border-[var(--default-color)]",
                                        target: "_blank",
                                        href: (null == o ? void 0 : null === (l = o.details) || void 0 === l ? void 0 : l.url) || (null == i ? void 0 : i.googleMapUrl),
                                        rel: "noreferrer",
                                        children: (null == i ? void 0 : i.buttonText) || y("slider.event.location")
                                    })]
                                })]
                            })]
                        })
                    },
                    ComponentSlidesEvent: function(e) {
                        var t, l;
                        let {
                            data: r
                        } = e, {
                            Title: a,
                            date: n,
                            location: i,
                            location2: o = {}
                        } = r, x = c().lowerCase(c().get(r, "verticalAlignment", "top")), v = c().get(d.qU, x, d.qU.top), {
                            language: g,
                            getKeyword: y
                        } = (0, u.Z)(), j = h().tz(n, "Asia/Beirut").locale(g, [f()]);
                        return (0, s.jsxs)("div", {
                            className: "relative h-full w-full flex ".concat(v, " items-center flex-col text-center overflow-auto touch-auto"),
                            children: [(0, s.jsx)("h1", {
                                className: "text-3xl capitalize py-5 font-bold",
                                children: a
                            }), (0, s.jsxs)("div", {
                                className: "py-3",
                                children: [(0, s.jsx)("p", {
                                    className: "text-5xl pb-2",
                                    children: (0, s.jsx)(m.G, {
                                        icon: p.fT7
                                    })
                                }), (0, s.jsxs)("div", {
                                    children: [(0, s.jsx)("p", {
                                        className: "text-xl",
                                        children: j.format("MMMM DD, YYYY")
                                    }), (0, s.jsx)("p", {
                                        className: "text-xl",
                                        children: j.format("h:mm a")
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "py-3",
                                children: [(0, s.jsx)("p", {
                                    className: "text-5xl pb-2",
                                    children: (0, s.jsx)(m.G, {
                                        icon: p.opg
                                    })
                                }), (0, s.jsxs)("div", {
                                    children: [(null == i ? void 0 : i.Address) && (0, s.jsx)("div", {
                                        className: " block mb-10 relative px-5 text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2 ",
                                        dangerouslySetInnerHTML: {
                                            __html: (null == i ? void 0 : i.Address) || ""
                                        }
                                    }), ((null == o ? void 0 : null === (t = o.details) || void 0 === t ? void 0 : t.url) || (null == i ? void 0 : i.googleMapUrl)) && (0, s.jsx)("a", {
                                        className: "text-center m-10 rounded-lg py-4 px-7 cursor-pointer border-2 border-[var(--default-color)]",
                                        target: "_blank",
                                        href: (null == o ? void 0 : null === (l = o.details) || void 0 === l ? void 0 : l.url) || (null == i ? void 0 : i.googleMapUrl),
                                        rel: "noreferrer",
                                        children: (null == i ? void 0 : i.buttonText) || y("slider.event.location")
                                    })]
                                })]
                            })]
                        })
                    },
                    ComponentSlidesEventV2: function(e) {
                        let {
                            data: t
                        } = e, {
                            location: l
                        } = t, r = c().get(t, "title1", ""), a = c().get(t, "date1", ""), n = c().lowerCase(c().get(t, "verticalAlignment7", "top")), i = c().get(d.qU, n, d.qU.top), {
                            language: o,
                            getKeyword: x
                        } = (0, u.Z)();
                        return (0, s.jsxs)("div", {
                            className: "relative h-full w-full flex ".concat(i, " items-center flex-col text-center overflow-auto touch-auto"),
                            children: [(0, s.jsx)("div", {
                                className: " block relative py-3 prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2 ",
                                dangerouslySetInnerHTML: {
                                    __html: r || ""
                                }
                            }), (0, s.jsxs)("div", {
                                className: "py-5",
                                children: [(0, s.jsx)("p", {
                                    className: "text-5xl pb-2",
                                    children: (0, s.jsx)(m.G, {
                                        icon: p.fT7
                                    })
                                }), (0, s.jsx)("div", {
                                    className: " block relative prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2 ",
                                    dangerouslySetInnerHTML: {
                                        __html: a || ""
                                    }
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "py-3",
                                children: [(0, s.jsx)("p", {
                                    className: "text-5xl pb-2",
                                    children: (0, s.jsx)(m.G, {
                                        icon: p.opg
                                    })
                                }), (0, s.jsxs)("div", {
                                    children: [(null == l ? void 0 : l.Address) && (0, s.jsx)("div", {
                                        className: " block mb-10 relative px-5 text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2 ",
                                        dangerouslySetInnerHTML: {
                                            __html: (null == l ? void 0 : l.Address) || ""
                                        }
                                    }), (null == l ? void 0 : l.googleMapUrl) && (0, s.jsx)("a", {
                                        className: "text-center m-10 rounded-lg py-4 px-7 cursor-pointer border-2 border-[var(--default-color)]",
                                        target: "_blank",
                                        href: null == l ? void 0 : l.googleMapUrl,
                                        rel: "noreferrer",
                                        children: (null == l ? void 0 : l.buttonText) || x("slider.event.location")
                                    })]
                                })]
                            })]
                        })
                    },
                    ComponentSlidesGuestForm: function(e) {
                        var t, l;
                        let {
                            data: r,
                            slug: a,
                            wedding: i
                        } = e, o = (0, g.useRouter)(), {
                            getKeyword: x
                        } = (0, u.Z)(), h = c().isArray(o.query.guestId) ? o.query.guestId[0] : o.query.guestId, v = c().isArray(o.query.np) ? o.query.np[0] : o.query.np, f = h && c().find(null === (t = i.attributes) || void 0 === t ? void 0 : t.guestsLists, e => (null == e ? void 0 : e.id) === h || (null == e ? void 0 : e.uid) === h), [j, b] = (0, n.useState)(), [w, S] = (0, n.useState)({
                            id: h,
                            slug: a,
                            guests: (null == f ? void 0 : null === (l = f.guests) || void 0 === l ? void 0 : l.map(e => ({
                                ...e,
                                checked: !0
                            }))) || c().times(c().toNumber(v) || 1, () => q),
                            invitationConfirmation: "Unconfirmed"
                        }), {
                            title: _,
                            subtitle: T,
                            submitButtonText: M
                        } = r, {
                            openInvitation: L = !1,
                            phoneNumber: U,
                            preventGuestToUpdateNames: F
                        } = (null == i ? void 0 : i.attributes) || {}, E = c().lowerCase(c().get(r, "verticalAlignment2", "top")), I = c().get(d.qU, E, d.qU.top), A = L && !v || (null == f ? void 0 : f.openInvitation);
                        return (0, s.jsx)("div", {
                            className: "relative h-full w-full flex ".concat(I, " items-center flex-col text-center overflow-hidden guestform"),
                            children: (0, s.jsxs)("div", {
                                className: "w-12/12 px-3 h-full",
                                children: [(0, s.jsx)("h1", {
                                    className: "text-3xl capitalize pt-5 pb-2 font-bold",
                                    children: _
                                }), (0, s.jsx)("h3", {
                                    className: "text-2xl mb-5",
                                    children: T
                                }), (null == f ? void 0 : f.isSubmitted) && (0, s.jsxs)("p", {
                                    className: "text-2xl text-center",
                                    children: [x("slider.form.submitted"), U && (0, s.jsxs)("span", {
                                        children: [x("slider.form.submitted.description"), " ", U]
                                    })]
                                }), (!(null == f ? void 0 : f.isSubmitted) || L) && (0, s.jsx)(y.J9, {
                                    initialValues: w,
                                    validationSchema: k,
                                    onSubmit: async e => {
                                        let t = [],
                                            l = [],
                                            s = [];
                                        e.guests.forEach(e => {
                                            e.checked ? l.push("- ".concat(e.firstName, " ").concat(e.lastName)) : s.push("- ".concat(e.firstName, " ").concat(e.lastName))
                                        }), l.length > 0 && (t.push(x("slider.form.attending")), t.push(l.join("\n"))), s.length > 0 && (t.push(x("slider.form.no-attending")), t.push(s.join("\n")));
                                        let r = confirm("".concat(t.join("\n")));
                                        r && b(await N({
                                            ...e,
                                            guests: e.guests.map(e => ({
                                                ...e,
                                                invitationConfirmation: (null == e ? void 0 : e.checked) ? "Yes" : "No"
                                            }))
                                        }))
                                    },
                                    children: e => {
                                        let {
                                            values: t,
                                            touched: l,
                                            errors: n
                                        } = e;
                                        return (0, s.jsxs)(y.l0, {
                                            className: "h-[calc(100%-135px)]",
                                            children: [(0, s.jsx)(y.F2, {
                                                name: "guests",
                                                children: e => {
                                                    let {
                                                        insert: r,
                                                        remove: a,
                                                        push: o
                                                    } = e;
                                                    return (0, s.jsx)(s.Fragment, {
                                                        children: (0, s.jsxs)("div", {
                                                            className: "relative overflow-y-scroll snap-y-mandatory h-[calc(100%-230px)] scrollbar-hidden",
                                                            children: [t.guests.length > 0 && t.guests.map((e, t) => {
                                                                var r, a;
                                                                return (0, s.jsx)(s.Fragment, {
                                                                    children: (0, s.jsxs)("div", {
                                                                        className: "flex items-center mb-2 relative snap-start",
                                                                        children: [(0, s.jsx)(y.gN, {
                                                                            type: "checkbox",
                                                                            name: "guests.".concat(t, ".checked"),
                                                                            initialValue: !0
                                                                        }), (0, s.jsx)(y.gN, {
                                                                            disabled: F && h,
                                                                            className: "opacity-100 relative mx-3 flex-1 w-full rounded-lg py-2 cursor-pointer border-2 border-[var(--default-color)] placeholder:text-[var(--default-color-inverted)]\n                                                                        ".concat(C({
                                                                                errors: n,
                                                                                touched: l,
                                                                                name: "guests.".concat(t, ".firstName")
                                                                            }), "\n                                                                        ").concat((null == i ? void 0 : null === (r = i.attributes) || void 0 === r ? void 0 : r.darkShadowOverlay) && "bg-[#484848]/50" || "bg-transparent", "\n                                                                        "),
                                                                            name: "guests.".concat(t, ".firstName"),
                                                                            placeholder: "".concat(x("slider.form.guest"), " #").concat(t + 1, " ").concat(x("slider.form.firstName")),
                                                                            type: "text"
                                                                        }), (0, s.jsx)(y.gN, {
                                                                            disabled: F && h,
                                                                            className: "opacity-100 relative flex-1 w-full rounded-lg py-2 cursor-pointer border-2 border-[var(--default-color)] placeholder:text-[var(--default-color-inverted)]\n                                                                        ".concat(C({
                                                                                errors: n,
                                                                                touched: l,
                                                                                name: "guests.".concat(t, ".lastName")
                                                                            }), "\n                                                                        ").concat((null == i ? void 0 : null === (a = i.attributes) || void 0 === a ? void 0 : a.darkShadowOverlay) && "bg-[#484848]/50" || "bg-transparent", "\n                                                                        "),
                                                                            name: "guests.".concat(t, ".lastName"),
                                                                            placeholder: "".concat(x("slider.form.guest"), " #").concat(t + 1, " ").concat(x("slider.form.lastName")),
                                                                            type: "text"
                                                                        })]
                                                                    })
                                                                })
                                                            }), A && (0, s.jsxs)("div", {
                                                                className: "flex justify-center items-center py-2 text-3xl",
                                                                children: [(0, s.jsx)(m.G, {
                                                                    className: "px-1",
                                                                    icon: p.KtF,
                                                                    onClick: () => {
                                                                        o(q)
                                                                    }
                                                                }), t.guests.length > 1 && (0, s.jsx)(m.G, {
                                                                    className: "px-1",
                                                                    icon: p.uMC,
                                                                    onClick: () => {
                                                                        a(t.guests.length - 1)
                                                                    }
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                }
                                            }), (0, s.jsx)("div", {
                                                className: "py-2 block relative text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2",
                                                dangerouslySetInnerHTML: {
                                                    __html: r.formMessage || ""
                                                }
                                            }), (0, s.jsx)(y.gN, {
                                                name: "id",
                                                value: h,
                                                type: "hidden"
                                            }), (0, s.jsx)(y.gN, {
                                                name: "slug",
                                                value: a,
                                                type: "hidden"
                                            }), c().isBoolean(j) && !j && (0, s.jsx)("p", {
                                                className: "text-red-500",
                                                children: x("slider.form.error")
                                            }), (0, s.jsx)("button", {
                                                disabled: j,
                                                className: "text-center rounded-lg py-4 px-7 cursor-pointer border-2 border-[var(--default-color)]",
                                                type: "submit",
                                                children: j ? x("slider.form.submitted-successfully") : M
                                            })]
                                        })
                                    }
                                })]
                            })
                        })
                    },
                    ComponentSlidesGuestFormV2: function(e) {
                        var t, l;
                        let {
                            data: r,
                            slug: a,
                            wedding: o
                        } = e, x = (0, g.useRouter)(), {
                            getKeyword: h
                        } = (0, u.Z)(), v = (0, i.S)(), f = c().isArray(x.query.guestId) ? x.query.guestId[0] : x.query.guestId, j = c().isArray(x.query.np) ? x.query.np[0] : x.query.np, b = f && c().find(null === (t = o.attributes) || void 0 === t ? void 0 : t.guestsLists, e => (null == e ? void 0 : e.id) === f || (null == e ? void 0 : e.uid) === f), [w, S] = (0, n.useState)(), [k, q] = (0, n.useState)({
                            id: f,
                            slug: a,
                            guests: (null == b ? void 0 : null === (l = b.guests) || void 0 === l ? void 0 : l.map(e => ({
                                ...e,
                                checked: !0
                            }))) || c().times(c().toNumber(j) || 1, () => U),
                            invitationConfirmation: "Unconfirmed"
                        }), {
                            subtitle: C,
                            submitButtonText: _,
                            inputFont: T
                        } = r, M = (0, n.useMemo)(() => {
                            if (T) return v[T]
                        }, [v, T]), E = c().get(r, "title1", ""), I = c().get(r, "formMessage1", ""), {
                            openInvitation: A = !1,
                            phoneNumber: Z
                        } = (null == o ? void 0 : o.attributes) || {}, G = c().lowerCase(c().get(r, "verticalAlignment6", "top")), H = c().get(d.qU, G, d.qU.top), O = A && !j || (null == b ? void 0 : b.openInvitation);
                        return (0, s.jsx)("div", {
                            className: "relative h-full w-full flex ".concat(H, " items-center flex-col text-center overflow-hidden guestform"),
                            children: (0, s.jsxs)("div", {
                                className: "w-12/12 px-3 h-full",
                                children: [(0, s.jsx)("div", {
                                    className: "block relative text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2",
                                    dangerouslySetInnerHTML: {
                                        __html: E
                                    }
                                }), (0, s.jsx)("div", {
                                    className: "mb-5 block relative text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2",
                                    dangerouslySetInnerHTML: {
                                        __html: C || ""
                                    }
                                }), (null == b ? void 0 : b.isSubmitted) && (0, s.jsxs)("p", {
                                    className: "text-2xl text-center",
                                    children: [h("slider.form.submitted"), Z && (0, s.jsxs)("span", {
                                        children: [h("slider.form.submitted.description"), " ", Z]
                                    })]
                                }), (!(null == b ? void 0 : b.isSubmitted) || A) && (0, s.jsx)(y.J9, {
                                    initialValues: k,
                                    validationSchema: L,
                                    onSubmit: async e => {
                                        let t = [],
                                            l = [],
                                            s = [];
                                        e.guests.forEach(e => {
                                            e.checked ? l.push("- ".concat(e.firstName, " ").concat(e.lastName)) : s.push("- ".concat(e.firstName, " ").concat(e.lastName))
                                        }), l.length > 0 && (t.push(h("slider.form.attending")), t.push(l.join("\n"))), s.length > 0 && (t.push(h("slider.form.no-attending")), t.push(s.join("\n")));
                                        let r = confirm("".concat(t.join("\n")));
                                        r && S(await N({
                                            ...e,
                                            guests: e.guests.map(e => ({
                                                ...e,
                                                invitationConfirmation: (null == e ? void 0 : e.checked) ? "Yes" : "No"
                                            }))
                                        }))
                                    },
                                    children: e => {
                                        let {
                                            values: t,
                                            touched: l,
                                            errors: r
                                        } = e;
                                        return (0, s.jsxs)(y.l0, {
                                            className: "h-[calc(100%-135px)]",
                                            children: [(0, s.jsx)(y.F2, {
                                                name: "guests",
                                                children: e => {
                                                    let {
                                                        insert: a,
                                                        remove: n,
                                                        push: i
                                                    } = e;
                                                    return (0, s.jsx)(s.Fragment, {
                                                        children: (0, s.jsxs)("div", {
                                                            className: "relative overflow-y-scroll snap-y-mandatory h-[calc(100%-230px)] scrollbar-hidden ".concat(null == M ? void 0 : M.className),
                                                            children: [t.guests.length > 0 && t.guests.map((e, t) => {
                                                                var a, n;
                                                                return (0, s.jsx)(s.Fragment, {
                                                                    children: (0, s.jsxs)("div", {
                                                                        className: "flex items-center mb-2 relative snap-start",
                                                                        children: [(0, s.jsx)(y.gN, {
                                                                            type: "checkbox",
                                                                            name: "guests.".concat(t, ".checked"),
                                                                            initialValue: !0
                                                                        }), (0, s.jsx)(y.gN, {
                                                                            className: "opacity-100 relative mx-3 flex-1 w-full rounded-lg py-2 cursor-pointer border-2 border-[var(--default-color)] placeholder:text-[var(--default-color-inverted)]\n                                                                        ".concat(F({
                                                                                errors: r,
                                                                                touched: l,
                                                                                name: "guests.".concat(t, ".firstName")
                                                                            }), "\n                                                                        ").concat((null == o ? void 0 : null === (a = o.attributes) || void 0 === a ? void 0 : a.darkShadowOverlay) && "bg-[#484848]/50" || "bg-transparent", "\n                                                                        "),
                                                                            name: "guests.".concat(t, ".firstName"),
                                                                            placeholder: "".concat(h("slider.form.guest"), " #").concat(t + 1, " ").concat(h("slider.form.firstName")),
                                                                            type: "text"
                                                                        }), (0, s.jsx)(y.gN, {
                                                                            className: "opacity-100 relative flex-1 w-full rounded-lg py-2 cursor-pointer border-2 border-[var(--default-color)] placeholder:text-[var(--default-color-inverted)]\n                                                                        ".concat(F({
                                                                                errors: r,
                                                                                touched: l,
                                                                                name: "guests.".concat(t, ".lastName")
                                                                            }), "\n                                                                        ").concat((null == o ? void 0 : null === (n = o.attributes) || void 0 === n ? void 0 : n.darkShadowOverlay) && "bg-[#484848]/50" || "bg-transparent", "\n                                                                        "),
                                                                            name: "guests.".concat(t, ".lastName"),
                                                                            placeholder: "".concat(h("slider.form.guest"), " #").concat(t + 1, " ").concat(h("slider.form.lastName")),
                                                                            type: "text"
                                                                        })]
                                                                    })
                                                                })
                                                            }), O && (0, s.jsxs)("div", {
                                                                className: "flex justify-center items-center py-2 text-3xl",
                                                                children: [(0, s.jsx)(m.G, {
                                                                    className: "px-1",
                                                                    icon: p.KtF,
                                                                    onClick: () => {
                                                                        i(U)
                                                                    }
                                                                }), t.guests.length > 1 && (0, s.jsx)(m.G, {
                                                                    className: "px-1",
                                                                    icon: p.uMC,
                                                                    onClick: () => {
                                                                        n(t.guests.length - 1)
                                                                    }
                                                                })]
                                                            })]
                                                        })
                                                    })
                                                }
                                            }), (0, s.jsx)("div", {
                                                className: "py-2 block relative text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2",
                                                dangerouslySetInnerHTML: {
                                                    __html: I || ""
                                                }
                                            }), (0, s.jsx)(y.gN, {
                                                name: "id",
                                                value: f,
                                                type: "hidden"
                                            }), (0, s.jsx)(y.gN, {
                                                name: "slug",
                                                value: a,
                                                type: "hidden"
                                            }), c().isBoolean(w) && !w && (0, s.jsx)("p", {
                                                className: "text-red-500",
                                                children: h("slider.form.error")
                                            }), (0, s.jsx)("button", {
                                                disabled: w,
                                                className: "text-center rounded-lg py-4 px-7 cursor-pointer border-2 border-[var(--default-color)]",
                                                type: "submit",
                                                children: w ? h("slider.form.submitted-successfully") : _
                                            })]
                                        })
                                    }
                                })]
                            })
                        })
                    },
                    ComponentSlidesPost: function(e) {
                        var t;
                        let {
                            data: l,
                            global: r,
                            slug: a
                        } = e, {
                            includeSponsorship: i,
                            description: o,
                            postPicture: m,
                            showGalleryUpload: p,
                            galleryUploadLabel: x
                        } = l, {
                            getKeyword: h
                        } = (0, u.Z)(), [v, f] = (0, n.useState)(), g = c().lowerCase(c().get(l, "verticalAlignment4", "top")), j = c().get(d.qU, g, d.qU.top), {
                            prefixText: N,
                            sponsorshipLogo: w,
                            sponsorshipUrl: S
                        } = (null === (t = r.attributes) || void 0 === t ? void 0 : t.sponsorshipSection) || {};
                        return (0, s.jsxs)("div", {
                            className: "relative h-full w-full flex ".concat(j, " ").concat("top" === g && "pt-10", " items-center flex-col overflow-auto touch-auto"),
                            children: [(0, s.jsxs)("div", {
                                className: "transition bg-white text-black w-[80%] max-w-[300px] p-4 rounded-lg ease-in-out origin-center -rotate-12",
                                children: [m && (0, s.jsx)("img", {
                                    className: "block w-full h-auto my-0 mx-auto rounded-lg",
                                    src: (0, _.$0)(m) || "",
                                    alt: o
                                }), o && (0, s.jsx)("p", {
                                    className: "text-center pt-3",
                                    children: o
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "my-10",
                                children: [(0, s.jsx)("div", {
                                    className: " block relative py-2 prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2 ",
                                    dangerouslySetInnerHTML: {
                                        __html: x || ""
                                    }
                                }), p && (0, s.jsx)(y.J9, {
                                    initialValues: {
                                        slug: c().toString(a),
                                        mediaList: []
                                    },
                                    validationSchema: T,
                                    onSubmit: async (e, t) => {
                                        let {
                                            setSubmitting: l
                                        } = t, s = new FormData;
                                        s.append("slug", e.slug), Array.from(e.mediaList).forEach(e => {
                                            s.append("mediaList", e)
                                        });
                                        let r = await b(s);
                                        if (r) {
                                            let a = document.getElementById("mediaList");
                                            a && (a.value = "")
                                        }
                                        f(r), l(!1)
                                    },
                                    children: e => {
                                        let {
                                            setFieldValue: t,
                                            isSubmitting: l
                                        } = e;
                                        return (0, s.jsxs)(y.l0, {
                                            className: "flex flex-col items-center text-center",
                                            children: [(0, s.jsx)(y.gN, {
                                                name: "slug",
                                                value: a,
                                                type: "hidden"
                                            }), (0, s.jsx)("div", {
                                                className: "my-3",
                                                children: (0, s.jsx)("input", {
                                                    id: "mediaList",
                                                    name: "mediaList",
                                                    className: "block w-full text-sm rounded-lg cursor-pointer focus:outline-none border-2 border-[var(--default-color)] bg-[#484848]/50 placeholder:text-[var(--default-color-inverted)]",
                                                    type: "file",
                                                    multiple: !0,
                                                    onChange: e => {
                                                        t("mediaList", e.currentTarget.files)
                                                    }
                                                })
                                            }), (0, s.jsx)(y.Bc, {
                                                name: "mediaList",
                                                component: "div"
                                            }), (0, s.jsx)("button", {
                                                className: "text-center rounded-lg py-4 px-7 cursor-pointer border-2 border-[var(--default-color)]",
                                                type: "submit",
                                                disabled: l,
                                                children: v ? h("slider.media.submitted-successfully") : h("upload")
                                            })]
                                        })
                                    }
                                })]
                            }), i && (0, s.jsxs)("div", {
                                className: "transition w-80% absolute bottom-10",
                                children: [N && (0, s.jsx)("p", {
                                    className: "text-center py-3",
                                    children: N
                                }), w && S ? (0, s.jsx)("a", {
                                    href: S,
                                    children: (0, s.jsx)("img", {
                                        className: "block w-[50px] h-auto my-0 mx-auto rounded-lg",
                                        src: (0, _.$0)(w) || "",
                                        alt: o
                                    })
                                }) : (0, s.jsx)("img", {
                                    className: "block w-[50px] h-auto my-0 mx-auto rounded-lg",
                                    src: (0, _.$0)(w) || "",
                                    alt: o
                                })]
                            })]
                        })
                    },
                    ComponentSlidesCountdownPage: function(e) {
                        let {
                            data: t
                        } = e, {
                            countdownTimer: l,
                            title: a
                        } = t, {
                            getKeyword: i
                        } = (0, u.Z)(), [o, m] = (0, n.useState)(!1);
                        (0, n.useEffect)(() => {
                            m(!0)
                        }, []);
                        let p = c().lowerCase(c().get(t, "verticalAlignment5", "top")),
                            x = c().get(d.qU, p, d.qU.top),
                            h = (0, n.useMemo)(() => {
                                let e = "inline-block text-center mr-3 relative after:content-[':'] after:block after:absolute after:text-[var(--default-color)] after:text-[17px] after:right-[-11px] after:top-0",
                                    t = "text-[25px] block leading-none",
                                    a = "text-[10px]";
                                return (null == l ? void 0 : l.date) && (0, s.jsx)(r.ZP, {
                                    date: null == l ? void 0 : l.date,
                                    renderer: l => {
                                        let {
                                            days: r,
                                            hours: n,
                                            minutes: o,
                                            seconds: c,
                                            completed: d
                                        } = l;
                                        return d ? "" : (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsxs)("div", {
                                                className: e,
                                                children: [(0, s.jsx)("span", {
                                                    className: t,
                                                    children: r
                                                }), (0, s.jsx)("span", {
                                                    className: a,
                                                    children: i("slider.landing.days")
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: e,
                                                children: [(0, s.jsx)("span", {
                                                    className: t,
                                                    children: n
                                                }), (0, s.jsx)("span", {
                                                    className: a,
                                                    children: i("slider.landing.hours")
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: e,
                                                children: [(0, s.jsx)("span", {
                                                    className: t,
                                                    children: o
                                                }), (0, s.jsx)("span", {
                                                    className: a,
                                                    children: i("slider.landing.minutes")
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "inline-block text-center relative",
                                                children: [(0, s.jsx)("span", {
                                                    className: t,
                                                    children: c
                                                }), (0, s.jsx)("span", {
                                                    className: a,
                                                    children: i("slider.landing.seconds")
                                                })]
                                            })]
                                        })
                                    }
                                })
                            }, [i, l]);
                        return (0, s.jsxs)("div", {
                            className: "relative h-full w-full flex ".concat(x, " items-center flex-col overflow-auto touch-auto"),
                            children: [(0, s.jsx)("div", {
                                className: "my-5 block relative text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2",
                                dangerouslySetInnerHTML: {
                                    __html: a || ""
                                }
                            }), (null == l ? void 0 : l.countdownTitle) && (0, s.jsx)("p", {
                                className: "text-center text-xl",
                                children: null == l ? void 0 : l.countdownTitle
                            }), o && (0, s.jsx)("p", {
                                className: "my-3 text-center",
                                children: h
                            })]
                        })
                    },
                    ComponentSlidesMediaUpload: function(e) {
                        let {
                            data: t,
                            slug: l,
                            wedding: r
                        } = e;
                        (0, g.useRouter)();
                        let {
                            getKeyword: a
                        } = (0, u.Z)(), {
                            introductionText: i
                        } = t, [o, m] = (0, n.useState)(), p = c().lowerCase(c().get(t, "verticalAlignment8", "top")), x = c().get(d.qU, p, d.qU.top);
                        return (0, s.jsx)("div", {
                            className: "relative h-full w-full flex ".concat(x, " items-center flex-col text-center overflow-hidden guestform"),
                            children: (0, s.jsxs)("div", {
                                className: "px-3",
                                children: [(0, s.jsx)("div", {
                                    className: "block relative text-center prose-xl prose-h1:my-2 prose-h2:my-2 prose-h3:my-2 prose-h4:my-2 prose-h5:my-2 prose-h6:my-2 prose-p:my-2",
                                    dangerouslySetInnerHTML: {
                                        __html: i || ""
                                    }
                                }), (0, s.jsx)(E, {
                                    additionalFormData: {
                                        slug: c().toString(l)
                                    },
                                    url: j("/api/wedding/guest/upload-media"),
                                    acceptedFileTypes: ["image/png", "image/jpeg", "image/gif", "image/svg+xml", "image/webp", "video/mp4", "video/webm", "video/ogg"],
                                    allowMultiple: !0,
                                    maxFileSize: 100
                                })]
                            })
                        })
                    }
                },
                A = e => {
                    let {
                        slideData: t,
                        slug: l,
                        wedding: r,
                        global: a
                    } = e, n = null == t ? void 0 : t.__typename;
                    if (!n) return null;
                    let i = I[n];
                    return i ? (0, s.jsx)(i, {
                        global: a,
                        data: t,
                        slug: l,
                        wedding: r
                    }) : null
                };
            var Z = A
        }
    }
]);