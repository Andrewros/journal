const questions = [
  "Why listen to this daily",
  "What is the most important fact to remember that is also obviously true",
  "What are the main ways to win any game",
  "What subjects should you not rest until they are mastered",
  "What is the best way to deal with discomfort",
  "Why should you meditate daily?",
  "Why should you look good",
  "Why should you always journal in free time",
  "What should you do during moments where nothing is happening and you can't journal",
  "What should you do when you don't want to work and why?",
  "Why should you be frugal?",
  "How do you find out who knows something important?",
  "Why should you avoid screens when not doing anything?",
  "What are the easiest habits to improve charisma?",
  "What is a persons favorite thing to hear that makes them like you",
  "What is the best way to convey information to someone else",
  "What is the most important charisma habit so many people break",
  "How do you do all the anki on a day you are very unmotivated?",
  "Why should you avoid comparison to others?",
  "What is a helpful way to deal with being better than most people around you?",
  "Why is it ok to be delusionally confident?",
  "What is the best drill to improve confidence?",
  "Why is concentration so important?",
  "What is the best way to be more extroverted when talking one on one",
  "Why should you make sure to always get approximately 8 hours of sleep every night even if you wake up early.",
  "What is the best way in a conversation to stay more present",
  "What do you need to remember before doing anything that you enjoy that is addictive.",
  "What is the most important time of the day and why?",
  "When is the only time you should not go to bed by 8PM?"
];
const answers = [
  "One of the main ways that humans actually believe things is through hearing them repeatedly. This is helpful propoganda. Just remembering things are true doesn't make you fully believe it.",
  "There is no reason that there should be a high correlation between what your dopamine receptors in your brain wants to do and what you actually should be doing for long-term happiness.",
  "1. Manipulate opponents model of reality. This is often done by making opponent think they alread won or already lost but there are other ways to do it. Patrick Jane uses it a lot to catch killers. 2. Attack the player not the game. Think about how Ayanokouji beat Ichinose in Year 2 volume 12 sometimes better opponents are easier to attack.",
  "Machine Learning and Cybersecurity as these are powerful skills",
  "Remember that many people including people you admire have gone through the same things if not worse",
  "Meditation is one of the few ways to improve vertical thinking which is one of the pillars to being smart. It allows you to think through the consequences of actions even ones other people don't see.",
  "For one people like and trust people more who look good even if they are not attracted to you. Second of all you are maximizing the chance of a successful interaction with someone you like as you never know when you will meet that person",
  "It is used to improve lateral thinking and create ideas for more efficiency and living a better life.",
  "Observe. Journaling is only useful if you can write things down. Think about how many of your normal thoughts have really been that impactful. It is better to just train observation as a skill than waste time thinking about useless stuff.",
  "Work anyway. By working when you don't want to you will not be as productive but you will have gained discipline which is more imporant. This is why it is more productive to work when you're not motivated as opposed to when you are",
  "Any dollar that you spend now will be worth 2.6 times that amount in the future thus you should not just be thinking about the money being spend but the opportunity cost of that expense. Remember there is no reason that what you want to do will correspond with what is rational.",
  "Make it so that everyone besides the person who knows something will perform an action. Think about how Patrick Jane tricks a lot of people. It could be making them look around for the person who they think did it by making them raise hands or offering money for information everyone else would give.",
  "It is a great time to either journal or observe and you are also addicted to the screens so it should only be something done that is scheduled always and likely at the end of the day.",
  "Smile. Speak more confidently. Give a pause before responding",
  "The persons name",
  "Tell stories don't list facts, sometimes telling facts is important for story context but people only care about stories",
  "NEVER interrupt.",
  "Use the foot in the door technique. Do 1 anki, then 2 then 4 and so on and you can eventually reach a max like 16 before taking a break but that is the best way to do it. The break can be relaxing on the bed just don't make it anything stimulating.",
  "Since high school you have already been better than most people and thus alot of comparisons are going to be bad. Thus you have two options. Compare yourself against only people who are better than you which is ridiculous since it isn't possible to holistically view between you and someone else who is better. They might be smarter and stronger than you but more miserable which is not a win that is necessarily good you will just compare average feets of yourself versus their best. You could also compare against average person around you who you will always beat. Thus the best comparison is against you from a year ago or some time in the past.",
  "Don't take anything personally from people around you. Imagine being insulted by a kindergartener and taking that personally. Most people know nothing about you and them insulting you likely means they are a baby compared to you anyway. But never use this as a way to dismiss beliefs. Almost everyone has useful beliefs that you haven't thought of because you are a different type of creature and part of improving is acknowledging your constraints and understanding anyway even if you disagree.",
  "Beliefs shouldn't be about what is true. Beliefs should only be about what is helpful and as long as you restrain yourself it is more helpful than harmful.",
  "Visualize success in the scenario. This will condition yourself to feel better in the scenario that you are in.",
  "It trains your neocortex. The part of your brain responsible for free will. It makes your actions intentional and not automatic which is the only way to optimize them.",
  "Imagine as if everyone you are talking with is a heavenly angel and there is no judgement of anything. Moreover, you can also warm up with friends beforehand.",
  "Because being forced to be awake but being extremely tired feels like torture. It makes life not fun and you repeatedly fall for this fallacy. Too much sleep is better than too little. Historically you wake up earlier and then get tired in a few hours.",
  "Pretend that the person you are talking to is someone that you greatly admire",
  "Remember that you will be addicted and unable to stop. This is why these activities should be restricted to nighttime before you go to bed. You are a slave to this and it is not something that can easily be fixed with discipline. The very act of testing discipline is proof you don't have it as this is something you can be disciplined to follow.",
  "The morning. It is incredibly predictive of how the rest of the day will go as momentum is incredibly strong. Always remember to have a good morning.Y ou are genetically more productive in the morning so maximize that time on any other day.",
  "If you completed all of the Ankis for tomorrow and also have adjusted the schedule for that. The and is important. All ankis must be done because that is most likely to be skipped when waking up late."
];

