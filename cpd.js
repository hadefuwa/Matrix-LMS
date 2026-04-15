(() => {
  const answers = {
    q1: "b",
    q2: "a",
    q3: "b",
    q4: "a",
    q5: "b"
  };

  const completeBtn = document.getElementById("completeCpdBtn");
  const resetBtn = document.getElementById("resetCpdBtn");
  const result = document.getElementById("cpdResult");
  const certificate = document.getElementById("cpdCertificate");
  const nameInput = document.getElementById("teacherName");
  const nameLine = document.getElementById("certificateNameLine");
  const quiz = document.getElementById("cpdQuiz");

  if (!completeBtn || !result || !certificate || !quiz) return;

  function getSelections() {
    return Object.keys(answers).reduce((acc, key) => {
      const selected = quiz.querySelector(`input[name="${key}"]:checked`);
      acc[key] = selected ? selected.value : null;
      return acc;
    }, {});
  }

  function scoreQuiz(selections) {
    return Object.keys(answers).reduce((score, key) => score + (selections[key] === answers[key] ? 1 : 0), 0);
  }

  completeBtn.addEventListener("click", () => {
    const selections = getSelections();
    const unanswered = Object.keys(selections).filter((key) => !selections[key]);

    if (unanswered.length) {
      result.textContent = `Please answer all questions before completing (${unanswered.length} remaining).`;
      result.classList.remove("success");
      certificate.classList.add("hidden");
      return;
    }

    const score = scoreQuiz(selections);
    result.textContent = `Great work, you scored ${score}/5.`;
    result.classList.add("success");

    const teacherName = nameInput?.value?.trim();
    nameLine.textContent = teacherName
      ? `Awarded to: ${teacherName}`
      : "Awarded to: CPD Participant";

    certificate.classList.remove("hidden");
    certificate.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  resetBtn?.addEventListener("click", () => {
    quiz.reset();
    result.textContent = "";
    result.classList.remove("success");
    certificate.classList.add("hidden");
  });
})();
