document.addEventListener("DOMContentLoaded", function () {
  const body = document.getElementById("mainBody");
  const toggle = document.getElementById("modeToggle");
  const label = document.getElementById("modeLabel");

  // 🌗 Toggle Mode Handler
  if (body && toggle && label) {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      body.classList.add("dark-mode");
      toggle.checked = true;
      label.textContent = "Dark Mode";
    } else {
      label.textContent = "Light Mode";
    }

    toggle.addEventListener("change", function () {
      body.classList.toggle("dark-mode");
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
        label.textContent = "Dark Mode";
      } else {
        localStorage.setItem("mode", "light");
        label.textContent = "Light Mode";
      }
    });
  }

  // 💳 Razorpay Integration
  const payBtn = document.getElementById("payNowBtn");

  if (payBtn) {
    payBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const options = {
        key: "rzp_test_YourTestKeyHere", // 🔁 Replace with your Razorpay test key
        amount: 50000, // ₹500 in paise
        currency: "INR",
        name: "BookPal Bookstore",
        description: "Book Purchase",
        handler: function (response) {
          // ✅ Redirect to success page
          window.location.href = "/success/";
        },
        prefill: {
          name: "Maithri",
          email: "maithri@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#0d6efd"
        }
      };

      const rzp = new Razorpay(options);
      rzp.open();
    });
  }
});
