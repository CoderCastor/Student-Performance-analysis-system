import {formValidationStudent, formValidationSubject,formValidationClass} from '../../../backend/dashboard/admin/classes.js'

var hamberBergerClick = document.querySelector(".hambergerIcon");
var hamBerger = document.querySelector(".hamBerger");
var leftArrow = document.querySelector(".leftArrow");
var leftBar = document.querySelector(".leftBar");
var labelNone = document.querySelectorAll("h3");
var leftBarOpen;

var entryID = 0;
var addSubjectButtonGreen;
var addStudentButtonGreen;

hamberBergerClick.addEventListener("click", function () {
  leftBarOpen = true;
  hamBerger.style.backgroundColor = "white";
  leftBar.classList.add("jsWidth");
  labelNone.forEach(function (lable) {
    lable.classList.add("labelNone");
  });
  hamberBergerClick.classList.add("hamBergerNone");
  hamBerger.classList.add("jsWidth");
  leftArrow.classList.add("leftArrowShow");
});
leftArrow.addEventListener("click", function () {
  leftBar.classList.toggle("jsWidth");
  labelNone.forEach(function (lable) {
    lable.classList.toggle("labelNone");
  });
  hamBerger.classList.toggle("jsWidth");
  leftArrow.classList.toggle("leftArrowShow");
  hamberBergerClick.classList.toggle("hamBergerNone");
  hamBerger.style.backgroundColor = "#024f5b22";
});

//all options
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let option5 = document.querySelector("#option5");
let option6 = document.querySelector("#option6");
let option7 = document.querySelector("#option7");

// all sections
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let section3 = document.querySelector(".section3");
let section4 = document.querySelector(".section4");
let section5 = document.querySelector(".section5");
let section6 = document.querySelector(".section6");
let section7 = document.querySelector(".section7");

section2.classList.add("class");
option1.classList.add("lablelogoRed");

option1.addEventListener("click", () => {
  option1.classList.add("lablelogoRed");
  option2.classList.remove("lablelogoRed");

  section1.classList.remove("class");
  section2.classList.add("class");
});

option2.addEventListener("click", () => {
  option1.classList.remove("lablelogoRed");
  option2.classList.add("lablelogoRed");

  section1.classList.add("class");
  section2.classList.remove("class");
});

//Modals addClassModal
let subSection2 = document.querySelector(".addClassModal");
let addClass = document.querySelector(".addClass");
let goBack = document.querySelector("#addClassButton2");

subSection2.style.display = "none";
addClass.addEventListener("click", () => {
  subSection2.style.display = "flex";
  addClass.style.backgroundColor = "black";
});
goBack.addEventListener("click", () => {
  subSection2.style.display = "none";
  addClass.style.backgroundColor = "red";
});

//entry
let addButton = document.querySelectorAll(".addButton");
let arroIcon = document.querySelectorAll(".arroIcon");
let entryViewButton = document.querySelectorAll(".entryViewButton");

entryViewButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const entryDiv = button.parentElement.parentElement.id;
    console.log(entryDiv);
    Section3.style.display="flex";
    section2.classList.add("class");
  })
})    

//add subject modal body
let addSubjectModal = document.querySelector("#addSubjectModal");
let addSubjectModalButton = document.querySelector("#addSubjectModalButton");
let addSubjectModalButtonBack = document.querySelector("#addSubjectModalButtonBack");
addSubjectModal.style.display = "none";


//add Student Modal body
let addStudentModal = document.querySelector("#addStudentModal");
let addStudentModalButton = document.querySelector("#addStudentModalButton");
let addStudentModalButtonGoBack = document.querySelector("#addStudentModalButtonGoBack");
addStudentModal.style.display = "none";



