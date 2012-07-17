
$(document).ready(function()
{
    var options={};

    if ($.trim($('#nostalgia-tab-content-page').html()) === '') {
        $('#nostalgia-navigation-name-box').click();
        window.location.hash = $('li a.home').attr('href');
    }

    $('#prevslide, #nextslide').live('click', function(e){e.preventDefault()});
//    {
//        image:'image/background/01.jpg',
//        title:'<span class="supersized-caption-title">Halle Kearney By Robby Mueller</span><br/><br/>Well, today was Halle Kearney\'s first senior picture session in Akron, OH and I decided to go with something a little different here.<br/><br/>This is not going to be used as one of her senior pictures (As far as I know).<br/><br/>We took a different spin on things and I\'m a tad bit stoked on it.<br/><br/><a href="http://www.flickr.com/photos/ro2b3yface/5623260278/in/photostream/">Author Website</a>'
//    },
//
//    {
//        image:'image/background/02.jpg',
//        title:'<span class="supersized-caption-title">Lavender By Vincent van der Pas</span><br/><br/>Taken in the south of France, near Apt.<br/><br/><a href="http://www.flickr.com/photos/archetypefotografie/4958711873/in/photostream/">Author Website</a>'
//    },
//
//    {
//        image:'image/background/03.jpg',
//        title:'<span class="supersized-caption-title">Plainsong By Robb North</span><br/><br/>sometimes you make me feel<br/>like i\'m living at the edge of the world<br/>like i\'m living at the edge of the world<br/><br/><a href="http://www.flickr.com/photos/robbn1/3405147407/in/photostream/">Author Website</a>'
//    },
//
//    {
//        image:'image/background/04.jpg',
//        title:'<span class="supersized-caption-title">Falcon on Rue Drolet By Flat-Black 66</span><br/><a href="http://www.flickr.com/photos/flatblack66/4733463620/">Author Website</a>'
//    },
//
//    {
//        image:'image/background/05.jpg',
//        title:'<span class="supersized-caption-title">New kitchen radio By Johan Larsson</span><br/><br/>Tivoli Model One.<br/><br/><a href="http://www.flickr.com/photos/johanl/6125230384/in/photostream/">Author Website</a>'
//    },
//
//    {
//        image:'image/background/06.jpg',
//        title:'<span class="supersized-caption-title">Bekohlicious! By 55Laney69</span><br/><br/>Canon 550D + Canon 50mm F1.8 EF II @F1.8 :). Cross Processed with Alien Skin Exposure<br/><br/><a href="http://www.flickr.com/photos/hansel5569/6001781706/in/photostream/">Author Website</a>'
//    }
//    ];
    var slide = [
        {
            image: 'image/web_backgrounds/michael.jpg',
            title: 'Michael Gudinski poster - 2011'
        },
        {
            image: 'image/web_backgrounds/michael.jpg',
            title: 'Michael Gudinski poster - 2011'
        },
        {
            image: 'image/web_backgrounds/image1.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image2.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image3.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image4.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image5.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image6.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image7.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image8.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image9.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image10.jpg',
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
            className: 'pricing'
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
            className:'testimonials'
        }
//        'post.html'			: {
//            tab:'left',
//            className:'info'
//        }
    };
    $('#nostalgia').nostalgia(options,page,slide);

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