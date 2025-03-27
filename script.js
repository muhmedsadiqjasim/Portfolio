document.addEventListener('DOMContentLoaded', () => {
    const cvBtn = document.getElementById('cv-btn');
    const contentDisplay = document.getElementById('content-display');

    // Function to load and parse markdown
    function loadMarkdown(file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                const htmlContent = marked.parse(data); // Use marked.parse() instead of marked()
                contentDisplay.innerHTML = htmlContent; // Display parsed HTML
            })
            .catch(error => {
                contentDisplay.textContent = 'Error loading file: ' + error;
            });
    }

    // Event listeners for the buttons
    cvBtn.addEventListener('click', () => loadMarkdown('cv.md'));
});
