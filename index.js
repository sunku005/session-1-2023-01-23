const add_button = document.getElementById("add-button");
add_button.addEventListener("click", addNameToList);


function addNameToList() {
    // get the name that uses the 
    var name = document.getElementById("name-input").value;
    const new_name =  document.createElement("li")
    new_name.innerHTML = name
    document.getElementById("guest-book").appendChild(new_name);
}