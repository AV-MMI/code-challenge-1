let animals = [
	{
		isPet: true,
		type: "dog",
		name: "Olive",
	},
	{
		isPet: false,
		type: "lion",
		name: "Nala",
	},
	{
		isPet: false,
		type: "bear",
		name: "Honey",
	},
	{
		isPet: true,
		type: "cat",
		name: "Maru",
	},
	{
		isPet: true,
		type: "fish",
		name: "Dr. Fishy",
	},
];

const history = {
	counter: 0,
};

const btnContainer = document.getElementById('btn-container');
const addAnimalBtn = document.getElementById('add-animal')
const display = document.getElementById('display');

const isPetVal = document.getElementById('isPet-val');
const typeVal = document.getElementById('type-val');
const nameVal = document.getElementById('name-val');

const accessDisplay = document.getElementById('access-display');

addAnimalBtn.addEventListener('click', addAnimal);


	/*
	* FUNCTIONS
	* Creates an access item which is contained inside a div.
	*/
	function createAccessItem(name, msg="accessed"){
		let date = new Date();
		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();



		let divCont = document.createElement('div');
		let msgSpan = document.createElement('span');
		let nameSpan = document.createElement('span');
		let dateSpan = document.createElement('span');

		msgSpan.textContent = msg;

		nameSpan.textContent = name;
		dateSpan.textContent = `${day} - ${month} - ${year}`;

		divCont.classList.add('access-item-cont');

		msgSpan.classList.add("obj-change");

		nameSpan.classList.add('access-name')

		dateSpan.setAttribute('title', 'DD - MM - YY');
		dateSpan.classList.add('access-date');

		divCont.appendChild(msgSpan);
		divCont.appendChild(nameSpan);
		divCont.appendChild(dateSpan);

		return divCont;
	}

	/*
	* FUNCTION
	* Meant to integrate the creation of the history element with the appending
	* of it to the displayAccess;
	*/
	function displayAccess(parentEl, str, obj=[], msg){
		if(obj.length > 0){
			for(let i = 0; i < obj.length; i++){
				parentEl.appendChild( createAccessItem(obj[i][0], msg) );
			}
		}
		else{
			parentEl.appendChild( createAccessItem(str, msg) );
		}
	}

	/*
	* EVENT HANDLER
	*/
	function addAnimal(event){
			// Elements declaration
		let divCont = document.createElement('div');
		let closeBtn = document.createElement('button');

		let form = document.createElement('form');
		let ul = document.createElement('ul');

		let isPetLi = document.createElement('li');
		let isPetUl = document.createElement('ul');
		let isPetTrueLi = document.createElement('li');
		let isPetFalseLi = document.createElement('li');

		let isPetTrueLabel = document.createElement('label');
		let isPetTrueInput = document.createElement('input');

		let isPetFalseLabel = document.createElement('label');
		let isPetFalseInput = document.createElement('input');

		let typeLi = document.createElement('li');
		let typeLabel = document.createElement('label');
		let typeInput = document.createElement('input');

		let nameLi = document.createElement('li');
		let nameLabel = document.createElement('label');
		let nameInput = document.createElement('input');

		let submitBtn = document.createElement('button');


			// Add content/classes/types
		divCont.classList.add('add-animal-container');
		closeBtn.classList.add('btn', 'close-btn');
		closeBtn.textContent = "X";

		form.classList.add('add-animal-form');

		isPetLi.textContent = 'It is a pet'
		isPetTrueLabel.textContent = 'true';
		isPetTrueLabel.setAttribute('for', 'true-input');
		isPetTrueInput.setAttribute('id', 'true-input');
		isPetTrueInput.setAttribute('name', 'isPetInputs')
		isPetTrueInput.setAttribute('type', 'radio');

		isPetFalseLabel.textContent = 'false';
		isPetFalseLabel.setAttribute('for', 'false-input');
		isPetFalseInput.setAttribute('id', 'false-input');
		isPetFalseInput.setAttribute('name', 'isPetInputs')
		isPetFalseInput.setAttribute('type', 'radio');
		isPetFalseInput.setAttribute('checked', '');

		typeLabel.textContent = 'Animal type: ';
		typeLabel.classList.add('required-input');
		typeLabel.setAttribute('for', 'type-input');
		typeInput.setAttribute('id', 'type-input');
		typeInput.setAttribute('type', 'text');
		typeInput.setAttribute('placeholder', 'type of animal?')
		typeInput.setAttribute('required', '');

		nameLabel.textContent = 'Animal name: ';
		nameLabel.classList.add('required-input');
		nameLabel.setAttribute('for', 'name-input');
		nameInput.setAttribute('id', 'name-input');
		nameInput.setAttribute('type', 'text');
		nameInput.setAttribute('placeholder', 'name of animal')
		nameInput.setAttribute('required', '');

		submitBtn.textContent = 'Create new animal';
		submitBtn.setAttribute('type', 'button');

			// Add EventListeners
		closeBtn.addEventListener('click', closeAddAnimal);

			// Append Elements
		divCont.appendChild(closeBtn);

		form.appendChild(ul);
		form.appendChild(submitBtn);

		ul.appendChild(isPetLi);
		isPetLi.appendChild(isPetUl);
		isPetUl.appendChild(isPetTrueLi);
		isPetUl.appendChild(isPetFalseLi);

		isPetTrueLi.appendChild(isPetTrueLabel);
		isPetTrueLi.appendChild(isPetTrueInput);

		isPetFalseLi.appendChild(isPetFalseLabel);
		isPetFalseLi.appendChild(isPetFalseInput);

		ul.appendChild(typeLi);
		typeLi.appendChild(typeLabel);
		typeLi.appendChild(typeInput);

		ul.appendChild(nameLi);
		nameLi.appendChild(nameLabel);
		nameLi.appendChild(nameInput)

		btnContainer.appendChild(divCont);
		divCont.appendChild(form);
	}

	/*
	* EVENT HANDLER
	*/

	function closeAddAnimal(){

	}

	/*
	* FUNCTION
	* Creates a nodeList which contains all the buttons with the animals-btn class.
	* Display an indicator in the button that is currently
	* displaying its property.
	*/
	function clickedButton(){
		let btnList = document.getElementsByClassName('btn-animals');

		for(let i = 0; i < btnList.length; i++){
			if(btnList[i].classList.contains('btn-active')){
				btnList[i].classList.remove('btn-active');
			}
		}
	}

	/*
	* EVENT HANDLER
	* Once a button is clicked it will modify the values of the corresponding
	* spans elements, the it will add an indicator to the clicked botton signaling
	* that is that button the one displaying the info.
	*/

	function displayInfo(event){
		// the use of the element id is temporal.
		// later we are gonna refer to it by the name,
		// so we can edit or remove such element without
		// affecting all the rest.

		for(let i = 0; i < animals.length; i++){
			if(animals[i]['name'] == event.target.textContent){
				isPetVal.textContent = animals[i]["isPet"];
				typeVal.textContent = animals[i]["type"];
				nameVal.textContent = animals[i]["name"];

				displayAccess(accessDisplay, animals[i]['name'], [], "accessed");
			}
		}

		clickedButton();
		event.target.classList.add('btn-active');
	}

	/*
	* EVENT HANDLER
	* It is activated everytime a remove-btn is clicked.
	* removes both the DOM node and the corresponding arr's obj.
	*/

	function removeAnimal(event) {
		let parentEl = event.target.parentElement;
		let objName = parentEl.id;
		parentEl.remove();

		for(let i = 0; i < animals.length; i++){
			if(animals[i]["name"] == objName){

				if(i == 0){
					animals = animals.splice(1, animals.length);
				}
				else if(i == animals.length - 1){
					animals = animals.splice(0, animals.length-1);
				}
				else {
					animals = animals.splice(0, i).concat( animals.splice(i-1, animals.length) );
				}
			}
		}

		displayAccess(accessDisplay, objName, [], "removed");
	}

	/*
	* EVENT HANDLER
	* Activate by the submit btn that appears when the user
	* clicks the reset-btn. Looks through the animals arr looking
	* in each object checking their names and comparing it with the
	* new name entered by the user. If a match is found it will alert
	* the user. Also creates a series of input elements to obtain the
	*
	*/
	function assignNReset(event){

			//Check if the element name is unique.
			for(let i = 0; i < animals.length; i++){
				if(animals[i]['name'] == nameInput.value){
					nameInput.style.border = "2px solid red";
					alert(`ERROR: ${nameInput.value} already exist`);
					nameInput.value = "";
					return;
				}
			}

			for(let i = 0; i < animals.length; i++){
				if(animals[i]['name'] == modifiedEl){
					boolVal = (inputTrue.checked == true) ? true : false;

					animals[i]['isPet'] = boolVal;
					animals[i]['name'] = nameInput.value;
					animals[i]['type'] = typeInput.value;

					isPetVal.textContent = animals[i]["isPet"];
					typeVal.textContent = animals[i]["type"];
					nameVal.textContent = animals[i]["name"];

					typeInput.value = "";
					nameInput.value = "";
					submitBtn.value = "";

					ulParent.remove();
					typeInput.remove();
					nameInput.remove();
					submitBtn.remove();

					let btnContainer = document.getElementById(modifiedEl);
					let animalBtn = btnContainer.childNodes[1];

					btnContainer.setAttribute('id', animals[i]['name']);
					animalBtn.textContent = animals[i]['name'];

					displayAccess(accessDisplay, animals[i]['name'], [], `${modifiedEl} modified to: `);
				}
			}
	}


	let modified;

	let ulParent = document.createElement('ul');
	let liTrue = document.createElement('li');
	let liFalse = document.createElement('li');

	let labelTrue = document.createElement('label');
	let labelFalse = document.createElement('label');

	let inputTrue = document.createElement('input');
	let inputFalse = document.createElement('input');

	let boolVal;

	let typeInput = document.createElement('input');
	let nameInput = document.createElement('input');
	let submitBtn = document.createElement('button');

	function editAnimal(event){
		modifiedEl = event.target.parentElement.id;

		labelTrue.setAttribute('for', 'true');
		labelFalse.setAttribute('for', 'false');
		labelTrue.textContent = 'true';
		labelFalse.textContent = 'false';

		inputTrue.setAttribute('type', 'radio');
		inputFalse.setAttribute('type', 'radio');
		inputFalse.setAttribute('checked', '');

		inputTrue.setAttribute('id', 'true');
		inputFalse.setAttribute('id', 'false');
		inputTrue.setAttribute('name', 'bool');
		inputFalse.setAttribute('name', 'bool');

		typeInput.placeholder = "insert new type";
		nameInput.placeholder = "insert new name";
		submitBtn.textContent = "submit";

		typeInput.type = "text";
		nameInput.type = "text";
		submitBtn.type = "button";

		typeInput.setAttribute("required", "");
		nameInput.setAttribute("required", "");

		ulParent.appendChild(liTrue);
		ulParent.appendChild(liFalse);

		liTrue.appendChild(labelTrue);
		liTrue.appendChild(inputTrue);

		liFalse.appendChild(labelFalse);
		liFalse.appendChild(inputFalse);

		isPetVal.textContent = "";
		typeVal.textContent = "";
		nameVal.textContent = "";

		isPetVal.appendChild(ulParent);
		typeVal.appendChild(typeInput);
		nameVal.appendChild(nameInput);

		submitBtn.addEventListener("click", assignNReset);

		display.appendChild(submitBtn);
	}

	function createButton(text, idNum){
		let container = document.createElement('div');
		let editBtn = document.createElement('button');
		let animalsBtn = document.createElement('button');
		let removeBtn = document.createElement('button');

		container.setAttribute("id", text);
		container.classList.add('animals-btn-container')

		editBtn.textContent = "edit";
		editBtn.classList.add("btn", "btn-edit");
		editBtn.addEventListener("click", editAnimal);

		animalsBtn.textContent = text;
		animalsBtn.setAttribute("id", idNum);
		animalsBtn.classList.add("btn", "btn-animals");
		animalsBtn.addEventListener("click", displayInfo);

		removeBtn.textContent = "X";
		removeBtn.classList.add("btn", "btn-remove");
		removeBtn.addEventListener("click", removeAnimal);

		container.appendChild(editBtn);
		container.appendChild(animalsBtn);
		container.appendChild(removeBtn);

		return container;
	}

	function displayButtons(display, arr){
		if(arr.length > 0){
			for(let i = 0; i < arr.length; i++){
				display.appendChild( createButton( arr[i]["name"], i) );
			}
		} else {
			display.appendChild( createButton( arr[i]["name"], i) );
		}
	}

	displayButtons(btnContainer, animals);