//shift to addsubject and addstudents buttons
addButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const entryDiv = button.parentElement;
    const future = entryDiv.querySelectorAll(".future");
    const current = entryDiv.querySelectorAll(".current");
    if (future) {
      future.forEach((btn) => {
        btn.classList.remove("displayNone");
      });
      current.forEach((btn) => {
        btn.classList.add("displayNone");
      });
    }


    //ADD Subject Modal
    const addSubjectButton = entryDiv.querySelector("#addSubjectButton");
    addSubjectButtonGreen = entryDiv.querySelector("#addSubjectButton");

    addSubjectButton.addEventListener("click", () => {
      entryID = addSubjectButton.parentElement.parentElement.id
      addSubjectModal.style.display = "flex";
      addSubjectButton.style.backgroundColor = "green";
      addSubjectButton.style.color = "white";
    });
    
    addSubjectModalButtonBack.addEventListener("click", () => {
      addSubjectModal.style.display = "none";
      addSubjectButton.style.backgroundColor = "white";
      addSubjectButton.style.color = "black";
    });


    //ADD Student Modal
    const addStudentButton = entryDiv.querySelector("#addStudentButton");
    addStudentButtonGreen = entryDiv.querySelector("#addStudentButton");
    addStudentButton.addEventListener("click", () => {
      addStudentModal.style.display = "flex";
      addStudentButton.style.backgroundColor = "green";
      addStudentButton.style.color = "white";
    });
    addStudentModalButtonGoBack.addEventListener("click", () => {
      addStudentModal.style.display = "none";
      addStudentButton.style.backgroundColor = "white";
      addStudentButton.style.color = "black";
    });

    
  });
});

arroIcon.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const entryDiv = button.parentElement;
    const future = entryDiv.querySelectorAll(".future");
    const current = entryDiv.querySelectorAll(".current");
    if (future) {
      future.forEach((btn) => {
        btn.classList.add("displayNone");
      });
      current.forEach((btn) => {
        btn.classList.remove("displayNone");
      });
    }
  });
});


////backend addClass form/modal submission
let addClassButton1 = document.querySelector("#addClassButton1");
addClassButton1.addEventListener("click",()=>{
	let addClassInput = document.getElementById("addClassInput").value;
	
	let classNameValid = document.getElementById("classNameValid");

	let displayNoneKey = formValidationClass(addClassInput);

	if(displayNoneKey==1){
		classNameValid.style.display="flex";
	}else{
		classNameValid.style.display="none";
	}
	if(displayNoneKey==0){
		subSection2.style.display = "none";
		document.getElementById("addClassInput").value="";
  		addClass.style.backgroundColor = "red";

	}
})

//backend addSubject form/modal submission 
addSubjectModalButton.addEventListener("click",()=>{	
	let addSubjectModalinputName = document.getElementById("addSubjectModalinputName").value;
	let addSubjectModalinputCode = document.getElementById("addSubjectModalinputCode").value;
	let addSubjectModalinputSessions = document.getElementById("addSubjectModalinputSessions").value;

	let subNameValid = document.getElementById("subNameValid");
	let subCodeValid = document.getElementById("subCodeValid");
	let subSessionsValid = document.getElementById("subSessionsValid");

	// console.log(addSubjectModalinputName+" "+addSubjectModalinputCode+" "+addSubjectModalinputSessions+" from EID: "+entryID);
	let displayNoneKey = formValidationSubject(addSubjectModalinputName,addSubjectModalinputCode,addSubjectModalinputSessions)
	
	if(displayNoneKey===1){
		subNameValid.style.display="flex";
	}else{
		subNameValid.style.display="none";
	}
	if(displayNoneKey===2){
		subCodeValid.style.display="flex";
	}
	else{
		subCodeValid.style.display="none";
	}
	if(displayNoneKey===3){
		subSessionsValid.style.display="flex";
	}
	else{
		subSessionsValid.style.display="none";
	}
	if(displayNoneKey==0){
		subNameValid.style.display="none";
		subCodeValid.style.display="none";
		subSessionsValid.style.display="none";

		document.getElementById("addSubjectModalinputName").value="";
		document.getElementById("addSubjectModalinputCode").value="";
		document.getElementById("addSubjectModalinputSessions").value="";

		addSubjectModal.style.display = "none";
	      addSubjectButtonGreen.style.backgroundColor = "white";
	      addSubjectButtonGreen.style.color = "black";
	}

	  
})

