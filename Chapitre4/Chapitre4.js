/* =====================================================
   CHAPITRE 4 – Logique interactive
   Réponses tirées des documents de l'enseignant
   ===================================================== */

/* ── RÉPONSES ──────────────────────────────────────── */

const answers = {

  /* ── PARTIE 1 – Compréhension orale A (Première écoute) ─── */

  "co1": {
    feedback: "💡 Ce document est une vidéo tirée du site yapaka.be, une plateforme de ressources sur la parentalité et le développement des jeunes."
  },
  "co2": {
    feedback: "💡 Le thème principal est l'usage des écrans, notamment des smartphones, et l'importance d'offrir aux adolescents des moments et des espaces sans connexion."
  },
  "co3": {
    feedback: "💡 La personne qui parle est docteure en médecine et neurologue."
  },

  /* ── PARTIE 1 – QCM B (Deuxième écoute) ─── */

  "qcm1": {
    correct: "B",
    feedback: "✅ B – Il est important de leur montrer que vivre une partie de sa vie sans connexion est possible et même agréable."
  },
  "qcm2": {
    correct: "B",
    feedback: "✅ B – L'école peut être exemplaire en interdisant l'usage des smartphones au sein de l'établissement scolaire."
  },
  "qcm3": {
    correct: ["A", "B"],
    feedback: "✅ A et B – Les espaces publics permettent aux adolescents de se retrouver (A) et libèrent l'esprit (B)."
  },
  "qcm4": {
    correct: ["B", "C"],
    feedback: "✅ B et C – Les espaces proposés sont des aires de jeu (B) et des espaces verts sécurisés (C). Les terrains de sport sont aussi mentionnés mais ce n'était pas une option proposée."
  },

  /* ── PARTIE 1 – Vrai ou Faux ─── */

  "vf1": {
    correct: "faux",
    feedback: "❌ FAUX – La vidéo mentionne explicitement les enjeux environnementaux et humanitaires liés à la fabrication des smartphones : extraction des métaux, consommation d'énergie et d'eau."
  },
  "vf2": {
    correct: "vrai",
    feedback: "✅ VRAI – La vidéo précise que l'interdiction des smartphones est déjà explorée dans différents établissements et dans différents pays."
  },

  /* ── PARTIE 2 – Compréhension écrite A ─── */

  "p2q1": {
    feedback: "💡 La source est le site canadien lacliquedescomm.ca, qui propose des conseils en communication pour les organismes à but non lucratif (OBNL)."
  },
  "p2q2": {
    feedback: "💡 Le thème principal est la distinction entre un leader jeunesse et un influenceur(se), et l'intérêt pour les OBNL de suivre les leaders jeunesse sur les réseaux sociaux."
  },
  "p2q3": {
    feedback: "💡 Plusieurs titres sont possibles. Par exemple : « Leaders jeunesse vs influenceurs : qui sont-ils et pourquoi les suivre ? » ou « Pourquoi les OBNL devraient-ils suivre les leaders jeunesse ? »"
  }
};

/* ── ORDRE CORRECT – Remise en ordre ────────────────── */
// sentence ID → position correcte dans le texte
const correctOrder = {
  "3": 1,   // Un(e) leader jeunesse exerce une influence positive...
  "6": 2,   // L'influenceur(se) exerce une influence principalement commerciale...
  "4": 3,   // Les OBNL ont avantage à suivre les leaders jeunesse...
  "5": 4,   // Les leaders jeunesse ont une influence significative...
  "1": 5,   // Suivre les leaders jeunesse aide un OBNL...
  "7": 6,   // Il est essentiel d'identifier les personnalités...
  "2": 7    // Observer ces leaders permet de mieux saisir...
};

/* ── VALIDATION PAR QUESTION (open + radio) ─────────── */

