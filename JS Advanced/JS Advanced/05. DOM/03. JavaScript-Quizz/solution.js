function solve() {
    const quizzie = document.getElementById('quizzie');
    const answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    const sections = Array.from(document.querySelectorAll('section'));
    let right = 0;
    let currentStep = 0;

    quizzie.addEventListener('click', (e) => {
        if (e.target.className == 'answer-text') {
            if (answers.includes(e.target.innerHTML)) {
                right++;
            }
            if (currentStep < 2) {
                sections[currentStep].style.display = 'none';
                sections[currentStep + 1].style.display = 'block'
                currentStep++;
            } else {
                sections[currentStep].style.display = 'none';
                document.getElementById('results').style.display = 'block';
                const result = document.querySelector('#results h1');
                result.textContent = right == answers.length ? 'You are recognized as top JavaScript fan!' : `You have ${right} right answers`;
            }
        }
    });
}