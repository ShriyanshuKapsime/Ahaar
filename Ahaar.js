// Open modal
document.getElementById("openLogin").onclick = function() {
  document.getElementById("loginModal").style.display = "block";
}

// Close modal
document.querySelector(".close").onclick = function() {
  document.getElementById("loginModal").style.display = "none";
}

// Submit form
document.getElementById("loginForm").onsubmit = async function(e) {
  e.preventDefault();

  let userData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  // Send to backend
  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });

  let data = await res.json();
  alert(data.message);
}