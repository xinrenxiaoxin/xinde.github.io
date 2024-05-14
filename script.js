document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const responseMessage = document.getElementById('response-message');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        // Send login request to backend
        sendRequest('login', {username, password});
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        // Send register request to backend
        sendRequest('register', {username, password});
    });

    function sendRequest(endpoint, data) {
        fetch(`http://localhost:8000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.innerText = data.message;
            // Redirect user if login or register is successful
            if (data.success) {
                window.location.href = '/dashboard.html'; // Redirect to dashboard
            }
        })
        .catch(error => console.error('Error:', error));
    }
});
