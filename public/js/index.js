/**
 * Created by asingh on 2/27/17.
 */

$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });

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
});




