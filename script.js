document.addEventListener('DOMContentLoaded', function() {
    // Example: Load tasks from the server
    fetch('/tasks')
        .then(response => response.json())
        .then(data => {
            // Render tasks on the page
            console.log(data);
        })
        .catch(error => console.error('Error loading tasks:', error));
});
