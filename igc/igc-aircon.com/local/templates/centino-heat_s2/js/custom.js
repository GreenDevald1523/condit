/* Add here all your JS customizations */

$( document ).ready(function(){

var city = $(".city1").data('city');
//$(".city").val(city).change();
$(".valsit").click(function () {
     //var text = $(this).val();
	var text = $(this).data('value');
	//console.log(text);
   $(".city").val(text).change();

});
});


$(function (){
  anchorLink();
  mobileControlHelpChoose();

  $('#scrollToTop2').on('click', function(e){
    e.preventDefault();
    $('body, html').animate({scrollTop : 0}, 500);
    return false;
  });

  function mobileControlHelpChoose() {
    var helpControlPC = $('[data-name="question"]'),
        text = 'Помощь в подборе',
        titlePageWrapper,
        wrapper;

    if (helpControlPC.length) {
      titlePageWrapper = $('#pagetitle').parent();
      wrapper = initContainer(titlePageWrapper);
      initControl(wrapper, text, helpControlPC);
    }

    function initControl(scope, text, elemTarget) {
		var control = $('<span class="ctm-mobile-help-choose-control animate-load" data-event="jqm" data-param-id="54" data-name="question">' + text + '</span>');
    //  var control = $('<span class="ctm-mobile-help-choose-control">' + text + '</span>');
/*
      control.on('click', function (){
        elemTarget.trigger('click');
      });
*/
      scope.append(control);
    }

    function initContainer(scope) {
      var wrapper = $('<section class="ctm-mobile-help-choose" />');
      wrapper.insertAfter(scope);

      return wrapper;
    }
  }

  function anchorLink() {
    var link = $('[href="#vrf"]'),
        linkText = 'Что такое VRF-система ?',
        linkHref = 'vrf',
        titlePageWrapper = $('#pagetitle').parent(),
        wrapper;

    if (link.length) {
      wrapper = initContainer(titlePageWrapper);
      initAnchor(wrapper, linkHref, linkText);
    }

    function initAnchor(scope, href, text) {
      var lnk = $('<a class="ctm-anchor-link" href="#' + href + '">' + text + '</a>');
      scope.append(lnk);
    }

    function initContainer(scope) {
      var wrapper = $('<section class="ctm-anchor-link-wrapper" />');
      wrapper.insertAfter(scope);

      return wrapper;
    }
  }
});
