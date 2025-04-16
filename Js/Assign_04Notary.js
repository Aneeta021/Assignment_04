document.getElementById("bookApp").addEventListener("submit", function (e) {
  e.preventDefault(); //synthatic event name

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Date: " + date);
});

// -------------------------------- Accordion --------------------------------------

const accordions = document.querySelectorAll(".accordion-heading");

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const accordionBody = button.nextElementSibling;
    const isOpen = accordionBody.style.display === "block";

    // Close all accordion bodies
    document.querySelectorAll(".accordion-body").forEach((body) => {
      body.style.display = "none";
    });

    // Toggle the clicked one
    accordionBody.style.display = isOpen ? "none" : "block";
  });
});

// Optional: start with all closed
document.querySelectorAll(".accordion-body").forEach((body) => {
  body.style.display = "none";
});
