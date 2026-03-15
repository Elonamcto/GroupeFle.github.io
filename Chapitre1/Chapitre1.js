/* =====================================================
   CHAPITRE 1 – Logique interactive
   Réponses tirées du document de l'enseignant
   ===================================================== */

/* ── RÉPONSES ──────────────────────────────────────── */

const answers = {

  /* ── VRAI / FAUX ──────────────────────────────── */

  "vf1q1": {
    correct: "vrai",
    feedback: "✅ VRAI — Snapchat fait bien partie des réseaux les plus utilisés par la Génération Z. Il occupe la 2ème place du classement avec 80 % des 16-25 ans inscrits sur la plateforme."
  },
  "vf1q2": {
    correct: "faux",
    feedback: "❌ FAUX — Facebook n'est plus le réseau préféré des 16-25 ans. Il a fortement reculé chez les jeunes, qui lui préfèrent désormais Instagram, Snapchat et TikTok."
  },
  "vf1q3": {
    correct: "faux",
    feedback: "❌ FAUX — Les jeunes utilisent les réseaux sociaux pour plusieurs raisons : communiquer avec leurs amis, mais aussi passer le temps, se divertir, et s'informer sur l'actualité."
  },
  "vf1q4": {
    correct: "faux",
    feedback: "❌ FAUX — La grande majorité des 16-25 ans passent plusieurs heures par jour sur les réseaux sociaux, bien au-delà d'une heure."
  },

  /* ── QCM ──────────────────────────────────────── */

  "qcm1q1": {
    correct: "B",
    feedback: "✅ Instagram est le réseau le plus populaire chez les 16-25 ans. C'est la plateforme n°1 de la Génération Z."
  },
  "qcm1q2": {
    correct: "A",
    feedback: "✅ Communiquer avec leurs amis est la raison principale d'utilisation des réseaux sociaux chez les jeunes. Viennent ensuite passer le temps et se divertir."
  },
  "qcm1q3": {
    correct: "A",
    feedback: "✅ 63 % des personnes ayant répondu au sondage utilisent TikTok. C'est la 3ème plateforme la plus utilisée chez les 16-25 ans."
  },

  /* ── QUESTIONS OUVERTES ───────────────────────── */

  "open8": {
    feedback: `💡 Réponse type : Les deux raisons principales pour lesquelles les jeunes utilisent les réseaux sociaux sont :
• Discuter et rester en contact avec leurs amis
• Passer le temps et se divertir`
  },
  "open9": {
    feedback: "💡 Réponse type : Les chiffres montrent que les réseaux sociaux sont très importants dans la vie des jeunes. Beaucoup de jeunes passent plusieurs heures par jour sur ces plateformes. Les plus utilisés sont Instagram, Snapchat et TikTok. Les jeunes utilisent les réseaux pour parler avec leurs amis, se divertir et s'informer. Cela montre que les habitudes numériques des jeunes continuent d'augmenter."
  },
  "open10": {
    feedback: "💡 Réponse type : Selon moi, certains réseaux sociaux deviennent moins populaires chez les jeunes parce que les tendances changent rapidement. Les jeunes préfèrent souvent de nouvelles applications plus modernes et plus amusantes. Par exemple, ils aiment les plateformes avec des vidéos courtes ou des contenus plus interactifs. Parfois aussi, quand beaucoup d'adultes utilisent un réseau, les jeunes préfèrent aller sur une autre plateforme."
  },
  "open11": {
    feedback: "💡 Réponse type : Oui, certains chiffres me surprennent. Par exemple, je trouve étonnant que beaucoup de jeunes passent plus de 3 heures par jour sur les réseaux sociaux. C'est beaucoup de temps dans une journée. Mais en même temps, ce n'est pas totalement surprenant, parce que les réseaux sociaux sont aujourd'hui très importants pour communiquer, se divertir et s'informer."
  },

  /* ── ANTICIPATION VIDÉO ───────────────────────── */

  "av1": {
    feedback: "💡 Il n'y a pas de bonne ou mauvaise réponse — c'est une estimation personnelle. Compare ta réponse avec les chiffres révélés dans la vidéo !"
  },
  "av2": {
    feedback: "💡 Les jeunes passent en moyenne entre 3 et 5 heures par jour sur leur téléphone. Regarde la vidéo pour voir ce que disent les jeunes interrogés !"
  },
  "av3": {
    correct: "B",
    feedback: "✅ Le temps d'écran désigne le temps total passé devant un appareil numérique : téléphone, tablette, ordinateur, télévision connectée, etc."
  },
  "av4": {
    feedback: "💡 Toutes les réponses sont valables — c'est une question sur tes habitudes personnelles ! Il n'y a pas de mauvaise réponse."
  },

  /* ── COMPRÉHENSION ORALE ──────────────────────── */

  "vid1": {
    correct: "faux",
    feedback: "❌ FAUX — Dans la vidéo, les jeunes sont souvent surpris lorsqu'ils découvrent leur temps d'écran réel. Ils sous-estimaient leur usage avant de consulter les statistiques de leur téléphone."
  },
  "vid2": {
    correct: "C",
    feedback: "✅ La majorité des jeunes interrogés ont eu leur premier téléphone entre 11 et 15 ans, souvent à l'entrée au collège."
  },
  "vid3": {
    correct: "A",
    feedback: "✅ Le temps d'écran montré dans la vidéo est une moyenne quotidienne, c'est-à-dire le nombre d'heures passées chaque jour sur le téléphone."
  },
  "vid6": {
    feedback: "💡 Réponse type : Selon moi, la procrastination est le fait de remettre à plus tard une tâche que l'on doit faire, par exemple les devoirs ou le travail. Au lieu de travailler, on fait d'autres activités comme regarder les réseaux sociaux ou utiliser son téléphone. La procrastination est souvent due aux distractions, au manque de motivation ou à la difficulté de la tâche. Les réseaux sociaux et le téléphone peuvent aussi l'augmenter, parce qu'ils sont très attractifs et prennent beaucoup de temps."
  },
  "vid7": {
    feedback: "💡 Réponse type : Selon moi, ce temps est un peu excessif. Passer entre 3 et 10 heures par jour sur le téléphone est très long. Cela peut réduire le temps pour les études, le sport ou les activités avec la famille et les amis. En plus, trop d'écrans peut aussi fatiguer les yeux et réduire la concentration. Cependant, le téléphone peut aussi être utile pour communiquer, apprendre et s'informer."
  },
  "vid8": {
    feedback: "💡 Réponse type : Il est difficile de réduire son temps d'écran parce que le téléphone et les réseaux sociaux sont très attractifs. Les applications envoient souvent des notifications, ce qui donne envie de regarder le téléphone. On peut aussi s'ennuyer sans écran et avoir l'habitude de l'utiliser tout le temps. Enfin, les écrans servent aussi à parler avec ses amis et se divertir, donc il est difficile de s'en passer."
  },
  "vid9": {
    feedback: "💡 Réponse type : Le message de la vidéo est de faire réfléchir sur l'utilisation du téléphone portable chez les jeunes. Elle montre que les jeunes passent beaucoup de temps sur leur téléphone, parfois sans s'en rendre compte. La vidéo explique aussi que cela peut faire perdre du temps pour d'autres activités importantes. Elle encourage donc à utiliser le téléphone de façon plus équilibrée et consciente."
  }
};

