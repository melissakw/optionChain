(self.webpackChunkoptionsclient = self.webpackChunkoptionsclient || []).push([
  [369],
  {
    9369: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(7757),
        l = n.n(a),
        r = n(8926),
        u = n.n(r),
        c = n(3038),
        s = n.n(c),
        p = n(7294),
        i = n(1555),
        o = n(4051),
        m = n(682),
        E = n(9669),
        f = n.n(E),
        d = n(2788),
        Z = n(2564),
        h = n(6655),
        v = n(7918);
      t.default = function (e) {
        var t,
          n = 'http://'.concat('52.39.121.151:3002/tdAPI'),
          a =
            (null === (t = e.location.state) || void 0 === t
              ? void 0
              : t.userQuery) || '',
          r = (0, p.useState)(!1),
          c = s()(r, 2),
          E = c[0],
          y = c[1],
          g = (0, p.useState)(!1),
          k = s()(g, 2),
          x = k[0],
          S = k[1],
          b = (0, p.useState)(!1),
          D = s()(b, 2),
          w = D[0],
          A = D[1],
          C = (0, p.useState)(!1),
          M = s()(C, 2),
          F = M[0],
          j = M[1],
          I = (0, p.useState)(),
          L = s()(I, 2),
          q = L[0],
          z = L[1],
          O = (0, p.useState)(),
          P = s()(O, 2),
          Q = P[0],
          T = P[1],
          B = (0, p.useState)(),
          G = s()(B, 2),
          H = G[0],
          J = G[1],
          K = (function () {
            var e = u()(
              l().mark(function e() {
                var t, r;
                return l().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            S(!0),
                            (e.prev = 1),
                            (e.next = 4),
                            f().get(n, { params: { symbol: a } })
                          );
                        case 4:
                          (t = e.sent),
                            'FAILED' === (r = t.data).status ? j(!1) : j(!0),
                            z(r.underlying),
                            T(r.putExpDateMap),
                            J(r.callExpDateMap),
                            A(!1),
                            S(!1),
                            (e.next = 18);
                          break;
                        case 14:
                          (e.prev = 14), (e.t0 = e.catch(1)), A(!0), S(!1);
                        case 18:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 14]]
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, p.useEffect)(
            function () {
              a.match(/([A-Za-z]\.?){1,5}/) ? (y(!0), x || K()) : y(!1);
            },
            [a]
          ),
          p.createElement(
            p.Fragment,
            null,
            p.createElement(d.Aq, null),
            p.createElement(
              m.Z,
              null,
              p.createElement(
                i.Z,
                null,
                p.createElement(
                  o.Z,
                  { style: { justifyContent: 'center' } },
                  p.createElement(v.Z, null)
                ),
                p.createElement(
                  o.Z,
                  {
                    style: { paddingTop: 20, justifyContent: 'space-between' },
                  },
                  p.createElement(Z.Z, { isLoading: x }),
                  p.createElement(d.ts, { fetchData: K })
                ),
                x && a
                  ? p.createElement(d.gb, null)
                  : !w && E && F
                  ? p.createElement(
                      p.Fragment,
                      null,
                      p.createElement(
                        o.Z,
                        null,
                        p.createElement(h.Z, { underlying: q })
                      ),
                      p.createElement(
                        o.Z,
                        null,
                        p.createElement(d.Oe, {
                          putExpDateMap: Q,
                          callExpDateMap: H,
                        })
                      )
                    )
                  : p.createElement(d.kp, null)
              )
            )
          )
        );
      };
    },
  },
]);
