let item = document.getElementsByClassName("item");
let randomizebtn = document.getElementById("Randomize");
let container = document.querySelector(".Grid");
let student1 = document.getElementById("student1");
let student2 = document.getElementById("student2");

function addStudent() {
    const newItem = document.createElement("input");
        newItem.setAttribute("class", "item");
        newItem.setAttribute("placeholder", "Enter student name");
        container.appendChild(newItem);
}

randomizebtn.addEventListener("click", () => {
    student1.style.visibility = "visible";
    student2.style.visibility = "visible";
    var text = item.value;
    //alert(inputEle[i].value);  //get each value
    const storedNames = [];
    for (var i=0; i<item.length; i++) {
        var text = item[i].value;
        storedNames.push(text);
    }
    // console.log(storedNames);
    var randomize = Math.floor(Math.random() * storedNames.length);
    var randomize2 = Math.floor(Math.random() * storedNames.length);
    student1.innerText = "Student 1: " + storedNames[randomize]; // Fix undefined issue
    student2.innerText = "Student 2: " + storedNames[randomize2];
    //     student1.innerText = "Please enter a student name!";
    //     student2.innerText = "Please enter a student name!";

    // }
    // console.log(storedNames[randomize]);
    // alert(item[0].value);
})