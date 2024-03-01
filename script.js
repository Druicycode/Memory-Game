document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');
    const gridSize = 6;
    const totalCards = gridSize * gridSize;
    let cards = [];
    let selectedCards = [];
    let matchedCards = [];

    // Generate card numbers
    for (let i = 1; i <= totalCards / 2; i++) {
        cards.push(i, i);
    }

    // Shuffle cards
    cards.sort(() => 0.5 - Math.random());

    // Create cards
    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.number = cards[i];
        card.addEventListener('click', () => {
            if (selectedCards.length < 2 && !card.classList.contains('matched')) {
                card.textContent = card.dataset.number;
                selectedCards.push(card);

                if (selectedCards.length === 2) {
                    setTimeout(() => {
                        if (selectedCards[0].dataset.number === selectedCards[1].dataset.number) {
                            selectedCards.forEach(card => card.classList.add('matched'));
                            matchedCards.push(...selectedCards);
                        } else {
                            selectedCards.forEach(card => card.textContent = '');
                        }
                        selectedCards = [];

                        if (matchedCards.length === totalCards) {
                            alert('Congratulations! You matched all the cards.');
                        }
                    }, 500);
                }
            }
        });
        gameBoard.appendChild(card);
    }
});
