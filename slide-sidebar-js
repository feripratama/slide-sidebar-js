// add element " <div id="slide-sidebar" class="bg-dark"></div> "
/* requipment :
    1. bootstrap css
    2. jquery
*/

function sidebar(sidebarSelector) {
    $('head').append(`
        <style>
            ${sidebarSelector} {
                position: absolute;
                top: 0;
                width: 16rem;
                z-index: 20;
            }
            .__active {
                background: #171717 !important;
            }
        </style>
    `)

    $(window).resize(function(){
        $(sidebarSelector).height($(window).height())    
    })
    $(sidebarSelector).height($(window).height())
    $(sidebarSelector).css('left', '-'+$(sidebarSelector).width()+'px')

    $(sidebarSelector).append(`
        <i class="fa fa-arrow-left open-menu p-3 text-light mb-2"></i>
        <div class="list-group main-menu">
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark">
                Dashboard
            </a>
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark">Morbi leo risus</a>
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark">Vestibulum at eros</a>
        </div>

        <div class="list-group" style="position: absolute; bottom: 0; width: 100%;">
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark rounded-0">Log Out</a>
        </div>
    `)

    $('.main-menu .list-group-item').first().addClass('rounded-0')
    $('.main-menu .list-group-item').last().addClass('rounded-0')
    $('.main-menu .list-group-item').click(function() {
        $('.main-menu .list-group-item').removeClass('__active')
        $(this).addClass('__active')
    })

    $('.open-menu').click(function() {
        if($(sidebarSelector).css('left').includes("-")) {
            $(sidebarSelector).animate({left: '0px'});
        } else {
            $(sidebarSelector).animate({left: '-'+$(sidebarSelector).width()+'px'});
        }
    })
    .css('cursor', 'pointer')
}
