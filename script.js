const questions = [
  "Why listen to this daily",
  "What is the most important fact to remember that is also obviously true",
  "What is the only way to be happy?",
  "What is the only way to learn something?",
  "What are the main ways to win any game",
  "What is the worst thing to do with private knowledge you just aquired",
  "What is the most important fact about discomfort",
  "What is the best way to deal with discomfort",
  "Why should you meditate daily?",
  "Why should you look good",
  "Why should you always journal in free time",
  "What should you do during moments where nothing is happening and you can't journal",
  "Why should you be frugal?",
  "How do you find out who knows something important?",
  "How do you get information from someone who is arrogant",
  "How do you use interest to find out who knows something important?",
  "How do you use uselessness to find out who knows something important?",
  "What are the easiest habits to improve charisma?",
  "What is a persons favorite thing to hear that makes them like you",
  "What is the best way to convey information to someone else",
  "What is the most important charisma habit so many people break",
  "What is the best way to make fun small talk?",
  "What should you do when someone seems uninterested in the questions that you are asking?",
  "How do you be disciplined on days when you are unmotivated?",
  "Why should you avoid comparison to others?",
  "What is a helpful way to deal with being better than most people around you?",
  "What is the best drill to improve confidence?",
  "Why is concentration so important?",
  "What is the best way to be more extroverted when talking one on one",
  "Why should you make sure to always get approximately 8 hours of sleep every night even if you wake up early.",
  "What is the best way in a conversation to stay more present",
  "What do you need to remember before doing anything that you enjoy that is addictive.",
  "What is the most important time of the day and why?",
  "When is the only time you should not go to bed by 8PM?",
  "What is the algorithm for negotiations",
  "What is the best way to show empathy in a conversation?",
  "What is the best way to make something bad seem not as bad?",
  "Why is no so powerful in negotiations?",
  "Why is that's right so important in negotiation and how do you trigger it?"
];
const answers = [
  "You should listen to this daily because one of the main ways that humans actually believe things is through hearing them repeatedly. This is helpful propoganda. Just remembering things are true doesn't make you fully believe it.",
  "There is no reason that there should be a high correlation between what your dopamine receptors in your brain wants to do and what you actually should be doing for long-term happiness.",
  "The best way to be happy willingly is to try to be happy but do not think about happiness. The best way to avoid thinking is by singing a song or thinking about something funner. By moving around.",
  "The only way to really learn things is to think about them a lot and use the knowledge maybe by solving problems or just using it in general for social tips. This is why reading long books is more important than just reading a youtube summary. Why writing code by hand teaches more than AI generating a solution. Thinking about the answer will help you learn much better than just getting answers. This can be another way to use journaling.",
  "1. Manipulate opponents model of reality. This is often done by making opponent think they alread won or already lost but there are other ways to do it. Patrick Jane uses it a lot to catch killers. 2. Attack the player not the game. Think about how Ayanokouji beat Ichinose in Year 2 volume 12 sometimes better opponents are easier to attack.",
  "The worst thing you can do with private info you aquired is to share it and make it public. There are so many traps you can do with asymetric information and you lose all of them when you tell the world about that information.",
  "Discomfort will always exist until you have momentum. Discomfort is proof that you are building discipline and getting better. You should live in discomfort and accept it and no that it is never gonna go away until you perform the actions anyway no matter what you are overthinking. And you need to perform the actions. Comfort kills you. Momentum creates a god.",
  "The best way to handle discomfort is by remembering that many people including people you admire have gone through the same things if not worse. Remember in elementary school thinking about how Count Olaf made the Baudelaires run laps helped you run for longer.",
  "Meditation is incredibly important because it is one of the few ways to improve vertical thinking which is one of the pillars to being smart. It allows you to think through the consequences of actions even ones other people don't see.",
  "You should look good because for one people like and trust people more who look good even if they are not attracted to you. Second of all you are maximizing the chance of a successful interaction with someone you like as you never know when you will meet that person",
  "Journaling is important because it is used to improve lateral thinking and create ideas for more efficiency and living a better life.",
  "When you can't journal you should observe. Journaling is only useful if you can write things down. Think about how many of your normal thoughts have really been that impactful. It is better to just train observation as a skill than waste time thinking about useless stuff.",
  "You should be frugal because any dollar that you spend now will be worth 2.6 times that amount in the future thus you should not just be thinking about the money being spend but the opportunity cost of that expense. Remember there is no reason that what you want to do will correspond with what is rational.",
  "The best way to find someone who knows something is to make it so that everyone besides the person who knows something will perform an action. Think about how Patrick Jane tricks a lot of people. The best line is 'raise your hand for a chance to win $100 if you can correctly guess who x is that is $100 for whoever can guess who x is(wait for most people to raise hand and look around about there guess). Wait did I say $100 sorry I meant 100 cents so $1 for whoever correctly guesses who x is.' Then you can use info based off of who didn't raise hand and who didn't look around to determine who is x. This is powerful because there are two traps and people lower there guard when they notice one trap.",
  "The best way to find info from someone with a big ego is to say something that is false and then they can't help but contradict it",
  "You can use interest to find out who knows something important by saying stuff most people won't be interested in but x would be interested in that information then if you can pay attention to x you are able to identify if they are x",
  "The best way to use uselessness to make people give away info is by making them think that the information is not important anymore. One way to do this is by making them think they already lost or already won but there are other ways to do this.",
  "The best way to be more charismatic is by Smiling. Speaking more confidently. Giving a pause before responding",
  "People love to hear there own name",
  "The best way to convey information is by telling stories don't list facts, sometimes telling facts is important for story context but people only care about stories",
  "The best charisma habit people miss is NEVER interrupt.",
  "The best way to make fun small talk is to use reminds me of when talking about something instead of ending there in order to transition from a compliment. Often lateral thinking is helpful for transitioning between topics. Moreover, when asking questions go one step deeper and ask why. For example instead of asking what do you do for work. After that ask why they chose to do that.",
  "When someone seems uninterested in answering most questions ask a fun hypothetical question related to what you are talking about. Poeple like answering these.",
  "Use the foot in the door technique to do things even when you are not motivated. For anki you can do 1 anki, then 2 then 4 and so on. For waking up start by moving your feet around. Then move your left foot out of the bed. Then move right foot closer to edge. Then move right foot off edge. Then stand up. Your body is tired because it doesn't want to invest as much. But by turning things that feel like a lot into smaller tasks you can trick your brain into investing into each part.",
  "You should not compare yourself to others because it isn't possible to holistically compare you and someone else who is better. They might be smarter and stronger than you but more miserable which is not a win that is necessarily good you will just compare average feets of yourself versus their best. You could also compare against average person around you who you will always beat. Thus the best comparison is against you from a year ago or some time in the past.",
  "The biggest tip for living in a world where you are better than most people is don't take anything personally from people around you. Imagine being insulted by a kindergartener and taking that personally. Most people know nothing about you and them insulting you shows they are inferior. But never use superiority as a way to dismiss beliefs. Almost everyone has useful beliefs that you haven't thought of because you are a different type of creature and part of improving is acknowledging your constraints and understanding anyway even if you disagree.",
  "The best drill to improve confidence is visualizing success in the scenario. This will condition yourself to feel better in the scenario that you are in. Keep in mind this won't create perfection and you will still feel discomfort. But this should improve performance.",
  "The reason you should always concentrate is that it trains your neocortex. The part of your brain responsible for free will. It makes your actions intentional and not automatic which is the only way to optimize them.",
  "The best way to be more charismatic one on one is by imagining as if everyone you are talking with is a heavenly angel and there is no judgement of anything. Moreover, you can also warm up with friends beforehand.",
  "You should always get 8 hours of sleep because being forced to be awake but being extremely tired feels like torture. It makes life not fun and you repeatedly fall for this fallacy. Too much sleep is better than too little. Historically you wake up earlier and then get tired in a few hours.",
  "The best way to be present in a conversation is to pretend that the person you are talking to is someone that you greatly admire. The easiest way is just think about something great about them.",
  "What you need to remember before doing anything addictive is that you will be addicted and unable to stop. This is why addictive activities should be restricted to nighttime before you go to bed. You are a slave to this and it is not something that can easily be fixed with discipline. The very act of testing discipline is proof you don't have it as this is something you can be disciplined to follow.",
  "The most important time of day is the morning. It is incredibly predictive of how the rest of the day will go as momentum is incredibly strong. Always remember to have a good morning. You are genetically more productive in the morning so maximize that time on any other day.",
  "You should only go to bed after 8PM if you completed all of the Ankis for tomorrow and also have adjusted the schedule for that. The and is important. All ankis must be done because that is most likely to be skipped when waking up late.",
  "The algorithm for negotiations is saying I'm sorry then mirror them and then be quiet then repeat. Ask clarifying questions too that are open ended since you can't just mirror but that mix will get you great results. ",
  "The best way to show someone empathy is to use labels like 'It sounds like'. 'It seems like' and more to make them feel understand",
  "The best way to make something bad seem not as bad is by straightforwardly saying the bad thing without filter or sounding better and then explaining the positives. This leads to peolpe not actually thinking of it as bad.",
  "No is incredibly important in negotiation because it encourages a response from the other person as people don't like being mislabeled. It encourages responses from people who ignore you. It encourages them to give clarification. And it can give them more security as they feel like they are the one in charge.",
  "That's right is so important in negotiation because it means that the other person fully understands instead of just saying yes to go along. The best way to trigger a that's right is to summarize there position with a steelman."
];

