window.addEventListener('load', solve);

function solve() {
        let carModelElement = document.getElementById('car-model');
        let carYearElement = document.getElementById('car-year');
        let partNameElement = document.getElementById('part-name');
        let partNumberElement = document.getElementById('part-number');
        let conditionElement = document.getElementById('condition');
        let nextButton = document.getElementById('next-btn');

        let imgElement = document.getElementById('complete-img');
        let pCompleteText = document.getElementById('complete-text');

        let partInfoElement = document.querySelector('.info-list');
        let confirmOrderElement = document.querySelector('.confirm-list');


        nextButton.addEventListener('click', onNext);

        function onNext(event) {
                event.preventDefault();
                if(carModelElement.value == '' || partNameElement.value == '' 
                || partNumberElement.value == '' || conditionElement.value == ''
                || carYearElement.value == '' || carYearElement.value < '1980' || carYearElement.value > '2023') {
                        return;
                }


                let liElementInfo = document.createElement('li');
                liElementInfo.setAttribute('class', 'part-content');

                let articleElementInfo = document.createElement('article');

                let pCarModel = document.createElement('p');
                pCarModel.textContent = `Car Model: ${carModelElement.value}`;

                let pCarYear = document.createElement('p');
                pCarYear.textContent = `Car Year: ${carYearElement.value}`;


                let pPartName = document.createElement('p');
                pPartName.textContent = `Part Name: ${partNameElement.value}`;


                let pPartNumber = document.createElement('p');
                pPartNumber.textContent = `Part Number: ${partNumberElement.value}`;


                let pCondition = document.createElement('p');
                pCondition.textContent = `Condition: ${conditionElement.value}`;


                let editButtonElement = document.createElement('button');
                editButtonElement.setAttribute('class', 'edit-btn');
                editButtonElement.textContent = 'Edit';

                let continueButtonElement = document.createElement('button');
                continueButtonElement.setAttribute('class', 'continue-btn');
                continueButtonElement.textContent = 'Continue';


                articleElementInfo.appendChild(pCarModel);
                articleElementInfo.appendChild(pCarYear);
                articleElementInfo.appendChild(pPartName);
                articleElementInfo.appendChild(pPartNumber);
                articleElementInfo.appendChild(pCondition);

                liElementInfo.appendChild(articleElementInfo);
                liElementInfo.appendChild(editButtonElement);
                liElementInfo.appendChild(continueButtonElement);

                partInfoElement.appendChild(liElementInfo);

                
                imgElement.style.visibility = 'hidden';
                pCompleteText.textContent = '';


                nextButton.disabled = true;

                let editedCarModel = carModelElement.value;
                let editedCarYear = carYearElement.value;
                let editedPartName = partNameElement.value;
                let editedPartNumber = partNumberElement.value;
                let editedCondition = conditionElement.value;

                carModelElement.value = '';
                carYearElement.value = '';
                partNameElement.value = '';
                partNumberElement.value = '';
                conditionElement.value = '';


                editButtonElement.addEventListener('click', onEdit);

                function onEdit() {
                        carModelElement.value = editedCarModel;
                        carYearElement.value = editedCarYear;
                        partNameElement.value = editedPartName;
                        partNumberElement.value = editedPartNumber;
                        conditionElement.value = editedCondition;
        

                        nextButton.disabled = false;
                        liElementInfo.remove();
                }


                continueButtonElement.addEventListener('click', onContinue);

                function onContinue() {

                let liElementConfirm = document.createElement('li');
                liElementConfirm.setAttribute('class', 'part-content');

                let articleElementConfirm = document.createElement('article');
                articleElementConfirm = articleElementInfo;


                let confirmBtn = document.createElement('button');
                confirmBtn.setAttribute('class', 'confirm-btn');
                confirmBtn.textContent = 'Confirm';

                let cancelButtonElement = document.createElement('button');
                cancelButtonElement.setAttribute('class', 'cancel-btn');
                cancelButtonElement.textContent = 'Cancel';

                liElementConfirm.appendChild(articleElementConfirm);
                liElementConfirm.appendChild(confirmBtn);
                liElementConfirm.appendChild(cancelButtonElement);

                confirmOrderElement.appendChild(liElementConfirm);

                liElementInfo.remove();

                confirmBtn.addEventListener('click', onConfirm);

                function onConfirm() {

                        imgElement.style.visibility = 'visible';
                        pCompleteText.textContent = 'Part is Ordered!';

                        liElementConfirm.remove();
                        nextButton.disabled = false;     
                }

                cancelButtonElement.addEventListener('click', onCancel);

                function onCancel() {
                        liElementConfirm.remove();
                        nextButton.disabled = false;
                        
                }
                }

                

        }
};


    
    
