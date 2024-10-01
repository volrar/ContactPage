document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".questionContainers");

    questions.forEach(question => {
        const header = question.querySelector(".question");
        const content = question.querySelector(".content");

        header.addEventListener("click", () => {
            // Toggle active class for content
            content.classList.toggle("active");
            content.classList.toggle("inactive");
        });
    });
});