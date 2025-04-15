document.getElementById("bookApp")
.addEventListener("submit", function(e) {
    e.preventDefault();//synthatic event name
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    
   console.log("Name: " + name);
   console.log("Email: " + email);
   console.log("Date: " + date);
});
