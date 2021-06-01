function updateTimeblocks() {
    var currentTime = moment().hours()*100;

    $('.time-block').each(function () {
        var hour = parseInt($(this).attr('id'));
        $(this).removeClass('past present future');

        if (hour < currentTime) {
            $(this).addClass('past');
        } else if (hour > currentTime) {
            $(this).addClass('future');
        } else {
            $(this).addClass('present');
        }    
    });
}

function loadTimeblocks() {
    $('.time-block').each(function() {
      var index = $(this).attr('id');
      $(this).children('.description').val(localStorage.getItem(index));  
    });
}



$(document).ready(function () {
    loadTimeblocks();
    updateTimeblocks();

    $('.saveBtn').on('click', function () {
        var value = $(this).siblings('.description').val();
        var index = $(this).parent().attr('id');

        localStorage.setItem(index, value);
    });
});

