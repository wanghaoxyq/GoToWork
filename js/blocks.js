function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || url == null)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && match != null)
		host = match[1];
	return host;
}

function checkForUrl(tabId, info, tab){
	if(info.status == 'loading' || info.status == 'complete'){
		var domain = getDomainFromUrl(tab.url).toLowerCase();
		switch(domain){
			case "weibo.com":
			case "www.zhihu.com":
			case "www.douban.com":
			case "qzone.qq.com":
			case "user.qzone.qq.com":
			case "www.bilibili.com":
			case "www.acfun.com":
			case "www.4399.com":
			case "www.renren.com":
			case "www.iqiyi.com":
			case "www.tudou.com":
			case "www.youku.com":
			case "www.pps.tv":
			case "www.pptv.com":
			case "tv.sohu.com":
			case "www.letv.com":
			case "www.56.com":
			case "www.ku6.com":
			case "tieba.baidu.com":
				chrome.tabs.update(tabId, {
					'url' 		  : "GoToWork.html",
					'highlighted' : true
				});
				break;
			default: break;
		}
	}
};

chrome.tabs.onUpdated.addListener(checkForUrl);