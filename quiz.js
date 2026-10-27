/* Baxter Way of Selling course: quiz components.
   BWOS.stageQuiz(el, id, items)  items: {ctx, quote, a: "Connect"|..., why}
   BWOS.mcQuiz(el, id, items, title) items: {ctx?, q, options: [..], a: index, why, notes?: [per-option note]}
   Questions shuffle each attempt (interleaving). Missed items can be retried. */
(function () {
  var STAGES = ["Connect", "Discover", "Diagnose", "Align", "Advance"];

  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem("bwos:" + key));
      localStorage.setItem("bwos:" + key, JSON.stringify(val));
    } catch (e) { return null; }
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function h(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function record(id, score, total) {
    var prev = store("quiz:" + id) || {};
    var best = Math.max(prev.best || 0, score);
    store("quiz:" + id, { best: best, total: total, at: Date.now() });
  }

  function run(el, id, items, title, render) {
    var queue, i, score, missed;
    function start(list) { queue = shuffle(list); i = 0; score = 0; missed = []; show(); }
    function show() {
      el.innerHTML = "";
      el.className = "quiz";
      if (i >= queue.length) return finish();
      var item = queue[i];
      var head = h("div", "quiz-head");
      head.appendChild(h("p", "eyebrow", title));
      head.appendChild(h("span", "quiz-progress", (i + 1) + " of " + queue.length + " · " + score + " correct"));
      el.appendChild(head);
      render(el, item, function (ok) {
        if (ok) score++; else missed.push(item);
        var next = h("div", "actions");
        var b = h("button", "btn", i + 1 < queue.length ? "Next question" : "See results");
        b.type = "button";
        b.onclick = function () { i++; show(); el.scrollIntoView({ block: "nearest", behavior: "smooth" }); };
        next.appendChild(b);
        el.appendChild(next);
        b.focus({ preventScroll: true });
      });
    }
    function finish() {
      record(id, score, queue.length);
      var head = h("div", "quiz-head");
      head.appendChild(h("p", "eyebrow", title + " · results"));
      el.appendChild(head);
      el.appendChild(h("div", "score-big", score + " / " + queue.length));
      var msg = score === queue.length ? "Clean sweep. Come back in a few days and run it again cold; that is what makes it stick."
        : score >= queue.length * 0.8 ? "Strong. Retry the ones you missed now, then run the full set again in a few days."
        : "Retry the misses now. Reread the step descriptions above for any step you missed twice.";
      el.appendChild(h("p", "small", msg));
      var a = h("div", "actions");
      if (missed.length) {
        var r = h("button", "btn gold", "Retry the " + missed.length + " missed");
        r.type = "button";
        var m = missed.slice();
        r.onclick = function () { start(m); };
        a.appendChild(r);
      }
      var all = h("button", "btn ghost", "Run the full set again");
      all.type = "button";
      all.onclick = function () { start(items); };
      a.appendChild(all);
      el.appendChild(a);
    }
    start(items);
  }

  function stageQuiz(el, id, items, title) {
    run(el, id, items, title || "Name the step", function (root, item, done) {
      var q = h("div", "quiz-q");
      q.innerHTML = (item.ctx ? '<span class="ctx">' + item.ctx + "</span>" : "") + "<blockquote>&ldquo;" + item.quote + "&rdquo;</blockquote>";
      root.appendChild(q);
      var opts = h("div", "opts five");
      STAGES.forEach(function (s) {
        var b = h("button", "opt", s);
        b.type = "button";
        b.onclick = function () {
          var ok = s === item.a;
          Array.prototype.forEach.call(opts.children, function (c) {
            c.disabled = true;
            if (c.textContent === item.a) c.classList.add("right");
          });
          if (!ok) b.classList.add("wrong");
          var f = h("div", "feedback " + (ok ? "ok" : "no"), "<b>" + (ok ? "Correct" : "It's " + item.a) + "</b>" + item.why);
          root.appendChild(f);
          done(ok);
        };
        opts.appendChild(b);
      });
      root.appendChild(opts);
    });
  }

  function mcQuiz(el, id, items, title) {
    run(el, id, items, title || "Check yourself", function (root, item, done) {
      var q = h("div", "quiz-q");
      q.innerHTML = (item.ctx ? '<span class="ctx">' + item.ctx + "</span>" : "") + item.q;
      root.appendChild(q);
      var order = shuffle(item.options.map(function (t, k) { return k; }));
      var opts = h("div", "opts");
      order.forEach(function (k) {
        var b = h("button", "opt", item.options[k]);
        b.type = "button";
        b.dataset.k = k;
        b.onclick = function () {
          var ok = k === item.a;
          Array.prototype.forEach.call(opts.children, function (c) {
            c.disabled = true;
            if (+c.dataset.k === item.a) c.classList.add("right");
          });
          if (!ok) b.classList.add("wrong");
          var extra = (!ok && item.notes && item.notes[k]) ? " " + item.notes[k] : "";
          root.appendChild(h("div", "feedback " + (ok ? "ok" : "no"), "<b>" + (ok ? "Correct" : "Not this one") + "</b>" + item.why + extra));
          done(ok);
        };
        opts.appendChild(b);
      });
      root.appendChild(opts);
    });
  }

  window.BWOS = window.BWOS || {};
  window.BWOS.store = store;
  window.BWOS.shuffle = shuffle;
  window.BWOS.stageQuiz = stageQuiz;
  window.BWOS.mcQuiz = mcQuiz;
  window.BWOS.markDone = function (lesson) { var d = store("done") || {}; d[lesson] = Date.now(); store("done", d); };
})();
