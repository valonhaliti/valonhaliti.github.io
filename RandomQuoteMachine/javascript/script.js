$(function() {

    $('.jumbotron').hide(0).delay(500).fadeIn('slow');

    $('#quote-button').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
            success: function (data) {
                let post = data.shift(); // The data is an array of posts. Grab the first one.
                $('#quote-title').fadeOut('slow', function () {
                    $(this).text("- "+ post.title).fadeIn();
                });
                $('#quote-content').fadeOut('slow', function () {
                    console.log($(this));
                    $(this).html(post.content).fadeIn()
                });

                // If the Source is available, use it. Otherwise hide it.
                if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
                    $('#quote-source').html('Source:' + post.custom_meta.Source);
                } else {
                    $('#quote-source').text('');
                }
            },
            cache: false
        });
    });


    $('#twitter-button').on('click', function (e) {
        e.preventDefault();
        let content = encodeURIComponent($('#quote-content').text());
        let author = encodeURIComponent($('#quote-title').text());
        window.open("https://twitter.com/intent/tweet?text="+content +" "+  author);
    });
});
