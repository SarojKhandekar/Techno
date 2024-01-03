# Techno
<!DOCTYPE html>
<html lang="en">
<head>
  <title>User Registration Form</title>
  <link rel="stylesheet" href="assesment.css">
</head>
<body>
  <div class="container">
    <h2>User Registration</h2>
    <form id="registrationForm" onsubmit="submitForm(event)">
      <div class="form-group">
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" required>
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" required>
      </div>
      <div class="form-group">
        <button type="submit">Register</button>
      </div>
    </form>
    <div id="output"></div>
  </div>

  <script src="assesment.js"></script>
</body>
</html>
