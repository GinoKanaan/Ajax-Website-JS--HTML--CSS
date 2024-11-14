function submitQuiz() {
    let score = 0;
    let feedbackText = "Je hebt de volgende vragen fout beantwoord:<br>";

    const question1 = document.querySelector('input[name="question1"]:checked');
    const question1Container = document.getElementById('question1');
    if (question1 && question1.value === 'correct') {
        score++;
        question1Container.classList.add('correct');
    } else {
        question1Container.classList.add('wrong');
        feedbackText += "1. Wie is de all-time topscorer van Ajax? Correct antwoord: Piet van Reenen<br>";
    }

    const question2 = document.querySelector('input[name="question2"]:checked');
    const question2Container = document.getElementById('question2');
    if (question2 && question2.value === 'correct') {
        score++;
        question2Container.classList.add('correct');
    } else {
        question2Container.classList.add('wrong');
        feedbackText += "2. Hoeveel keer heeft Ajax de UEFA Champions League gewonnen? Correct antwoord: 4 keer<br>";
    }

    const question3 = document.querySelector('input[name="question3"]:checked');
    const question3Container = document.getElementById('question3');
    if (question3 && question3.value === 'correct') {
        score++;
        question3Container.classList.add('correct');
    } else {
        question3Container.classList.add('wrong');
        feedbackText += "3. Welke speler kreeg de bijnaam 'De Piraat' bij Ajax? Correct antwoord: John Heitinga<br>";
    }

    const question4 = document.querySelector('input[name="question4"]:checked');
    const question4Container = document.getElementById('question4');
    if (question4 && question4.value === 'correct') {
        score++;
        question4Container.classList.add('correct');
    } else {
        question4Container.classList.add('wrong');
        feedbackText += "4. Welke club is de grootste rivaal van Ajax? Correct antwoord: Feyenoord<br>";
    }

    const question5 = document.querySelector('input[name="question5"]:checked');
    const question5Container = document.getElementById('question5');
    if (question5 && question5.value === 'correct') {
        score++;
        question5Container.classList.add('correct');
    } else {
        question5Container.classList.add('wrong');
        feedbackText += "5. In welk jaar won Ajax voor het laatst de Champions League? Correct antwoord: 1995<br>";
    }

    const result = document.getElementById('result');
    result.innerHTML = `Je hebt ${score} van de 5 vragen correct beantwoord!`;

    const feedback = document.getElementById('feedback');
    feedback.innerHTML = score < 5 ? feedbackText : "Je hebt alle vragen correct beantwoord!";

    document.querySelector('.submit-btn').disabled = true;
}