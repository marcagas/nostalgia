
/******************************************************************************/

try
{
    var coordinate=new google.maps.LatLng(48.864037,2.353477);

    var mapOptions=
    {
        zoom:15,
        center:coordinate,
        streetViewControl:false,
        mapTypeControl:false,
        zoomControlOptions:
        {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var googleMap=new google.maps.Map(document.getElementById('map'),mapOptions);
}
catch(e) {}

/******************************************************************************/

$('.nostalgia-accordion').accordion({
    icons:'',
    animated:'easeOutExpo',
    autoHeight:false,
    collapsible:true
});

/******************************************************************************/

$('.fancybox-image').fancybox({});

/******************************************************************************/

$('.fancybox-video-youtube').bind('click',function()
{
    $.fancybox(
    {
        'padding'		: 0,
        'autoScale'		: false,
        'transitionIn'	: 'none',
        'transitionOut'	: 'none',
        'width'			: 680,
        'height'		: 495,
        'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        'type':'swf',
        'swf':
        {
            'wmode'				: 'transparent',
            'allowfullscreen'	: 'true'
        }
    });

    return false;
});

/******************************************************************************/

$('.fancybox-video-vimeo').bind('click',function()
{
    $.fancybox(
    {
        'padding'		: 0,
        'autoScale'		: false,
        'transitionIn'	: 'none',
        'transitionOut'	: 'none',
        'title'			: this.title,
        'width'			: 600,
        'height'		: 338,
        'href'			: this.href.replace(new RegExp("([0-9])","i"),'moogaloop.swf?clip_id=$1'),
        'type'			: 'swf',
        'swf':
        {
            'wmode'				: 'transparent',
            'allowfullscreen'	: 'true'
        }
    });

    return false;
});

/******************************************************************************/

$('a.work-img img, a.fancybox-image img,a.fancybox-video img').each(function()
{
    $(this).attr('src',$(this).attr('src') + '?i='+getRandom(1,100000));
    $(this).bind('load',function() {
        $(this).parent('a').css('background-image','none');
        $(this).fadeIn(1000);
    });
});

/******************************************************************************/

com.nostalgia.widgets.base.initFancyBoxLink();