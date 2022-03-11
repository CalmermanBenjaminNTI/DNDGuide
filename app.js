const skillButtons = document.querySelectorAll("button.skill");
const documentationButtons = Array.from(document.querySelectorAll("button.documentation"));

console.log(documentationButtons);

skillButtons.forEach((button) => {
    button.addEventListener("click", showSkill);
})

function showSkill(event) {
    let targetClass = event.target.getAttribute("data-skill");
    document.querySelector("." + targetClass).classList.toggle("hidden");
}

documentationButtons.forEach((button) => {
    button.addEventListener("click", hideDocumentation);
})

function hideDocumentation(event) {
    event.target.parentElement.classList.add("hidden");
}