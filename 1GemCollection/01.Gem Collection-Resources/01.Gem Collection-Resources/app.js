window.addEventListener("load", solve);

function solve() {
 let gemNameEl = document.getElementById('gem-name');
 let colorEl = document.getElementById('color');
 let caratEl = document.getElementById('carats');
 let priceEl = document.getElementById('price');
 let typeEl = document.getElementById('type');

 let addButton = document.getElementById('add-btn');

 let previewUlEl = document.getElementById('preview-list');
 let collectionUlEl = document.getElementById('collection');


 addButton.addEventListener('click', onAdd);
 function onAdd(event) {
    event.preventDefault();
    if(gemNameEl.value == '' 
    || colorEl.value == '' 
    || caratEl.value == '' 
    || priceEl.value == '' 
    || typeEl.value == '') {
        return;
    }

    let liInfoEl = document.createElement('li');
    liInfoEl.setAttribute('class', 'gem-info');

    let articleInfoEl = document.createElement('article');

    let h4Name = document.createElement('h4');
    h4Name.textContent = `${gemNameEl.value}`;
    let pColor = document.createElement('p');
    pColor.textContent = `Color: ${colorEl.value}`;
    let pCarats = document.createElement('p');
    pCarats.textContent = `Carats: ${caratEl.value}`;
    let pPrice = document.createElement('p');
    pPrice.textContent = `Price: ${priceEl.value}$`;
    let pType = document.createElement('p');
    pType.textContent = `Type: ${typeEl.value}`;


    let saveBtn = document.createElement('button');
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save to Collection';


    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Information';


    let cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancel-btn');
    cancelBtn.textContent = 'Cancel';

    articleInfoEl.appendChild(h4Name);
    articleInfoEl.appendChild(pColor);
    articleInfoEl.appendChild(pCarats);
    articleInfoEl.appendChild(pPrice);
    articleInfoEl.appendChild(pType);

    liInfoEl.appendChild(articleInfoEl);
    liInfoEl.appendChild(saveBtn);
    liInfoEl.appendChild(editBtn);
    liInfoEl.appendChild(cancelBtn);

    previewUlEl.appendChild(liInfoEl);

    let editedName = gemNameEl.value;
    let editedColor = colorEl.value;
    let editedCarat = caratEl.value;
    let editedPrice = priceEl.value;
    let editedType = typeEl.value;

    gemNameEl.value = '';
    colorEl.value = '';
    caratEl.value = '';
    priceEl.value = '';
    typeEl.value = '';

    addButton.disabled = true;


saveBtn.addEventListener('click', onSave);
function onSave() {
    let liCollectionEl = document.createElement('li');
    
    let pCollectionEl = document.createElement('p');
    pCollectionEl.setAttribute('class', 'collection-item');
    pCollectionEl.textContent = `${editedName} - Color: ${editedColor}/ Carats: ${editedCarat}/ Price: ${editedPrice}$/ Type: ${editedType}`;
    
    liCollectionEl.appendChild(pCollectionEl);
    
    collectionUlEl.appendChild(liCollectionEl);
    
    let previewLi = document.querySelector('.gem-info');
    previewLi.remove();
    addButton.disabled = false;
}

editBtn.addEventListener('click', onEdit);
function onEdit() {
    gemNameEl.value = editedName;
    colorEl.value = editedColor;
    caratEl.value = editedCarat;
    priceEl.value = editedPrice;
    typeEl.value = editedType;

    liInfoEl.remove();
    addButton.disabled = false;
}


cancelBtn.addEventListener('click', onCancel);
function onCancel() {
    liInfoEl.remove();
    addButton.disabled = false;
}

}

}
