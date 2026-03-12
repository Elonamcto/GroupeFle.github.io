const answers = {
  q1:  "La source est le journal régional en ligne La Voix du Nord.",
  q2:  "Hugo Décrypte, de son vrai nom Hugo Travers, est un youtubeur franco-britannique qui traite de l'actualité.",
  q3:  "Il est journaliste et créateur de contenu sur les réseaux sociaux.",
  q4:  "Sa chaîne YouTube a été créée en 2015 pour rendre l'actualité plus compréhensible aux jeunes.",
  q5:  "Il venait d'entrer à Sciences Po Paris.",
  q6:  "Il informe grâce à des vidéos simples publiées sur YouTube, TikTok ou Instagram.",
  q7:  "Il s'adresse principalement aux jeunes.",
  q8:  "Il parle surtout de politique mais aussi de sujets d'actualité.",
  q9:  "Il a interviewé Marine Le Pen.",
  q10: "Il a grandi dans un milieu familial aisé et éduqué.",
  q11: "VRAI — le texte indique que ses grands-parents étaient instituteurs.",
  q12: "VRAI — il a interviewé le président de la République.",
  q13: "VRAI — enfant il fabriquait un journal qu'il vendait dans la rue.",
  q14: "FAUX — son frère le filmait en train de faire un journal télévisé."
};

/* ─── Validation par section ─────────────────────────── */
document.querySelectorAll(".btn-validate").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");
    const secElem = document.getElementById(section);

    secElem.querySelectorAll(".explanation").forEach(exp => {
      const id = exp.id.replace("exp-", "");
      if (answers[id]) exp.textContent = answers[id];
    });

    // Animation du bouton
    btn.textContent = "Validé ✓";
    btn.style.background = "#16a34a";
    setTimeout(() => {
      btn.textContent = "Valider cette partie";
      btn.style.background = "";
    }, 2500);

    updateProgress();
  });
});

/* ─── Barre de progression ────────────────────────────── */
function updateProgress() {
  const sections = document.querySelectorAll(".quiz-section");
  let done = 0;
  sections.forEach(sec => {
    const exps = sec.querySelectorAll(".explanation");
    if (Array.from(exps).some(e => e.textContent.trim().length > 0)) done++;
  });
  const pct = (done / sections.length) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";
}

/* ─── Compteur de mots ────────────────────────────────── */
const redaction = document.querySelector(".redaction");
const wordCountEl = document.getElementById("word-count");

if (redaction && wordCountEl) {
  redaction.addEventListener("input", () => {
    const words = redaction.value.trim().split(/\s+/).filter(w => w.length > 0);
    const count = words.length;
    wordCountEl.textContent = count;
    wordCountEl.style.color = count >= 250 ? "#16a34a" : "var(--accent)";
  });
}

/* ─── Enregistreur audio ──────────────────────────────── */
const startBtn  = document.getElementById("startRecord");
const stopBtn   = document.getElementById("stopRecord");
const audio     = document.getElementById("audioPlayback");
const statusEl  = document.getElementById("record-status");

let mediaRecorder = null;
let audioChunks   = [];

function setStatus(text, color = "rgba(255,255,255,0.85)") {
  if (statusEl) {
    const span = statusEl.querySelector("span");
    if (span) { span.textContent = text; span.style.color = color; }
  }
}

if (startBtn && stopBtn) {
  startBtn.addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.addEventListener("dataavailable", e => {
        if (e.data.size > 0) audioChunks.push(e.data);
      });

      mediaRecorder.addEventListener("stop", () => {
        const blob = new Blob(audioChunks, { type: "audio/webm" });
        audio.src = URL.createObjectURL(blob);
        setStatus("enregistrement terminé ✓", "#86efac");
        stream.getTracks().forEach(t => t.stop());
      });

      mediaRecorder.start();
      startBtn.disabled = true;
      stopBtn.disabled  = false;
      setStatus("enregistrement en cours…", "#fca5a5");

    } catch (err) {
      setStatus("microphone non disponible", "#fca5a5");
      console.warn("Microphone error:", err);
    }
  });

  stopBtn.addEventListener("click", () => {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      startBtn.disabled = false;
      stopBtn.disabled  = true;
    }
  });
}