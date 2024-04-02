const questions = [
 {
     "question": "Welches RFC spezifiziert die allgemeinen Regeln und Formate für IPv6-Adressen?",
     "answers": ["a) RFC 2460", "b) RFC 4291", "c) RFC 791"],
     "correctAnswer": "b",
     "explanation": "RFC 4291 spezifiziert die allgemeinen Regeln und Formate für IPv6-Adressen."
 },
 {
     "question": "Welche Adresse ist eine gültige IPv6-Link-Local-Adresse?",
     "answers": ["a) 192.168.1.1", "b) FE80::1", "c) 172.16.0.1"],
     "correctAnswer": "b",
     "explanation": "FE80::1 ist eine gültige IPv6-Link-Local-Adresse."
 },
 {
     "question": "Wie viele Bits hat eine IPv6-Adresse?",
     "answers": ["a) 32 Bits", "b) 128 Bits", "c) 64 Bits"],
     "correctAnswer": "b",
     "explanation": "Eine IPv6-Adresse hat 128 Bits."
 },
 {
     "question": "Welche IPv6-Adresse wird verwendet, um einen Broadcast im IPv6-Netzwerk durchzuführen?",
     "answers": ["a) FE80::1", "b) FF02::1", "c) 2001:db8::1"],
     "correctAnswer": "b",
     "explanation": "FF02::1 wird verwendet, um einen Broadcast im IPv6-Netzwerk durchzuführen."
 },
 {
     "question": "Was ist der Zweck des NDP (Neighbor Discovery Protocol) im IPv6-Protokoll?",
     "answers": ["a) Zur Ermittlung von Routen im Netzwerk", "b) Zur Nachbarschaftserkennung und Adressauflösung", "c) Zur Verschlüsselung von IPv6-Datenverkehr"],
     "correctAnswer": "b",
     "explanation": "Der Zweck des NDP (Neighbor Discovery Protocol) im IPv6-Protokoll besteht darin, Nachbarschaften zu erkennen und Adressauflösung durchzuführen."
 },
 {
     "question": "Welcher Teil einer IPv6-Adresse repräsentiert den Präfix?",
     "answers": ["a) Die ersten 64 Bits", "b) Die letzten 64 Bits", "c) Die mittleren 32 Bits"],
     "correctAnswer": "a",
     "explanation": "Der Präfix wird durch die ersten 64 Bits einer IPv6-Adresse repräsentiert."
 },
 {
     "question": "Welcher Teil einer IPv6-Adresse wird zur Identifikation eines einzelnen Netzwerks verwendet?",
     "answers": ["a) Der erste 16-Bit-Block", "b) Der dritte 32-Bit-Block", "c) Der vierte 64-Bit-Block"],
     "correctAnswer": "c",
     "explanation": "Der vierte 64-Bit-Block einer IPv6-Adresse wird zur Identifikation eines einzelnen Netzwerks verwendet."
 },
 {
     "question": "Welcher Teil einer IPv6-Adresse wird für die Identifizierung eines bestimmten Hosts im Netzwerk verwendet?",
     "answers": ["a) Die ersten 32 Bits", "b) Die letzten 64 Bits", "c) Die ersten 48 Bits"],
     "correctAnswer": "b",
     "explanation": "Die letzten 64 Bits einer IPv6-Adresse werden für die Identifizierung eines bestimmten Hosts im Netzwerk verwendet."
 },
 {
     "question": "Welcher Teil einer IPv6-Adresse entspricht dem globalen Routing-Präfix?",
     "answers": ["a) Die ersten 48 Bits", "b) Die ersten 64 Bits", "c) Die letzten 32 Bits"],
     "correctAnswer": "b",
     "explanation": "Das globale Routing-Präfix wird durch die ersten 64 Bits einer IPv6-Adresse repräsentiert."
 },
 {
     "question": "Welcher Teil einer IPv6-Adresse wird verwendet, um verschiedene Subnetze innerhalb desselben Netzwerks zu identifizieren?",
     "answers": ["a) Die letzten 32 Bits", "b) Der vierte 64-Bit-Block", "c) Die mittleren 48 Bits"],
     "correctAnswer": "b",
     "explanation": "Der vierte 64-Bit-Block einer IPv6-Adresse wird verwendet, um verschiedene Subnetze innerhalb desselben Netzwerks zu identifizieren."
 },
 {
     "question": "Warum werden Nullen in IPv6-Adressen oft abgekürzt?",
     "answers": ["a) Um die Adressen lesbarer zu machen", "b) Um Speicherplatz zu sparen", "c) Um die Netzwerkleistung zu erhöhen"],
     "correctAnswer": "b",
     "explanation": "Nullen in IPv6-Adressen werden oft abgekürzt, um Speicherplatz zu sparen."
 },
 {
     "question": "Welches Zeichen wird verwendet, um eine verkürzte IPv6-Adresse darzustellen?",
     "answers": ["a) Doppelpunkt (:)", "b) Bindestrich (-)", "c) Gleichheitszeichen (=)"],
     "correctAnswer": "a",
     "explanation": "Das Zeichen Doppelpunkt (:) wird verwendet, um eine verkürzte IPv6-Adresse darzustellen."
 },
 {
     "question": "Wie wird eine IPv6-Adresse verkürzt, wenn mehrere aufeinanderfolgende Blöcke Nullen enthalten?",
     "answers": ["a) Durch Hinzufügen eines einzelnen Nullen-Paares (::)", "b) Durch Hinzufügen von Bindestrichen zwischen den Nullen", "c) Durch Entfernen aller Nullen"],
     "correctAnswer": "a",
     "explanation": "Eine IPv6-Adresse wird verkürzt, indem ein einzelnes Nullen-Paar (::) hinzugefügt wird, wenn mehrere aufeinanderfolgende Blöcke Nullen enthalten."
 },
 {
     "question": "Welcher Teil einer IPv6-Adresse wird häufig weggelassen, wenn er nur Nullen enthält?",
     "answers": ["a) Der erste 16-Bit-Block", "b) Der letzte 64-Bit-Block", "c) Der mittlere 32-Bit-Block"],
     "correctAnswer": "b",
     "explanation": "Der letzte 64-Bit-Block einer IPv6-Adresse wird häufig weggelassen, wenn er nur Nullen enthält."
 },
 {
     "question": "Welche Vorteile bietet die Verwendung von IPv6-Kürzungen?",
     "answers": ["a) Verbesserte Sicherheit", "b) Weniger Fehler bei der Adressverwaltung", "c) Reduzierter Speicherbedarf"],
     "correctAnswer": "c",
     "explanation": "Die Verwendung von IPv6-Kürzungen bietet den Vorteil eines reduzierten Speicherbedarfs."
 },
 {
     "question": "Wie sieht die gekürzte Form der IPv6-Adresse 2001:0db8:0000:0000:0000:0000:1428:57ab aus?",
     "answers": [
         "a) 2001:0db8::1428:57ab",
         "b) 2001:db8:0:0:0:0:1428:57ab",
         "c) 2001:db8::1428:57ab"
     ],
     "correctAnswer": "c",
     "explanation": "Die gekürzte Form der IPv6-Adresse 2001:0db8:0000:0000:0000:0000:1428:57ab lautet 2001:db8::1428:57ab."
 },
 {
     "question": "Wie sieht die gekürzte Form der IPv6-Adresse fe80:0000:0000:0000:2001:0db8:85a3:0000 aus?",
     "answers": [
         "a) fe80::2001:db8:85a3:0",
         "b) fe80:0:0:0:2001:0db8:85a3:0",
         "c) fe80:0:0:0:2001:db8:85a3:0"
     ],
     "correctAnswer": "a",
     "explanation": "Die gekürzte Form der IPv6-Adresse fe80:0000:0000:0000:2001:0db8:85a3:0000 lautet fe80::2001:db8:85a3:0."
 },
 {
     "question": "Wie sieht die gekürzte Form der IPv6-Adresse 2001:0db8:0000:0000:0000:0000:0000:0001 aus?",
     "answers": [
         "a) 2001:0db8:0:0:0:0:0:1",
         "b) 2001:db8::1",
         "c) 2001:db8:0:0:0:0:0:1"
     ],
     "correctAnswer": "b",
     "explanation": "Die gekürzte Form der IPv6-Adresse 2001:0db8:0000:0000:0000:0000:0000:0001 lautet 2001:db8::1."
 },
 {
     "question": "Wie sieht die gekürzte Form der IPv6-Adresse ff02:0000:0000:0000:0000:0000:0000:0001 aus?",
     "answers": [
         "a) ff02::0000:0000:0000:0001",
         "b) ff02::1",
         "c) ff02:0000:0000:0000:0000:0000:0000:1"
     ],
     "correctAnswer": "b",
     "explanation": "Die gekürzte Form der IPv6-Adresse ff02:0000:0000:0000:0000:0000:0000:0001 lautet ff02::1."
 },
 {
     "question": "Wie sieht die gekürzte Form der IPv6-Adresse ::1 aus?",
     "answers": [
         "a) ::0:0:0:0:1",
         "b) ::1",
         "c) 0:0:0:0:0:0:0:1"
     ],
     "correctAnswer": "b",
     "explanation": "Die gekürzte Form der IPv6-Adresse ::1 lautet ::1."
 },
 {
     "question": "Was ist das Ziel des Subnettings in einem IPv6-Netzwerk?",
     "answers": [
         "a) Die Reduzierung der Anzahl benötigter Router",
         "b) Die Aufteilung eines Netzwerks in kleinere, logisch zusammengehörige Teilnetze",
         "c) Die Verbesserung der Sicherheit durch Verschlüsselung"
     ],
     "correctAnswer": "b",
     "explanation": "Das Ziel des Subnettings in einem IPv6-Netzwerk ist die Aufteilung eines großen Netzwerks in kleinere, logisch zusammengehörige Teilnetze."
 },
 {
     "question": "Welches Tool wird häufig verwendet, um IPv6-Subnetze zu planen und zu verwalten?",
     "answers": [
         "a) Ping",
         "b) Traceroute",
         "c) Subnetzrechner"
     ],
     "correctAnswer": "c",
     "explanation": "Ein Subnetzrechner wird häufig verwendet, um IPv6-Subnetze zu planen und zu verwalten."
 },
 {
     "question": "Welcher Vorteil ergibt sich durch das Subnetting in einem IPv6-Netzwerk?",
     "answers": [
         "a) Eine verbesserte Netzwerksicherheit",
         "b) Eine genauere Standortbestimmung für Endgeräte",
         "c) Eine effiziente Adressnutzung und Verkehrsverwaltung"
     ],
     "correctAnswer": "c",
     "explanation": "Der Vorteil des Subnettings in einem IPv6-Netzwerk liegt in der effizienteren Nutzung von IP-Adressen und einer besseren Verwaltung des Netzwerkverkehrs."
 },
 {
     "question": "Was ist der Zweck einer Subnetzmaske bei IPv6-Subnetting?",
     "answers": [
         "a) Die Verschlüsselung von Netzwerkpaketen",
         "b) Die Identifizierung des Subnetzes und der Hostadresse",
         "c) Die Komprimierung von Datenpaketen zur Verringerung der Netzwerklast"
     ],
     "correctAnswer": "b",
     "explanation": "Die Subnetzmaske wird verwendet, um das Subnetz und die Hostadresse in einem IPv6-Netzwerk zu identifizieren."
 },
 {
     "question": "Welche Rolle spielen Präfixlängen bei der Definition von IPv6-Subnetzen?",
     "answers": [
         "a) Sie bestimmen die Anzahl der verfügbaren IP-Adressen in einem Subnetz",
         "b) Sie definieren die Anzahl der Bits in der Netzwerkadresse",
         "c) Sie legen die maximale Anzahl von Hosts pro Subnetz fest"
     ],
     "correctAnswer": "b",
     "explanation": "Präfixlängen definieren die Anzahl der Bits in der Netzwerkadresse und spielen eine wichtige Rolle bei der Definition von IPv6-Subnetzen."
 },
 {
     "question": "Wie viele Subnetze können aus der IPv6-Adresse 2001:0db8:abcd::/48 gebildet werden?",
     "answers": [
         "a) 4",
         "b) 8",
         "c) 16"
     ],
     "correctAnswer": "c",
     "explanation": "Mit einem /48-Präfix können 2^16 = 65536 Subnetze gebildet werden."
 },
 {
     "question": "Teilen Sie das Netzwerk 2001:0db8:aaaa:bbbb::/64 in acht Subnetze.",
     "answers": [
         "a) /72",
         "b) /68",
         "c) /62"
     ],
     "correctAnswer": "c",
     "explanation": "Um das Netzwerk 2001:0db8:aaaa:bbbb::/64 in acht Subnetze zu teilen, benötigen Sie ein Präfix mit einer Länge von /62."
 },
 {
     "question": "Wie viele Hosts können in einem IPv6-Subnetz mit der Präfixlänge /64 erstellt werden?",
     "answers": [
         "a) 2^48",
         "b) 2^64",
         "c) 2^80"
     ],
     "correctAnswer": "b",
     "explanation": "Mit einem /64-Präfix können 2^64 = 18446744073709551616 Hosts erstellt werden."
 },
 {
     "question": "Berechnen Sie die Anzahl der Hosts, die in einem Subnetz mit der Präfixlänge /56 verfügbar sind.",
     "answers": [
         "a) 2^8",
         "b) 2^64",
         "c) 2^120"
     ],
     "correctAnswer": "a",
     "explanation": "Mit einem /56-Präfix können 2^8 = 256 Hosts erstellt werden."
 },
 {
     "question": "Wie viele Hosts können in einem IPv6-Subnetz mit der Präfixlänge /72 erstellt werden?",
     "answers": [
         "a) 2^16",
         "b) 2^24",
         "c) 2^32"
     ],
     "correctAnswer": "a",
     "explanation": "Mit einem /72-Präfix können 2^16 = 65536 Hosts erstellt werden."
 },
];

