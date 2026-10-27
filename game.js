/* Baxter Way of Selling course: call simulator.
   BWOS.playCall(sheetsEl, gameEl, scenario, opts)
   scenario: {
     id, who (customer label), opening (scene-setting line), firstLine (customer's first words, optional),
     customer: {name, sub, fields: [[label, html], ...]}, product: {name, sub, fields: [...]},
     rounds: [{ stage, label, task, reply, options: [{ t, ok, tag, reply, coach }] }]
   }
   Wrong picks cost trust and show the customer's real reaction plus coaching. The learner keeps
   choosing until they find the line that advances the call. */
(function () {
  var STAGES = ["Connect", "Discover", "Diagnose", "Align", "Advance"];
  function h(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function sheetHTML(s, kind, cls) {
    var dl = s.fields.map(function (f) { return "<dt>" + f[0] + "</dt><dd>" + f[1] + "</dd>"; }).join("");
    return '<article class="sheet ' + cls + '"><div class="sheet-head"><div class="kind">' + kind + '</div><div class="name">' + s.name +
      '</div><div class="sub">' + s.sub + "</div></div><dl>" + dl + "</dl></article>";
  }
  function line(who, text, cls, why) {
    var d = h("div", "line " + (cls || ""));
    d.appendChild(h("div", "who", who));
    d.appendChild(h("div", "say", text));
    if (why) d.appendChild(h("div", "why", why));
    return d;
  }

  function playCall(sheetsEl, gameEl, sc, opts) {
    opts = opts || {};
    var shuffle = window.BWOS.shuffle;
    if (sheetsEl) sheetsEl.innerHTML = '<div class="deck">' + sheetHTML(sc.customer, "Customer fact sheet", "customer") + sheetHTML(sc.product, "Product fact sheet", "product") + "</div>";

    var r, trust, misses, log, lastReply;

    function bar() {
      var b = h("div", "game-bar");
      var mini = h("div", "steps-mini");
      var cur = r < sc.rounds.length ? STAGES.indexOf(sc.rounds[r].stage) : 5;
      STAGES.forEach(function (s, k) {
        var sp = h("span", k === cur ? "on" : (k < cur ? "past" : ""), (k + 1) + " " + s);
        mini.appendChild(sp);
      });
      b.appendChild(mini);
      var t = h("div", "trust");
      t.innerHTML = 'Trust <span class="trust-track"><span class="trust-fill" style="width:' + trust + '%"></span></span> <span style="font-variant-numeric:tabular-nums">' + trust + "</span>";
      b.appendChild(t);
      return b;
    }

    function briefing() {
      gameEl.innerHTML = "";
      gameEl.className = "game";
      gameEl.appendChild(h("p", "round-label", "Before the call"));
      gameEl.appendChild(h("p", "round-task", "Read both fact sheets. Every correct line in this call uses something on them."));
      gameEl.appendChild(h("p", "", sc.opening));
      var a = h("div", "actions");
      var go = h("button", "btn gold", "Start the call");
      go.type = "button";
      go.onclick = function () { r = 0; trust = 100; misses = []; log = []; lastReply = sc.firstLine || null; round(); };
      a.appendChild(go);
      gameEl.appendChild(a);
    }

    function sheetsPeek() {
      var d = h("details", "");
      d.style.margin = "4px 0 16px";
      d.appendChild(h("summary", "small", "Check the fact sheets"));
      var inner = h("div", "", '<div class="deck">' + sheetHTML(sc.customer, "Customer", "customer") + sheetHTML(sc.product, "Product", "product") + "</div>");
      d.appendChild(inner);
      return d;
    }

    function round() {
      gameEl.innerHTML = "";
      if (r >= sc.rounds.length) return debrief();
      var rd = sc.rounds[r];
      gameEl.appendChild(bar());
      gameEl.appendChild(h("p", "round-label", rd.stage + " · " + rd.label));
      if (lastReply) {
        var tr = h("div", "transcript");
        tr.appendChild(line(sc.who, lastReply, "cust"));
        gameEl.appendChild(tr);
      }
      gameEl.appendChild(h("p", "round-task", rd.task));
      gameEl.appendChild(sheetsPeek());
      var opts = h("div", "opts");
      var fb = h("div", "");
      shuffle(rd.options).forEach(function (o) {
        var b = h("button", "opt", "&ldquo;" + o.t + "&rdquo;");
        b.type = "button";
        b.onclick = function () {
          b.disabled = true;
          if (o.ok) {
            b.classList.add("right");
            Array.prototype.forEach.call(opts.children, function (c) { c.disabled = true; });
            log.push({ stage: rd.stage, label: rd.label, rep: o.t, reply: rd.reply });
            fb.innerHTML = "";
            fb.appendChild(h("div", "feedback ok", "<b>Advances the call</b>" + o.coach));
            var rep = h("div", "reply");
            rep.appendChild(line(sc.who, rd.reply, "cust"));
            fb.appendChild(rep);
            var a = h("div", "actions");
            var nx = h("button", "btn", r + 1 < sc.rounds.length ? "Continue the call" : "End the call and debrief");
            nx.type = "button";
            nx.onclick = function () { lastReply = rd.reply; r++; round(); gameEl.scrollIntoView({ block: "start", behavior: "smooth" }); };
            a.appendChild(nx);
            fb.appendChild(a);
            nx.focus({ preventScroll: true });
          } else {
            b.classList.add("wrong");
            trust = Math.max(0, trust - 15);
            misses.push({ stage: rd.stage, label: rd.label, t: o.t, tag: o.tag });
            fb.innerHTML = "";
            fb.appendChild(h("div", "feedback no", '<b>Stalls the call</b><span class="tag">' + o.tag + "</span> " + o.coach));
            var rep2 = h("div", "reply");
            rep2.appendChild(line(sc.who + " reacts", o.reply, "cust"));
            fb.appendChild(rep2);
            fb.appendChild(h("p", "small", "Pick again."));
            var fill = gameEl.querySelector(".trust-fill");
            if (fill) { fill.style.width = trust + "%"; fill.parentNode.nextElementSibling.textContent = trust; }
          }
        };
        opts.appendChild(b);
      });
      gameEl.appendChild(opts);
      gameEl.appendChild(fb);
    }

    function debrief() {
      gameEl.innerHTML = "";
      gameEl.appendChild(h("p", "round-label", "Debrief"));
      var verdict = trust >= 85 ? "Clean call. You earned every step." : trust >= 55 ? "You got there, with some repair work along the way." : "The customer stayed, but you spent a lot of trust getting there. Replay it.";
      gameEl.appendChild(h("div", "score-big", trust + " trust"));
      gameEl.appendChild(h("p", "small", verdict + " " + misses.length + " misstep" + (misses.length === 1 ? "" : "s") + "."));
      if (misses.length) {
        gameEl.appendChild(h("h3", "", "Where the call stalled"));
        var ul = h("ul", "");
        misses.forEach(function (m) { ul.appendChild(h("li", "", "<b>" + m.stage + ", " + m.label + ":</b> " + m.tag)); });
        gameEl.appendChild(ul);
      }
      gameEl.appendChild(h("h3", "", "The call, step by step"));
      var d = h("div", "debrief");
      var lastStage = "";
      log.forEach(function (e) {
        if (e.stage !== lastStage) { d.appendChild(h("div", "stagehead", e.stage)); lastStage = e.stage; }
        d.appendChild(line("You · " + e.label, e.rep, "do"));
        d.appendChild(line(sc.who, e.reply, "cust"));
      });
      gameEl.appendChild(d);
      try {
        var prev = window.BWOS.store("game:" + sc.id) || {};
        window.BWOS.store("game:" + sc.id, { best: Math.max(prev.best || 0, trust), at: Date.now() });
      } catch (e) {}
      if (opts.onEnd) opts.onEnd(trust);
      var a = h("div", "actions");
      var again = h("button", "btn ghost", "Replay this call");
      again.type = "button";
      again.onclick = briefing;
      a.appendChild(again);
      if (opts.extraAction) a.appendChild(opts.extraAction());
      gameEl.appendChild(a);
    }

    briefing();
  }

  window.BWOS = window.BWOS || {};
  window.BWOS.playCall = playCall;
})();
