/* =====================================================
   CHAPITRE 3 – Logique interactive
   Réponses tirées du document de l'enseignant
   ===================================================== */

/* ── RÉPONSES ──────────────────────────────────────── */

const answers = {

  /* ── VRAI / FAUX – Article influenceurs ────────── */

  "vf1q1": {
    correct: "faux",
    feedback: "❌ FAUX — Les influenceurs mentionnés ne pensent pas que les réseaux sociaux sont toujours positifs. Au contraire, ils mettent en garde leurs abonnés contre un usage excessif et encouragent la déconnexion."
  },
  "vf1q2": {
    correct: "vrai",
    feedback: "✅ VRAI — Inoxtag et Lena Situations gagnent effectivement leur vie grâce aux réseaux sociaux. C'est précisément ce qui crée le paradoxe de leur message."
  },
  "vf1q3": {
    correct: "faux",
    feedback: "❌ FAUX — Ils encouragent au contraire leurs abonnés à passer moins de temps en ligne et à se déconnecter pour préserver leur bien-être."
  },
  "vf1q4": {
    correct: "vrai",
    feedback: "✅ VRAI — Il existe bien un paradoxe : ces influenceurs utilisent les réseaux sociaux (sur lesquels ils gagnent leur vie) pour dire à leurs abonnés de moins les utiliser. Leur message de déconnexion est diffusé via les plateformes mêmes dont ils veulent réduire l'usage."
  },

  /* ── RÉPONSES COURTES ───────────────────────────── */

  "open5": {
    feedback: "💡 Les 2 influenceurs mentionnés sont Lena Situations et Inoxtag."
  },
  "open6": {
    feedback: "💡 Ils conseillent à leurs abonnés de passer moins de temps sur les écrans."
  },

  /* ── QCM – Analyser ─────────────────────────────── */

  "qcm1q1": {
    correct: "B",
    feedback: "✅ Leur message peut sembler surprenant parce qu'ils utilisent les réseaux sociaux pour dire à leurs abonnés de moins les utiliser. C'est là le cœur du paradoxe."
  },
  "qcm1q2": {
    correct: "A",
    feedback: "✅ Les effets négatifs d'un usage excessif des écrans sont de se sentir très fatigué et d'avoir des problèmes de concentration. Les réseaux sociaux peuvent aussi nuire au sommeil et à la santé mentale."
  },

  /* ── QUESTIONS OUVERTES – Interpréter ──────────── */

  "open9": {
    feedback: `💡 Réponses possibles :
• Faire une pause numérique et annoncer un week-end sans réseaux sociaux
• Limiter son temps d'écran et partager ses statistiques avec ses abonnés
• Montrer des activités hors ligne (sport, lecture, dessin, promenade...)
• Ne pas publier pendant certaines heures (le soir surtout)
• Parler ouvertement des effets négatifs d'un usage excessif des réseaux sociaux
• Encourager ses abonnés à se fixer des limites et à prendre soin de leur santé mentale
• Lancer un défi collectif à ses abonnés comme « 24h sans écran »`
  },
  "open10": {
    feedback: "💡 Réponse type : Dans ce texte, on parle de paradoxe parce que les influenceurs demandent à leurs abonnés de passer moins de temps sur les réseaux sociaux, alors que leur travail consiste à créer du contenu sur ces plateformes. Ils vivent donc grâce à l'attention que les abonnés leur donnent, tout en encourageant la déconnexion."
  },
  "open11": {
    feedback: "💡 Réponse libre — l'essentiel est d'argumenter. Tu peux dire que leur message est crédible car ils donnent l'exemple, ou au contraire qu'il manque de sincérité puisqu'ils continuent à poster du contenu. Les deux positions sont acceptées si elles sont justifiées."
  },

  /* ── ANTICIPATION VIDÉO ─────────────────────────── */

  "ant1": {
    feedback: "💡 Réponse type : Le harcèlement est une forme de violence. C’est lorsqu’une personne se comporte régulièrement de manière méchante, humiliante оu menaçante avec une autre․"
  },
  "ant2": {
    correct: "B",
    feedback: "✅"
  },

  /* ── COMPRENDRE LES FAITS – Vidéo ──────────────── */

  "vid3": {
    correct: "C",
    feedback: "✅ Laura reçoit des messages méchants. Le court-métrage montre comment ces messages blessants répétés affectent profondément sa vie quotidienne."
  },
  "vid4": {
    correct: "B",
    feedback: "✅ Les attaques contre Laura se passent sur Internet. Le cyberharcèlement dépasse le cadre scolaire et suit la victime jusque chez elle, à toute heure."
  },
  "vid5": {
    correct: "faux",
    feedback: "❌ FAUX — Les personnes qui harcèlent Laura ne voient pas immédiatement ses réactions. C'est l'une des raisons pour lesquelles le cyberharcèlement est particulièrement cruel : les harceleurs ne mesurent pas la douleur qu'ils causent."
  },
  "vid6": {
    feedback: `💡 Réponse : Laura se sent blessée et humiliée.
Autres adjectifs acceptés : triste, anxieuse, inquiète, découragée, angoissée, stressée, honteuse, isolée, en colère, perdue, fatiguée, effrayée.`
  },

  /* ── COMPRENDRE LE SENS ─────────────────────────── */

  "vid8": {
    feedback: `💡 Réponses possibles :
• Parce qu'elles peuvent rester anonymes
• Parce qu'elles ne voient pas la réaction de la victime
• Parce qu'elles se sentent protégées par l'écran
• Parce qu'elles cherchent à impressionner les autres`
  },
  "vid9": {
    feedback: "💡 Réponse type : Le message principal de la vidéo est que le harcèlement peut avoir de graves conséquences et qu'il faut en parler."
  },

  /* ── RÉFLÉCHIR ──────────────────────────────────── */

  "vid10": {
    feedback: "💡 Réponse type : Une personne victime de cyberharcèlement ne doit pas rester seule. Elle ne doit pas répondre aux messages blessants. Elle devrait garder des preuves afin d'en parler à un adulte de confiance."
  },
  "vid11": {
    feedback: "💡 Réponse type : Si j'étais un ami de Laura, je commencerais par l'écouter et la soutenir pour qu'elle ne se sente pas seule. Je l'encouragerais à en parler à un adulte de confiance et à garder des preuves des messages. Je lui dirais aussi de bloquer et de signaler la personne qui la harcèle."
  }
};

/* Questions à cases à cocher (plusieurs bonnes réponses) */
const checkboxAnswers = {
  "vid7": {
    correct: ["A", "B"],
    feedback: "✅ Le cyberharcèlement est difficile à supporter parce qu'après l'école, il peut continuer à la maison (A), et parce que les victimes peuvent se sentir isolées (B). La réponse C est fausse : le cyberharcèlement ne règle pas les conflits."
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
        fbEl.textContent = ca.feedback;
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