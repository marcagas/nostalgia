
    /*****************************************************************/
    /*****************************************************************/

    function submitContactForm()
    {
        blockForm('contact','block');
        $.post('plugin/contact-form/contact-form.php',$('#contact').serialize(),submitContactFormResponse,'json');
    }

    /*****************************************************************/

    function submitContactFormResponse(response)
    {
        blockForm('contact','unblock');
        $('#contact-user-name,#contact-user-email,#contact-message,#contact-send').qtip('destroy');

        var tPosition=
        {
            'contact-send':{'my':'right center','at':'left center'},
            'contact-message':{'my':'top center','at':'bottom center'},
            'contact-user-name':{'my':'bottom center','at':'top center'},
            'contact-user-email':{'my':'bottom center','at':'top center'}
        };

        if(typeof(response.info)!='undefined')
        {	
            if(response.info.length)
            {	
                for(var key in response.info)
                {
                    var id=response.info[key].fieldId;
                    $('#'+response.info[key].fieldId).qtip(
                    {
                            style:      { classes:(response.error==1 ? 'ui-tooltip-error' : 'ui-tooltip-success')},
                            content: 	{ text:response.info[key].message },
                            position: 	{ my:tPosition[id]['my'],at:tPosition[id]['at'] }
                    }).qtip('show');				
                }
            }
        }
    }

    /*****************************************************************/
    /*****************************************************************/