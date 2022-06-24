const $word = document.getElementById("word");
const $amount = document.getElementById("amount");
const $use_latin = document.getElementById("use_latin");

var $out = document.getElementById("out");


function generate() {

    const chars = $use_latin.checked ? chars_latin : chars_uni;


    const word = $word.value;
    const amount = Math.min($amount.value, 1000);

    var words = [];

    for (let i = 0; i < amount; i++) {
        new_word = "";
        for (const c of word) {
            new_chars = chars[c];
            if (new_chars)
                new_word += new_chars[Math.floor(Math.random() * new_chars.length)];
            else
                new_word += c;
        }
        words.push(new_word);
    }

    $out.innerHTML = words.join('\n');
}