const promptText = document.querySelector("#promptText");
const modeLabel = document.querySelector("#modeLabel");
const progress = document.querySelector("#progress");
const voiceStatus = document.querySelector("#voiceStatus");
const startButton = document.querySelector("#startButton");
const nextButton = document.querySelector("#nextButton");
const listenButton = document.querySelector("#listenButton");

let currentIndex = 0;
let showingAnswer = false;
let started = false;
let recognition = null;
let listening = false;
let recognitionActive = false;
let lastNextCommandAt = 0;
const minPromptFontSize = 20;

function hasContent() {
  return questions.length > 0 && answers.length > 0;
}

function getAnswerForCurrentQuestion() {
  return answers[currentIndex] ?? "No answer has been added for this question.";
}

function updateProgress() {
  const total = questions.length;
  const current = total === 0 ? 0 : currentIndex + 1;
  progress.textContent = `${current} / ${total}`;
}

function fitPromptText() {
  promptText.style.removeProperty("--prompt-font-size");
  promptText.scrollTop = 0;

  window.requestAnimationFrame(() => {
    const maxFontSize = parseFloat(window.getComputedStyle(promptText).fontSize);
    let low = minPromptFontSize;
    let high = maxFontSize;
    let best = minPromptFontSize;

    while (high - low > 0.5) {
      const mid = (low + high) / 2;
      promptText.style.setProperty("--prompt-font-size", `${mid}px`);

      if (promptText.scrollHeight <= promptText.clientHeight) {
        best = mid;
        low = mid;
      } else {
        high = mid;
      }
    }

    promptText.style.setProperty("--prompt-font-size", `${best}px`);
  });
}

