// add element " <div id="slide-sidebar" class="bg-dark"></div> "
/* requipment :
    1. bootstrap css
    2. jquery

    simple html :

    <div id="slide-sidebar" class="bg-dark d-none">
        <i class="fa fa-arrow-left open-menu p-3 text-light mb-2"></i>
        <div class="list-group main-menu">
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark __active">
                <i class="fa fa-tachometer-alt icon"></i> Dashboard
            </a>
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark open-sub" target-sub="#sub1">
                <i class="fa fa-icons icon"></i> Icon
            </a>
            <div class="list-group sub-menu ml-2 mt-1 mb-1" id="sub1">
                <a href="#" class="list-group-item list-group-item-action bg-light">
                    <i class="fa fa-tachometer-alt icon"></i> Dashboard
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-light">
                    <i class="fa fa-icons icon"></i> Icon
                </a>

                <a href="#" class="list-group-item list-group-item-action bg-light">
                    <i class="fa fa-icons icon"></i> Example
                </a>
                <a href="#" class="list-group-item list-group-item-action bg-light">
                    <i class="fa fa-icons icon"></i> Table
                </a>            
            </div>
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark">
                <i class="fa fa-icons icon"></i> Example
            </a>
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark">
                <i class="fa fa-icons icon"></i> Table
            </a>            
        </div>

        <div class="list-group" style="position: absolute; bottom: 0; width: 100%;">
            <a href="#" class="list-group-item list-group-item-action text-light bg-dark rounded-0">
            <i class="fa fa-power-off"></i> Log Out
            </a>
        </div>
    </div>

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
    $(sidebarSelector).removeClass('d-none')

    $('.main-menu .list-group-item').first().addClass('rounded-0')
    $('.main-menu .list-group-item').last().addClass('rounded-0')

    $('.sub-menu .list-group-item').first().addClass('rounded-0')
    $('.sub-menu .list-group-item').last().addClass('rounded-0')
    $('.sub-menu .list-group-item').addClass('border-0')

    // $('.main-menu .list-group-item .icon').addClass('mr-2')
    $('.main-menu .list-group-item .icon').css('width', '30px')
    $('.main-menu > .list-group-item').click(function() {
        $('.main-menu > .list-group-item').removeClass('__active')
        $(this).addClass('__active')
    })

    $('.sub-menu').css('display', 'none');
    $('.open-sub').click(function() {
        let target = $(this).attr('target-sub')
        $(target).animate({height: 'toggle'});
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
