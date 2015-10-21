var myScroll;
function loaded() {
	// myScroll = new iScroll('scroller');
	
	myScroll = new iScroll('scroller', {
mouseWheel: true,
	    scrollbars: true,
   interactiveScrollbars: true,
disableMouse: false,
disablePointer: false
indicators: {
el: document.getElementById('indicator'),
resize: true
}
})
document.addEventListener('DOMContentLoaded', loaded, false);





// mouseWheel: true,
//     scrollbars: true,
//     interactiveScrollbars: true,
// 	disableMouse: false,
// 	disablePointer: false
// 	indicators: {
// 	el: document.getElementById('indicator'),
// 	resize: true
// 	}
	
	
	// function onLoad()
// 	{
// 	    var myScroll = new iScroll('#scroller', {
//
// 	    mouseWheel: true,
// 	    scrollbars: true,
// 	    interactiveScrollbars: true,
// 		disableMouse: false,
// 		disablePointer: false
// 		indicators: {
// 		el: document.getElementById('indicator'),
// 		resize: true
// 		}
// 	})