
$(document).ready(function()
{
    var options={};

    if ($.trim($('#nostalgia-tab-content-page').html()) === '') {

        if (window.location.hash === '') {
            $('#nostalgia-navigation-name-box').click();
            window.location.hash = $('li a.home').attr('href');
        }
        var activeLink = $('li a[href="' + window.location.hash + '"]');
        $('#nostalgia-tab').attr('data-selected', activeLink.attr('class'));
        activeLink.addClass('active');
    }

    $('#prevslide, #nextslide').live('click', function(e){e.preventDefault()});
//    {
//        image:'image/background/01.jpg',
//        title:'<span class="supersized-caption-title">Halle Kearney By Robby Mueller</span><br/><br/>Well, today was Halle Kearney\'s first senior picture session in Akron, OH and I decided to go with something a little different here.<br/><br/>This is not going to be used as one of her senior pictures (As far as I know).<br/><br/>We took a different spin on things and I\'m a tad bit stoked on it.<br/><br/><a href="http://www.flickr.com/photos/ro2b3yface/5623260278/in/photostream/">Author Website</a>'
//    }
    var slide = [
        {
            image: 'image/web_backgrounds/melb_city.jpg',
            title: 'Melbourne City'
        },
        {
            image: 'image/web_backgrounds/music_compress.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/one_sold.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/perth_city.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/streets_compress.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/train.jpg',
            title: ''
        }
    ];

    var page=
    {
        'home.html' : {
            tab: 'right',
            className: 'home'
        },
        'about.html'		: {
            tab:'left',
            className:'checkmark'
        },
        'works.html'		: {
            tab:'right',
            className:'features'
        },
        'pricing.html'          : {
            tab: 'left',
            className: 'checkmark'
        },
//        'services.html'		: {
//            tab:'right',
//            className:'features'
//        },
//        'portfolio.html'	: {
//            tab:'left',
//            className:'image'
//        },
//        'blog.html'			: {
//            tab:'right',
//            className:'info'
//        },
        'contact.php'		: {
            tab:'right',
            className:'mail'
        },
        'testimonials.html'		: {
            tab:'left',
            className:'checkmark'
        },
        'strike_post.html' : {
            tab:'right',
            className: 'features'
        }
//        'post.html'			: {
//            tab:'left',
//            className:'info'
//        }
    };
    $('#nostalgia').nostalgia(options,page,slide);

    $('#side-navigation li a').live('click', function(e) {
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');

        $('#nostalgia-tab').attr('data-selected', $(this).attr('data-class'));
    });

});

com = {};
com.nostalgia = {};
com.nostalgia.widgets = {};
com.nostalgia.widgets.base = {
    initFancyBoxLink: function() {
        $('.fancybox-link').fancybox({
            'transitionIn' : 'fade',
            'transitionOut' : 'fade',
            'speedIn' : 600,
            'speedOut' : 200,
            'overlayShow' : false
        });
    },

    checkIfHomePage: function() {
        if($('li a.home').attr('href') === window.location.hash) {
            $('#nostalgia-tab-content, #nostalgia-tab').addClass('no-background');
            $('#supersized-control-wrapper').show();
        } else {
            $('#nostalgia-tab-content, #nostalgia-tab').removeClass('no-background');
        }
    }
};