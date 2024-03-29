
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

    $('#prevslide, #nextslide, .ui-accordion-header a').live('click', function(e){e.preventDefault()});
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
        },
        {
            image: 'image/web_backgrounds/image11.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image12.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image13.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image14.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image15.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image16.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image17.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image18.jpg',
            title: ''
        },
        {
            image: 'image/web_backgrounds/image19.jpg',
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
        'why_us.html'		: {
            tab:'right',
            className:'features'
        },
        'works.html'		: {
            tab:'left',
            className:'features'
        },
        'pricing.html'          : {
            tab: 'right',
            className: 'checkmark'
        },
//        'services.html'		: {
//            tab:'right',
//            className:'features'
//        },
//        'portfolio.html'	: {
//            tab:'left',f
//            className:'image'
//        },
//        'blog.html'			: {
//            tab:'right',
//            className:'info'
//        },
        'contact.php'		: {
            tab:'left',
            className:'mail'
        },
        'testimonials.html'		: {
            tab:'right',
            className:'checkmark'
        },
        'strike_post.html' : {
            tab:'left',
            className: 'features'
        },
        'dictator.html' : {
            tab:'left',
            className: 'features'
        },
        'rooftop_cinema.html' : {
            tab:'left',
            className: 'features'
        },
        'rod_stewart.html' : {
            tab:'left',
            className: 'features'
        },
        'mtv.html' : {
            tab:'left',
            className: 'features'
        },
        'rockstar.html' : {
            tab:'left',
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

    $('#nextslide').live('click', function() {
       api.nextSlide();
    });

    $('#prevslide').live('click', function() {
       api.prevSlide();
    });

    var dialogSettings = {
        title: 'WE MIGHT BE PERFECT FOR EACH OTHER',
        modal: true,
        closeOnEscape: true,
        draggable: false,
        resizeable: false,
        show: {
           effect: 'fade'
        },
        hide: {
           effect: 'fade'
        }
    };

    $('#give-us-a-call').live('click', function(e) {
        e.preventDefault();
        var settings = $.extend({}, dialogSettings, {
            width: 632,
            height: 295,
            minHeight: 295,
            minWidth: 632,
            maxHeight: 295,
            maxWidth: 632
        });

        $('#contact-us-dialog').dialog(settings);

       return false;
    });

    $('#best-package-btn').live('click', function(e) {
        e.preventDefault();
        var settings = $.extend({}, dialogSettings, {
           width: 410,
           height: 210,
           minHeight: 210,
           minWidth: 410,
           maxWidth: 410,
           maxHeight: 210
        });
        $('#best-package-contact-dialog').dialog(settings);

        return false;
    });

    $('#broadcast-package-btn').live('click', function(e) {
       e.preventDefault();
       var settings = $.extend({}, dialogSettings, {
           width: 410,
           height: 210,
           minHeight: 210,
           minWidth: 410,
           maxWidth: 410,
           maxHeight: 210
       });

       $('#broadcast-package-contact-dialog').dialog(settings);
        return false;
    });

    $('#call-us-form button').button();

    $('form.contact-form').live('submit', function(e) {
        var $this = $(this);

       //validate
       if (!$(this).valid()) {
           alert('Please fill in valid data to all fields.');
           return false;
       } else {
           var data = $this.serializeArray();
           var url = $this.attr('action');
           var method = $this.attr('method');

           if ($this.attr('id') === 'call-us-form') {
//               $.extend(data, {'call_us': true});
               data.push({'name': 'call_us', 'value': 'true'});
           } else if ($this.attr('id') === 'best-package-contact-form') {
//               $.extend(data, {'best_package': true});
                data.push({'name': 'best_package', 'value': 'true'});
           } else if ($this.attr('id') === 'broadcast-package-contact-form') {
//               $.extend(data, {'broadcast_package': true});
                data.push({'name': 'broadcast_package', 'value': 'true'});
           }

           $.ajax({
               url: url,
               type: method,
               dataType: 'json',
               data: data,
               beforeSend: function() {
                   // add loader
                   $('button span', $this).addClass('loader');
               },
               success: function(data) {
                   if (data.error === 0) {
                       $this.closest('.contact-dialog').dialog('destroy');

                       //reset fields
                       $('input', $this).val('');
                   } else {
                       alert('Please provide valid details.');
                   }
               },
               complete: function() {
                   //remove loader
                   $('button span', $this).removeClass('loader');
               },
               error: function() {
                   alert('An error has occured');
               }
            });
       }

        return false;
    });

    $('.industries a').live('click', com.nostalgia.widgets.base.switchExamples);

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

        $('#best-package-btn, #broadcast-package-btn, #small-package-btn, .prettify-button').button();
    },

    checkIfHomePage: function() {
        if($('li a.home').attr('href') === window.location.hash) {
            $('#nostalgia-tab-content, #nostalgia-tab').addClass('no-background');
            $('#supersized-control-wrapper').show();
        } else {
            $('#nostalgia-tab-content, #nostalgia-tab').removeClass('no-background');
        }
    },

    switchExamples: function(e) {
        e.preventDefault();

        var $this = $(this);
        $('.industries a').removeClass('active');
        $this.addClass('active');

        var id = $this.attr('id');
        var works = $('.great-works');
        var set;
        works.find('li').hide();

        switch(id) {
            case 'concert-events':
                set = works.find('li.concert');
                break;
            case 'liquor-drugs':
                set = works.find('li.drugs');
                break;
            case 'leisure-entertainment':
                set = works.find('li.leisure, li.entertainment');
                break;
            case 'activism-social':
                set = works.find('li.social');
                break;
        }
        
        set.fadeIn('slow');
        set.filter(':even').addClass('even').removeClass('odd');
        set.filter(':odd').removeClass('even').addClass('odd');

        return false;
    }
};