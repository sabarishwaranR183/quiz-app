const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the King Of Cricket?',
    answers: [
      { text: 'Virat', correct: true },
      { text: 'Dhoni', correct: true },
      { text: 'ABD', correct: true },
      { text: 'Sachin', correct: true }
    ]
  },
  {
    question: 'Who is the ceo of google?',
    answers: [
      { text: 'Subdar Pitchai', correct: false },
      { text: 'Sundar Pitchai', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'who is Jio top manager?',
    answers: [
      { text: 'Abishek sharma', correct: true },
      { text: 'Abinay Sharma', correct: false }
    ]
  },
  {
    question: 'Learning Makes knowledge?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }
    ]
  },
  {
    question: 'which Ipl Team is powerful?',
    answers: [
      { text: 'Csk', correct: true },
      { text: 'Rcb', correct: false },
      { text: 'Mi', correct: false },
      { text: 'KKR', correct: false }
    ]
  },
  {
    question: 'who is leading Run Scorer in Ipl?',
    answers: [
      { text: 'Virat', correct: true },
      { text: 'Raina', correct: false }
    ]
  },
  {
    question: 'who is most important for our life?',
    answers: [
      { text: 'Mother', correct: false },
      { text: 'father', correct: false },
      { text: 'Friends', correct: false },
      { text: 'all of the above', correct: true}
    ]
  },
  {
    question: 'Every boys love is true?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: false }
    ]
  }
]