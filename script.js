const quiz = [
  {
    question: "GANのモード崩壊とは？",
    choices: [
      "学習が停止する",
      "学習が遅くなる",
      "同じ出力ばかり生成する",
      "識別器が100%になる"
    ],
    answer: 2
  },
  {
    question: "AIとは？",
    choices: [
      "人工知能",
      "電気",
      "通信",
      "機械"
    ],
    answer: 0
  },
  {
    question: "JavaScriptは何？",
    choices: [
      "言語",
      "食べ物",
      "OS",
      "機械"
    ],
    answer: 0
  }
];

let current = 0;
let correct = 0;

function loadQuiz() {
  const q = quiz[current];

  document.getElementById("question").textContent = q.question;

  const choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, index) => {
    choicesEl.innerHTML += `
      <label>
        <input type="radio" name="choice" value="${index}">
        ${choice}
      </label><br>
    `;
  });

  document.getElementById("progress").textContent =
    `問題 ${current + 1} / ${quiz.length}`;

  document.getElementById("progress-fill").style.width =
    ((current) / quiz.length) * 100 + "%";
}

function submitAnswer() {
  const selected = document.querySelector('input[name="choice"]:checked');

  if (!selected) {
    alert("選択してください");
    return;
  }

  if (parseInt(selected.value) === quiz[current].answer) {
    correct++;
    document.getElementById("result").textContent = "正解！";
  } else {
    document.getElementById("result").textContent = "不正解";
  }

  current++;

  if (current < quiz.length) {
    setTimeout(loadQuiz, 1000);
  } else {
    document.querySelector(".container").innerHTML =
      `<h2>終了！</h2><p>正解数: ${correct}</p>`;
  }
}

loadQuiz();