const promptText = document.querySelector("#promptText");
const modeLabel = document.querySelector("#modeLabel");
const progress = document.querySelector("#progress");
const voiceStatus = document.querySelector("#voiceStatus");
const startButton = document.querySelector("#startButton");
const nextButton = document.querySelector("#nextButton");
const listenButton = document.querySelector("#listenButton");
const jumpForm = document.querySelector("#jumpForm");
const cardNumberInput = document.querySelector("#cardNumber");

let currentIndex = 0;
let showingAnswer = false;
let started = false;
let recognition = null;
let listening = false;
let recognitionActive = false;
let lastNextCommandAt = 0;
const nextCommandCooldownMs = 250;
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
  cardNumberInput.max = String(total);
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

function jumpToCard(event) {
  event.preventDefault();
  if (!hasContent()) return;

  const cardNumber = Number(cardNumberInput.value);

  if (!Number.isInteger(cardNumber) || cardNumber < 1 || cardNumber > questions.length) {
    voiceStatus.textContent = `Choose a card from 1 to ${questions.length}`;
    cardNumberInput.select();
    return;
  }

  currentIndex = cardNumber - 1;
  showQuestion(started);
  cardNumberInput.value = "";
}

function startListening() {
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

  beginListening();
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
  if (now - lastNextCommandAt < nextCommandCooldownMs) return false;

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
  recognition.interimResults = true;
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
    startListening();
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
    startListening();
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
jumpForm.addEventListener("submit", jumpToCard);

setupSpeechRecognition();
showQuestion(false);
voiceStatus.textContent = "Press Start";
