document.addEventListener('DOMContentLoaded', () => {
    const cvBtn = document.getElementById('cv-btn');
    const downloadCvBtn = document.getElementById('download-cv-btn'); // Added line
    const contentDisplay = document.getElementById('content-display');

    // Function to load and parse markdown
    function loadMarkdown(file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                const htmlContent = marked.parse(data);
                contentDisplay.innerHTML = htmlContent;
            })
            .catch(error => {
                contentDisplay.textContent = 'Error loading file: ' + error;
            });
    }

    // Event listeners for the buttons
    cvBtn.addEventListener('click', () => loadMarkdown('cv.md'));

    // Event listener for the download button
    downloadCvBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'Mohammed_Sadiq_Ahmed_CV.pdf'; // Path to your CV PDF
        link.download = 'Mohammed_Sadiq_Ahmed_CV.pdf'; // Filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
