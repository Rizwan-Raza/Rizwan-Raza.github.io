
var bParam, dpVariables = {  };

if (typeof dpQuery != "undefined") {
	dpQuery.isMobile = function () { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) };
	dpQuery.isIpad = function () { return /iPad/i.test(navigator.userAgent) };
}

function getFilename(path) { var path = path || window.location.pathname; var filename = path.substring(path.lastIndexOf('/') + 1); filename = filename.split("?")[0]; return filename; }

function commentElement(elm) {
	// elm represents a jQuery element!
	if (typeof elm != "undefined") {
		var comment = document.createComment(elm[0].outerHTML);
		elm.replaceWith(comment);
		return true;
	}
	return false;
}

function DealPlySkinCls() {
	dpQuery.ajaxSetup({
		cache: true
	});
	this.readyIntervalID = undefined;
	this.intervalID = undefined;
	dpQuery.holdReady(true);
	var path = window.location.pathname;
	this.name = path.replace(".html", "").replace("/", "");
	this.dealplyStarted = false;
	bParam = getURLHashParameter('b');
	this.handleServedbyCache();
}

var getURLHashParameter = function (name) {
	return decodeURIComponent((new RegExp('[#|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.hash) || [, ""])[1].replace(/\+/g, '%20')) || null;
};

function dpPopulate(data) {
	dpVariables = data;
	try {
		dpVariables.origOffCount = dpVariables.dealsJson.length;
		dpVariables.darwinDeal = dpVariables.dealsJson[0];
		if (dpVariables.documentUri.indexOf("ronendebug") !== -1) {
			var url = "http://s.fututbjs.info/dealdo/getclkhandler?redirUrl=http%3A%2F%2Frd.bizrate.com%2Frd%3Ft%3Dhttp%253A%252F%252Ftarget.rdr.channelintelligence.com%252Fgo.asp%253FfVhzOC8fBggESSNjXltdRRRuHD92Z1EABEwDZ2pbVxdDXSJXNzAjFx0fR0AofBsCGRREKhFHUElsNHxaV0NEFT03AQdGFlkqViJpN0hXQB1KNDsDDw4HDG8NbGl8bB8BAAhpZFpTU0xTO1kZS0M3GzJJRG9oZh1jX1NbQgcfYgoAbl5aX0BMNj4DAjQXR3hzDQluHAMIBgFqYldFKCNvGQJlT1QvLTJDUVVDHhMbK15YA0U4AjA2ME5dVFUEPDsGPFpDEWoMd3JrC1FAX1MwNgpeVxBNN1xPVkBseg%253D%253D%2526nAID%253D10043468%2526szredirectid%253DSZ_REDIRECT_ID%26mid%3D22731%26cat_id%3D13050823%26atom%3D10540%26prod_id%3D4110723260%26oid%3D2674245749%26pos%3D1%26b_id%3D18%26bid_type%3D0%26bamt%3D4987184122feee2a%26cobrand%3D1%26ppr%3D25ca26056d640834%26af_assettype_id%3D12%26af_placement_id%3D0104740%26af_creative_id%3D2932%26rf%3Daf1%26af_id%3D605605&interactionid=14230104747989822243234&sessionid=14230104736378840";
			dpVariables.darwinDeal.url = url;
		}
	} catch (e1) {
		dpVariables.origOffCount = 0;
	}
	try {
		removeUninstall();
	}
	catch (e) { };
	//console.log("current url:", location.href);
	if (location.href.toLowerCase().indexOf("compliance_popup.html") == -1) {
		(function () {
			if (typeof dpVariables.Affiliate == "undefined")
				return;
			
			
			var lang = dpVariables.langauge_two_chars || "en", plink = "", stripName = "";
			var pname = dpVariables.Affiliate.broughtByTextForAffiliate !== "" ? dpVariables.Affiliate.broughtByTextForAffiliate:dpVariables.Affiliate.getPoweredByElemV2.textnode  ;
			pname = pname == "" ? dpVariables.Affiliate.poweredByTextForAffiliate : pname;
			
			if(typeof pname=='string' && pname.match(/dealply/i)){
				pname = "Offers4U";
			}
			
			
			var valid_lang = ['da','de','el','en','es','fr','it','jp','nl','no','pl','pt','ru','sv','tr'];
			if (dpQuery.inArray(lang,valid_lang)<0)
				lang = "en";
			
			// inject the appropriate JS language file for the current langauge:
			(function () {
				//console.log("aa:", typeof dealPlySkinObj.translations);
				if (typeof dealPlySkinObj != "undefined" && typeof dealPlySkinObj.translations != "undefined") {
				} else {
					var url = ""; stripName = dealPlySkinObj.name;
					if (lang != "" && lang.length == 2) {
						url = "/resources/translations/strings_" + lang + ".js";
						dpQuery.getScript(url)
							.done(function (script, status) {
								//console.log("status:", status); // "success"
								if (status != "success") {
									url = "/resources/translations/strings_en.js";
									dpQuery.getScript(url).done(function (script, status) { 
										if (status == "success") {
											dealPlySkinObj.translationsAreReady = true;
										}
									});
									
								}else{
									if(typeof dealPlySkinObj!= 'undefined'){
										dealPlySkinObj.translationsAreReady = true;
									}
								}
							});
						/*dpQuery.getScript(url, function (data, status, jqxhr) {
							//console.log("status:", status);
							if (status != "success") {
								url = "/resources/translations/strings_en.js";
								dpQuery.getScript(url, function (data, status, jqxhr) { });
							}
						});*/
					}
				}
			})();

			// get the links for the popup:
			var links = {
				"terms": "",
				"privacy": "",
				"uninstall": "",
				"support": ""
			};
			if (typeof dpVariables == "object" && typeof dpVariables.Affiliate == "object") {

				// get partner link:
				if (typeof dpVariables != "undefined" && typeof dpVariables.Affiliate != "undefined" && typeof dpVariables.Affiliate.getBroughtByElem != "undefined") {
					plink = dpVariables.Affiliate.getBroughtByElem.href;
				}
				if(typeof plink=='string' && plink.match(/dealply/i)){
					plink =  "http://www.offers4u.org/";
				}

				// terms of use link:
				if (typeof dpVariables.Affiliate.eulaUrl != "undefined") {
					links.terms = dpVariables.Affiliate.eulaUrl;
				}
				if(typeof links.terms=='string' && links.terms.match(/dealply/i)){
					links.terms =  "http://www.offers4u.org/";
				}

				// privacy policy link:
				if (typeof dpVariables.Affiliate.privacyPolicyUrl != "undefined") {
					links.privacy = dpVariables.Affiliate.privacyPolicyUrl;
				}
				if(typeof links.privacy=='string' && links.privacy.match(/dealply/i)){
					links.privacy =  "http://www.offers4u.org/";
				}

				// support link:
				var href = "", style = "display:none;";
				if (dpVariables.Affiliate.getHelpElemV2.style != "display:none;") {
					href = dpVariables.Affiliate.getHelpElemV2.href;
					style = dpVariables.Affiliate.getHelpElemV2.style;
				} else if (dpVariables.Affiliate.getPoweredByElem.style != "display:none;") {
					href = dpVariables.Affiliate.getPoweredByElem.href;
					style = dpVariables.Affiliate.getPoweredByElem.style;
				}
				if ((style == "" || (style != "" && style.indexOf("display:none") == -1)) && href != "" && href.indexOf("javascript:") == -1) {
					links.support = href;
				}
				if(typeof links.support=='string' && links.support.match(/dealply/i)){
					links.support =  "http://www.offers4u.org/";
				}

				// uninstall link:
				if (dpVariables.Affiliate.suspendUninstallUrl != "") {
					links.uninstall = dpVariables.Affiliate.suspendUninstallUrl;
				}
				if(typeof links.uninstall=='string' && links.uninstall.match(/dealply/i)){
					links.uninstall =  "http://www.offers4u.org/";
				}
				
			}
			var linksParam = encodeURIComponent(JSON.stringify(links));

			// inject the compliance iframe:

			var baseURL = DealPlyOpDom.getStaticfBaseUrl(); if (baseURL.charAt(baseURL.length - 1) != "/") { baseURL += "/"; }
			var frameURL = baseURL + "compliance_popup.html", stripType = window["dp_strip_type"] || "";
			//console.log("here");
			var cmd = "if (dpQuery(\"#compliance_popup\").length<=0){dpQuery(\"BODY\").append(\"<iframe id=\'compliance_popup\' src=\'" + frameURL + "?lang=" + lang + "&pname=" + pname + "&plink=" + encodeURIComponent(plink) + "&stype=" + stripType + "#" + linksParam + "\' style=\'display:none;position:fixed;width:100%;height:100%;top:0;left:0;z-index:1000000000000000;\'></iframe>\");}";
			DealPlyInteropInner.sendCommand(cmd);
			setTimeout(function () {
				if (dpQuery("#dpSuspendUninstall").length > 0) {
					//console.log("here2");
					var parent = dpQuery("#dpSuspendUninstall").parent();
					setTimeout(function () {
						//console.log(getFilename());
						dpQuery("#dpSupportLink").html("");
						dpQuery("A.powered_by_link").css("text-decoration", "none");
						dpQuery("A.powered_by_link").attr("href", "").css("cursor", "default").click(function (e) { e.preventDefault(); }); // requirement to remove the link here!
						//dpQuery("#flach .powered_by_txt_wrap").find("A.legalLink, .powered_by_sep").remove();

						if (typeof dealPlySkinObj != "undefined" && typeof dealPlySkinObj.translations != "undefined" && dealPlySkinObj.translations["about_service"] != "") {
							var text = dealPlySkinObj.translations["about_service"];
							//console.log("text:", text);
							//console.log("length:", dpQuery("#dpSuspendUninstall").length);
							if (dpQuery("A.legalLink").length == 1) { commentElement(dpQuery("A.legalLink")); } // comment out the "legal" content element
							if (dpQuery("SPAN#legal_wrapper").length == 1) { commentElement(dpQuery("SPAN#legal_wrapper")); } // comment out the "legal" content element
							if (dpQuery("SPAN.powered_by_sep").length == 1) { commentElement(dpQuery("SPAN.powered_by_sep")); } // comment out the "separator" content element
							dpQuery("#dpSuspendUninstall").html("<div id='about_service' style='float:left;cursor:pointer;text-decoration:underline;font-family:Arial;font-size:12px;color: #0048FF;'>" + text + "</div>");
							var cmd = "window.onmessage=function(msg) {var fra=document.getElementById(\"compliance_popup\");if(msg && msg.data && msg.data.name==\"Close\" && msg.source==fra.contentWindow) {	fra.style.display=\"none\";}};";
							//var cmd = "function closeCompliancePopup(){dpQuery(\"#compliance_popup\").hide();}";
							DealPlyInteropInner.sendCommand(cmd);
							dpQuery("#about_service").click(function () {
								var cmd = "", url = "";

								cmd = "dpQuery('#compliance_popup').show(); dpQuery('HTML').css('overflow', 'hidden');";
								DealPlyInteropInner.sendCommand(cmd);

								url = "http://qck.dpstack.com/dealdo/event-report?type=quick&topic=comp_AbThisSe";
								cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\"" + url + "\");";
								DealPlyInteropInner.sendCommand(cmd);

								/*url = "http://qck.dpstack.com/dealdo/event-report?type=quick&topic=comp_popup_imps";
								cmd = "var dpiframe=document.createElement(\"iframe\");dpQuery(dpiframe).attr(\"width\",\"1\");dpQuery(dpiframe).attr(\"height\",\"1\");dpQuery(dpiframe).css(\"top\",\"-10000px\");dpQuery(dpiframe).css(\"left\",\"-10000px\");dpQuery(dpiframe).css(\"position\",\"absolute\");dpQuery(dpiframe).css(\"visibility\",\"visible\");dpQuery(\"body\").append(dpiframe);dpQuery(dpiframe).attr(\"src\",\"" + url + "\");";
								DealPlyInteropInner.sendCommand(cmd);*/
							});
						}

						// set the width of the suspend popup according to content:
						dpQuery("#dealplySuspend").css({ "display": "block" }).addClass("invisible");
						dpQuery("BODY").append("<style>.visible{visibility:visible;}.invisible{visibility:hidden;}</style>");

						dpQuery("#dealplySettings").click(function () {
							if (dpQuery("#dealplySuspend").hasClass("invisible")) {
								dpQuery("#dealplySuspend").removeClass("invisible").show();
							} else {
								dpQuery("#dealplySuspend").addClass("invisible").hide();
							}
						});

						/*var swidth = dpQuery("#dealplySuspend").width(), fwidth = dpQuery("#suspend").outerWidth();
						var sleft = dpQuery("#dealplySuspend").position().left, fleft = parseInt(dpQuery("#suspend").position().left) || 0;
						console.info(swidth, fwidth, sleft, fleft);
						if ((swidth <= fwidth) && (fleft > 0)) {
							dpQuery("#dealplySuspend").css({ "width": (swidth + fleft + 10) + "px", "left": (sleft - fleft - 10) + "px" });
						}*/

					}, 100);
				}
			}, 100);
		})();
	}

	dealPlySkinObj.start();
}

DealPlySkinCls.prototype.handleServedbyCache = function () {
	//obj = this;
	dpQuery.getScript(decodeURIComponent(bParam), function (data2, textStatus2, jqxhr2) {
		//obj.start();			
	});
};

DealPlySkinCls.prototype.initDefaultSkin = function () {
	dpVariables.skin = {
		toastHeight: '143px',
		botLeftBorderRad: 0,
		dealplyToastWidthInteger: 29,
		dealplyFlightWidthInteger: 26,
		showLngTtl: true,
		moreStrCss: ''
	};

	dpVariables.skin.readyFunc = function () {
		if (!dpVariables.bStyle && dpVariables.extType === -1 && dealPlyUtils.feed === 'kpt') {
			dpQuery('#flach').addClass('kptBnr');
			dpQuery('#logoBnr').attr('src', '/resources/eden/green/strip/kpt.png');
		}
	};
};

DealPlySkinCls.prototype.start = function () {
	var name = this.name;
	dpVariables.self = "dealply-toast[src*='" + name + "']";

	if (typeof dpVariables.gotoHtml == "object" && typeof dpVariables.productID == "object") {
		dpQuery(dpVariables.gotoHtml).each(function (index, value) {
			if (value.search(name) >= 0) {
				var id = undefined;
				if (typeof dpVariables.productID[index] == 'string') {
					id = dpVariables.productID[index].trim();
				}
				dpVariables.productIDself = id;
			}
		});
	}

	
	
	
	this.startDealply();
	
};

DealPlySkinCls.prototype.setMessages = function (elementSelector) {
	if (window.addEventListener) { // all browsers except IE before version 9
		window.addEventListener("message", OnMessage, false);
	} else {
		if (window.attachEvent) { // IE before version 9
			window.attachEvent("onmessage", OnMessage);
		}
	}
};
DealPlySkinCls.prototype.removeMessages = function (elementSelector) {
	if (window.removeEventListener) { // all browsers except IE before version 9
		window.removeEventListener("message", OnMessage, false);
	} else {
		if (window.detachEvent) { // IE before version 9
			window.detachEvent("onmessage", OnMessage);
		}
	}
};


var OnMessage = function (event) {
	var msg = event;
	if (typeof msg !== "function" && typeof msg !== "object") {
		return;
	}

	if (msg === null) {
		return;
	}

	var msgObj = msg.data;
	if (typeof msgObj === "string" && msgObj != null) {
		try {
			if (msgObj.indexOf("d=") === 0) {
				msgObj = msgObj.substring(2);

				//msgObj = DealPlyBase64.decode(msgObj);
			} else {
				return;
			}
		} catch (dealplyE43) {

		}

		try {
			msgObj = DealPlyJSON.parse(msgObj);
		} catch (dealplyE6) {

		}
	}

	if (typeof msgObj.dealplyOrigin === "undefined" || msgObj.dealplyOrigin === null || msgObj.dealplyOrigin !== "DP-TOP") {
		return;
	}

	if (typeof msgObj.dealplyTopic === "string" && msgObj.dealplyTopic !== null && msgObj.dealplyTopic === "RPT-CLK") {
		if (typeof msgObj.dealplyEval === "object" && typeof msgObj.dealplyEval.position !== 'undefined' && typeof msgObj.dealplyEval.index != 'undefined') {
			dealPlyUtils.gotoDeal(msgObj.dealplyEval.index, msgObj.dealplyEval.position);
			if (typeof msgObj.dealplyEval.gourl === 'string') {
				window.open(msgObj.dealplyEval.gourl, "_blank");
			}
		}
	}
};

function removeUninstall() {
	var partnerToRemove = ['futuin', 'fututb', 'fututw', 'futuft'];
	try {
		if (partnerToRemove.indexOf(dpVariables.partner) >= 0) {
			dpQuery('#dpSuspendUninstall').hide();
		}
	} catch (e) { }
}