var errorsForAnalytics = [];
function check_gtag() {
  if ("function" != typeof gtag) {
    setTimeout(check_gtag, 500);
    return;
  }
  errorsForAnalytics.length > 0 &&
    jQuery.each(errorsForAnalytics, function (r, n) {
      gtag("event", "exception", { description: n, fatal: !1 }),
        gtag("event", "exception", {
          send_to: "GA4",
          description: n,
          fatal: !1,
        });
    }),
    (window.onerror = function (r, n, t, e, o) {
      var i = e ? "\ncol: " + e : "";
      i += o ? "\nerr: " + o : "";
      var c = window.location.href,
        a = (
          "Err: " +
          r +
          "\nurl: " +
          (n =
            n && c.trim() == n.trim()
              ? "s"
              : n
              ? n.replace("https://www.duoprint.in", "")
              : n) +
          "\nln: " +
          t +
          i
        ).substring(0, 150);
      return (
        gtag("event", "exception", { description: a, fatal: !1 }),
        gtag("event", "exception", {
          send_to: "GA4",
          description: a,
          fatal: !1,
        }),
        !1
      );
    });
}
(window.onerror = function (r, n, t, e, o) {
  var i = e ? "\ncol: " + e : "";
  i += o ? "\nerr: " + o : "";
  var c = window.location.href,
    a = (
      "Err: " +
      r +
      "\nurl: " +
      (n =
        n && c.trim() == n.trim()
          ? "s"
          : n
          ? n.replace("https://www.duoprint.in", "")
          : n) +
      "\nln: " +
      t +
      i
    ).substring(0, 150);
  return errorsForAnalytics.push(a), !1;
}),
  check_gtag();
