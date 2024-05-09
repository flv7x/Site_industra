document.getElementById('login-button').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Get the values from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Here you can add your login logic, for now, let's just log the values
  console.log('Username:', username);
  console.log('Password:', password);
});
