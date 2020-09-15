$('button').click(() => {
    let value = $('input').val();
    $('ul').append(`<li>${value}</li>`);
});

$('ul').on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');
});