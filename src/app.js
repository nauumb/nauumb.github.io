import { getCharacters, getComics} from "./modules/api-connection";

$('#search-character').change(function() {
    let string = $('#search-character').val();
    getCharacters(string);
});

$('#search-comic').change(function() {
    let string = $('#search-comic').val();
    getComics(string);
});

