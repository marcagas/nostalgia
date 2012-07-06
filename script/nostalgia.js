
/**************************************************************************/

(function($)
{
    /**********************************************************************/

    var Nostalgia=function(options,page,slide)
    {
        /******************************************************************/

        var defaults=
        {
            tab			:	'left',
            className	:	'chekmark'
        };

        var $this=this;

        $this.page=page;
        $this.slide=slide;
        $this.options=options;

        $this.options=$.extend(options,defaults);

        $this.enable=false;

        $this.currentHash='';
        $this.previousHash='';

        $this.tabContent=false;

        $this.startPreloader=$('#start-preloader');
        $this.backgroundOverlay=$('#background-overlay');

        $this.nostalgia=$('#nostalgia');

        /***/

        $this.nostalgiaNavigation=$('#nostalgia-navigation');
        $this.nostalgiaNavigationMenu=$('#nostalgia-navigation-menu');
        $this.nostalgiaNavigationMenuList=$('#nostalgia-navigation-menu ul');
        $this.nostalgiaNavigationNameBox=$('#nostalgia-navigation-name-box');
        $this.nostalgiaNavigationClickHereBox=$('#nostalgia-navigation-click-here-box');

        $this.nostalgiaNavigationMenuHeight=400;

        /***/

        $this.nostalgiaTab=$('#nostalgia-tab');
        $this.nostalgiaTabIcon=$('#nostalgia-tab-icon');

        $this.nostalgiaTabWidth=50;

        $this.nostalgiaTabIconWidth=parseInt($('#nostalgia-tab-icon').css('width'));

        $this.supersizedControl=$('#supersized-control-wrapper');

        /******************************************************************/

        this.load=function()
        {
            $this.createMenuSlider();
            $this.createSupersizedSlider();

            $this.createStartPrealoder({
                complete:function()

                {
                    $this.startPreloader.children('div:first').fadeOut(300,function()
                    {
                        $this.startPreloader.animate({
                            width:0
                        },1000,'easeOutQuint',function()

                        {
                                $this.blink($this.nostalgiaNavigationClickHereBox);
                                $this.showSupersizedSliderControl(true);

                                $this.nostalgiaNavigationNameBox.bind('click',function()
                                {
                                    if(parseInt($this.nostalgiaNavigationMenu.height())==0)
                                    {
                                        window.location.href='#!/menu';
                                        $this.showNavigation(true,{
                                            complete:function()

                                            {
                                                $this.showNavigationClickHereBox(false);
                                            }
                                        });
                                    }
                                });

                                $this.backgroundOverlay.css('display','block');

                                $this.enable=true;
                                $this.handleHash();
                            });
                    });
                }
            });
        };

        /******************************************************************/
        /******************************************************************/

        this.handleHash=function()
        {
            $this.currentHash=window.location.hash;

            $(window).bind('hashchange',function(event)
            {
                event.preventDefault();

                if($this.isEnable()==false) return;

                $this.currentHash=window.location.hash;
                $this.doHash();
                $this.previousHash=$this.currentHash;
            });

            if($this.currentHash!=$this.previousHash) $this.doHash();
        };

        /******************************************************************/

        this.doHash=function()
        {
            if(!$this.enable) return(false);
            if(!$this.checkHash()) return(false);

            $this.enable=false;

            if($this.currentHash=='#!/main')
            {
                $this.close({
                    complete:function()

                    {
                        $this.showNavigationClickHereBox(true);
                        $this.enable=true;
                        return(true);
                    }
                });
                return(true);
            }
            else if($this.currentHash=='#!/menu')
            {
                $this.showNavigationClickHereBox(false);
                $this.showNavigation(true,{
                    complete:function()

                    {
                        $this.enable=true;
                        return(true);
                    }
                });
                return(true);
            }

            $this.showNavigation(true);
            $this.showSupersizedSliderControl(false);

            var path=$this.currentHash.substring(3);
            $this.getPage(path,{
                complete:function()

                {
                    if($this.tabContent!==false)
                    {
                        $this.open(false,{
                            complete:function()

                            {
                                api.nextSlide();
                                $this.previousHash=$this.currentHash;
                                $this.enable=true;
                            }
                        });
                    }
                    else $this.enable=true;
                }
            });

            return(true);
        };

        /******************************************************************/

        this.checkHash=function()
        {
            return($this.currentHash.substring(0,3)=='#!/' ? true : false);
        };

        /******************************************************************/
        /******************************************************************/

        this.open=function(forceOpen,event)
        {
            var tabOpen=$this.isOpen();
            var tabToOpen=this.getPageProperty($this.currentHash,'tab');

            if((tabOpen===false) && (!forceOpen))
            {
                $this.moveNavigation(tabToOpen,{
                    complete:function() {
                        $this.open(true,event);
                    }
                });
            }
            else
            {
                if(tabToOpen=='left')
                {
                    if(tabOpen=='left')
                    {
                        $this.closeTab(tabOpen,{
                            complete:function()

                            {
                                $this.openTab(tabToOpen,{
                                    complete:function() {
                                        $this.doEvent(event);
                                    }
                                });
                            }
                        });
                    }
                    else if(tabOpen=='right')
                    {
                        $this.closeTab(tabOpen,{
                            complete:function()

                            {
                                $this.moveNavigation(tabToOpen,{
                                    complete:function()

                                    {
                                        $this.openTab(tabToOpen,{
                                            complete:function()  {
                                                $this.doEvent(event);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                    else $this.openTab(tabToOpen,{
                        complete:function() {
                            $this.doEvent(event);
                        }
                    });
                }
                else if(tabToOpen=='right')
                {
                    if(tabOpen=='right')
                    {
                        $this.closeTab(tabOpen,{
                            complete:function()

                            {
                                $this.openTab(tabToOpen,{
                                    complete:function() {
                                        $this.doEvent(event);
                                    }
                                });
                            }
                        });
                    }
                    else if(tabOpen=='left')
                    {
                        $this.closeTab(tabOpen,{
                            complete:function()

                            {
                                $this.moveNavigation(tabToOpen,{
                                    complete:function()

                                    {
                                        $this.openTab(tabToOpen,{
                                            complete:function() {
                                                $this.doEvent(event);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                    else $this.openTab(tabToOpen,{
                        complete:function() {
                            $this.doEvent(event);
                        }
                    });
                }
            }
        };

        /******************************************************************/

        this.close=function(event)
        {
            var tab=this.isOpen();

            if(tab===false)
            {
                $this.moveNavigation(null,{
                    complete:function()

                    {
                        $this.showNavigation(false,{
                            complete:function() {
                                $this.doEvent(event);
                            }
                        });
                    }
                });
            }
            else
            {
                $this.closeTab(tab,{
                    complete:function()

                    {
                        $this.moveNavigation(null,{
                            complete:function()

                            {
                                $this.showNavigation(false,{
                                    complete:function() {
                                        $this.doEvent(event);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        };

        /******************************************************************/

        this.isOpen=function()
        {
            if($this.nostalgiaTab.width()==0) return(false);

            if(parseInt($this.nostalgiaTab.css('left'))==0) return('left');
            if(parseInt($this.nostalgiaTab.css('right'))==0) return('right');

            return(false);
        };

        /******************************************************************/
        /******************************************************************/

        this.openTab=function(tabToOpen,event)
        {
            $this.fillTab();
            $this.setTabClass(tabToOpen);

            if(tabToOpen=='left')
            {
                $this.nostalgiaTab.css({
                    left:0,
                    right:'auto'
                });
                $this.nostalgiaTab.animate({
                    width:$this.nostalgiaTabWidth+'%'
                },{
                    duration:1000,
                    easing:'easeOutExpo',
                    complete:function()

                    {
                        $this.showTabIcon(true,tabToOpen,{
                            complete:function() {
                                $this.doEvent(event);
                            }
                        });
                    }
                });
            }
            else
            {
                $this.nostalgiaTab.css({
                    left:'auto',
                    right:0
                });
                $this.nostalgiaTab.animate({
                    width:$this.nostalgiaTabWidth+'%'
                },{
                    duration:1000,
                    easing:'easeOutExpo',
                    complete:function()

                    {
                        $this.showTabIcon(true,tabToOpen,{
                            complete:function() {
                                $this.doEvent(event);
                            }
                        });
                    }
                });
            }
        };

        /******************************************************************/

        this.closeTab=function(tabToClose,event)
        {
            $this.showTabIcon(false,tabToClose,{
                complete:function()

                {
                    $(':input,a').qtip('destroy');
                    $this.nostalgiaTab.animate({
                        width:'0%'
                    },{
                        duration:1000,
                        easing:'easeOutExpo',
                        complete:function()

                        {
                            $this.doEvent(event);
                        }
                    });
                }
            });
        };

        /******************************************************************/

        this.fillTab=function()
        {
            $('#nostalgia-tab-content-page').html($this.tabContent);
            $this.createScrollbar();

            jQuery.getScript('page/script/page.js',function() {});
        };

        /******************************************************************/

        this.setTabClass=function(tabToOpen)
        {
            var className=$this.getPageProperty($this.currentHash,'className');

            $this.resetTabClass();

            $this.nostalgiaTab.addClass('nostalgia-tab-'+tabToOpen);
            $this.nostalgiaTabIcon.addClass('nostalgia-tab-icon-'+className);
        };

        /******************************************************************/

        this.resetTabClass=function()
        {
            $this.nostalgiaTab.attr('class','');
            $this.nostalgiaTabIcon.attr('class','');
            $this.nostalgiaTabIcon.css({
                left:'',
                right:''
            });
        };

        /******************************************************************/

        this.showTabIcon=function(show,tab,event)
        {
            var option;
            var position=-1*$this.nostalgiaTabIconWidth;

            if(show) option=tab=='left' ? {
                'left':0
            } : {
                'right':0
            };
            else option=tab=='left' ? {
                'left':position
            } : {
                'right':position
            };

            $this.nostalgiaTabIcon.animate(option,{
                duration:300,
                complete:function() {
                    $this.doEvent(event);
                }
            });
        };

        /******************************************************************/
        /******************************************************************/

        this.showNavigation=function(show,event)
        {
            if(show)
            {
                $this.nostalgiaNavigationMenu.animate({
                    height:$this.nostalgiaNavigationMenuHeight
                },{
                    duration:500,
                    complete:function()

                    {
                        $this.doEvent(event);
                    }
                });
            }
            else
            {
                $this.nostalgiaNavigationMenu.animate({
                    height:'0'
                },{
                    duration:500,
                    complete:function()

                    {
                        $this.doEvent(event);
                    }
                });
            }
        };

        /******************************************************************/

        this.moveNavigation=function(tabToOpen,event)
        {
            $this.showNavigationClickHereBox(false);
            $this.showSupersizedSliderControl(false);

            if(tabToOpen=='left')
            {
                $this.nostalgiaNavigation.animate({
                    right:'-300px'
                },{
                    duration:500,
                    complete:function() {
                        $this.doEvent(event);
                    }
                });
            }
            else if(tabToOpen=='right')
            {
                $this.nostalgiaNavigation.animate({
                    right:'40px'
                },{
                    duration:500,
                    complete:function()  {
                        $this.doEvent(event);
                    }
                });
            }
            else
            {
                if($this.nostalgiaNavigation.css('right')!=='260px')
                {
                    $this.showNavigation(false,{
                        complete:function()

                        {
                            $this.nostalgiaNavigation.animate({
                                opacity:0
                            },{
                                duration:500,
                                complete:function()

                                {
                                    $this.nostalgiaNavigation.css('right','');
                                    $this.nostalgiaNavigation.animate({
                                        opacity:1
                                    },{
                                        duration:500,
                                        complete:function()

                                        {
                                            $this.showSupersizedSliderControl(true);
                                            $this.showNavigationClickHereBox(true);

                                            $this.doEvent(event);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
                else
                {
                    $this.showSupersizedSliderControl(true);
                    $this.doEvent(event);
                }
            }
        };

        /******************************************************************/
        /******************************************************************/

        this.getPageProperty=function(hash,property)
        {
            try
            {
                return($this.page[hash.substring(3)][property]);
            }
            catch(e)
            {
                return($this.options[property]);
            };
        };

        /******************************************************************/

        this.getPage=function(path,event)
        {
            $.get('page/'+path,{},function(tabContent)
            {
                $this.tabContent=tabContent;
                $this.doEvent(event);
            },
            'html').error(function()
            {
                $this.tabContent=false;
                $this.doEvent(event);
            })
        };

        /******************************************************************/

        this.createScrollbar=function()
        {
            $this.scrollbar=$('#nostalgia-tab-content-scroll').jScrollPane({
                maintainPosition:false,
                autoReinitialise:true
            }).data('jsp');
        };

        /******************************************************************/

        this.createSupersizedSlider=function()
        {
            $.supersized({
                autoplay:false,
                slides:$this.slide,
                thumbnail_navigation:false,
                thumb_links:false
            });
        };

        /******************************************************************/

        this.showSupersizedSliderControl=function(show)
        {
            $this.supersizedControl.css('display',(show ? 'block' : 'none'));
        };

        /******************************************************************/

        this.showNavigationClickHereBox=function(show)
        {
            $this.nostalgiaNavigationClickHereBox.css('display',(show ? 'block' : 'none'));
        };

        /******************************************************************/

        this.createStartPrealoder=function(data)
        {
            var i=0;
            var count=$this.slide.length;

            var list=$(document.createElement('ul')).attr('class','no-list box-center')

            $this.startPreloader.find('div:first').prepend(list);
            $this.blink($this.startPreloader.find('p'));

            $($this.slide).each(function(index)
            {
                var image=$(document.createElement('img'));
                var element=$(document.createElement('li'));

                list.append(element);

                image.attr('src',$this.slide[index].image + ($.browser.msie ? '?i='+getRandom(1,10000) : ''));

                $(image).bind('load',function()
                {
                    element.animate({
                        opacity:1
                    },100,function()

                    {
                            if((++i)==count) data.complete.apply();
                        });
                });
            });
        };

        /******************************************************************/

        this.createMenuSlider=function()
        {
            $this.nostalgiaNavigationMenuList.bxSlider(
            {
                auto:false,
                pause:500,
                nextText:null,
                prevText:null,
                mode:'vertical',
                displaySlideQty:5,
                infiniteLoop:true,
                hideControlOnEnd:false,
                wrapperClass:'bx-wrapper bx-wrapper-nostalgia-navigation-menu'
            });
        };

        /******************************************************************/

        this.blink=function(element)
        {
            $(element).animate({
                opacity:($(element).css('opacity')==1 ? 0.2 : 1)
            },500,function() {
                $this.blink($(this));
            });
        };

        /******************************************************************/

        this.isEnable=function()
        {
            if(!$this.enable)
            {
                if($this.previousHash!='')
                    window.location.href=$this.previousHash;
                return(false);
            }

            return(true);
        };

        /******************************************************************/

        this.doEvent=function(event)
        {
            if(typeof(event)!='undefined')
            {
                if(typeof(event.complete)!='undefined') event.complete.apply();
            };
        };

    /******************************************************************/

    };

    /**************************************************************/

    $.fn.nostalgia=function(options,page,slide)
    {
        /***********************************************************/

        var nostalgia=new Nostalgia(options,page,slide);
        nostalgia.load();

    /***********************************************************/
    };

/**************************************************************/

})(jQuery);