let currentQuestion;

function startQuiz() {
    const playerNameInput = document.getElementById("playerName").value.trim();
    if (playerNameInput !== "") {
        document.getElementById("player").style.display = "none";
        document.getElementById("quiz").style.display = "block";

        // Anzeige des Spielernamen und des Punktestands in einer Zeile
        document.getElementById("playerNameDisplay").innerHTML = "<p style='display: flex;'><strong>Spielername: </strong> " + playerNameInput + " <span><strong>Punktestand:</strong> <span id='score'>0</span></span></p>";
        document.getElementById("playerNameDisplay").style.display = "block";

        currentQuestion = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        userAnswers = new Array(questions.length).fill(null);

        showQuestion(); // Aufruf von showQuestion nach dem Setzen von currentQuestion auf 0
    } else {
        alert("Bitte geben Sie Ihren Namen ein, um das Quiz zu starten.");
    }
}

function showQuestion() {
    const questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = `
        <div class="question">${questions[currentQuestion].question}</div>`;
    questions[currentQuestion].answers.forEach((answer, index) => {
        questionContainer.innerHTML += `
            <div class="answer">
                <input type="radio" name="answer" value="${index}">
                <label>${answer}</label>
            </div>`;
    });

    const backButton = document.getElementById("backButton");
    if (currentQuestion > 0) {
        backButton.style.display = "inline";
    } else {
        backButton.style.display = "none";
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion -= 1;
        showQuestion();
    }
}

