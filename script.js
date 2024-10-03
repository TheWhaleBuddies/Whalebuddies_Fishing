document.getElementById('fishButton').addEventListener('click', () => {
    const fishRarity = Math.random();
    let result = '';
    
    // Visser animatie
    const fisherman = document.getElementById('fisherman');
    fisherman.style.transform = 'translateX(-50%) translateY(-50px)';
    
    // Reset de animatie na een korte tijd
    setTimeout(() => {
        fisherman.style.transform = 'translateX(-50%)';
    }, 500);

    if (fishRarity < 0.5) {
        result = 'You caught a common fish!';
    } else if (fishRarity < 0.8) {
        result = 'You caught a rare fish!';
    } else if (fishRarity < 0.95) {
        result = 'You caught an epic fish!';
    } else {
        result = 'You caught a legendary fish!';
    }

    document.getElementById('result').textContent = result;
});
