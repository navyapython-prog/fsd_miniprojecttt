// script.js

// Function to handle service panel sliding effect
function slideServices() {
    let servicePanels = document.querySelectorAll('.service-panel');
    let activePanelIndex = 0;

    // Find the currently active panel
    for (let i = 0; i < servicePanels.length; i++) {
        if (servicePanels[i].classList.contains('active')) {
            activePanelIndex = i;
            break;
        }
    }

    // Move to the next panel
    let nextPanelIndex = activePanelIndex + 1;
    if (nextPanelIndex >= servicePanels.length) {
        nextPanelIndex = 0; // Wrap around to the first panel
    }

    // Remove 'active' class from all panels
    for (let panel of servicePanels) {
        panel.classList.remove('active');
    }

    // Add 'active' class to the next panel
    servicePanels[nextPanelIndex].classList.add('active');
}

// Automatically slide services every 5 seconds
setInterval(slideServices, 5000);
