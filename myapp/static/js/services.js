// services.js

document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.panel');
    const totalPanels = panels.length;
    let currentPanelIndex = 0;

    function showPanel(index) {
        panels.forEach((panel, i) => {
            if (i === index) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }

    function nextPanel() {
        currentPanelIndex = (currentPanelIndex + 1) % totalPanels;
        showPanel(currentPanelIndex);
    }

    setInterval(nextPanel, 5000); // Change slide every 5 seconds

    // Initially show the first panel
    showPanel(currentPanelIndex);
});
