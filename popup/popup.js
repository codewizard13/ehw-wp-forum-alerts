document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    fetch('https://wordpress.org/wp-login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `log=${username}&pwd=${password}&wp-submit=Log+In`
    })
    .then(response => {
      if (response.ok) {
        chrome.storage.sync.set({ 'wpCredentials': { username, password } }, function() {
          alert('Login successful');
        });
      } else {
        alert('Login failed');
      }
    });
  });
  