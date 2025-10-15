// Open modal
document.getElementById("openLogin").onclick = function() {
  document.getElementById("registerModal").style.display = "block";
}

// Close modal
document.querySelector(".close").onclick = function() {
  document.getElementById("registerModal").style.display = "none";
}

// Submit form
document.getElementById("registerForm").onsubmit = async function(e) {
  e.preventDefault();

  let userData = {
    name: document.getElementById("username").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    password: document.getElementById("newpassword").value
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
//login page
document.getElementById("forlogin").addEventListener("click", () => {
  document.getElementById("loginmodal").style.display = "block";
  document.getElementById("registerModal").style.display = "none";
});
document.querySelector(".closelgn").onclick = function() {
  document.getElementById("loginmodal").style.display = "none";
};

document.getElementById("loginForm").onsubmit = async function(e) {
  e.preventDefault();

  const userData = {
    name: document.getElementById("usernamelgn").value,
    password: document.getElementById("password").value
  };

  try {
    // Send login data to backend
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });

    const data = await res.json();

    if (res.ok) {
      // ✅ Login successful
      alert(data.message || "Login successful!");
      
      // Optionally save user token or info if backend sends one
      // localStorage.setItem("token", data.token);

      // Redirect to another page (example: home.html)
      window.location.href = "index.html";
    } else {
      // ❌ Invalid credentials or error
      alert(data.message || "Login failed. Please try again.");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("Something went wrong. Please try again later!");
  }
};
document.getElementById("guest").addEventListener("click", () => {
  window.location.href = "Ahaar2.html";

})

const section = document.querySelector("#plate");
const observer = new IntersectionObserver((enteries) => {
    if (enteries[0].isIntersecting) {
        enteries[0].target.classList.add("show-plate");
    }else {
        enteries[0].target.classList.remove("show-plate");
    }
}, {
  threshold: 0.1
})
observer.observe(section); 
const text = document.querySelector("#texts");
const observertext = new IntersectionObserver((enteries) => {
    if (enteries[0].isIntersecting) {
        enteries[0].target.classList.add("show-text");
    }else {
        enteries[0].target.classList.remove("show-text");
    }
}, {
  threshold: 0.3
})
observertext.observe(text);
const moto = document.querySelector("#moto");
const observermoto = new IntersectionObserver((enteries) => {
    if (enteries[0].isIntersecting) {
        enteries[0].target.classList.add("show-moto");
    }else {
        enteries[0].target.classList.remove("show-moto");
    }
}, {
  threshold: 0.1
})
observermoto.observe(moto);
const login = document.querySelector("#openLogin");
const observerlogin = new IntersectionObserver((enteries) => {
    if (enteries[0].isIntersecting) {
        enteries[0].target.classList.add("show-login");
    }else {
        enteries[0].target.classList.remove("show-login");
    }
}, {
  // threshold: 0.3
})
observerlogin.observe(login);
     