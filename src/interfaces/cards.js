export function buildCard(imageUrl, title, description) {
    $('.row').last().append('<div class="col-12 col-md-2 d-flex align-items-stretch "></div>');
    $('.col-12').last().append('<div class="card border-dark my-2"></div>');
    $('.card').last().append('<img class="card-img-top" src="' + imageUrl + '" alt="Card image cap">');
    $('.card').last().append('<div class="card-body"></div>');
    $('.card-body').last().append('<div class="card-title"> ' + title + ' </div>')

    $('.card-body').last().append('<div class="card-text"> ' + description + ' </div>');
    if(description.length > 30){
        $('.card-body').last().append('<a href="#" class="show_hide" data-content="toggle-text">Mostrar descripción...</a>');
        lessOrMoreText();
    }
}

function lessOrMoreText() {
    $(".card-text").last().hide();

    $(".show_hide").last().on("click", function (e) {
        e.preventDefault();
        let txt = "";

        if($(this).prev('.card-text').is(':visible')){
            txt = "Mostrar descripción...";
            $(this).prev('.card-text').slideToggle(350);

        }else{
            txt = "Ocultar descripción ...";

            $(this).prev('.card-text').slideToggle(450);
        }
        $(this).text(txt);
    });

}