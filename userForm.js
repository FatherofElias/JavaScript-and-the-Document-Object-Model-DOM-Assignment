// Task 2
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Task 3 Validate form inputs
        if (!name || !email || !message) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Create user object
        const user = {
            name: name,
            email: email,
            message: message
        };

        console.log(user);
        
    
    });
});