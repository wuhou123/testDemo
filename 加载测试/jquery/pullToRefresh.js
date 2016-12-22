/*!
 * pull to refresh v2.0
 *author:wallace
 *2015-7-22
 */
var refresher = {
	info: {
		"pullDownLable": "",
		"pullingDownLable": "不能扯了",
		"pullUpLable": "加载更多...",
		"pullingUpLable": "上拉加载更多",
		"loadingLable": "加载中..."
	},
	init: function(parameter) {
		var wrapper = document.getElementById(parameter.id);
		var div = document.createElement("div");
		div.className = "scroller";
		wrapper.appendChild(div);
		var scroller = wrapper.querySelector(".scroller");
		var list = wrapper.querySelector("#" + parameter.id + " ul");
		scroller.insertBefore(list, scroller.childNodes[0]);
		var pullDown = document.createElement("div");
		pullDown.className = "pullDown";
		var loader = document.createElement("div");
		loader.className = "loader";
		for (var i = 0; i < 4; i++) {
			var span = document.createElement("span");
			loader.appendChild(span);
		}
		pullDown.appendChild(loader);
		var pullDownLabel = document.createElement("div");
		pullDownLabel.className = "pullDownLabel";
		pullDown.appendChild(pullDownLabel);
		scroller.insertBefore(pullDown, scroller.childNodes[0]);
		var pullUp = document.createElement("div");
		pullUp.className = "pullUp";
		var loader = document.createElement("div");
		loader.className = "loader";
		for (var i = 0; i < 4; i++) {
			var span = document.createElement("span");
			loader.appendChild(span);
		}
		pullUp.appendChild(loader);
		var pullUpLabel = document.createElement("div");
		pullUpLabel.className = "pullUpLabel";
		var content = document.createTextNode(refresher.info.pullUpLable);
		pullUpLabel.appendChild(content);
		pullUp.appendChild(pullUpLabel);
		scroller.appendChild(pullUp);
		var pullDownEl = wrapper.querySelector(".pullDown");
		var pullDownOffset = pullDownEl.offsetHeight;
		var pullUpEl = wrapper.querySelector(".pullUp");
		var pullUpOffset = pullUpEl.offsetHeight;
		this.scrollIt(parameter, pullDownEl, pullDownOffset, pullUpEl, pullUpOffset);
	},
	scrollIt: function(parameter, pullDownEl, pullDownOffset, pullUpEl, pullUpOffset) {
		eval(parameter.id + "= new iScroll(parameter.id, {useTransition: true,vScrollbar: false,topOffset: pullDownOffset,onRefresh: function () {refresher.onRelease(pullDownEl,pullUpEl);},onScrollMove: function () {refresher.onScrolling(this,pullDownEl,pullUpEl,pullUpOffset);},onScrollEnd: function () {refresher.onPulling(pullDownEl,parameter.pullDownAction,pullUpEl,parameter.pullUpAction);},})");
		pullDownEl.querySelector('.pullDownLabel').innerHTML = refresher.info.pullDownLable;
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	},
	onScrolling: function(e, pullDownEl, pullUpEl, pullUpOffset) {
		if (e.y > -(pullUpOffset)) {
			pullDownEl.id = '';
			pullDownEl.querySelector('.pullDownLabel').innerHTML = refresher.info.pullDownLable;
			e.minScrollY = -pullUpOffset;
		}
		if (e.y > 0) {
			pullDownEl.classList.add("flip");
			pullDownEl.querySelector('.pullDownLabel').innerHTML = refresher.info.pullingDownLable;
			e.minScrollY = 0;
		}
		if (e.scrollerH < e.wrapperH && e.y < (e.minScrollY - pullUpOffset) || e.scrollerH > e.wrapperH && e.y < (e.maxScrollY - pullUpOffset)) {
			pullUpEl.style.display = "block";
			pullUpEl.classList.add("flip");
			pullUpEl.querySelector('.pullUpLabel').innerHTML = refresher.info.pullingUpLable;
		}
		if (e.scrollerH < e.wrapperH && e.y > (e.minScrollY - pullUpOffset) && pullUpEl.id.match('flip') || e.scrollerH > e.wrapperH && e.y > (e.maxScrollY - pullUpOffset) && pullUpEl.id.match('flip')) {
			pullDownEl.classList.remove("flip");
			pullUpEl.querySelector('.pullUpLabel').innerHTML = refresher.info.pullUpLable;
		}
	},
	onRelease: function(pullDownEl, pullUpEl) {
		if (pullDownEl.className.match('loading')) {
			pullDownEl.classList.toggle("loading");
			pullDownEl.querySelector('.pullDownLabel').innerHTML = refresher.info.pullDownLable;
			pullDownEl.querySelector('.loader').style.display = "none"
			pullDownEl.style.lineHeight = pullDownEl.offsetHeight + "px";
		}
		if (pullUpEl.className.match('loading')) {
			pullUpEl.classList.toggle("loading");
			pullUpEl.querySelector('.pullUpLabel').innerHTML = refresher.info.pullUpLable;
			pullUpEl.querySelector('.loader').style.display = "none"
			pullUpEl.style.lineHeight = pullUpEl.offsetHeight + "px";
		}
	},
	onPulling: function(pullDownEl, pullDownAction, pullUpEl, pullUpAction) {
		if (pullDownEl.className.match('flip') /*&&!pullUpEl.className.match('loading')*/ ) {
			pullDownEl.classList.add("loading");
			pullDownEl.classList.remove("flip");
			pullDownEl.querySelector('.pullDownLabel').innerHTML = refresher.info.loadingLable;
			pullDownEl.querySelector('.loader').style.display = "block"
			pullDownEl.style.lineHeight = "40px";
			if (pullDownAction) pullDownAction();
		}
		if (pullUpEl.className.match('flip') /*&&!pullDownEl.className.match('loading')*/ ) {
			pullUpEl.classList.add("loading");
			pullUpEl.classList.remove("flip");
			pullUpEl.querySelector('.pullUpLabel').innerHTML = refresher.info.loadingLable;
			pullUpEl.querySelector('.loader').style.display = "block"
			pullUpEl.style.lineHeight = "40px";
			if (pullUpAction) pullUpAction();
		}
	}
}