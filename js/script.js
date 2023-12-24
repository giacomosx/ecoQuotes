const btnDescription = document.getElementById('input-desc-btn');
const btnTransports = document.getElementById('input-trsp-btn');
const ulCards = document.getElementById('cards-list');
const divCards = document.getElementById('cards-container');
const emptyBoxImg = document.getElementById('empty-box-img');


btnDescription.onclick = function () {
    const description = document.getElementById('input-description');

    if (description.value.trim() === '') {
        alert('Insert something')
    } else {
        emptyBoxImg.remove();
        ulCards.classList.remove('invisible')

        const divDesc = document.createElement('div');
        divDesc.classList.add('d-flex', 'justify-content-between');

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

btnTransports.onclick = function() {
    ulCards.classList.remove('invisible');
    emptyBoxImg.remove();
    
    const manCostPerHour = 21;
    const fuelCost = 1.89;
    const consuptionImpact = 1.2 //value in % 
    
    let inputKm = document.getElementById('input-km');
    let inputTime = document.getElementById('input-timing');
    let inputQTYTransp = document.getElementById('input-qty-trsp');
    
    
    let totalTransportPrice = ((Number(inputKm.value)/2.5 * fuelCost) + (manCostPerHour * Number(inputTime.value))*consuptionImpact*Number(inputQTYTransp.value)).toFixed(2);
    
    const divDesc = document.createElement('div');
    divDesc.classList.add('d-flex', 'justify-content-between');

    const spanKm = document.createElement('span');
    spanKm.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3');
    spanKm.innerText = inputKm.value + ' Km';

    const spanTime = document.createElement('span');
    spanTime.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3');
    spanTime.innerText = inputTime.value + ' Ore stimate';
    
    const spanQTYTransp = document.createElement('span');
    spanQTYTransp.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3');
    spanQTYTransp.innerText = inputQTYTransp.value + ' Viaggi previsti';

    const totalPriceTranspContainer = document.createElement('span');
    totalPriceTranspContainer.classList.add('badge', 'bg-success', 'rounded-pill', 'me-3')
    totalPriceTranspContainer.innerText = 'Importo presunto: ' + totalTransportPrice + ' €';

    const divLiElement = document.createElement('div');
   
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger')
    deleteBtn.innerText = 'Delete';

    divDesc.innerHTML = 'Trasporto verso impianto autorizzato';

    const cardListElement = document.createElement('li');
    cardListElement.classList.add('list-group-item');

    divDesc.append(deleteBtn);

    divLiElement.append(divDesc, spanKm, spanTime, spanQTYTransp, totalPriceTranspContainer);

    cardListElement.append(divLiElement);
    ulCards.append(cardListElement);

    inputKm.value = "";
    inputQTYTransp.value = "";
    inputTime.value = "";

    deleteBtn.addEventListener('click', function () {
        cardListElement.remove();
    })
    
}