function nextQuestion() {
    const selectedAnswer = document.querySelector(`input[name="answer"]:checked`);

    // Benutzerantwort aktualisieren, wenn eine Antwort ausgewählt wurde
    if (selectedAnswer !== null) {
        userAnswers[currentQuestion] = selectedAnswer.value;

        const selectedValue = selectedAnswer.value;
        const correctAnswer = questions[currentQuestion].correctAnswer.charCodeAt(0) - 97;
        if (selectedValue === correctAnswer.toString()) {
            correctAnswers += 1;
        } else {
            incorrectAnswers += 1;
        }
    }

    // Inkrementiere currentQuestion, um zur nächsten Frage zu gelangen
    currentQuestion += 1;

    // Überprüfen, ob es weitere Fragen gibt, und zeigen Sie die nächste Frage an oder zeigen Sie das Ergebnis an
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    let resultHTML = '<button id="restartButton" onclick="restartQuiz()"><i class="fas fa-redo-alt"></i> Neustarten</button>';
    resultHTML += "<h3>Ergebnis:</h3>";
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const questionIndex = index + 1;
        if (userAnswer !== null) {
            const userAnswerText = question.answers[userAnswer];
            const correctAnswerIndex = question.correctAnswer.charCodeAt(0) - 97;
            const correctAnswerText = question.answers[correctAnswerIndex];
            if (userAnswer === correctAnswerIndex.toString()) {
                resultHTML += `<p class="correct" >${questionIndex}. Frage: Deine Antwort - ${userAnswerText} (Richtig)</p>`;
            } else {
                resultHTML += `<p class="incorrect">${questionIndex}. Frage: Deine Antwort - ${userAnswerText}. <br>Richtig - ${correctAnswerText}`;
                if (question.explanation) {
                    resultHTML += `<br>Erklärung: ${question.explanation}</p>`;
                } else {
                    resultHTML += "</p>";
                }
            }
        } else {
            const correctAnswerIndex = question.correctAnswer.charCodeAt(0) - 97;
            const correctAnswerText = question.answers[correctAnswerIndex];
            resultHTML += `<p class="unanswered">${questionIndex}. Frage: Keine Antwort gegeben. <br>Richtig - ${correctAnswerText}</p>`;
        }
    });

    // Berechnen des aktuellen Punktestands
    const currentScore = correctAnswers * 10;

    // Aktualisieren des HTML-Elements mit der ID "score"
    document.getElementById("score").innerText = currentScore;

    document.getElementById("result").innerHTML = resultHTML;
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    userAnswers = new Array(questions.length).fill(null);

    const playerNameInput = document.getElementById("playerName");
    playerNameInput.value = ""; // Spielernamen zurücksetzen
    playerNameInput.disabled = false;

    // Spielernamen-Anzeige zurücksetzen
    const playerNameDisplay = document.getElementById("playerNameDisplay");
    playerNameDisplay.innerText = "";
    playerNameDisplay.style.display = "none";

    document.getElementById("player").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "none";
    showQuestion();
}

window.onload = function() {
    showQuestion();
    document.getElementById("backButton").addEventListener("click", previousQuestion);
    document.querySelector("#quiz button:nth-of-type(2)").addEventListener("click", nextQuestion);
    document.getElementById("restartButton").addEventListener("click", restartQuiz);
};

