const btnDescription = document.getElementById('input-desc-btn');
const btnTransports = document.getElementById('input-trsp-btn');
const ulCards = document.getElementById('cards-list');
const divCards = document.getElementById('cards-container');
const emptyBoxImg = document.getElementById('empty-box-img');
const totalQuotesContainer = document.getElementById('total-quotes-container');
const totalCostContainer = document.getElementById('total-cost-container');
const mdcContainer = document.getElementById('mdc-container');
const dataContainer = document.getElementById('footer-data');

let data = new Date();
let dataYear = data.getFullYear();

dataContainer.innerText = dataYear;

let totalCosts = 0;
let totalQuotes = 0;

btnDescription.onclick = function () {
    const description = document.getElementById('input-description');

    if (description.value.trim() === '') {
        alert('Insert something')
    } else {
        emptyBoxImg.remove();
        ulCards.classList.remove('invisible')

        const CER = document.getElementById('input-cer');
        const QTY = document.getElementById('input-qty');
        const price = document.getElementById('input-price');
        
        let totalPriceIn = (Number(price.value) * Number(QTY.value)).toFixed(2);
        let priceOut = (Number(price.value) * 1.35).toFixed(2);

        let totalPrice = (priceOut * Number(QTY.value)).toFixed(2);

        totalCosts += Number(totalPriceIn);
        totalQuotes += Number(totalPrice);

        totalCostContainer.innerText = totalCosts + ' €';
        totalQuotesContainer.innerText = totalQuotes + ' €';
        mdcContainer.innerText = (totalQuotes - totalCosts).toFixed(2) + ' €';

        const divDesc = document.createElement('div');
        divDesc.classList.add('d-flex', 'justify-content-between');

        
        const spanCER = document.createElement('span');
        spanCER.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3');
        spanCER.innerText = 'CER ' + CER.value;
        
        const spanQTY = document.createElement('span');
        spanQTY.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3');
        spanQTY.innerText = QTY.value + ' Kg';
        
        const spanPriceIn = document.createElement('span');
        spanPriceIn.classList.add('badge', 'bg-warning', 'rounded-pill', 'me-3')
        spanPriceIn.innerText = Number(price.value).toFixed(2) + ' €';
        
        const spanPriceOut = document.createElement('span');
        spanPriceOut.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-3')
        spanPriceOut.innerText = priceOut + ' €';

        const totalPriceContainer = document.createElement('span');
        totalPriceContainer.classList.add('badge', 'bg-success', 'rounded-pill', 'me-3')
        totalPriceContainer.innerText = 'Importo presunto: ' + totalPrice + ' €';
        
        const cardListElement = document.createElement('li');
        cardListElement.classList.add('list-group-item');

        const divLiElement = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger')

        deleteBtn.innerText = 'Elimina';

        divDesc.innerHTML = description.value;

        divDesc.append(deleteBtn);

        divLiElement.append(divDesc, spanCER, spanQTY, spanPriceIn, spanPriceOut, totalPriceContainer);

        cardListElement.append(divLiElement);
        ulCards.append(cardListElement);

        description.value = "";
        CER.value = "";
        QTY.value = "";
        price.value = "";

        deleteBtn.addEventListener('click', function () {
            
            totalCosts -= totalPriceIn;
            totalCostContainer.innerText = totalCosts + ' €';
            totalQuotes -= totalPrice;
            totalQuotesContainer.innerText = totalQuotes + ' €';
            mdcContainer.innerText = (totalQuotes - totalCosts).toFixed(2) + ' €';

            cardListElement.remove();
            
            if (ulCards.childNodes.length < 2) {
                divCards.append(emptyBoxImg);
            }

        })

    }
}

btnTransports.onclick = function() {
    ulCards.classList.remove('invisible');
    emptyBoxImg.remove();
    
    const manCostPerHour = 21.00;
    const fuelCost = 1.89;
    const consuptionImpact = 1.2; //value in %
    const MDC = 1.5; 
    
    let inputKm = document.getElementById('input-km');
    let inputTime = document.getElementById('input-timing');
    let inputQTYTransp = document.getElementById('input-qty-trsp');
    
    
    let totalTransportCost = Math.ceil(((((Number(inputKm.value) / 2.5 * fuelCost) + 
                                (manCostPerHour * Number(inputTime.value))) * 
                                consuptionImpact * Number(inputQTYTransp.value))));

    let totalTransportPrice = Math.ceil(((((Number(inputKm.value) / 2.5 * fuelCost) + 
                                (manCostPerHour * Number(inputTime.value))) * 
                                consuptionImpact * Number(inputQTYTransp.value))));

    totalTransportPrice = (totalTransportPrice - totalTransportCost) < 50 ? totalTransportPrice + 50 : totalTransportPrice * MDC 
                                    

    totalCosts += Number(totalTransportCost);
    totalQuotes += Number(totalTransportPrice);

    totalCostContainer.innerText = totalCosts + ' €';
    totalQuotesContainer.innerText = totalQuotes + ' €';
    mdcContainer.innerText = (totalQuotes - totalCosts).toFixed(2) + ' €';

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

    const totalCostTranspContainer = document.createElement('span');
    totalCostTranspContainer.classList.add('badge', 'bg-warning', 'rounded-pill', 'me-3')
    totalCostTranspContainer.innerText = 'Costo presunto: ' + totalTransportCost + ' €';


    const totalPriceTranspContainer = document.createElement('span');
    totalPriceTranspContainer.classList.add('badge', 'bg-success', 'rounded-pill', 'me-3')
    totalPriceTranspContainer.innerText = 'Importo presunto: ' + totalTransportPrice + ' €';

    const divLiElement = document.createElement('div');
   
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger')
    deleteBtn.innerText = 'Elimina';

    divDesc.innerHTML = 'Trasporto verso impianto autorizzato';

    const cardListElement = document.createElement('li');
    cardListElement.classList.add('list-group-item');

    divDesc.append(deleteBtn);

    divLiElement.append(divDesc, spanKm, spanTime, spanQTYTransp, totalCostTranspContainer, totalPriceTranspContainer);

    cardListElement.append(divLiElement);
    ulCards.append(cardListElement);

    inputKm.value = "";
    inputQTYTransp.value = "";
    inputTime.value = "";

    deleteBtn.addEventListener('click', function () {
        
        totalCosts -= totalTransportCost;
        totalCostContainer.innerText = totalCosts + ' €';
        
        totalQuotes -= totalTransportPrice;
        totalQuotesContainer.innerText = totalQuotes + ' €';
        mdcContainer.innerText = (totalQuotes - totalCosts).toFixed(2) + ' €';

        cardListElement.remove();
        
        if (ulCards.childNodes.length < 2) {
            divCards.append(emptyBoxImg);
        }
    })

    
}