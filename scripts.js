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
const display = document.getElementById('display');

const isPetVal = document.getElementById('isPet-val');
const typeVal = document.getElementById('type-val');
const nameVal = document.getElementById('name-val');

const accessDisplay = document.getElementById('access-display');


	/*
	* FUNCTIONS
	* Creates an access items which is contained inside a div.
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


	// EVENT HANDLER
	/*
	* FUNCTION
	* Creates a nodeList which contains all the buttons with the animals-btn class
	* Its purposes is displaying an indicator in the button that is currently
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
		// affecting all the others.
		let idx = event.target.id;

		isPetVal.textContent = animals[idx]["isPet"];
		typeVal.textContent = animals[idx]["type"];
		nameVal.textContent = animals[idx]["name"];

		displayAccess(accessDisplay, nameVal.textContent, [], "accessed");

		clickedButton();
		event.target.classList.add('btn-active');
	}

	/*
	* EVENT HANDLER
	* It is activated everytime a remove-btn is clicked.
	* It removes both the DOM node and the corresponding arr's obj.
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
					animals = animals.splice(0, i).concat( animals.splice(i, animals.length-1) );
				}
			}
		}

		displayAccess(accessDisplay, objName, [], "removed");
	}

	/*
	* EVENT HANDLER
	* Activate by the submit btn that appears when the user
	* clicks the reset-btn;
	*/
	function resetNAssign(event){

			for(let i = 0; i < animals.length; i++){

				if(animals[i]['name'] == edditedObj['modified']){

					animals[i]['isPet'] = edditedObj['bool'];
					animals[i]['name'] = edditedObj['name'];
					animals[i]['type'] = edditedObj['type'];

					isPetVal.textContent = animals[i]["isPet"];
					typeVal.textContent = animals[i]["type"];
					nameVal.textContent = animals[i]["name"];
				}
			}
		
		boolInput.remove();
		typeInput.remove();
		nameInput.remove();
		submitBtn.remove();
	}


	let edditedObj = {

	}

	let boolInput = document.createElement('input');
	let typeInput = document.createElement('input');
	let nameInput = document.createElement('input');
	let submitBtn = document.createElement('button');

	function editAnimal(event){
		let modifiedEl = event.target.parentElement.id;

		boolInput.placeholder = "insert new isPet";
		typeInput.placeholder = "insert new type";
		nameInput.placeholder = "insert new name";
		submitBtn.textContent = "submit";

		boolInput.type = "text";
		typeInput.type = "text";
		nameInput.type = "text";
		submitBtn.type = "button";

		boolInput.setAttribute("required", "");
		typeInput.setAttribute("required", "");
		nameInput.setAttribute("required", "");

		isPetVal.appendChild(boolInput);
		typeVal.appendChild(typeInput);
		nameVal.appendChild(nameInput);

		edditedObj = {
			bool: boolInput.value,
			type: typeInput.value,
			name: nameInput.value,
			modified: modifiedEl,
		}

		submitBtn.addEventListener("click", resetNAssign);

		display.appendChild(submitBtn);
	}

	function createButton(text, idNum){
		let container = document.createElement('div');
		let editBtn = document.createElement('button');
		let animalsBtn = document.createElement('button');
		let removeBtn = document.createElement('button');

		container.setAttribute("id", text);

		editBtn.textContent = "edit";
		editBtn.setAttribute("class", "btn btn-edit center");
		editBtn.addEventListener("click", editAnimal);

		animalsBtn.textContent = text;
		animalsBtn.setAttribute("id", idNum);
		animalsBtn.setAttribute("class", "btn btn-animals");
		animalsBtn.addEventListener("click", displayInfo);

		removeBtn.textContent = "X";
		removeBtn.setAttribute("class", "btn btn-remove center");
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
