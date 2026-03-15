/* =====================================================
   ÉVALUATION – Logique interactive
   ===================================================== */

/* ── CONFIGURATION ──────────────────────────────────── */

const MAX_SCORES = { ecrit: 22, oral: 26 }; // max = nb critères × 2

const RESULTS = {
  ecrit: [
    { min: 90, emoji: "🏆", title: "Excellent travail !", msg: "Tu maîtrises très bien l'expression écrite. Continue comme ça, tu es sur la bonne voie !" },
    { min: 65, emoji: "🌟", title: "Très bien !", msg: "Tu as fait de bons progrès. Quelques points à peaufiner et tu seras au top !" },
    { min: 40, emoji: "💪", title: "Bon début !", msg: "Tu es en progression. Relis les critères marqués en jaune et rouge pour t'améliorer." },
    { min:  0, emoji: "📚", title: "Continue à travailler !", msg: "Ce n'est que le début ! Regarde les points à améliorer et retente l'activité." },
  ],
  oral: [
    { min: 90, emoji: "🎤", title: "Superbe expression orale !", msg: "Ta prise de parole est excellente. Tu parles avec clarté et naturel. Bravo !" },
    { min: 65, emoji: "🌟", title: "Très bien !", msg: "Tu t'exprimes bien à l'oral. Continue à pratiquer pour gagner encore en fluidité !" },
    { min: 40, emoji: "💪", title: "En progression !", msg: "Tu fais des efforts à l'oral. Réécoute-toi et travaille les points en jaune et rouge." },
    { min:  0, emoji: "🎯", title: "Pratique, pratique !", msg: "L'oral demande de la pratique. Re-enregistre-toi et compare avec la première fois !" },
  ],
};

/* ── ÉTAT ───────────────────────────────────────────── */

const state = { ecrit: [], oral: [] };

/* ── TABS ───────────────────────────────────────────── */

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    triggerReveal();
  });
});

/* ── CRITÈRES ───────────────────────────────────────── */

document.querySelectorAll('.criteria-list').forEach(list => {
  const group = list.dataset.group;

  list.querySelectorAll('.criterion').forEach((criterion, idx) => {
    // Initialise l'état
    if (!state[group][idx]) state[group].push(null);

    criterion.querySelectorAll('.crit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.dataset.val);

        // Retire les classes sélectionnées
        criterion.querySelectorAll('.crit-btn').forEach(b => {
          b.classList.remove('selected-oui', 'selected-presque', 'selected-non');
        });
        criterion.classList.remove('answered-oui', 'answered-presque', 'answered-non');

        // Applique la nouvelle sélection
        if (val === 2) {
          btn.classList.add('selected-oui');
          criterion.classList.add('answered-oui');
        } else if (val === 1) {
          btn.classList.add('selected-presque');
          criterion.classList.add('answered-presque');
        } else {
          btn.classList.add('selected-non');
          criterion.classList.add('answered-non');
        }

        // Met à jour l'état global
        updateScore(group);
      });
    });
  });
});

/* ── SCORE ──────────────────────────────────────────── */

function updateScore(group) {
  const allCriteria = document.querySelectorAll(`#tab-${group} .criterion`);
  let score = 0;
  let answered = 0;
  const total = allCriteria.length;

  allCriteria.forEach(criterion => {
    const selected = criterion.querySelector('.crit-btn.selected-oui, .crit-btn.selected-presque, .crit-btn.selected-non');
    if (selected) {
      answered++;
      score += parseInt(selected.dataset.val);
    }
  });

  const maxScore = total * 2;
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  // Barre de progression
  document.getElementById(`score-bar-${group}`).style.width = pct + '%';

  // Texte score
  const scoreTxt = document.getElementById(`score-text-${group}`);
  scoreTxt.textContent = answered + ' / ' + total + ' critères renseignés · ' + pct + '% de réussite';

  // Couleur barre selon score
  const bar = document.getElementById(`score-bar-${group}`);
  if (pct >= 80) bar.style.background = 'linear-gradient(90deg, #22c55e, #4ade80)';
  else if (pct >= 50) bar.style.background = 'linear-gradient(90deg, #eab308, #fde047)';
  else bar.style.background = 'linear-gradient(90deg, #6c63ff, #22d3ee)';

  // Affiche le résultat quand tout est renseigné
  if (answered === total) {
    showResult(group, pct);
  } else {
    document.getElementById(`result-${group}`).style.display = 'none';
  }
}

/* ── RÉSULTAT FINAL ─────────────────────────────────── */

function showResult(group, pct) {
  const results = RESULTS[group];
  let result = results[results.length - 1];
  for (const r of results) {
    if (pct >= r.min) { result = r; break; }
  }

  const card = document.getElementById(`result-${group}`);
  document.getElementById(`result-emoji-${group}`).textContent = result.emoji;
  document.getElementById(`result-title-${group}`).textContent = result.title;
  document.getElementById(`result-msg-${group}`).textContent = result.msg;

  card.style.display = 'block';

  // Scroll vers le résultat
  setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
}

/* ── RESET ──────────────────────────────────────────── */

document.getElementById('btn-reset').addEventListener('click', () => {
  // Remet tous les boutons
  document.querySelectorAll('.crit-btn').forEach(btn => {
    btn.classList.remove('selected-oui', 'selected-presque', 'selected-non');
  });
  document.querySelectorAll('.criterion').forEach(c => {
    c.classList.remove('answered-oui', 'answered-presque', 'answered-non');
  });

  // Vide les textareas
  document.querySelectorAll('.bilan-field textarea').forEach(t => t.value = '');

  // Remet les barres à 0
  ['ecrit', 'oral'].forEach(group => {
    document.getElementById(`score-bar-${group}`).style.width = '0%';
    document.getElementById(`score-bar-${group}`).style.background = 'linear-gradient(90deg, #6c63ff, #22d3ee)';
    document.getElementById(`score-text-${group}`).textContent = '0 critère renseigné';
    document.getElementById(`result-${group}`).style.display = 'none';
  });

  // Revient en haut
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── NAVBAR DROPDOWN ────────────────────────────────── */

document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    toggle.closest('.nav-dropdown').classList.toggle('open');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown.open')
    .forEach(dd => dd.classList.remove('open'));
});

/* ── SCROLL REVEAL ──────────────────────────────────── */

function triggerReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.04) + 's';
    observer.observe(el);
  });
}

triggerReveal();