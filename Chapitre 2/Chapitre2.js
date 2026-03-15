/* =====================================================
   CHAPITRE 2 – Logique interactive
   Réponses tirées du document de l'enseignant
   ===================================================== */

/* ── RÉPONSES ──────────────────────────────────────── */

const answers = {

  /* ── QUESTIONS OUVERTES – Compréhension écrite ─── */

  "q1": {
    feedback: "💡 La source du document est le journal régional en ligne La Voix du Nord, comme l'indique le lien à la fin du texte."
  },
  "q2": {
    feedback: "💡 Hugo Décrypte, de son vrai nom Hugo Travers, est un youtubeur franco-britannique de 26 ans. Il a créé une chaîne d'actualité suivie par plus de 2 millions d'abonnés et dirige aujourd'hui une entreprise de 15 salariés."
  },
  "q3": {
    feedback: "💡 Il est journaliste et créateur de contenu spécialisé dans l'actualité et la politique sur les réseaux sociaux."
  },
  "q4": {
    feedback: "💡 Sa chaîne YouTube a été créée en 2015, car il constatait un manque d'informations politiques accessibles aux jeunes. Il voulait rendre l'actualité plus compréhensible pour eux."
  },
  "q5": {
    feedback: "💡 À ce moment-là, il venait d'entrer à Sciences Po Paris après avoir obtenu son baccalauréat économique et social."
  },
  "q6": {
    feedback: "💡 Il informe à travers des vidéos simples, claires et percutantes publiées sur YouTube et d'autres réseaux sociaux comme TikTok, Instagram ou Twitch."
  },
  "q7": {
    feedback: "💡 Il s'adresse principalement aux jeunes."
  },
  "q8": {
    feedback: "💡 Il traite surtout de politique, mais aussi de sujets variés comme les ravages de la drogue aux États-Unis ou la guerre en Ukraine."
  },
  "q9": {
    feedback: "💡 En mars 2019, il a interviewé Marine Le Pen (présidente du parti du Rassemblement National)."
  },
  "q10": {
    feedback: "💡 Il a grandi dans un milieu aisé et éduqué, dans un cadre familial serein, avec des parents travaillant dans les ressources humaines et le marketing."
  },

  /* ── VRAI / FAUX ────────────────────────────────── */

  "vf1": {
    correct: "vrai",
    feedback: "✅ VRAI — Le texte précise qu'il vient d'un milieu éduqué « avec des grands-parents instituteurs ». Instituteur est un synonyme de maître d'école."
  },
  "vf2": {
    correct: "vrai",
    feedback: "✅ VRAI — Il a réalisé un entretien en direct avec le président de la République en mai 2019."
  },
  "vf3": {
    correct: "vrai",
    feedback: "✅ VRAI — Le texte indique : « On fabriquait aussi un journal sur Word qu'on allait vendre dans la rue »."
  },
  "vf4": {
    correct: "faux",
    feedback: "❌ FAUX — Son frère le filmait en train de faire un journal télévisé (JT), pas un sketch. La phrase exacte est : « À 11 ans, mon grand frère me filmait en train de faire un JT. »"
  },

  /* ── COMPRÉHENSION ORALE – Première écoute ─────── */

  "co1": {
    feedback: "💡 Il s'agit d'un document audio de type reportage ou émission de radio / télévision traitant d'une loi sur les réseaux sociaux."
  },
  "co2": {
    feedback: "💡 L'action se déroule en France, dans le contexte du vote de l'Assemblée nationale sur la loi encadrant l'accès des moins de 15 ans aux réseaux sociaux."
  },

  /* ── QCM – Compréhension orale ──────────────────── */

  "co3": {
    correct: "B",
    feedback: "✅ C'est l'Assemblée nationale qui a voté cette loi en France."
  },
  "co4": {
    correct: "A",
    feedback: "✅ L'objectif principal est de protéger la santé mentale des jeunes, souvent fragilisée par un usage excessif des réseaux sociaux."
  },
  "co5": {
    correct: "A",
    feedback: "✅ Le cyberharcèlement est le problème le plus souvent cité dans le débat sur cette loi."
  },
  "co6": {
    correct: "A",
    feedback: "✅ Cette loi peut être difficile à appliquer parce que les jeunes peuvent mentir sur leur âge pour contourner l'interdiction."
  },
  "co7": {
    correct: "A",
    feedback: "✅ L'argument avancé contre cette interdiction est que cela limite la liberté d'expression des jeunes."
  },
  "co8": {
    correct: "B",
    feedback: "✅ Après le vote de l'Assemblée nationale, le Sénat doit encore examiner le texte avant que la loi soit définitivement adoptée."
  },
  "co9": {
    correct: "A",
    feedback: "✅ Le but principal de cette loi est de protéger les mineurs des effets négatifs des réseaux sociaux."
  }
};

