console.log("✅ JavaScript is working!");

// Change text content
const changeTextButton = document.getElementById('changeTextButton');
if (changeTextButton) {
    changeTextButton.addEventListener('click', function() {
        const pMain = document.getElementById('p-main');
        if (pMain) {
            pMain.textContent = "Hello, I'm Margaret Gitau, a Software Engineer who loves cooking!";
            pMain.style.color = "#e74c3c"; // Change text color
        }
    });
}

// Change style for sections
const changeStyleButton = document.getElementById('changeStyleButton');
if (changeStyleButton) {
    changeStyleButton.addEventListener('click', function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.backgroundColor = "#fef6e4";
            section.style.borderLeft = "4px solid #f39c12";
        });
    });
}

// Add a new recipe element
const addElementButton = document.getElementById('addElementButton');
if (addElementButton) {
    addElementButton.addEventListener('click', function() {
        const newRecipe = document.createElement('div');
        newRecipe.innerHTML = `
            <h3>New Recipe Added!</h3>
            <p>Try our delicious new chocolate cake recipe!</p>
        `;
        newRecipe.style.padding = "1rem";
        newRecipe.style.backgroundColor = "#f0f8ff";
        newRecipe.style.borderRadius = "8px";
        newRecipe.style.margin = "1rem 0";
        const recipesContainer = document.getElementById('recipes');
        if (recipesContainer) {
            recipesContainer.appendChild(newRecipe);
        }
    });
}

// Remove last added element (ensure we don't remove initial content)
const removeElementButton = document.getElementById('removeElementButton');
if (removeElementButton) {
    removeElementButton.addEventListener('click', function() {
        const recipes = document.getElementById('recipes');
        if (recipes && recipes.children.length > 2) { // Keep at least the h2 and initial p
            recipes.removeChild(recipes.lastElementChild);
        }
    });
}
