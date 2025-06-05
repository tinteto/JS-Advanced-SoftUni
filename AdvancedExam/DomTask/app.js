window.addEventListener('load', solve);

function solve() {
    let timeEl = document.getElementById('time');
    let dateEl = document.getElementById('date');
    let placeEl = document.getElementById('place');
    let eventEl = document.getElementById('event-name');
    let contactsEl = document.getElementById('email');

    let addBtn = document.getElementById('add-btn');

    let ulLastCheckEl = document.getElementById('check-list');
    let ulUpcomingEl = document.getElementById('upcoming-list');
    let ulFinishedEl = document.getElementById('finished-list');

    let clearBtn = document.getElementById('clear');


    addBtn.addEventListener('click', onAddBtn);

    function onAddBtn(event) {
        event.preventDefault();
        if(timeEl.value == '' || dateEl.value == '' || placeEl.value == ''
        || eventEl.value == '' || contactsEl.value == '') {
            return;
        }

        let liLastCheckEl = document.createElement('li');
        liLastCheckEl.setAttribute('class', 'event-content');

        let articleLastCheckEl = document.createElement('article');

        let pDateTimeEl = document.createElement('p');
        pDateTimeEl.textContent = `Begins: ${dateEl.value} at: ${timeEl.value}`;

        let pPlaceEl = document.createElement('p');
        pPlaceEl.textContent = `In: ${placeEl.value}`; //intervals?

        let pEventEl = document.createElement('p');
        pEventEl.textContent = `Event: ${eventEl.value}`; //intervals

        let pContactEl = document.createElement('p');
        pContactEl.textContent = `Contact: ${contactsEl.value}`; //intervals

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let contBtn = document.createElement('button');
        contBtn.setAttribute('class', 'continue-btn');
        contBtn.textContent = 'Continue';

        articleLastCheckEl.appendChild(pDateTimeEl);
        articleLastCheckEl.appendChild(pPlaceEl);
        articleLastCheckEl.appendChild(pEventEl);
        articleLastCheckEl.appendChild(pContactEl);

        liLastCheckEl.appendChild(articleLastCheckEl);
        liLastCheckEl.appendChild(editBtn);
        liLastCheckEl.appendChild(contBtn);

        ulLastCheckEl.appendChild(liLastCheckEl);

        let transferredTimeEl = timeEl.value;
        let transferredDateEl = dateEl.value;
        let transferredPlaceEl = placeEl.value;
        let transferredEventEl = eventEl.value;
        let transferredContactEl = contactsEl.value;

        timeEl.value = '';
        dateEl.value = '';
        placeEl.value = '';
        eventEl.value = '';
        contactsEl.value = '';

        addBtn.disabled = true;

        editBtn.addEventListener('click', onEditBtn);

        function onEditBtn() {
            timeEl.value = transferredTimeEl;
            dateEl.value = transferredDateEl;
            placeEl.value = transferredPlaceEl;
            eventEl.value = transferredEventEl;
            contactsEl.value = transferredContactEl;

            liLastCheckEl.remove();
            addBtn.disabled = false;
        }

        contBtn.addEventListener('click', onContButton);

        function onContButton() {
            let liUpcomingElem = document.createElement('li');
            liUpcomingElem.setAttribute('class', 'event-content');
            let articleUpcomingEl = document.createElement('article');
            articleUpcomingEl = articleLastCheckEl;

            let finishBtn = document.createElement('button');
            finishBtn.setAttribute('class', 'finished-btn');
            finishBtn.textContent = 'Move to Finished';

            liUpcomingElem.appendChild(articleUpcomingEl);
            liUpcomingElem.appendChild(finishBtn);

            ulUpcomingEl.appendChild(liUpcomingElem);

            liLastCheckEl.remove();
            addBtn.disabled = false;

            finishBtn.addEventListener('click', onFinBtn);

            function onFinBtn () {
                let liFinishedEl = document.createElement('li');
                liFinishedEl.setAttribute('class', 'event-content');
    
                let articleFinishedEl = document.createElement('article');
                articleFinishedEl = articleUpcomingEl;
    
                liFinishedEl.appendChild(articleFinishedEl);
                ulFinishedEl.appendChild(liFinishedEl);
    
                liUpcomingElem.remove();

            clearBtn.addEventListener('click', onClearBtn);

                function onClearBtn () {
                    liFinishedEl.remove();
                }
            }

        }

    }
}


    
    