/* Réponses à cases à cocher */
const checkboxAnswers = {
  "vid4": {
    correct: ["B", "D"],
    feedback: "✅ Les réseaux sociaux cités dans la vidéo sont Snapchat (B) et Instagram (D)."
  },
  "vid5": {
    correct: ["A", "B"],
    feedback: "✅ Les deux activités principales sur leur téléphone sont écouter de la musique (A) et regarder des vidéos (B)."
  }
};

/* ── VALIDATION PAR QUESTION ────────────────────────── */

document.querySelectorAll(".btn-validate-q").forEach(btn => {
  btn.addEventListener("click", () => {
    const qKey = btn.dataset.q;
    const block = btn.closest(".question-block");
    const fbEl  = document.getElementById("fb-" + qKey);

    if (btn.classList.contains("done")) return;

    /* ── Checkbox ── */
    if (checkboxAnswers[qKey]) {
      const ca = checkboxAnswers[qKey];
      block.querySelectorAll("input[type=checkbox]").forEach(cb => {
        const lbl = cb.closest(".opt-label");
        lbl.classList.remove("correct", "incorrect");
        if (ca.correct.includes(cb.value)) lbl.classList.add("correct");
        else if (cb.checked)               lbl.classList.add("incorrect");
      });
      if (fbEl) {
        fbEl.innerHTML = ca.feedback;
        fbEl.className = "feedback visible info-fb";
      }
      markDone(btn);
      updateProgress();
      return;
    }

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
        fbEl.innerHTML = ans.feedback;
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
        fbEl.innerHTML = ans.feedback;
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
    wc1.style.color = (count >= 100 && count <= 130)
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