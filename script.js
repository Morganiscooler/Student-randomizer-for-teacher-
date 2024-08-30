let item = document.getElementsByClassName("item");
let randomizebtn = document.getElementById("Randomize");
let container = document.querySelector(".Grid");
let student1 = document.getElementById("student1");
let student2 = document.getElementById("student2");


const storedNames = [];

function addStudent() {
    const newItem = document.createElement("input");
        newItem.setAttribute("class", "item");
        newItem.setAttribute("placeholder", "Enter student name");
        container.appendChild(newItem);
}
function finish(){
    for (var i=0; i<item.length; i++) {
        var text = item[i].value;
        storedNames.push(text);
    }
    console.log(storedNames);
}

randomizebtn.addEventListener("click", () => {
    if(storedNames.length < 2) {
        alert("Please add at least two new students.");
        return;
    }

    student1.style.visibility = "visible";
    student2.style.visibility = "visible";
    //alert(inputEle[i].value);  //get each value
    // console.log(storedNames);
    var randomize = Math.floor(Math.random() * storedNames.length);
    const item1 = storedNames[randomize];
    var randomitem = storedNames.splice(randomize, 1);

    var randomize2 = Math.floor(Math.random() * storedNames.length);
    const item2 = storedNames[randomize2];
    var randomitem2 = storedNames.splice(randomize2, 1);

    console.log("Selected items:" + item1, item2);
    console.log("Updated array:" + storedNames);
    student1.innerText = "Student 1: " + item1; 
    student2.innerText = "Student 2: " + item2;

    //     student1.innerText = "Please enter a student name!";
    //     student2.innerText = "Please enter a student name!";

    // }
    // console.log(storedNames[randomize]);
    // alert(item[0].value);
})