document.querySelectorAll(".btn-validate-q").forEach(btn => {
  if (btn.id === "btn-validate-reorder") return; // handled separately

  btn.addEventListener("click", () => {
    const qKey = btn.dataset.q;
    const block = btn.closest(".question-block");
    const fbEl  = document.getElementById("fb-" + qKey);

    if (btn.classList.contains("done")) return;

    const ans = answers[qKey];
    if (!ans) return;

    /* ── Multiple checkbox (2 réponses) ── */
    if (Array.isArray(ans.correct)) {
      const checkboxes = block.querySelectorAll(`input[name="${qKey}"]`);
      const checked = Array.from(checkboxes).filter(c => c.checked).map(c => c.value);
      const isCorrect = ans.correct.every(v => checked.includes(v)) && checked.length === ans.correct.length;

      checkboxes.forEach(cb => {
        const lbl = cb.closest(".opt-label");
        lbl.classList.remove("correct", "incorrect");
        if (ans.correct.includes(cb.value)) lbl.classList.add("correct");
        else if (cb.checked)                lbl.classList.add("incorrect");
      });

      if (fbEl) {
        fbEl.textContent = ans.feedback;
        fbEl.className = "feedback visible " + (isCorrect ? "correct-fb" : "incorrect-fb");
      }
      markDone(btn);
      updateProgress();
      return;
    }

    /* ── Radio (single choice / vrai-faux) ── */
    if (ans.correct) {
      const radios = block.querySelectorAll(`input[name="${qKey}"]`);
      const chosen = block.querySelector(`input[name="${qKey}"]:checked`);

      radios.forEach(r => {
        const lbl = r.closest(".opt-label");
        lbl.classList.remove("correct", "incorrect");
        if (r.value === ans.correct) lbl.classList.add("correct");
        else if (r.checked)          lbl.classList.add("incorrect");
      });

      if (fbEl) {
        const isCorrect = chosen && chosen.value === ans.correct;
        fbEl.textContent = ans.feedback;
        fbEl.className = "feedback visible " + (isCorrect ? "correct-fb" : "incorrect-fb");
      }
      markDone(btn);
      updateProgress();
      return;
    }

    /* ── Question ouverte ── */
    if (ans.feedback) {
      if (fbEl) {
        fbEl.textContent = ans.feedback;
        fbEl.className = "feedback visible info-fb";
      }
      markDone(btn);
      updateProgress();
    }
  });
});

/* ── VALIDATION REMISE EN ORDRE ─────────────────────── */

const btnReorder = document.getElementById("btn-validate-reorder");
if (btnReorder) {
  btnReorder.addEventListener("click", () => {
    if (btnReorder.classList.contains("done")) return;

    const items    = document.querySelectorAll(".reorder-item");
    const fbEl     = document.getElementById("fb-reorder");
    let allCorrect = true;
    let allFilled  = true;

    items.forEach(item => {
      const sentenceId = item.dataset.sentence;
      const select     = item.querySelector(".rank-select");
      const chosen     = select ? select.value : "";

      if (!chosen) { allFilled = false; return; }

      item.classList.remove("correct-item", "incorrect-item");
      if (parseInt(chosen) === correctOrder[sentenceId]) {
        item.classList.add("correct-item");
      } else {
        item.classList.add("incorrect-item");
        allCorrect = false;
      }
    });

    if (!allFilled) {
      if (fbEl) {
        fbEl.textContent = "⚠️ Veuillez attribuer un numéro à chaque phrase avant de valider.";
        fbEl.className = "feedback visible incorrect-fb";
      }
      return;
    }

    if (fbEl) {
      if (allCorrect) {
        fbEl.textContent = "✅ Parfait ! Toutes les phrases sont dans le bon ordre.\n\nOrdre correct :\n1. Un(e) leader jeunesse exerce une influence positive…\n2. L'influenceur(se) exerce une influence principalement commerciale…\n3. Les OBNL ont avantage à suivre les leaders jeunesse…\n4. Les leaders jeunesse ont une influence significative…\n5. Suivre les leaders jeunesse aide un OBNL…\n6. Il est essentiel d'identifier les personnalités…\n7. Observer ces leaders permet de mieux saisir…";
        fbEl.className = "feedback visible correct-fb";
      } else {
        fbEl.textContent = "❌ Certaines phrases ne sont pas au bon endroit. Les phrases surlignées en rouge sont incorrectes. Vérifiez à nouveau !\n\nRappel de l'ordre correct :\n1→ Phrase 3  ·  2→ Phrase 6  ·  3→ Phrase 4  ·  4→ Phrase 5  ·  5→ Phrase 1  ·  6→ Phrase 7  ·  7→ Phrase 2";
        fbEl.className = "feedback visible incorrect-fb";
      }
    }

    markDone(btnReorder);
    updateProgress();
  });
}

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
    wc1.style.color = (count >= 85 && count <= 115)
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