function speak(text, afterSpeech) {
  window.speechSynthesis.cancel();

  if (!("speechSynthesis" in window)) {
    voiceStatus.textContent = "Speech is not supported in this browser";
    if (afterSpeech) afterSpeech();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.onstart = () => {
    voiceStatus.textContent = "Speaking";
  };
  utterance.onend = () => {
    voiceStatus.textContent = listening ? 'Listening for "next"' : "Voice ready";
    if (afterSpeech) afterSpeech();
  };
  utterance.onerror = () => {
    voiceStatus.textContent = "Speech stopped";
    if (afterSpeech) afterSpeech();
  };

  window.speechSynthesis.speak(utterance);
}

function showQuestion(shouldSpeak = started) {
  if (!hasContent()) {
    modeLabel.textContent = "Question";
    promptText.textContent = "Add questions and answers in script.js to begin.";
    updateProgress();
    fitPromptText();
    return;
  }

  showingAnswer = false;
  modeLabel.textContent = "Question";
  promptText.textContent = questions[currentIndex];
  updateProgress();
  fitPromptText();
  if (shouldSpeak) speak(questions[currentIndex]);
}

function showAnswer() {
  showingAnswer = true;
  modeLabel.textContent = "Answer";
  promptText.textContent = getAnswerForCurrentQuestion();
  updateProgress();
  fitPromptText();
  speak(getAnswerForCurrentQuestion());
}

function moveToNextQuestion() {
  currentIndex = (currentIndex + 1) % questions.length;
  showQuestion();
}

function handleNext() {
  if (!hasContent()) return;

  if (!started) {
    startPractice();
    return;
  }

  if (showingAnswer) {
    showingAnswer = false;
    moveToNextQuestion();
    return;
  }

  showAnswer();
}

function startListening(delay = 0) {
  if (!recognition || !listening || recognitionActive) return;

  const beginListening = () => {
    if (!recognition || !listening || recognitionActive) return;

    try {
      recognition.start();
      recognitionActive = true;
      listenButton.setAttribute("aria-pressed", "true");
      voiceStatus.textContent = 'Listening for "next"';
    } catch {
      recognitionActive = false;
    }
  };

  if (delay > 0) {
    window.setTimeout(beginListening, delay);
  } else {
    beginListening();
  }
}

function stopListening() {
  if (!recognition) return;

  listening = false;
  listenButton.setAttribute("aria-pressed", "false");
  voiceStatus.textContent = "Voice ready";

  if (recognitionActive) {
    recognition.stop();
  }
}

function acceptNextCommand() {
  const now = Date.now();
  if (now - lastNextCommandAt < 900) return false;

  lastNextCommandAt = now;
  return true;
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    listenButton.disabled = true;
    listenButton.textContent = 'Speech input unavailable';
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcripts = Array.from(event.results)
      .slice(event.resultIndex)
      .map((result) => result[0].transcript.trim().toLowerCase())
      .join(" ");

    if (transcripts.split(/\s+/).includes("next") && acceptNextCommand()) {
      handleNext();
      if (recognitionActive) recognition.stop();
    }
  };

  recognition.onend = () => {
    recognitionActive = false;
    startListening(250);
  };

  recognition.onerror = (event) => {
    recognitionActive = false;

    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      listening = false;
      listenButton.setAttribute("aria-pressed", "false");
      voiceStatus.textContent = "Microphone permission needed";
      return;
    }

    voiceStatus.textContent = "Restarting listener";
    startListening(500);
  };
}

function toggleListening() {
  if (!started) {
    startPractice();
    return;
  }

  if (!recognition) return;

  if (listening) {
    stopListening();
  } else {
    listening = true;
    startListening();
  }
}

function startPractice() {
  if (!hasContent()) return;

  started = true;
  listening = Boolean(recognition);
  startButton.hidden = true;
  startListening();
  showQuestion(true);
}

startButton.addEventListener("click", startPractice);
nextButton.addEventListener("click", handleNext);
listenButton.addEventListener("click", toggleListening);

setupSpeechRecognition();
showQuestion(false);
voiceStatus.textContent = "Press Start";