/* ── VALIDATION PAR QUESTION ────────────────────────── */

document.querySelectorAll(".btn-validate-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const qKey = btn.dataset.q;
    const block = btn.closest(".question-block");
    const fbEl  = document.getElementById("fb-" + qKey);

    if (btn.classList.contains("done")) return;

    const ans = answers[qKey];

    /* ── Radio (QCM / Vrai-Faux) ── */
    if (ans && ans.correct) {
      const radios = block.querySelectorAll(`input[name="${qKey}"]`);
      const chosen = block.querySelector(`input[name="${qKey}"]:checked`);

      radios.forEach(r => {
        const lbl = r.closest(".opt-label");
        lbl.classList.remove("correct", "incorrect");
        if (r.value === ans.correct) lbl.classList.add("correct");
        else if (r.checked)          lbl.classList.add("incorrect");
      });

      if (fbEl) {
        fbEl.textContent = ans.feedback;
        const isCorrect = chosen && chosen.value === ans.correct;
        fbEl.className = "feedback visible " + (isCorrect ? "correct-fb" : "incorrect-fb");
      }
      markDone(btn);
      updateProgress();
      return;
    }

    /* ── Question ouverte ── */
    if (ans && ans.feedback) {
      if (fbEl) {
        fbEl.textContent = ans.feedback;
        fbEl.className = "feedback visible info-fb";
      }
      markDone(btn);
      updateProgress();
    }
  });
});

/* ── MARQUER VALIDÉ ─────────────────────────────────── */
function markDone(btn) {
  btn.textContent = "Validé ✓";
  btn.classList.add("done");
}

/* ── BARRE DE PROGRESSION ───────────────────────────── */
function updateProgress() {
  const total = document.querySelectorAll(".btn-validate-q").length;
  const done  = document.querySelectorAll(".btn-validate-q.done").length;
  document.getElementById("progress-fill").style.width =
    (total > 0 ? (done / total) * 100 : 0) + "%";
}

/* ── COMPTEUR DE MOTS ───────────────────────────────── */
const writing1 = document.getElementById("writing1");
const wc1      = document.getElementById("wc1");

if (writing1 && wc1) {
  writing1.addEventListener("input", () => {
    const count = writing1.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    wc1.textContent = count;
    wc1.style.color = (count >= 230 && count <= 270)
      ? "var(--success)"
      : "var(--accent)";
  });
}

/* ── ENREGISTREUR AUDIO ─────────────────────────────── */
const recStart  = document.getElementById("rec-start");
const recStop   = document.getElementById("rec-stop");
const audioEl   = document.getElementById("audio-playback");
const statusTxt = document.getElementById("rec-status-text");

let mediaRecorder = null;
let chunks = [];

if (recStart && recStop) {
  recStart.addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      chunks = [];

      mediaRecorder.addEventListener("dataavailable", e => {
        if (e.data.size > 0) chunks.push(e.data);
      });
      mediaRecorder.addEventListener("stop", () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        audioEl.src = URL.createObjectURL(blob);
        audioEl.style.display = "block";
        statusTxt.textContent = "terminé ✓";
        statusTxt.style.color = "var(--success)";
        stream.getTracks().forEach(t => t.stop());
      });

      mediaRecorder.start();
      recStart.disabled = true;
      recStop.disabled  = false;
      statusTxt.textContent = "enregistrement en cours…";
      statusTxt.style.color = "var(--danger)";

    } catch (err) {
      statusTxt.textContent = "microphone non disponible";
      console.warn("Microphone error:", err);
    }
  });

  recStop.addEventListener("click", () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      recStart.disabled = false;
      recStop.disabled  = true;
    }
  });
}

/* ── SCROLL REVEAL ──────────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i * 0.04) + "s";
  observer.observe(el);
});