// backend addStudent form/modal submission
addStudentModalButton.addEventListener("click",()=>{
	
	let addStudentModalinputName = document.getElementById("addStudentModalinputName").value;
	let addStudentModalinputKey = document.getElementById("addStudentModalinputKey").value;
	
	let stdNameValid = document.getElementById("stdNameValid");
	let stdKeyValid = document.getElementById("stdKeyValid");

	let displayNoneKey = formValidationStudent(addStudentModalinputName,addStudentModalinputKey)
	
	if(displayNoneKey===1){
		stdNameValid.style.display="flex";
	}else{
		stdNameValid.style.display="none";
	}
	if(displayNoneKey===2){
		stdKeyValid.style.display="flex";
	}
	else{
		stdKeyValid.style.display="none";
	}
	if(displayNoneKey==0){
		stdNameValid.style.display="none";
		stdKeyValid.style.display="none";

		document.getElementById("addStudentModalinputName").value="";
		document.getElementById("addStudentModalinputKey").value="";

		addStudentModal.style.display = "none";
	      addStudentButtonGreen.style.backgroundColor = "white";
	      addStudentButtonGreen.style.color = "black";
	}
	  
})


//VIEW SECTIONS SECTIONS

var Section3 = document.querySelector(".Section3");

//ALL SECTIONS
let detailsSection = document.querySelector(".detailsSection");
let subjectsSection = document.querySelector(".subjectsSection");
let studentsSection = document.querySelector(".studentsSection");
let teachersSection = document.querySelector(".teachersSection");

//buttons --->
let menuElementView1 = document.querySelector(".menuElementView1");
let menuElementView2 = document.querySelector(".menuElementView2");
let menuElementView3 = document.querySelector(".menuElementView3");
let menuElementView4 = document.querySelector(".menuElementView4");

// initial
detailsSection.style.display="flex";
menuElementView1.classList.add('menuElementViewSelect');

menuElementView1.addEventListener("click",()=>{
  menuElementView1.classList.add('menuElementViewSelect');
  menuElementView2.classList.remove('menuElementViewSelect');
  menuElementView3.classList.remove('menuElementViewSelect');
  menuElementView4.classList.remove('menuElementViewSelect');

  detailsSection.style.display="flex";
  subjectsSection.style.display="none";
  studentsSection.style.display="none";
  teachersSection.style.display="none";
})

menuElementView2.addEventListener("click",()=>{
  menuElementView1.classList.remove('menuElementViewSelect');
  menuElementView2.classList.add('menuElementViewSelect');
  menuElementView3.classList.remove('menuElementViewSelect');
  menuElementView4.classList.remove('menuElementViewSelect');

  detailsSection.style.display="none";
  subjectsSection.style.display="flex";
  studentsSection.style.display="none";
  teachersSection.style.display="none";
})

menuElementView3.addEventListener("click",()=>{
  menuElementView1.classList.remove('menuElementViewSelect');
  menuElementView2.classList.remove('menuElementViewSelect');
  menuElementView3.classList.add('menuElementViewSelect');
  menuElementView4.classList.remove('menuElementViewSelect');

  detailsSection.style.display="none";
  subjectsSection.style.display="none";
  studentsSection.style.display="flex";
  teachersSection.style.display="none";
})

menuElementView4.addEventListener("click",()=>{
  menuElementView1.classList.remove('menuElementViewSelect');
  menuElementView2.classList.remove('menuElementViewSelect');
  menuElementView3.classList.remove('menuElementViewSelect');
  menuElementView4.classList.add('menuElementViewSelect');

  detailsSection.style.display="none";
  subjectsSection.style.display="none";
  studentsSection.style.display="none";
  teachersSection.style.display="flex";
})