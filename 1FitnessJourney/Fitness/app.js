window.addEventListener('load', solve);

function solve() {
let nameElement = document.getElementById('name');
let emailElement = document.getElementById('email');
let contactNumberElement = document.getElementById('contact-number');
let classTypeElement = document.getElementById('class-type');
let classTimeElement = document.getElementById('class-time');
let divElement = document.getElementById('main');
let bodyElement = document.getElementById('body');

let nextButton = document.getElementById('next-btn');

let previewElement = document.querySelector('.class-info');
let confirmElement = document.querySelector('.confirm-class');

nextButton.addEventListener('click', onNext);
function onNext(e) {
    e.preventDefault();

    if(nameElement.value == '' || emailElement.value == '' || contactNumberElement.value == ''
    || classTypeElement.value == '' || classTimeElement.value == '') {
        return;
    }

    let liElementInfo = document.createElement('li');
    liElementInfo.setAttribute('class', 'info-item');

    let articleElementInfo = document.createElement('article');
    articleElementInfo.setAttribute('class', 'personal-info');


    let pNameElement = document.createElement('p');
    pNameElement.textContent = nameElement.value;

    let pEmailElement = document.createElement('p');
    pEmailElement.textContent = emailElement.value;

    let pContactElement = document.createElement('p');
    pContactElement.textContent = contactNumberElement.value;

    let pClassTypeElement = document.createElement('p');
    pClassTypeElement.textContent = classTypeElement.value;

    let pClassTimeElement = document.createElement('p');
    pClassTimeElement.textContent = classTimeElement.value;

    let editBtnElement = document.createElement('button');
    editBtnElement.setAttribute('class', 'edit-btn');
    editBtnElement.textContent = 'Edit';

    let continueBtnElement = document.createElement('button');
    continueBtnElement.setAttribute('class', 'continue-btn');
    continueBtnElement.textContent = 'Continue';


    articleElementInfo.appendChild(pNameElement);
    articleElementInfo.appendChild(pEmailElement);
    articleElementInfo.appendChild(pContactElement);
    articleElementInfo.appendChild(pClassTypeElement);
    articleElementInfo.appendChild(pClassTimeElement);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(editBtnElement);
    liElementInfo.appendChild(continueBtnElement);

    previewElement.appendChild(liElementInfo);

    let editedNameElement = nameElement.value;
    let editedEmailElement = emailElement.value;
    let editedContactNumberElement = contactNumberElement.value;
    let editedClassTypeElement = classTypeElement.value;
    let editedClassTimeElement = classTimeElement.value;

    nameElement.value = '';
    emailElement.value = '';
    contactNumberElement.value = '';
    classTypeElement.value = '';
    classTimeElement.value = '';

    nextButton.disabled = true;


    editBtnElement.addEventListener('click', onEdit);

    function onEdit() {

       nameElement.value = editedNameElement;
       emailElement.value = editedEmailElement;
       contactNumberElement.value = editedContactNumberElement;
       classTypeElement.value = editedClassTypeElement;
       classTimeElement.value = editedClassTimeElement;

       nextButton.disabled = false;

       liElementInfo.remove();
    }

    continueBtnElement.addEventListener('click', onContinue);

    function onContinue() {

    let liElementConfirm = document.createElement('li');
    liElementConfirm.setAttribute('class', 'info-item');

    let articleElementConfirm = document.createElement('article');
    articleElementConfirm.setAttribute('class', 'personal-info');

    articleElementConfirm = articleElementInfo;

    let cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancel-btn');
    cancelBtn.textContent = 'Cancel';

    let confirmBtn = document.createElement('button');
    confirmBtn.setAttribute('class', 'confirm-btn');
    confirmBtn.textContent = 'Confirm';

    liElementConfirm.appendChild(articleElementConfirm);
    liElementConfirm.appendChild(cancelBtn);
    liElementConfirm.appendChild(confirmBtn);

    confirmElement.appendChild(liElementConfirm);

    liElementInfo.remove();


    cancelBtn.addEventListener('click', onCancel);

    function onCancel() {
        liElementConfirm.remove();
        nextButton.disabled = false;
    }

    confirmBtn.addEventListener('click', onConfirm);

    function onConfirm() {
        divElement.remove();

        let h1Element = document.createElement('h1');
        h1Element.setAttribute('id', 'thank-you');
        h1Element.textContent = `Thank you for scheduling your appointment, we look forward to seeing you!`;

        let doneButton = document.createElement('button');
        doneButton.setAttribute('id', 'done-btn');
        doneButton.textContent = 'Done';

        bodyElement.appendChild(h1Element);
        bodyElement.appendChild(doneButton);

        doneButton.addEventListener('click', onDone);

        function onDone() {
            location.reload();

        }

    }

    }
}
}




