const getStoredCard = () => {
    let card = [];
    let storedCard = localStorage.getItem('card');
    if (storedCard) {
        card = JSON.parse(storedCard);
    }
    return card;
}

const addToLS = (id) => {
    const card = getStoredCard();
    if (!card.includes(id)) {
        card.push(id)
        const cardStiringify = JSON.stringify(card)
        localStorage.setItem('card',cardStiringify) 
    }
}


export { getStoredCard, addToLS }