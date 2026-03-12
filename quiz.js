const answers = {
  q1: "Réponse attendue : Faux. Les influenceurs reconnaissent aussi les effets négatifs des réseaux.",
  q2: "Réponse attendue : Vrai. Leur travail dépend des réseaux sociaux.",
  q3: "Réponse attendue : Faux. Ils encouragent plutôt leurs abonnés à réduire leur temps en ligne.",
  q4: "Réponse attendue : Vrai. Le paradoxe est qu'ils utilisent les réseaux pour encourager la déconnexion.",
  q5: "Réponse attendue : Inoxtag et Léna Situations.",
  q6: "Réponse attendue : Ils encouragent leurs abonnés à se déconnecter et à réduire leur temps sur les réseaux.",
  q7: "Réponse attendue : B — Parce qu'ils utilisent les réseaux pour dire de moins les utiliser.",
  q8: "Réponse attendue : A — Fatigue et problèmes de concentration.",
  q9: "Réponse possible : faire une pause sur les réseaux, arrêter de publier quelques jours, promouvoir un week-end sans téléphone.",
  q10: "Réponse attendue : Le paradoxe vient du fait que les influenceurs utilisent les réseaux pour dire qu'il faut parfois s'en éloigner.",
  q11: "Réponse personnelle : l'élève doit donner son opinion avec un argument.",
  q12: "Réponse possible : message encourageant à passer un week-end sans téléphone, profiter de la nature ou des amis.",

  debat: `Exemple de rédaction possible :

Aujourd'hui, les réseaux sociaux occupent une grande place dans notre vie quotidienne. Beaucoup de personnes passent plusieurs heures par jour sur leur téléphone.

À mon avis, les influenceurs ont en partie raison d'encourager la déconnexion. Les réseaux sociaux peuvent être utiles pour communiquer et partager des informations, mais ils peuvent aussi provoquer de la fatigue et du stress.

Je pense qu'il est important de trouver un équilibre. Utiliser les réseaux peut être positif, mais il faut aussi savoir faire des pauses pour profiter de la vie réelle.

Exemple de post Instagram :

🌿 Et si on faisait une pause ?

Ce week-end, essayons de passer moins de temps sur nos écrans.
Profitez du temps avec vos amis, votre famille ou dans la nature.
Parfois, la meilleure connexion… c'est la vraie vie.`
};

// Validation par section
document.querySelectorAll(".btn-validate").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.getAttribute("data-section");
    const secElem = document.getElementById(section);

    secElem.querySelectorAll(".explanation").forEach(exp => {
      const id = exp.id.replace("exp-", "");
      if (answers[id]) {
        exp.textContent = answers[id];
      }
    });

    if (section === "debat") {
      const debatExp = document.getElementById("exp-debat");
      if (debatExp) debatExp.textContent = answers.debat;
    }

    // Animation du bouton
    btn.textContent = "Validé ✓";
    btn.style.background = "#16a34a";
    setTimeout(() => {
      btn.innerHTML = "Valider cette partie";
    }, 2000);

    updateProgress();
  });
});

// Barre de progression
function updateProgress() {
  const sections = document.querySelectorAll(".quiz-section");
  let done = 0;

  sections.forEach(sec => {
    const exps = sec.querySelectorAll(".explanation");
    const anyFilled = Array.from(exps).some(e => e.textContent.trim().length > 0);
    if (anyFilled) done++;
  });

  const pct = (done / sections.length) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";
}