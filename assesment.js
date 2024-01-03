function submitForm(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `<h3>Submitted Information:</h3>
                         <p><strong>Full Name:</strong> ${fullName}</p>
                         <p><strong>Email:</strong> ${email}</p>`;

  // You can add further processing or validation here
  // For instance, checking if passwords match or validating email format
}
