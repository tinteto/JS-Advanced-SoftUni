window.addEventListener('load', solution);

function solution() {

  let employeeElement = document.getElementById('employee');
  let categoryElement = document.getElementById('category');
  let urgencyElement = document.getElementById('urgency');
  let teamElement = document.getElementById('team');
  let descriptionElement = document.getElementById('description');
  let addButtonElement = document.getElementById('add-btn');
  let previewElement = document.querySelector('.preview-list');
  let pendingElement = document.querySelector('.pending-list');
  let resolvedElement = document.querySelector('.resolved-list');


  addButtonElement.addEventListener('click', onNext);
  function onNext(event) {

    event.preventDefault(); // ако някое от тези инпут полета е празен стринг, програмата не трябва да прави нищо
    if(employeeElement.value == '' || categoryElement.value == ''
    || urgencyElement.value == '' || teamElement.value == ''
    || descriptionElement.value == '') {
      return;
    }

    let liElementInfo = document.createElement('li');
    liElementInfo.setAttribute('class', 'problem-content');

    let articleElementInfo = document.createElement('article');


    let pElementFrom = document.createElement('p');
    pElementFrom.textContent = `From: ${employeeElement.value}`;

    let pElementCategory = document.createElement('p');
    pElementCategory.textContent = `Category: ${categoryElement.value}`;

    let pElementUrgency = document.createElement('p');
    pElementUrgency.textContent = `Urgency: ${urgencyElement.value}`;

    let pElementAssigned = document.createElement('p');
    pElementAssigned.textContent = `Assigned to: ${teamElement.value}`;

    let pElementDescription = document.createElement('p');
    pElementDescription.textContent = `Description: ${descriptionElement.value}`;


    let editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit-btn');
    editButton.textContent = 'Edit';

    let continueButton = document.createElement('button');
    continueButton.setAttribute('class', 'continue-btn');
    continueButton.textContent = 'Continue';

    articleElementInfo.appendChild(pElementFrom);
    articleElementInfo.appendChild(pElementCategory);
    articleElementInfo.appendChild(pElementUrgency);
    articleElementInfo.appendChild(pElementAssigned);
    articleElementInfo.appendChild(pElementDescription);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(editButton);
    liElementInfo.appendChild(continueButton);

    previewElement.appendChild(liElementInfo);

    let editedElementFrom = employeeElement.value;
    let editedElementCategory = categoryElement.value;
    let editedElementUrgency = urgencyElement.value;
    let editedElementAssigned = teamElement.value;
    let editedElementDescription = descriptionElement.value;

   employeeElement.value = '';
   categoryElement.value = '';
   urgencyElement.value = '';
   teamElement.value = '';
   descriptionElement.value = '';

   addButtonElement.disabled = true;


   editButton.addEventListener('click', onEdit);
   function onEdit() {

    employeeElement.value = editedElementFrom;
    categoryElement.value = editedElementCategory;
    urgencyElement.value = editedElementUrgency;
    teamElement.value = editedElementAssigned;
    descriptionElement.value = editedElementDescription;

    liElementInfo.remove();
    addButtonElement.disabled = false;
   }


   continueButton.addEventListener('click', onContinue);
   function onContinue() {

    let liElementConfirm = document.createElement('li');
    liElementConfirm.setAttribute('class', 'problem-content');

    let articleElementContinue = document.createElement('article');
    articleElementContinue = articleElementInfo;

    let resolvedButton = document.createElement('button');
    resolvedButton.setAttribute('class', 'resolve-btn');
    resolvedButton.textContent = 'Resolved';
  
    liElementConfirm.appendChild(articleElementContinue);
    liElementConfirm.appendChild(resolvedButton);
    

    pendingElement.appendChild(liElementConfirm);

    liElementInfo.remove();
    addButtonElement.disabled = false;
   


    resolvedButton.addEventListener('click', onConfirm);
    function onConfirm() {

     let liElementResolved = document.createElement('li');
     liElementResolved.setAttribute('class', 'problem-content');
 
     let articleElementResolved = document.createElement('article');
     articleElementResolved = articleElementContinue;
 
     let clearButton = document.createElement('button');
     clearButton.setAttribute('class', 'clear-btn');
     clearButton.textContent = 'Clear';

 
     liElementResolved.appendChild(articleElementResolved);
     liElementResolved.appendChild(clearButton);

     liElementConfirm.remove();
 
     resolvedElement.appendChild(liElementResolved);


     clearButton.addEventListener('click', onClear);
     function onClear() {
       liElementResolved.remove();
       addButtonElement.disabled = false;
     }
    }
   }


  }
  
}


    
    
