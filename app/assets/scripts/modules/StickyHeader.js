import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
class StickyHeader{
  constructor(){
    this.lazyImages=$('.lazyload');
    this.siteHeader=$('.site-header');
    this.headerTriggerElement=$('.large-hero__title');
    this.createHeaderWaypoints();
    this.pageSections= $('.page-section');
    this.headerLinks=$('.primary-nav a');
    this.createPageSectionWayPoints();
    this.addSmoothScrolling();
    this.refresWayPoints();
  }
  refresWayPoints(){
    this.lazyImages.on('load', function(){
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoints(){
    var that= this;
      new Waypoint({
        element:this.headerTriggerElement[0],
        handler: function(direction){
            if(direction=='down')
            {
              that.siteHeader.addClass('site-header--dark');
            }
            else {
              that.siteHeader.removeClass('site-header--dark');
            }
        }
      });
  }
  createPageSectionWayPoints(){
    var that =this;
    this.pageSections.each(function(){
      var currentPageSection =this;
      new Waypoint({
        element:currentPageSection,
        handler:function(direction){
          if (direction=="down"){
            var matchingheaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingheaderLink).addClass('is-current-link');
          }

        },
        offset: "18%"
      });

      new Waypoint({
        element:currentPageSection,
        handler:function(direction){
          if (direction=="up"){
            var matchingheaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingheaderLink).addClass('is-current-link');
          }

        },
        offset: "-40%"
      });
    })
  };
}

export default StickyHeader;
