/*! html5-thor 2014-02-07 */
var CBATOOLS=CBATOOLS||{};CBATOOLS.DEBUG=!1,CBATOOLS.exec=function(controller,action){"use strict";var ns=CBATOOLS_INIT,actionOveride=void 0===action?"init":action;""!==controller&&ns[controller]&&"function"==typeof ns[controller][actionOveride]&&ns[controller][actionOveride]()},CBATOOLS.init=function(){"use strict";var body=document.body,controller=body.getAttribute("data-controller"),action=body.getAttribute("data-action");CBATOOLS.exec("common"),CBATOOLS.exec(controller),CBATOOLS.exec(controller,action)};var CBATOOLS_INIT={common:{init:function(){"use strict"}},tools:{counter:function(){"use strict";CBATOOLS.tools.init(),CBATOOLS.anotherModule.log(),$("body").loadie(.5)}}};$(function(){"use strict";CBATOOLS.init()}),function(NAMESPACE){"use strict";NAMESPACE.anotherModule={log:function(){console.log("I'm another Module")}}}(CBATOOLS),function(NAMESPACE){"use strict";NAMESPACE.tools={},NAMESPACE.tools.init=function(){var initialValue=14,targetValue=15,sliderWidth=150,sliderStepWidth=sliderWidth/targetValue,toolSetup=function(newInitialValue){initialValue=newInitialValue,initialValue>=0&&targetValue>=initialValue?($(".brokerage-tool").fadeIn(),$(".pointer").show(),$(".status").show(),$(".checked").hide(),$(".goal-flag").removeClass("glow"),$(".dyn-count").text("$"+(targetValue-initialValue)),$(".dyn-target-count").text("$"+targetValue),$(".dyn-pointer-val").text("$"+initialValue),setTimeout(function(){$("body").loadie(1),$(".title-box").animate({opacity:1,top:-1530},1e3),$(".bar-inner").css("width",sliderStepWidth*initialValue),$(".pointer").css("left",sliderStepWidth*initialValue),$(".pointer").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){parseInt(initialValue)===targetValue?($(".pointer").fadeOut(),$(".status").fadeOut(),$(".checked").fadeIn(),$(".goal-flag").addClass("glow")):$(".dyn-pointer-val").text("$"+initialValue)})},1e3)):alert("Error! Outside acceptable range of 0 - 15")};toolSetup(initialValue),$("#new-val").on("change",function(){toolSetup($(this).val())})}}(CBATOOLS);