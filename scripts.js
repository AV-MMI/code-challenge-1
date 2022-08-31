const animals = [
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
]


const btnContainer = document.getElementById('btn-container');
const visualContainer = document.getElementById('visual-container');

const isPetVal = document.getElementById('isPet-val');
const typeVal = document.getElementById('type-val');
const nameVal = document.getElementById('name-val');


	/**
	* FUNCTION
	**/

	function displayInfo(event){
		// the use of the element id is temporal.
		// later we are gonna refer to it by the name,
		// so we can edit or remove such element without
		// affecting all the others.
		let idx = event.target.id;

		isPetVal.textContent = animals[idx]["isPet"];
		typeVal.textContent = animals[idx]["type"];
		nameVal.textContent = animals[idx]["name"]
	}

	function createButton(text, idNum){
		let btn = document.createElement('button');

		btn.textContent = text;
		btn.setAttribute("id", idNum);
		btn.setAttribute("class", "btn")

		btn.addEventListener("click", displayInfo);

		return btn;
	}

	function displayButtons(display, arr){
		for(let i = 0; i < arr.length; i++){
			display.appendChild( createButton( arr[i]["name"], i) );
		}
	}

	displayButtons(btnContainer, animals);