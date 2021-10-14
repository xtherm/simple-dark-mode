function myFunction() {
    var element = document.getElementById("button");
    element.classList.toggle("active");
    
    var element = document.getElementById("container")
    element.classList.toggle("active");

    var element = document.getElementById("textabove")
    if(element.innerHTML === "Light Mode"){
        element.innerHTML = "Dark Mode"
    }
    else{
        element.innerHTML = "Light Mode"
    }
}