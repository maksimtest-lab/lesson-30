class Card {
    constructor (title, description) {
        this.title = title;
        this.description = description;
    }

    createCard() {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');

        const cardTitle = document.createElement('span');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = this.title;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-description');
        cardDescription.textContent = this.description;

        const cardButton = document.createElement('button');
        cardButton.classList.add('card-button');
        cardButton.addEventListener('click', () => console.log('Вы купили этот товар!'));
        cardButton.textContent = 'Click';

        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardDescription);
        cardContainer.appendChild(cardButton);

        return cardContainer;
    }

    render(targetElement) {
        const target = document.querySelector(targetElement);

        if(target) {
            target.appendChild(this.createCard());
        } else {
            console.error('Такой элемент не найден');
        }
    }
}