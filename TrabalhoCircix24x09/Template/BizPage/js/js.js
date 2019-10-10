$(function() {
    $("#playlist li").on("click", function() {
        $("#videoarea").attr({
            "src": $(this).attr("movieurl"),
            "poster": "",
            "autoplay": "autoplay"
        })
    })
    $("#videoarea").attr({
        "src": $("#playlist li").eq(0).attr("movieurl"),
        "poster": $("#playlist li").eq(0).attr("moviesposter")
    })
})

$(function() {
    $("#playlist_audio .audios").on("click", function() {
        $("#audioarea").attr({
            "src": $(this).attr("movieurl"),
            "autoplay": "autoplay"
        })
    })
    $("#audioarea").attr({
        "src": $("#playlist_audio .audios").eq(0).attr("movieurl")
    })
});