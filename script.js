const name = document.querySelector('.name').onclick = function()
{
    const promptName = prompt('Enter your name');
    let nameText = document.querySelector('.name-text').innerText = promptName;
}
const course = document.querySelector('.course').onclick = function()
{
    const promptCourse = prompt('Enter your course');
    let courseText = document.querySelector('.course-text').innerText = promptCourse;
}
const animal = document.querySelector('.animal').onclick = function()
{
    const promptAnimal = prompt('Enter your course');
    let animalText = document.querySelector('.animal-text').innerText = promptAnimal;
}