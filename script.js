document.getElementById('jokeButton').addEventListener('click', fetchJoke);

function fetchJoke() {
    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = 'Loading...'; // displays the loading message

    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.type === 'single') {
                // this is for single part jokes
                jokeElement.innerHTML = data.joke;
            } else {
                // this is for two part jokes (setup and delivery)
                jokeElement.innerHTML = data.setup + ' <br> <strong>' + data.delivery + '</strong>';
            }
        })
        .catch(function(error) {
            jokeElement.innerHTML = 'Error fetching joke!';
            console.error('Error:', error);
        });
}
