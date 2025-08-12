window.onload = function () {
    // Show modal on load
    document.getElementById("callback-modal").style.display = "flex";

    // Initialize phone input plugin
    const phoneInput = document.querySelector("#phone");
    window.intlTelInput(phoneInput, {
      initialCountry: "in",
      preferredCountries: ["in", "us", "gb", "bd"],
      separateDialCode: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
    });
  };

  function closeModal() {
    document.getElementById("callback-modal").style.display = "none";
  }

  document.getElementById("callback-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Request submitted successfully!");
    closeModal();
  });

  document.getElementById('doctor-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('doctor-name').value;
  const specialty = document.getElementById('doctor-specialty').value;
  const contact = document.getElementById('doctor-contact').value;

  const list = document.getElementById('doctors-list');
  const noMsg = document.getElementById('no-doctors-message');
  noMsg.style.display = 'none';

  const card = document.createElement('div');
  card.className = "p-4 bg-blue-50 border-l-4 border-blue-500 shadow-sm rounded";

  card.innerHTML = `
    <strong class="text-blue-900">${name}</strong><br>
    <span class="text-sm text-gray-700">${specialty}</span><br>
    <span class="text-sm text-gray-600">${contact}</span>
  `;

  list.appendChild(card);

  // Optional: update doctor image dynamically
  document.getElementById("doctor-illustration").src = "https://cdn.pixabay.com/photo/2017/08/06/10/27/doctor-2597029_1280.jpg";

  // Clear form
  this.reset();
});
