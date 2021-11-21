// List of words
let WORDS = null;

$.ajax({
    'async': false,
    'global': false,
    'url': "/list/dictionary_rus_eng.json",
    'dataType': "json",
    'success': function (data) {
        WORDS = data;
    }
});

// Generator random numbers
function generatorRandomNumbers() {
    return Math.floor(Math.random() * WORDS['list'].length)
}

$('#card-button').on('click', function() {
    // Random words from lsist
    let randNum = generatorRandomNumbers()

    // Print random words from list, words and translation
    $('#word').text(WORDS['list'][randNum]['word']);
    $('#translation').text(WORDS['list'][randNum]['translation']);

    //make sound
    document.getElementById('sound1').play();
});

$(window).keypress(function (event) {
    if (event.key === ' ' || e.key === 'spacebar'.toLowerCase()) {
        event.preventDefault()

        // Random words from list
        let randNum = generatorRandomNumbers()

        // Print random words from list, words and translation
        $('#word').text(WORDS['list'][randNum]['word']);
        $('#translation').text(WORDS['list'][randNum]['translation']);

        //make sound
        document.getElementById('sound1').play();
    }
});

let titanic = new Titanic({
    hover: true, // auto animated on hover (default true)
    click: true  // auto animated on click/tap (default false)
});