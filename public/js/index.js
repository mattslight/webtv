/**
 * Created by asingh on 2/27/17.
 */

$(document).ready(function () {

    //$('#fullpage').fullpage();


    if ("onhashchange" in window) { // event supported?
        window.onhashchange = function () {
            hashChanged(window.location.hash);
        }
    }
    else { // event not supported:
        var storedHash = window.location.hash;
        window.setInterval(function () {
            if (window.location.hash != storedHash) {
                storedHash = window.location.hash;
                hashChanged(storedHash);
            }
        }, 100);
    }

    function hashChanged(channelId) {
        console.log("/chanStreams/" + channelId.substring(1));
        $.get('/chanStreams/' + channelId.substring(1), function(data) {
            console.log("http://content.jwplatform.com/jw6/" + data[0].jwid + ".xml");
            jwplayer("jwplayer").setup({
                "playlist": "http://content.jwplatform.com/jw6/" + data[0].jwid + ".xml"
            })
        })
    }

    function changeChan(data) {
        console.log(data)
    }


    /* Chan Changer code start */
    $('#chanChanger').hover(enter, leave);

    $ht = $('#ccContent').height();
    $('#ccContent').css({
        'left': '-' + $ht + 'px',
        'opacity': 1,
        'display': 'block'
    });


    function enter(event) { // mouseenter IMG

        $('#ccContent').data({
            closing: false
        }).stop(true, false).animate({
            left: '0',
            opacity: 0.8
        }, {
            duration: 600 // slow the opening of the drawer
        });
    };

    function leave(event) { // mouseout IMG

        $('#ccContent').data({
            closing: true
        }).delay(50).animate({
            left: '-' + $ht + 'px',
            opacity: 0.0
        }, {
            duration: 600
        });
    };

    $('#ccContent').hover(
        function() { // mouseenter Menu drawer
            if ($(this).data('closing')) {
                $(this).stop(true, true);
            }
        },
        leave
    );
    /* Chan Changer code end */

});




