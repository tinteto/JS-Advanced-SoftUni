window.addEventListener('load', solve);

function solve() {
    let firstNameEl = document.getElementById('first-name');
    let lastNameEl = document.getElementById('last-name');
    let numberPeopleEl = document.getElementById('people-count');
    let fromDateEl = document.getElementById('from-date');
    let daysEl = document.getElementById('days-count');

    let nextStepBtn = document.getElementById('next-btn');

    let ulticketInfoEl = document.querySelector('.ticket-info-list');
    let ulconfirmTicketEl = document.querySelector('.confirm-ticket');

    nextStepBtn.addEventListener('click', onNext);

    function onNext(event) {
        event.preventDefault();
        if(firstNameEl.value == ''
        || lastNameEl.value == ''
        || numberPeopleEl.value == ''
        || fromDateEl.value == ''
        || daysEl.value == '')  {
            return;
        }

        let liInfoEl = document.createElement('li');
        liInfoEl.setAttribute('class', 'ticket');

        let articleInfoEl = document.createElement('article');

        let h3name = document.createElement('h3');
        h3name.textContent = `Name: ${firstNameEl.value} ${lastNameEl.value}`;
        let pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${fromDateEl.value}`;
        let pDays = document.createElement('p');
        pDays.textContent = `For ${daysEl.value} days`;
        let pPeople = document.createElement('p');
        pPeople.textContent = `For ${numberPeopleEl.value} people`;


        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        articleInfoEl.appendChild(h3name);
        articleInfoEl.appendChild(pFromDate);
        articleInfoEl.appendChild(pDays);
        articleInfoEl.appendChild(pPeople);

        liInfoEl.appendChild(articleInfoEl);
        liInfoEl.appendChild(editBtn);
        liInfoEl.appendChild(continueBtn);

        ulticketInfoEl.appendChild(liInfoEl);

       let editedName = firstNameEl.value;
       let editedLastName = lastNameEl.value;
       let editedPeople = numberPeopleEl.value;
       let editedFromDate = fromDateEl.value;
       let editedDays = daysEl.value;

        firstNameEl.value = '';
        lastNameEl.value = '';
        numberPeopleEl.value = '';
        fromDateEl.value = '';
        daysEl.value = '';

        nextStepBtn.disabled = true;

        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            firstNameEl.value = editedName;
            lastNameEl.value = editedLastName;
            numberPeopleEl.value = editedPeople;
            fromDateEl.value = editedFromDate;
            daysEl.value = editedDays;

            nextStepBtn.disabled = false;
            liInfoEl.remove();
        }

        continueBtn.addEventListener('click', onContinue);

        function onContinue() {
            let liConfirmEl = document.createElement('li');
            liConfirmEl.setAttribute('class', 'ticket-content');

            let articleConfirmEl = document.createElement('article');
            articleConfirmEl = articleInfoEl;

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';

            liConfirmEl.appendChild(articleConfirmEl);
            liConfirmEl.appendChild(confirmBtn);
            liConfirmEl.appendChild(cancelBtn);

            ulconfirmTicketEl.appendChild(liConfirmEl);
            liInfoEl.remove();


        cancelBtn.addEventListener('click', onCancel);
        function onCancel() {
            liConfirmEl.remove();
            nextStepBtn.disabled = false;
        }

        confirmBtn.addEventListener('click', onConfirm);
        function onConfirm() {
            let divEl = document.getElementById('main');
            divEl.remove();

            let h1El = document.createElement('h1');
            h1El.setAttribute('id', 'thank-you');
            h1El.textContent = 'Thank you, have a nice day!';

            let backButton = document.createElement('button');
            backButton.setAttribute('id', 'thank-you');
            backButton.textContent = 'Back';

            let bodyEl = document.getElementById('body');

            bodyEl.appendChild(h1El);
            bodyEl.appendChild(backButton);

            backButton.addEventListener('click', onBack);

            function onBack() {
                location.reload();
            }
        }
        }

    }
   
}


    
    
