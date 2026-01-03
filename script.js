const form = document.getElementById("bookingForm");
const confirmation = document.getElementById("confirmation");

if (form) {
  form.addEventListener("submit", () => {
    if (confirmation) confirmation.textContent = "✅ Sending…";
  });
}
