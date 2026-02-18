const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // active class update karo
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    galleryItems.forEach(item => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block"; // show
      } else {
        item.style.display = "none"; // hide
      }
    });
  });
});
// let form = document.getElementById("contactForm");
// let msg = document.getElementById("formMsg");

// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // page reload hone se rokta hai

//   let name = document.getElementById("name").value.trim();
//   let email = document.getElementById("email").value.trim();
//   let message = document.getElementById("message").value.trim();

//   // Validation
//   if (name === "" || email === "" || message === "") {
//     msg.textContent = "❌ Please fill all fields!";
//     msg.className = "error";
//   } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
//     msg.textContent = "❌ Enter a valid email!";
//     msg.className = "error";
//   } else {
//     msg.textContent = "✅ Message submitted successfully!";
//     msg.className = "success";
//     form.reset(); // form clear
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("appointmentForm");
  let msg = document.getElementById("formMsg");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
      msg.textContent = "❌ Please fill all fields!";
      msg.style.color = "red";
    } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
      msg.textContent = "❌ Enter a valid email!";
      msg.style.color = "red";
    } else if (!/^[0-9]{10}$/.test(phone)) {
      msg.textContent = "❌ Enter a valid 10-digit phone number!";
      msg.style.color = "red";
    } else {
      msg.textContent = "✅ Appointment booked successfully!";
      msg.style.color = "green";
      form.reset();
    }
  });
});