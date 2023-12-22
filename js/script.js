const btnDescription = document.getElementById('input-desc-btn');
const ulCards = document.getElementById('cards-list');
const divCards = document.getElementById('cards-container');

btnDescription.onclick = function () {
    const description = document.getElementById('input-description');

    if (description.value.trim() === '') {
        alert('Insert something')
    } else {
        divCards.classList.remove('invisible')

        const divDesc = document.createElement('div');
        divDesc.classList.add('d-flex', 'justify-content-between')

        const CER = document.getElementById('input-cer');
        const spanCER = document.createElement('span');
        spanCER.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3');
        spanCER.innerText = 'CER ' + CER.value;
        const QTY = document.getElementById('input-qty');
        const spanQTY = document.createElement('span');
        spanQTY.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3');
        spanQTY.innerText = QTY.value + ' Kg';
        const price = document.getElementById('input-price');
        const spanPrice = document.createElement('span');
        spanPrice.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3')
        spanPrice.innerText = price.value + ' €';
        
        let totalPrice = (Number(price.value) * Number(QTY.value)).toFixed(2);


        const totalPriceContainer = document.createElement('span');
        totalPriceContainer.classList.add('badge', 'bg-success', 'rounded-pill', 'me-3')
        totalPriceContainer.innerText = 'Importo presunto: ' + totalPrice + ' €';
        
        const cardListElement = document.createElement('li');
        cardListElement.classList.add('list-group-item');

        const divLiElement = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger')


        deleteBtn.innerText = 'Delete';

        divDesc.innerHTML = description.value;

        divDesc.append(deleteBtn);

        divLiElement.append(divDesc, spanCER, spanQTY, spanPrice, totalPriceContainer);

        cardListElement.append(divLiElement);
        ulCards.append(cardListElement);

        description.value = "";
        CER.value = "";
        QTY.value = "";
        price.value = "";

        deleteBtn.addEventListener('click', function () {
            cardListElement.remove();
        })
    }
}
