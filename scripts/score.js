function goToNextRound(nextPageUrl) {
    // 1. Get the current score
    let score = parseInt(localStorage.getItem("sessionScore")) || 0;
    
    // 2. Add a point (assuming they finished the round correctly)
    score++;
    
    // 3. Save it
    localStorage.setItem("sessionScore", score);
    
    // 4. Go to the next page
    window.location.href = nextPageUrl;
}

function displayFinalResults() {
    const finalScore = parseInt(localStorage.getItem("sessionScore")) || 0;
    let highScore = parseInt(localStorage.getItem("highScore")) || 0;

    if (finalScore > highScore) {
        highScore = finalScore;
        localStorage.setItem("highScore", highScore);
    }

    const currentElem = document.getElementById("current-score");
    const bestElem = document.getElementById("best-score");

    if (currentElem) currentElem.innerText = finalScore;
    if (bestElem) bestElem.innerText = highScore;
}