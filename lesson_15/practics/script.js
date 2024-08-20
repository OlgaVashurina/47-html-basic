document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const apiUrl = `https://api.genderize.io/?name=${name}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('nameOutput').textContent = `Имя: ${data.name}`;
            document.getElementById('genderOutput').textContent = `Пол: ${data.gender || 'Не определен'}`;
            document.getElementById('probabilityOutput').textContent = `Вероятность: ${data.probability || 'Не определена'}`;
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
});