const classes = ['greenBadge'];

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            document.title = data.title;
            document.querySelector('.title').textContent = data.title;
            document.querySelector('.date').textContent = data.date;

            const tagsContainer = document.querySelector('.tags');

            data.tags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tag ' + getRandomClass();
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });

            document.querySelector('.short-description').textContent = data.shortDescription;
            
            const contentContainer = document.querySelector('.content');
            contentContainer.innerHTML = marked(data.content);
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});

function getRandomClass(){
    return classes[Math.floor(Math.random()*classes.length)];
}