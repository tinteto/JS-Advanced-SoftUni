window.addEventListener('load', solve);

function solve() {

    let firstNameEl = document.getElementById('first-name');
    let lastNameEl = document.getElementById('last-name');
    let checkInEl = document.getElementById('date-in');
    let checkOutEl = document.getElementById('date-out');
    let numOfGuestsEl = document.getElementById('people-count');
    let nextBtn = document.getElementById('next-btn');
    let infoResUl = document.querySelector('.info-list');
    let confirmResUl = document.querySelector('.confirm-list');
    let h1Verif = document.getElementById('verification');

    nextBtn.addEventListener('click', onNext);
    function onNext(e) {
        e.preventDefault();
        if(firstNameEl.value == '' 
        || lastNameEl.value == ''
        || checkInEl.value == '' 
        || checkOutEl.value == '' 
        || numOfGuestsEl.value == ''
        || new Date(checkInEl.value) >= new Date(checkOutEl.value)) {
            return;
        }

        let liInfoEl = document.createElement('li');
        liInfoEl.setAttribute('class', 'reservation-content');

        let articleEl = document.createElement('article');
        let h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${firstNameEl.value} ${lastNameEl.value}`;
        let pFromDate = document.createElement('p');
        pFromDate.textContent = `From date: ${checkInEl.value}`;
        let pToDate = document.createElement('p');
        pToDate.textContent = `To date: ${checkOutEl.value}`;
        let pNumGuests = document.createElement('p');
        pNumGuests.textContent = `For ${numOfGuestsEl.value} people`;

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit'

        let contBtn = document.createElement('button');
        contBtn.setAttribute('class', 'continue-btn');
        contBtn.textContent = 'Continue';

        articleEl.appendChild(h3Name);
        articleEl.appendChild(pFromDate);
        articleEl.appendChild(pToDate);
        articleEl.appendChild(pNumGuests);

        liInfoEl.appendChild(articleEl);
        liInfoEl.appendChild(editBtn);
        liInfoEl.appendChild(contBtn);

        infoResUl.appendChild(liInfoEl);

        let editedFirstName = firstNameEl.value;
        let editedLastName = lastNameEl.value;
        let editedCheckIn = checkInEl.value;
        let editedCheckOut = checkOutEl.value;
        let editedNumGuests = numOfGuestsEl.value;

        firstNameEl.value = '';
        lastNameEl.value = '';
        checkInEl.value = '';
        checkOutEl.value = '';
        numOfGuestsEl.value = '';

        nextBtn.disabled = true;

        editBtn.addEventListener('click', onEdit);

        function onEdit() {
            firstNameEl.value = editedFirstName;
            lastNameEl.value =  editedLastName;
            checkInEl.value = editedCheckIn;
            checkOutEl.value = editedCheckOut;
            numOfGuestsEl.value = editedNumGuests;

            nextBtn.disabled = false;
            liInfoEl.remove();
        }

        contBtn.addEventListener('click', onCont);

        function onCont() {
            let resLiEl = document.createElement('li');
            resLiEl.setAttribute('çlass', 'reservation-content');

            let articleConfirmEl = document.createElement('article');
            articleConfirmEl = articleEl;

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';
            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';

            resLiEl.appendChild(articleConfirmEl);
            resLiEl.appendChild(confirmBtn);
            resLiEl.appendChild(cancelBtn);

            confirmResUl.appendChild(resLiEl);

            liInfoEl.remove();

            confirmBtn.addEventListener('click', onConfirm);

            function onConfirm() {
                resLiEl.remove();
                nextBtn.disabled = false;
    
                h1Verif.setAttribute('class', 'reservation-confirmed');
                h1Verif.textContent = 'Confirmed.'
            }
    
            cancelBtn.addEventListener('click', onCancel);
    
            function onCancel() {
                resLiEl.remove();
                nextBtn.disabled = false;

                h1Verif.setAttribute('class', 'reservation-cancelled');
                h1Verif.textContent = 'Cancelled.'
            }
        }
    }
    }



    
    
