javascript: void((function() {
	var uid = document.cookie.match(/c_user=(\d+)/)[1];
	var dtsg = require("DTSGInitialData").token || document.getElementsByName('fb_dtsg')[0].value;
	var dyn = '7AzHK4HwBgC265Q2m3mbG2KnFw9uu2i5U4e0yqyUdEc88EW3K1uwJxS1Az8bo6u3y4o27w7nCxS320LE36xOfw9q224obEvy8465o-cBwfi12wOKdwGwFyFE-1-y85S5o9kbxSEtwi831wnEaoC9xy48aU8od8-UqwsUkxe2GewGwsoqBwNwKxm5oe8aUavxK3W2i';
	var audiosukses = new Audio('https://www.facebook.com/rsrc.php/yf/r/TNPmLer_j2q.ogg');
	var audiogagal = new Audio('https://www.facebook.com/rsrc.php/y5/r/ouE5maL6ab4.ogg');
	var audiomari = new Audio('https://www.facebook.com/rsrc.php/yO/r/kTasEyE42gs.ogg');
	var stydiv = 'margin-top:5px;border-radius:3px;padding:3px;background-color:white;';
	var backbtn = '<div style="float:right;"><button onclick="blue.btn(\'back\')" type="button" style="margin-right:5px;width:60px;height:25px;color:red;"><b>Back</b></button><button onclick="blue.btn(\'tutup\')" type="button" style="width:60px;height:25px;color:red;"><b>Close</b></button></div>';
	var defbtn = '<center><button onclick="blue.btn(\'adduid\')" style="margin:2px;width:85px;"><b>Add uid</b></button><button onclick="blue.btn(\'confpren\')" style="margin:2px;width:110px;"><b>Confirm Friends</b></button><button onclick="blue.btn(\'cancreq\')" style="margin:2px;width:85px;"><b>Cancel Req</b></button><button onclick="blue.btn(\'delpren\')" style="margin:2px;width:100px;"><b>Delete Friends</b></button><button onclick="blue.btn(\'finfren\')" style="margin:2px;width:90px;"><b>Find Friends</b></button><br><button onclick="blue.btn(\'mssg\')" style="margin:2px;width:85px;"><b>Messages</b></button><button onclick="blue.btn(\'delbio\')" style="margin:2px;width:110px;"><b>Delete Bio</b></button><button onclick="blue.btn(\'delpot\')" style="margin:2px;width:110px;"><b>Delete Photos</b></button><button onclick="blue.btn(\'delsts\')" style="margin:2px;width:110px;"><b>Delete Status</b></button><button onclick="blue.btn(\'tutup\')" type="button" style="margin:2px;width:55px;color:red;"><b>Close</b></button></center>';
	var txtin = '<textarea id="inp" placeholder="Input Here" style="width:485px;height:200px;font-size:12px;resize:none;"></textarea>';
	var txtout = '<textarea id="out" readonly style="width:485px;height:200px;font-size:12px;resize:none;background-color:black;color:white;margin-top:4px;"></textarea>';
	var indly = '<font style="margin-left:10px;">Delay: <input type="number" class="inputtext" min="0" placeholder="Delay" value="0" id="delay" style="width:60px;text-align:center;"></font>';
	var divrpt = '<div class="uiBoxGray" style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;">Info Total: <font id="proses">0</font> / <font id="totalin">0</font><span style="margin-left:10px;">Sukses : <font id="sukses" style="color:green;">0</font></span><span style="margin-left:10px;">Gagal : <font id="gagal" style="color:red;">0</font></span></div>';
	body = document['body'];
	div = document['createElement']('div');
	div['id'] = 'bordertool';
	div['style']['padding'] = '10px';
	div['style']['borderRadius'] = '2px';
	div['style']['width'] = '500px';
	div['style']['position'] = 'fixed';
	div['style']['zIndex'] = '9999';
	div['style']['top'] = '10%';
	div['style']['right'] = '10%';
	div['style']['fontSize'] = '12px';
	div['style']['fontWeight'] = '600';
	div['style']['boxShadow'] = '0 0 5px #000';
	div['style']['backgroundColor'] = 'rgba(63,191,191,0.8)';
	div['innerHTML'] += '<div class="uiBoxGray" name="uiBoxGray" id="uiBoxGray" style="text-align:center;border-radius:2px;padding:3px;background-color:white;font-weight:bold;">FB Multi Tools From Preker Team V1.0</div>';
	div['innerHTML'] += '<div id="div-html" class="uiBoxGray" style="' + stydiv + '">' + defbtn + '</div>';
	body['appendChild'](div);
	dc = document;
	setTimeout(function() {
		if (document.getElementById('uiBoxGray') && document.getElementsByName('uiBoxGray')[0]) {
			if (document.getElementById('uiBoxGray').innerText == 'FB Multi Tools From Preker Team V1.0' && document.getElementsByName('uiBoxGray')[0].innerText == 'FB Multi Tools From Preker Team V1.0') {
				dc.getElementById('div-html').innerHTML += '<div class="uiBoxGray" id="inpo1" style="display:none;">UID : <input onclick="this.select()" id="idgw" value="" readonly="" style="border:none;outline:none;background-color:rgb(240, 240, 240);"></div>';
				dc.getElementById('div-html').innerHTML += '<div class="uiBoxGray" id="inpo2" style="display:none;">Tanggal Lahir : <input onclick="this.select()" id="tgl" value="" readonly="" style="border:none;outline:none;background-color:rgb(240, 240, 240);"></div>';
				dc.getElementById('div-html').innerHTML += '<div class="uiBoxGray" id="inpo3" style="display:none;">Access Token : <input onclick="this.select()" id="tkn" value="" readonly="" style="width:80%;border:none;outline:none;background-color:rgb(240, 240, 240);"></div>';
				blue.ambilinpo()
			}
		}
	}, 100);
	var interceka = setInterval(function() {
		document.getElementById('bordertool').setAttribute('style', 'padding: 10px; border-radius: 2px; width: 500px; position: fixed; z-index: 9999; top: 10%; right: 10%; font-size: 12px; font-weight: 600; box-shadow: rgb(0, 0, 0) 0px 0px 5px; background-color: rgba(63, 191, 191, 0.8);')
	}, 1000);
	var wadaepren = [];
	window['blue'] = {
		clearinter: function() {
			for (var interajax = 1; interajax < 99999; interajax++) {
				window['clearInterval'](interajax)
			};
			window['clearTimeout'](interajax);
			for (var interceka = 1; interceka < 99999; interceka++) {
				window['clearInterval'](interceka)
			};
			window['clearTimeout'](interceka);
			for (var intercekb = 1; intercekb < 99999; intercekb++) {
				window['clearInterval'](intercekb)
			};
			window['clearTimeout'](intercekb)
		},
		ambilinpo: function() {
			var collectionToken = '';
			var rawSectionToken = '';
			var sectionToken = '';
			var useruri = 'client_previous_actor_id=' + uid + '&route_url=/me/about_contact_and_basic_info&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=16&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1003057098&__s=los8lj:sdmqlc:6l1m9f&__hsi=6902763322155200962-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22101&__spin_r=1003057098&__spin_b=trunk&__spin_t=1607174827';
			blue.prekerajax('POST', '/ajax/navigation/', useruri, '', function(p, q) {
				var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
				var Token = e['payload']['payload']['result']['exports']['rootView']['props'];
				collectionToken = Token['collectionToken'];
				rawSectionToken = Token['rawSectionToken'];
				sectionToken = Token['sectionToken'];
				var ajaxval = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutAppSectionQuery&variables={"appSectionFeedKey":"ProfileCometAppSectionFeed_timeline_nav_app_sections__' + rawSectionToken + '","collectionToken":"' + collectionToken + '","rawSectionToken":"' + rawSectionToken + '","scale":1,"sectionToken":"' + sectionToken + '","userID":"' + uid + '"}&server_timestamps=true&doc_id=3415254011925748';
				blue.prekerajax('POST', '/api/graphql/', ajaxval, '', function(p, q) {
					var e = JSON.parse(q.split('"profile_field_sections":')[1].split(',"__module_operation_ProfileCometAboutAppSectionContent_appSection"')[0]);
					for (var a of e) {
						if (a.field_section_type == 'basic_info') {
							var b = a.profile_fields['nodes'];
							for (var c of b) {
								if (c['field_type'] == 'birthday') {
									dc.getElementById('idgw').value = uid;
									dc.getElementById('tgl').value += c['title']['text'] + ' ';
									dc.getElementById('inpo1').setAttribute('style', 'border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;');
									dc.getElementById('inpo2').setAttribute('style', 'border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;')
								}
							}
						}
					}
					blue.prekerajax('GET', '/content_management/SCHEDULED_POSTS', 'null', '', function(p, q) {
						var tkn = q.match('"accessToken":"([A-Za-z0-9]+)","clientID')[1];
						dc.getElementById('tkn').value = tkn;
						dc.getElementById('inpo3').setAttribute('style', 'border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;')
					})
				})
			})
		},
		btn: function(x) {
			if (x == 'back') {
				blue.clearinter();
				dc.getElementById('div-html').innerHTML = defbtn;
				wadaepren = []
			} else if (x == 'tutup') {
				blue.clearinter();
				var ilang = document.getElementById('bordertool');
				ilang['parentNode']['removeChild'](ilang)
			} else if (x == 'stop') {
				blue.clearinter();
				audiomari['play']()
			} else if (x == 'adduid') {
				dc.getElementById('div-html').innerHTML = txtin;
				dc.getElementById('div-html').innerHTML += '<button onclick="blue.btn(\'goadd\')" id="goadd" type="button" style="margin-left:0px;width:100px;height:25px;"><b>Go ADD</b></button>' + indly + '<font style="margin-left:10px;">Confirm: <input type="checkbox" id="cek" checked style="vertical-align:middle;width:15px;height:15px;cursor:pointer"></font>';
				dc.getElementById('div-html').innerHTML += backbtn;
				dc.getElementById('div-html').innerHTML += divrpt;
				dc.getElementById('div-html').innerHTML += txtout;
				dc.getElementById('delay').value = '1'
			} else if (x == 'goadd') {
				var uin = dc.getElementById('inp').value;
				var del = dc.getElementById('delay').value;
				if (del == '') {
					var delay = '0'
				} else {
					var delay = del
				}
				if (uin == '') {
					alert('Form Required')
				} else {
					dc.getElementById('goadd').setAttribute('style', 'margin-left:0px;width:100px;height:25px;color:red;');
					dc.getElementById('goadd').setAttribute('onclick', 'blue.btn(\'stop\')');
					dc.getElementById('goadd').innerHTML = '<b>Stop</b>';
					var proses = 0;
					var sukses = 0;
					var prosesx = 0;
					var gagal = 0;
					var uidsplit = uin['split']('\x0A')['length'];
					dc.getElementById('totalin').innerHTML = uidsplit;
					var interajax = setInterval(function() {
						if (proses < uidsplit) {
							if (document.getElementById('cek').checked) {
								var cf = '&confirmed=1'
							} else {
								var cf = ''
							}
							var ui = uin['split']('\x0A')[proses];
							var addurl = '/ajax/add_friend/action/?to_friend=' + ui + '&action=add_friend&how_found=people_you_may_know&ref_param=unknown&link_data[ft][tn]=-[&logging_location=pymk_jewel';
							var adduri = '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=ac&__beoa=0&__pc=PHASED:DEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002346345&__s=3xz7uh:hr4z9w:wzcw4p&__hsi=6847353704236541769-0&fb_dtsg=' + dtsg + '&jazoest=21877&__spin_r=1002346345&__spin_b=trunk&__spin_t=1594273770' + cf;
							blue.prekerajax('POST', addurl, adduri, ui, function(p, q) {
								prosesx++;
								if (prosesx == uidsplit) {
									audiomari['play']()
								} else {}
								dc.getElementById('proses').innerHTML = prosesx;
								var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
								if (e['error']) {
									dc.getElementById('out').value += p + ' - ' + e['errorSummary'] + "\n";
									gagal++;
									dc.getElementById('gagal').innerHTML = gagal;
									audiogagal['play']()
								} else {
									dc.getElementById('out').value += p + ' - Sukses' + "\n";
									sukses++;
									dc.getElementById('sukses').innerHTML = sukses;
									audiosukses['play']()
								}
							});
							proses++;
							var nyekrolmetu = dc.getElementById('out');
							nyekrolmetu['scrollTop'] = nyekrolmetu['scrollHeight']
						} else {
							blue.clearinter()
						}
					}, delay * 1000)
				}
			} else if (x == 'confpren') {
				dc.getElementById('div-html').innerHTML = '<center>Please Wait...</center>';
				var confuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometRootQuery&variables={"requests_initial":1000,"scale":1}&server_timestamps=true&doc_id=4499082396829105';
				blue.prekerajax('POST', '/api/graphql/', confuri, '', function(p, q) {
					var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
					var frenreqs = e['data']['viewer']['friending_possibilities']['edges'];
					for (var i = 0; i < frenreqs.length; i++) {
						wadaepren.push(frenreqs[i].node['id'])
					}
					dc.getElementById('div-html').innerHTML = '<button onclick="blue.btn(\'gocfrm\')" id="gocfrm" type="button" style="margin-left:0px;width:100px;height:25px;"><b>Confirm</b></button><button onclick="blue.btn(\'gorjt\')" id="gorjt" type="button" style="margin-left:3px;width:100px;height:25px;"><b>Reject</b></button>';
					dc.getElementById('div-html').innerHTML += indly;
					dc.getElementById('div-html').innerHTML += backbtn;
					dc.getElementById('div-html').innerHTML += divrpt;
					dc.getElementById('div-html').innerHTML += '<div id="div-bar"></div>';
					dc.getElementById('totalin').innerHTML = frenreqs.length;
					if (e['data']['viewer']['friends_container_request_count']['count'] == 0) {
						dc.getElementById('gocfrm').setAttribute('disabled', '');
						dc.getElementById('gorjt').setAttribute('disabled', '')
					} else {}
				})
			} else if (x == 'gocfrm') {
				dc.getElementById('gocfrm').setAttribute('style', 'margin-left:0px;width:100px;height:25px;color:red;');
				dc.getElementById('gocfrm').setAttribute('onclick', 'blue.btn(\'stop\')');
				dc.getElementById('gorjt').setAttribute('disabled', '');
				dc.getElementById('gocfrm').innerHTML = '<b>Stop</b>';
				dc.getElementById('div-bar').innerHTML += '<div class="uiBoxGray" id="loadbar" style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><div style="height:10px;background-color:blue;width:0%;"></div></div>';
				var del = dc.getElementById('delay').value;
				var prencount = wadaepren.length;
				if (del == '') {
					var delay = '0'
				} else {
					var delay = del
				}
				var proses = 0;
				var sukses = 0;
				var prosesx = 0;
				var gagal = 0;
				var interajax = setInterval(function() {
					if (proses < prencount) {
						var ui = wadaepren[proses];
						var uridef = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestConfirmMutation&variables={"input":{"friend_requester_id":"' + ui + '","source":"friends_tab","actor_id":"' + uid + '","client_mutation_id":"4"},"scale":1,"refresh_num":0}&server_timestamps=true&doc_id=3195789993880298';
						blue.prekerajax('POST', '/api/graphql/', uridef, ui, function(p, q) {
							prosesx++;
							if (prosesx == prencount) {
								audiomari['play']()
							} else {}
							dc.getElementById('proses').innerHTML = prosesx;
							var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
							if (e['errors']) {
								gagal++;
								dc.getElementById('gagal').innerHTML = gagal
							} else {
								sukses++;
								dc.getElementById('sukses').innerHTML = sukses
							}
							var bar = ((prosesx / prencount) * 100).toFixed(0);
							dc.getElementById('loadbar').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>'
						});
						proses++
					} else {
						blue.clearinter()
					}
				}, delay * 1000)
			} else if (x == 'gorjt') {
				dc.getElementById('gorjt').setAttribute('style', 'margin-left:3px;width:100px;height:25px;color:red;');
				dc.getElementById('gorjt').setAttribute('onclick', 'blue.btn(\'stop\')');
				dc.getElementById('gocfrm').setAttribute('disabled', '');
				dc.getElementById('gorjt').innerHTML = '<b>Stop</b>';
				dc.getElementById('div-bar').innerHTML += '<div class="uiBoxGray" id="loadbar" style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><div style="height:10px;background-color:blue;width:0%;"></div></div>';
				var del = dc.getElementById('delay').value;
				var prencount = wadaepren.length;
				if (del == '') {
					var delay = '0'
				} else {
					var delay = del
				}
				var proses = 0;
				var sukses = 0;
				var prosesx = 0;
				var gagal = 0;
				var interajax = setInterval(function() {
					if (proses < prencount) {
						var ui = wadaepren[proses];
						var uridef = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestDeleteMutation&variables={"input":{"friend_requester_id":"' + ui + '","source":"friends_tab","actor_id":"' + uid + '","client_mutation_id":"4"},"scale":1,"refresh_num":0}&server_timestamps=true&doc_id=3524604860895009';
						blue.prekerajax('POST', '/api/graphql/', uridef, ui, function(p, q) {
							prosesx++;
							if (prosesx == prencount) {
								audiomari['play']()
							} else {}
							dc.getElementById('proses').innerHTML = prosesx;
							var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
							if (e['errors']) {
								gagal++;
								dc.getElementById('gagal').innerHTML = gagal
							} else {
								sukses++;
								dc.getElementById('sukses').innerHTML = sukses
							}
							var bar = ((prosesx / prencount) * 100).toFixed(0);
							dc.getElementById('loadbar').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>'
						});
						proses++
					} else {
						blue.clearinter()
					}
				}, delay * 1000)
			} else if (x == 'cancreq') {
				dc.getElementById('div-html').innerHTML = '<center>Please Wait...</center>';
				dc.getElementById('div-html').innerHTML += '<div id="wadaeload" style="display:none;"></div>';
				var getcanc = '/friends/requests/outgoing/more/?dpr=1&__a=1&__af=iw&__be=-1&__pc=PHASED:DEFAULT&__user=' + uid + '&__dyn=' + dyn + '&__req=8&__rev=1033590&fb_dtsg=' + dtsg + '&jazoest=26581719899112977275102998658658170891001211158310010010384&__spin_r=3078884&__spin_b=trunk&__spin_t=1497057008&page=1&page_size=5000&pager_id=outgoing_reqs_pager_583ab7fd1a8a68621759824';
				blue.prekerajax('GET', getcanc, 'null', '', function(p, q) {
					var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
					if (e.domops && e.domops[0] && e.domops[0][3] && e.domops[0][3].__html) {
						var t = e.domops[0][3].__html;
						var u = t.replace(/<img(.*?)>/gi, "");
						dc.getElementById('wadaeload').innerHTML = u;
						setTimeout(function() {
							var a = document.querySelectorAll('button[data-cancelref*="outgoing_requests"]');
							for (var i = 0; i < a.length; i++) {
								var b = a[i].getAttribute('data-profileid');
								wadaepren.push(b)
							}
							setTimeout(function() {
								dc.getElementById('div-html').innerHTML = '<button onclick="blue.btn(\'gocancreq\')" id="gocancreq" type="button" style="margin-left:0px;width:100px;height:25px;"><b>Cancel Req</b></button>';
								dc.getElementById('div-html').innerHTML += indly;
								dc.getElementById('div-html').innerHTML += backbtn;
								dc.getElementById('div-html').innerHTML += divrpt;
								dc.getElementById('div-html').innerHTML += '<div id="div-bar"></div>';
								dc.getElementById('totalin').innerHTML = wadaepren.length;
								if (wadaepren.length == 0) {
									dc.getElementById('gocancreq').setAttribute('disabled', '')
								}
							}, 100)
						}, 100)
					}
				})
			} else if (x == 'gocancreq') {
				dc.getElementById('gocancreq').setAttribute('style', 'margin-left:0px;width:100px;height:25px;color:red;');
				dc.getElementById('gocancreq').setAttribute('onclick', 'blue.btn(\'stop\')');
				dc.getElementById('gocancreq').innerHTML = '<b>Stop</b>';
				dc.getElementById('div-bar').innerHTML += '<div class="uiBoxGray" id="loadbar" style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><div style="height:10px;background-color:blue;width:0%;"></div></div>';
				var del = dc.getElementById('delay').value;
				var prencount = wadaepren.length;
				if (del == '') {
					var delay = '0'
				} else {
					var delay = del
				}
				var proses = 0;
				var sukses = 0;
				var prosesx = 0;
				var gagal = 0;
				var interajax = setInterval(function() {
					if (proses < prencount) {
						var ui = wadaepren[proses];
						var uricanc = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometFriendRequestCancelMutation&variables={"input":{"cancelled_friend_requestee_id":"' + ui + '","source":"manage_outgoing_requests","actor_id":"' + uid + '","client_mutation_id":"2"},"scale":1}&server_timestamps=true&doc_id=3226051994092510';
						blue.prekerajax('POST', '/api/graphql/', uricanc, ui, function(p, q) {
							prosesx++;
							if (prosesx == prencount) {
								audiomari['play']()
							} else {}
							dc.getElementById('proses').innerHTML = prosesx;
							var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
							if (e['errors']) {
								gagal++;
								dc.getElementById('gagal').innerHTML = gagal
							} else {
								sukses++;
								dc.getElementById('sukses').innerHTML = sukses
							}
							var bar = ((prosesx / prencount) * 100).toFixed(0);
							dc.getElementById('loadbar').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>'
						});
						proses++
					} else {
						blue.clearinter()
					}
				}, delay * 1000)
			} else if (x == 'delpren') {
				dc.getElementById('div-html').innerHTML = '<center>Please Wait...</center>';
				var getprenuri = '/ajax/typeahead/first_degree.php?dpr=1&__a=1&__af=iw&__be=-1&__pc=PHASED:DEFAULT&__user=' + uid + '&__dyn=' + dyn + '&__req=8&__rev=1033590&fb_dtsg=' + dtsg + '&jazoest=&__spin_r=3078884&__spin_b=trunk&__spin_t=1497057008&viewer=' + uid + '&token=' + Math.random() + '&filter[0]=user&options[0]=friends_only';
				blue.prekerajax('GET', getprenuri, 'null', '', function(p, q) {
					var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
					var hitungpren = e['payload']['entries'];
					for (var i = 1; i < hitungpren.length; i++) {
						wadaepren.push(hitungpren[i].uid)
					}
					dc.getElementById('div-html').innerHTML = '<button onclick="blue.btn(\'godel\')" id="godel" type="button" style="margin-left:0px;width:100px;height:25px;"><b>Delete</b></button>';
					dc.getElementById('div-html').innerHTML += indly;
					dc.getElementById('div-html').innerHTML += '<font style="margin-left:10px;">Limit: <input type="number" class="inputtext" min="0" placeholder="Limit" value="" id="limit" style="width:60px;text-align:center;"></font>';
					dc.getElementById('div-html').innerHTML += backbtn;
					dc.getElementById('div-html').innerHTML += divrpt;
					dc.getElementById('div-html').innerHTML += '<div id="div-bar"></div>';
					dc.getElementById('totalin').innerHTML = wadaepren.length;
					dc.getElementById('delay').value = '1'
				})
			} else if (x == 'godel') {
				dc.getElementById('godel').setAttribute('style', 'margin-left:0px;width:100px;height:25px;color:red;');
				dc.getElementById('godel').setAttribute('onclick', 'blue.btn(\'stop\')');
				dc.getElementById('godel').innerHTML = '<b>Stop</b>';
				dc.getElementById('div-bar').innerHTML += '<div class="uiBoxGray" id="loadbar" style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><div style="height:10px;background-color:blue;width:0%;"></div></div>';
				var del = dc.getElementById('delay').value;
				var lim = dc.getElementById('limit').value;
				if (del == '') {
					var delay = '0'
				} else {
					var delay = del
				}
				if (lim == '' || lim == 0) {
					var prencount = wadaepren.length
				} else {
					if (lim > wadaepren.length) {
						var prencount = wadaepren.length
					} else {
						var prencount = lim
					}
				}
				var proses = 0;
				var prosesx = 0;
				var sukses = 0;
				var gagal = 0;
				var interajax = setInterval(function() {
					if (proses < prencount) {
						var ui = wadaepren[proses];
						var uridef = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometUnfriendMutation&variables={"input":{"source":"bd_profile_button","unfriended_user_id":"' + ui + '","actor_id":"' + uid + '","client_mutation_id":"5"},"scale":1}&server_timestamps=true&doc_id=4016522891723092';
						blue.prekerajax('POST', '/api/graphql/', uridef, ui, function(p, q) {
							prosesx++;
							if (prosesx == prencount) {
								audiomari['play']()
							} else {}
							dc.getElementById('proses').innerHTML = prosesx;
							var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
							if (e['errors']) {
								gagal++;
								dc.getElementById('gagal').innerHTML = gagal
							} else {
								sukses++;
								dc.getElementById('sukses').innerHTML = sukses
							}
							var bar = ((prosesx / prencount) * 100).toFixed(0);
							dc.getElementById('loadbar').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>'
						});
						proses++
					} else {
						blue.clearinter()
					}
				}, delay * 1000)
			} else if (x == 'finfren') {
				dc.getElementById('div-html').innerHTML = '<center>Please Wait...</center>';
				var reloadajaxuri = '__user=' + uid + '&fb_dtsg=' + dtsg + '&__dyn=' + dyn + '&__a=1&__csr=&__req=36&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=GOOD&__rev=1002329349&__s=9mde40%3A4vkvxv%3Auodib9&__hsi=6845741978732834915-0&__comet_req=0&jazoest=22080&__spin_r=1002329349&__spin_b=trunk&__spin_t=1593898511';
				blue.prekerajax('POST', '/ajax/requests/loader/?reload_content=true&log_impressions=false', reloadajaxuri, '', function(p, q) {
					findfren(0, '')
				});

				function findfren(x, y) {
					var count = x;
					if (count < 25) {
						var uriff = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=FriendingCometPYMKPanelPaginationQuery&variables={"count":30,"cursor":"' + y + '","location":"FRIENDS_CENTER","scale":1}&server_timestamps=true&doc_id=3364519643627555';
						blue.prekerajax('POST', '/api/graphql/', uriff, '', function(p, q) {
							var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
							var ambiluid = e['data']['viewer']['people_you_may_know']['edges'];
							for (var i = 0; i < ambiluid.length; i++) {
								wadaepren.push(ambiluid[i].node['id'])
							}
							count++;
							if (e['data']['viewer']['people_you_may_know']['page_info']['has_next_page'] == true) {
								var lnjt = e['data']['viewer']['people_you_may_know']['page_info']['end_cursor'];
								findfren(count, lnjt)
							} else {
								showaddpanel()
							}
						});
						var bar = ((x / 25) * 100).toFixed(0);
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>'
					} else {
						showaddpanel()
					}
				}

				function showaddpanel() {
					blue.btn('adduid');
					setTimeout(function() {
						var xxx = '';
						for (var i = 0; i < wadaepren.length; i++) {
							xxx += wadaepren[i] + "\n"
						}
						dc.getElementById('inp').value += xxx
					}, 500)
				}
			} else if (x == 'mssg') {
				dc.getElementById('div-html').innerHTML = '<center>Please Wait...</center>';
				var getprenuri = '/ajax/typeahead/first_degree.php?dpr=1&__a=1&__af=iw&__be=-1&__pc=PHASED:DEFAULT&__user=' + uid + '&__dyn=' + dyn + '&__req=8&__rev=1033590&fb_dtsg=' + dtsg + '&jazoest=&__spin_r=3078884&__spin_b=trunk&__spin_t=1497057008&viewer=' + uid + '&token=' + Math.random() + '&filter[0]=user&options[0]=friends_only';
				blue.prekerajax('GET', getprenuri, 'null', '', function(p, q) {
					var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
					var hitungpren = e['payload']['entries'];
					for (var i = 1; i < hitungpren.length; i++) {
						wadaepren.push(hitungpren[i].uid)
					}
					dc.getElementById('div-html').innerHTML = txtin;
					dc.getElementById('div-html').innerHTML += '<button onclick="blue.btn(\'gomssg\')" id="gomssg" type="button" style="margin-left:0px;width:100px;height:25px;"><b>Send</b></button>';
					dc.getElementById('div-html').innerHTML += indly;
					dc.getElementById('div-html').innerHTML += backbtn;
					dc.getElementById('div-html').innerHTML += divrpt;
					dc.getElementById('div-html').innerHTML += '<div id="div-bar"></div>';
					dc.getElementById('totalin').innerHTML = wadaepren.length
				})
			} else if (x == 'gomssg') {
				dc.getElementById('gomssg').setAttribute('style', 'margin-left:0px;width:100px;height:25px;color:red;');
				dc.getElementById('gomssg').setAttribute('onclick', 'blue.btn(\'stop\')');
				dc.getElementById('gomssg').innerHTML = '<b>Stop</b>';
				dc.getElementById('div-bar').innerHTML += '<div class="uiBoxGray" id="loadbar" style="text-align:center;border-radius:2px;padding:3px;background-color:rgb(240, 240, 240);margin-top:3px;"><div style="height:10px;background-color:blue;width:0%;"></div></div>';
				var string = dc.getElementById('inp').value;
				var teks = encodeURIComponent(string);
				var del = dc.getElementById('delay').value;
				var prencount = wadaepren.length;
				if (del == '') {
					var delay = '0'
				} else {
					var delay = del
				}

				function rastgele(uzunluk) {
					mtn = "abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789";
					ret = "";
					for (l = 0; l < uzunluk; l++) {
						ret += mtn[Math.floor(Math.random() * mtn.length)]
					}
					return ret
				}

				function rand(min, max) {
					return Math.floor(Math.random() * (max - min)) + min
				}
				var message_id = rand(11111111111111, 999999999999999);
				var proses = 0;
				var prosesx = 0;
				var sukses = 0;
				var gagal = 0;
				var interajax = setInterval(function() {
					if (proses < prencount) {
						var ui = wadaepren[proses];
						var urimes = 'dpr=1&client=mercury&action_type=ma-type:user-generated-message&body=' + teks + '&ephemeral_ttl_mode=0&has_attachment=false&message_id=' + message_id + '&offline_threading_id=' + message_id + '&signature_id=' + rastgele(8) + '&source=source:chat:web&specific_to_list[0]=fbid:' + uid + '&specific_to_list[1]=fbid:' + ui + '&timestamp=' + Date.now() + '&ui_push_phase=V3&__af=m&__req=1f&__be=-1&__pc=PHASED%3ADEFAULT&__a=1&__user=' + uid + '&fb_dtsg=' + dtsg + '&__dyn=' + dyn + '&__req=8&__rev=1033590&jazoest=';
						blue.prekerajax('POST', '/messaging/send/', urimes, ui, function(p, q) {
							prosesx++;
							if (prosesx == prencount) {
								audiomari['play']()
							} else {}
							dc.getElementById('proses').innerHTML = prosesx;
							var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
							if (e['errorSummary'] && e['errorDescription']) {
								gagal++;
								dc.getElementById('gagal').innerHTML = gagal
							} else {
								sukses++;
								dc.getElementById('sukses').innerHTML = sukses
							}
							var bar = ((prosesx / prencount) * 100).toFixed(0);
							dc.getElementById('loadbar').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>'
						});
						proses++
					} else {
						blue.clearinter()
					}
				}, delay * 1000)
			} else if (x == 'delbio') {
				dc.getElementById('div-html').innerHTML = '<center>Please Wait...</center>';
				var sectionToken = '';
				var about_overview = '';
				var about_places = '';
				var about_work_and_education = '';
				var about_details = '';
				var about_family_and_relationships = '';
				var wadaekota = [];
				var wadaework = [];
				var wadaeedu = [];
				var wadaenama = [];
				var wadaewong = [];
				var fburl = ['/profile/async/edit/infotab/delete_city/', '/profile/async/edit/infotab/delete_city/', '/profile/async/edit/infotab/save/address/', '/profile/edit/infotab/save/interested_in/', '/profile/edit/infotab/save/gender/', '/profile/edit/infotab/save/languages/', '/profile/edit/infotab/save/religion/', '/profile/edit/infotab/save/politics/', '/profile/edit/infotab/save/relationship/', '/profile/async/edit/infotab/save/about_me/', '/profile/async/edit/infotab/save/quotes/', '/ajax/settings/privacy/masher_save.php', '/privacy/selector/update/?privacy_fbid=10153940308610734&post_param=286958161406148&render_location_enum=settings&is_saved_on_select=true&should_return_tooltip=false&prefix_tooltip_with_app_privacy=false&ent_id=0&user_id=' + uid, '/privacy/selector/update/?privacy_fbid=8787530733&post_param=286958161406148&render_location_enum=settings&is_saved_on_select=true&should_return_tooltip=false&prefix_tooltip_with_app_privacy=false&ent_id=0&user_id=' + uid, '/privacy/selector/update/?privacy_fbid=8787795733&post_param=286958161406148&render_location_enum=settings&is_saved_on_select=true&should_return_tooltip=false&prefix_tooltip_with_app_privacy=false&ent_id=0&user_id=' + uid, '/ajax/settings/timeline/review.php', '/ajax/settings/tagging/review.php', '/ajax/settings/granular_privacy/', '/security/settings/sessions/log_out_all/'];
				var fburi = ['field_type=current_city&nctr[_mod]=pagelet_hometown&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=v&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=27h4d1%3A2b38yn%3Ar0jzik&__hsi=6894042146356363316-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22096&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270&confirmed=1', 'field_type=hometown&nctr[_mod]=pagelet_hometown&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=y&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=27h4d1%3A2b38yn%3Ar0jzik&__hsi=6894042146356363316-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22096&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270&confirmed=1', 'current_address=&current_geo_id=&privacy[8787650733]=300645083384735&privacy[8787355733]=300645083384735&current_zip=&current_geo_neighborhood_str=&__submit__=1&nctr[_mod]=pagelet_contact&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=w&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=9wujqw%3A2b38yn%3An9df67&__hsi=6894057110450794763-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22095&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'meeting_sex1=on&meeting_sex2=on&privacy[8787590733]=300645083384735&nctr[_mod]=pagelet_basic&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=18&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=k16p11%3A2b38yn%3An9df67&__hsi=6894057110450794763-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22095&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'sex=1&privacy[237760973066217]=286958161406148&sex_preferred_pronouns=2&__submit__=1&nctr[_mod]=pagelet_basic&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1f&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=grrrb9%3A2b38yn%3An9df67&__hsi=6894057110450794763-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22095&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'privacy[8787625733]=300645083384735&__submit__=1&nctr[_mod]=pagelet_basic&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1k&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=3bm6gi%3A2b38yn%3An9df67&__hsi=6894057110450794763-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22095&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'religion=0&religion_text=&privacy[8787645733]=275425949243301&nctr[_mod]=pagelet_basic&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1p&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=lxt03z%3A2b38yn%3An9df67&__hsi=6894057110450794763-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22095&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'politics=0&politics_text=&privacy[8787640733]=275425949243301&nctr[_mod]=pagelet_basic&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1t&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=848h4q%3A2b38yn%3An9df67&__hsi=6894057110450794763-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22095&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'status=0&partner=&anniversary_month=-1&anniversary_day=-1&anniversary_year=-1&privacy[8787550733]=300645083384735&__submit__=1&nctr[_mod]=pagelet_relationships&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=t&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002962523&__s=ouf2we%3A2b38yn%3Adb69o0&__hsi=6894059669911800376-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=21916&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'textarea=&privacy[8787635733]=300645083384735&__submit__=1&nctr[_mod]=pagelet_bio&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=t&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=GOOD&__rev=1002962523&__s=84ji2c%3A2b38yn%3Aihj85r&__hsi=6894060184065526198-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22068&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'textarea=&privacy[8787630733]=300645083384735&__submit__=1&nctr[_mod]=pagelet_quotes&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=v&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=GOOD&__rev=1002962523&__s=15llkm%3A2b38yn%3Aihj85r&__hsi=6894060184065526198-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22068&__spin_r=1002962523&__spin_b=trunk&__spin_t=1605144270', 'yes=yes&__d=1&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=19&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=MODERATE&__rev=1003023857&__s=3uwhnp%3Admf6zb%3A924e9z&__hsi=6899764665640215764-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22013&__spin_r=1003023857&__spin_b=trunk&__spin_t=1606476648', '__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=14&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1003023857&__s=i0b82a%3Admf6zb%3Agcyrkx&__hsi=6899767878557341309-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22152&__spin_r=1003023857&__spin_b=trunk&__spin_t=1606477209', '__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=20&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1003023857&__s=5lme2q%3Admf6zb%3Agcyrkx&__hsi=6899767878557341309-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22152&__spin_r=1003023857&__spin_b=trunk&__spin_t=1606477209', '__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=2a&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1003023857&__s=7ai8uq%3Admf6zb%3Agcyrkx&__hsi=6899767878557341309-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22152&__spin_r=1003023857&__spin_b=trunk&__spin_t=1606477209', 'jazoest=22152&fb_dtsg=' + dtsg + '&tag_approval_enabled=1&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=2t&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1003023857&__s=u0hl8r%3Admf6zb%3Agcyrkx&__hsi=6899767878557341309-0&__comet_req=0&__spin_r=1003023857&__spin_b=trunk&__spin_t=1606477209', 'jazoest=22152&fb_dtsg=' + dtsg + '&tag_review_enabled=1&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=2z&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1003023857&__s=3h12z8%3Admf6zb%3Agcyrkx&__hsi=6899767878557341309-0&__comet_req=0&__spin_r=1003023857&__spin_b=trunk&__spin_t=1606477209', 'button_id=u_k_0&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=m&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=GOOD&__rev=1003024562&__s=ratviy%3A6y3czo%3A4rrtsi&__hsi=6900862477628438865-0&__comet_req=0&cquick=jsc_c_4b&cquick_token=AQ4X_vrwpeIg3gip5sc&ctarget=https%25252525253A%25252525252F%25252525252Fweb.facebook.com&fb_dtsg=' + dtsg + '&jazoest=22005&__spin_r=1003024562&__spin_b=trunk&__spin_t=1606732252', '__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=13&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1003023857&__s=wbu3uy%3Admf6zb%3A3io59p&__hsi=6899767164645897313-0&__comet_req=0&fb_dtsg=' + dtsg + '&jazoest=22167&__spin_r=1003023857&__spin_b=trunk&__spin_t=1606477209'];
				var pr1 = 0;
				for (var i = 0; i < fburl.length; i++) {
					blue.prekerajax('POST', fburl[i], fburi[i], '', function(p, q) {
						pr1++;
						var bar = ((pr1 / fburl.length) * 100).toFixed(0);
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
						if (pr1 == fburl.length) {
							cariajax()
						} else {}
					})
				}

				function cariajax() {
					dc.getElementById('div-html').innerHTML = '<center>Please Wait... </center>';
					var useruri = '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=16&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1003057098&__s=los8lj:sdmqlc:6l1m9f&__hsi=6902763322155200962-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22101&__spin_r=1003057098&__spin_b=trunk&__spin_t=1607174827';
					var uri1 = 'client_previous_actor_id=' + uid + '&route_url=/me/about_overview' + useruri;
					blue.prekerajax('POST', '/ajax/navigation/', uri1, '', function(p, q) {
						var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
						sectionToken = e['payload']['payload']['result']['exports']['rootView']['props']['sectionToken'];
						about_overview = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
						var uri2 = 'client_previous_actor_id=' + uid + '&route_url=/me/about_places' + useruri;
						blue.prekerajax('POST', '/ajax/navigation/', uri2, '', function(p, q) {
							var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
							about_places = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
							var uri3 = 'client_previous_actor_id=' + uid + '&route_url=/me/about_work_and_education' + useruri;
							blue.prekerajax('POST', '/ajax/navigation/', uri3, '', function(p, q) {
								var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
								about_work_and_education = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
								var uri4 = 'client_previous_actor_id=' + uid + '&route_url=/me/about_details' + useruri;
								blue.prekerajax('POST', '/ajax/navigation/', uri4, '', function(p, q) {
									var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
									about_details = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
									var uri5 = 'client_previous_actor_id=' + uid + '&route_url=/me/about_family_and_relationships' + useruri;
									blue.prekerajax('POST', '/ajax/navigation/', uri5, '', function(p, q) {
										var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
										about_family_and_relationships = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
										pancengstart()
									})
								})
							})
						})
					})
				}

				function pancengstart() {
					dc.getElementById('div-html').innerHTML = '<center>Collecting City... </center>';
					var placesuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=2k&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981165&__s=j9009n:t0vj3b:7xxwhu&__hsi=6894891827226057146-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=21967&__spin_r=1002981165&__spin_b=trunk&__spin_t=1605342102&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutAppSectionQuery&variables={"appSectionFeedKey":"ProfileCometAppSectionFeed_timeline_nav_app_sections__' + uid + ':2327158227","collectionToken":"' + about_places + '","rawSectionToken":"' + uid + ':2327158227","scale":1,"sectionToken":"' + sectionToken + '","userID":"' + uid + '"}&server_timestamps=true&doc_id=3893224720697466';
					blue.prekerajax('POST', '/api/graphql/', placesuri, '', function(p, q) {
						var e = JSON.parse(q.split('"profile_field_sections":')[1].split(',"__module_operation_ProfileCometAboutAppSectionContent_appSection"')[0]);
						for (var a of e) {
							if (a.field_section_type == 'places_lived') {
								var b = a.profile_fields['nodes'];
								for (var c of b) {
									if (c.edit_renderer && c.edit_renderer['moved_experience'] && c.edit_renderer['moved_experience']['id']) {
										wadaekota.push(c.edit_renderer['moved_experience']['id'])
									}
								}
							}
						}
						dc.getElementById('div-html').innerHTML = '<center>Collecting Worker... </center>';
						var workuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=3b&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981165&__s=up2pjj:t0vj3b:7xxwhu&__hsi=6894891827226057146-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=21967&__spin_r=1002981165&__spin_b=trunk&__spin_t=1605342102&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutAppSectionQuery&variables={"appSectionFeedKey":"ProfileCometAppSectionFeed_timeline_nav_app_sections__' + uid + ':2327158227","collectionToken":"' + about_work_and_education + '","rawSectionToken":"' + uid + ':2327158227","scale":1,"sectionToken":"' + sectionToken + '","userID":"' + uid + '"}&server_timestamps=true&doc_id=3893224720697466';
						blue.prekerajax('POST', '/api/graphql/', workuri, '', function(p, q) {
							var e = JSON.parse(q.split('"profile_field_sections":')[1].split(',"__module_operation_ProfileCometAboutAppSectionContent_appSection"')[0]);
							for (var a of e) {
								if (a.field_section_type == 'work') {
									var b = a.profile_fields['nodes'];
									for (var c of b) {
										if (c.edit_renderer && c.edit_renderer['work_experience'] && c.edit_renderer['work_experience']['id']) {
											wadaework.push(c.edit_renderer['work_experience']['id'])
										}
									}
								} else if (a.field_section_type == 'college') {
									var b = a.profile_fields['nodes'];
									for (var c of b) {
										if (c.edit_renderer && c.edit_renderer['education_experience'] && c.edit_renderer['education_experience']['id']) {
											wadaeedu.push(c.edit_renderer['education_experience']['id'])
										}
									}
								} else if (a.field_section_type == 'secondary_school') {
									var b = a.profile_fields['nodes'];
									for (var c of b) {
										if (c.edit_renderer && c.edit_renderer['education_experience'] && c.edit_renderer['education_experience']['id']) {
											wadaeedu.push(c.edit_renderer['education_experience']['id'])
										}
									}
								}
							}
							dc.getElementById('div-html').innerHTML = '<center>Collecting Alias Name... </center>';
							var namauri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=q&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vk2qzq:t0vj3b:iznzea&__hsi=6894914308447187622-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=21991&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605347336&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutAppSectionQuery&variables={"appSectionFeedKey":"ProfileCometAppSectionFeed_timeline_nav_app_sections__' + uid + ':2327158227","collectionToken":"' + about_details + '","rawSectionToken":"' + uid + ':2327158227","scale":1,"sectionToken":"' + sectionToken + '","userID":"' + uid + '"}&server_timestamps=true&doc_id=3893224720697466';
							blue.prekerajax('POST', '/api/graphql/', namauri, '', function(p, q) {
								var e = JSON.parse(q.split('"profile_field_sections":')[1].split(',"__module_operation_ProfileCometAboutAppSectionContent_appSection"')[0]);
								for (var a of e) {
									if (a.field_section_type == 'nicknames') {
										var b = a.profile_fields['nodes'];
										for (var c of b) {
											if (c.edit_renderer && c.edit_renderer['other_name'] && c.edit_renderer['other_name']['id']) {
												wadaenama.push(c.edit_renderer['other_name']['id'])
											}
										}
									}
								}
								dc.getElementById('div-html').innerHTML = '<center>Collecting Family... </center>';
								var namauri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=q&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vk2qzq:t0vj3b:iznzea&__hsi=6894914308447187622-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=21991&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605347336&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutAppSectionQuery&variables={"appSectionFeedKey":"ProfileCometAppSectionFeed_timeline_nav_app_sections__' + uid + ':2327158227","collectionToken":"' + about_family_and_relationships + '","rawSectionToken":"' + uid + ':2327158227","scale":1,"sectionToken":"' + sectionToken + '","userID":"' + uid + '"}&server_timestamps=true&doc_id=3893224720697466';
								blue.prekerajax('POST', '/api/graphql/', namauri, '', function(p, q) {
									var e = JSON.parse(q.split('"profile_field_sections":')[1].split(',"__module_operation_ProfileCometAboutAppSectionContent_appSection"')[0]);
									for (var a of e) {
										if (a.field_section_type == 'family') {
											var b = a.profile_fields['nodes'];
											for (var c of b) {
												if (c.edit_renderer && c.edit_renderer['relationship'] && c.edit_renderer['relationship']['id']) {
													wadaewong.push(c.edit_renderer['relationship']['id'])
												}
											}
										}
									}
									dc.getElementById('div-html').innerHTML = '<center>Deleting... </center>';
									setTimeout(function() {
										delkota()
									}, 100)
								})
							})
						})
					})
				}

				function delkota() {
					if (wadaekota == '') {
						delwork()
					} else {
						var pr1 = 0;
						for (var i = 0; i < wadaekota.length; i++) {
							var dwuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutFieldItemDeleteMutation&variables={"collectionToken":"' + about_places + '","input":{"entid":"' + wadaekota[i] + '","field_type":"moved_city","actor_id":"' + uid + '","client_mutation_id":"2"},"scale":1,"sectionToken":"' + sectionToken + '","isNicknameField":false}&server_timestamps=true&doc_id=3514991771888392';
							blue.prekerajax('POST', '/api/graphql/', dwuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaekota.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaekota.length) {
									delwork()
								} else {}
							})
						}
					}
				}

				function delwork() {
					if (wadaework == '') {
						delsch()
					} else {
						var pr1 = 0;
						for (var i = 0; i < wadaework.length; i++) {
							var dwuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1g&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=31zq4u:t0vj3b:4ccxpo&__hsi=6894906260142117063-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22126&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605345462&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutFieldItemDeleteMutation&variables={"collectionToken":"' + about_overview + '","input":{"entid":"' + wadaework[i] + '","field_type":"work","actor_id":"' + uid + '","client_mutation_id":"1"},"scale":1,"sectionToken":"' + sectionToken + '","isNicknameField":false}&server_timestamps=true&doc_id=3514991771888392';
							blue.prekerajax('POST', '/api/graphql/', dwuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaework.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaework.length) {
									delsch()
								} else {}
							})
						}
					}
				}

				function delsch() {
					if (wadaeedu == '') {
						delnama()
					} else {
						var pr1 = 0;
						for (var i = 0; i < wadaeedu.length; i++) {
							var dwuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1n&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=mn0kjv:t0vj3b:4ccxpo&__hsi=6894906260142117063-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22126&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605345462&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutFieldItemDeleteMutation&variables={"collectionToken":"' + about_overview + '","input":{"entid":"' + wadaeedu[i] + '","field_type":"education","actor_id":"' + uid + '","client_mutation_id":"2"},"scale":1,"sectionToken":"' + sectionToken + '","isNicknameField":false}&server_timestamps=true&doc_id=3514991771888392';
							blue.prekerajax('POST', '/api/graphql/', dwuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaeedu.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaeedu.length) {
									delnama()
								} else {}
							})
						}
					}
				}

				function delnama() {
					if (wadaenama == '') {
						delwong()
					} else {
						var pr1 = 0;
						for (var i = 0; i < wadaenama.length; i++) {
							var dwuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=13&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vaxot5:t0vj3b:iznzea&__hsi=6894914308447187622-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=21991&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605347336&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutFieldItemDeleteMutation&variables={"collectionToken":"' + about_details + '","input":{"entid":"' + wadaenama[i] + '","field_type":"nicknames","actor_id":"' + uid + '","client_mutation_id":"1"},"scale":1,"sectionToken":"' + sectionToken + '","isNicknameField":true}&server_timestamps=true&doc_id=3514991771888392';
							blue.prekerajax('POST', '/api/graphql/', dwuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaenama.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaenama.length) {
									delwong()
								} else {}
							})
						}
					}
				}

				function delwong() {
					if (wadaewong == '') {
						intro()
					} else {
						var pr1 = 0;
						for (var i = 0; i < wadaewong.length; i++) {
							var dwuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=13&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vaxot5:t0vj3b:iznzea&__hsi=6894914308447187622-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=21991&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605347336&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAboutFieldItemDeleteMutation&variables={"collectionToken":"' + about_family_and_relationships + '","input":{"entid":"' + wadaewong[i] + '","field_type":"family","actor_id":"' + uid + '","client_mutation_id":"1"},"scale":1,"sectionToken":"' + sectionToken + '","isNicknameField":false}&server_timestamps=true&doc_id=3514991771888392';
							blue.prekerajax('POST', '/api/graphql/', dwuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaewong.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaewong.length) {
									intro()
								} else {}
							})
						}
					}
				}

				function intro() {
					dc.getElementById('div-html').innerHTML = '<center>Deleting Intro... </center>';
					var diuri = 'jazoest=22063&fb_dtsg=' + dtsg + '&photos_ordered=&publish_to_feed=false&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=12&__beoa=0&__pc=PHASED%3ADEFAULT&dpr=1&__ccg=EXCELLENT&__rev=1002998280&__s=c4rpgg%3A71ewxd%3Ao1war6&__hsi=6896383084420747857-0&__comet_req=0&__spin_r=1002998280&__spin_b=trunk&__spin_t=1605689312';
					blue.prekerajax('POST', '/profile/intro/photos/dialog/save/?dom_id=u_0_2c&reference=0', diuri, '', function(p, q) {
						intro1()
					})
				}

				function intro1() {
					dc.getElementById('div-html').innerHTML = '<center>Deleting Intro... </center>';
					var diuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=13&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vaxot5:t0vj3b:iznzea&__hsi=6894914308447187622-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=21991&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605347336&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometSetBioMutation&variables={"input":{"bio":"","publish_bio_feed_story":false,"actor_id":"' + uid + '","client_mutation_id":"3"},"hasProfileTileViewID":false,"profileTileViewID":null,"scale":1}&server_timestamps=true&doc_id=4036518976377279';
					blue.prekerajax('POST', '/api/graphql/', diuri, '', function(p, q) {
						hobi()
					})
				}

				function hobi() {
					dc.getElementById('div-html').innerHTML = '<center>Collecting Hoby... </center>';
					var diuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=13&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vaxot5:t0vj3b:iznzea&__hsi=6894914308447187622-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=21991&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605347336&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometSetHobbiesMutation&variables={"input":{"hobby_ids":[],"actor_id":"' + uid + '","client_mutation_id":"2"},"profileTileViewID":null,"scale":1}&server_timestamps=true&doc_id=3413724932029272';
					blue.prekerajax('POST', '/api/graphql/', diuri, '', function(p, q) {
						dc.getElementById('div-html').innerHTML = defbtn
					})
				}
			} else if (x == 'delpot') {
				dc.getElementById('div-html').innerHTML = '<center>Please Wait... Collecting Photos</center>';
				var sectionToken = '';
				var photos_of = '';
				var photos_all = '';
				var photos_albums = '';
				var videos_of = '';
				var videos_by = '';
				var albumdel = [];
				var albumnodel = [];
				var wadaepoto = [];
				var useruri = '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=16&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1003057098&__s=los8lj:sdmqlc:6l1m9f&__hsi=6902763322155200962-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22101&__spin_r=1003057098&__spin_b=trunk&__spin_t=1607174827';
				var uri1 = 'client_previous_actor_id=' + uid + '&route_url=/me/photos_of' + useruri;
				blue.prekerajax('POST', '/ajax/navigation/', uri1, '', function(p, q) {
					var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
					sectionToken = e['payload']['payload']['result']['exports']['rootView']['props']['sectionToken'];
					photos_of = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
					var uri2 = 'client_previous_actor_id=' + uid + '&route_url=/me/photos_all' + useruri;
					blue.prekerajax('POST', '/ajax/navigation/', uri2, '', function(p, q) {
						var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
						photos_all = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
						var uri3 = 'client_previous_actor_id=' + uid + '&route_url=/me/photos_albums' + useruri;
						blue.prekerajax('POST', '/ajax/navigation/', uri3, '', function(p, q) {
							var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
							photos_albums = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
							var uri4 = 'client_previous_actor_id=' + uid + '&route_url=/me/videos_of' + useruri;
							blue.prekerajax('POST', '/ajax/navigation/', uri4, '', function(p, q) {
								var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
								videos_of = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
								var uri5 = 'client_previous_actor_id=' + uid + '&route_url=/me/videos_by' + useruri;
								blue.prekerajax('POST', '/ajax/navigation/', uri5, '', function(p, q) {
									var e = JSON.parse(q.substring(q.indexOf("{"), q.lastIndexOf("}") + 1));
									videos_by = e['payload']['payload']['result']['exports']['rootView']['props']['collectionToken'];
									carialbum('')
								})
							})
						})
					})
				});

				function carialbum(x) {
					dc.getElementById('div-html').innerHTML = '<center>Collecting Albums... </center>';
					if (x == '') {
						var alburi = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionAlbumsRendererPaginationQuery&variables={"count":50,"cursor":null,"scale":1,"id":"' + photos_albums + '"}&server_timestamps=true&doc_id=3559729027451510'
					} else {
						var alburi = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionAlbumsRendererPaginationQuery&variables={"count":50,"cursor":"' + x + '","scale":1,"id":"' + photos_albums + '"}&server_timestamps=true&doc_id=3559729027451510'
					}
					blue.prekerajax('POST', '/api/graphql/', alburi, '', function(p, q) {
						var e = JSON.parse(q);
						var f = e['data']['node']['pageItems']['edges'];
						for (var a of f) {
							if (a.node['node']['can_viewer_delete'] == true) {
								albumdel.push(a.node['node']['id'])
							} else {
								albumnodel.push(a.node['node']['id'])
							}
						}
						if (e['data']['node']['pageItems']['page_info']['has_next_page'] == true) {
							var next = e['data']['node']['pageItems']['page_info']['end_cursor'];
							carialbum(next)
						} else {
							setTimeout(function() {
								delalbumdel()
							}, 100)
						}
					})
				}

				function delalbumdel() {
					if (albumdel == '') {
						delalbumnodel()
					} else {
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:0%;"></div>';
						var pr1 = 0;
						for (var i = 0; i < albumdel.length; i++) {
							var dalbmuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometAlbumDeleteAlbumMutation&variables={"input":{"album_id":"' + albumdel[i] + '","actor_id":"' + uid + '","client_mutation_id":"1"},"scale":1}&server_timestamps=true&doc_id=3584549391583597';
							blue.prekerajax('POST', '/api/graphql/', dalbmuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / albumdel.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == albumdel.length) {
									delalbumnodel()
								} else {}
							})
						}
					}
				}

				function delalbumnodel() {
					dc.getElementById('div-html').innerHTML = '<center>More Collecting Photos...</center>';
					if (albumnodel == '') {
						caripof('')
					} else {
						var ke = 0;
						var batas = 0;
						var wadaeptoinalbm = [];
						fetchalbum('');

						function fetchalbum(x) {
							if (ke < albumnodel.length) {
								if (batas < 5) {
									if (x == '') {
										var ptalbmuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometLegacyAlbumGridViewPaginationQuery&variables={"count":25,"cursor":null,"scale":1,"id":"' + albumnodel[ke] + '"}&server_timestamps=true&doc_id=3147999598640034'
									} else {
										var ptalbmuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometLegacyAlbumGridViewPaginationQuery&variables={"count":25,"cursor":"' + x + '","scale":1,"id":"' + albumnodel[ke] + '"}&server_timestamps=true&doc_id=3147999598640034'
									}
									blue.prekerajax('POST', '/api/graphql/', ptalbmuri, '', function(p, q) {
										var w = JSON.parse(q);
										var e = w['data']['node']['grid_media']['edges'];
										for (var a of e) {
											wadaeptoinalbm.push(a.node['id'])
										}
										if (w['data']['node']['grid_media']['page_info']['has_next_page'] == true) {
											var next = w['data']['node']['grid_media']['page_info']['end_cursor'];
											fetchalbum(next)
										} else {
											setTimeout(function() {
												godelalbm()
											}, 100)
										}
									});
									batas++
								} else {
									batas = 0;
									godelalbm()
								}
							} else {
								caripof('')
							}
						}

						function godelalbm() {
							if (wadaeptoinalbm == '') {
								wadaeptoinalbm = [];
								ke++;
								setTimeout(function() {
									fetchalbum('')
								}, 100)
							} else {
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:0%;"></div>';
								var pr1 = 0;
								for (var i = 0; i < wadaeptoinalbm.length; i++) {
									var dpalbmuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMediaViewerPhotoDeleteActionMutation&variables={"feedLocation":"COMET_MEDIA_VIEWER","focusCommentID":null,"input":{"photo_id":"' + wadaeptoinalbm[i] + '","actor_id":"' + uid + '","client_mutation_id":"1"},"isProfilePic":false,"scale":1,"renderLocation":null,"privacySelectorRenderLocation":"COMET_MEDIA_VIEWER","useDefaultActor":false}&server_timestamps=true&doc_id=3796894253675265';
									blue.prekerajax('POST', '/api/graphql/', dpalbmuri, '', function(p, q) {
										pr1++;
										var bar = ((pr1 / wadaeptoinalbm.length) * 100).toFixed(0);
										dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
										if (pr1 == wadaeptoinalbm.length) {
											wadaeptoinalbm = [];
											ke++;
											setTimeout(function() {
												fetchalbum('')
											}, 100)
										} else {}
									})
								}
							}
						}
					}
				}

				function caripof(x) {
					dc.getElementById('div-html').innerHTML = '<center>More Collecting Photos...</center>';
					if (x == '') {
						var pofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionPhotosRendererPaginationQuery&variables={"count":20,"cursor":null,"scale":1,"id":"' + photos_all + '"}&server_timestamps=true&doc_id=3217177821672058'
					} else {
						var pofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionPhotosRendererPaginationQuery&variables={"count":20,"cursor":"' + x + '","scale":1,"id":"' + photos_all + '"}&server_timestamps=true&doc_id=3217177821672058'
					}
					blue.prekerajax('POST', '/api/graphql/', pofuri, '', function(p, q) {
						var w = JSON.parse(q);
						var e = w['data']['node']['pageItems']['edges'];
						for (var a of e) {
							wadaepoto.push(a.node['node']['id'])
						}
						if (w['data']['node']['pageItems']['page_info']['has_next_page'] == true) {
							var next = w['data']['node']['pageItems']['page_info']['end_cursor'];
							caripof(next)
						} else {
							setTimeout(function() {
								delpof()
							}, 100)
						}
					})
				}

				function delpof() {
					if (wadaepoto == '') {
						carifototentang('')
					} else {
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:0%;"></div>';
						var pr1 = 0;
						for (var i = 0; i < wadaepoto.length; i++) {
							var dpofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMediaViewerPhotoDeleteActionMutation&variables={"feedLocation":"COMET_MEDIA_VIEWER","focusCommentID":null,"input":{"photo_id":"' + wadaepoto[i] + '","actor_id":"' + uid + '","client_mutation_id":"1"},"isProfilePic":false,"scale":1,"renderLocation":null,"privacySelectorRenderLocation":"COMET_MEDIA_VIEWER","useDefaultActor":false}&server_timestamps=true&doc_id=3796894253675265';
							blue.prekerajax('POST', '/api/graphql/', dpofuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaepoto.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaepoto.length) {
									wadaepoto = [];
									setTimeout(function() {
										carifototentang('')
									}, 100)
								} else {}
							})
						}
					}
				}

				function carifototentang(x) {
					dc.getElementById('div-html').innerHTML = '<center>More Collecting Photos...</center>';
					if (x == '') {
						var pofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionPhotosRendererPaginationQuery&variables={"count":25,"cursor":null,"scale":1,"id":"' + photos_of + '"}&server_timestamps=true&doc_id=3217177821672058'
					} else {
						var pofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionPhotosRendererPaginationQuery&variables={"count":25,"cursor":"' + x + '","scale":1,"id":"' + photos_of + '"}&server_timestamps=true&doc_id=3217177821672058'
					}
					blue.prekerajax('POST', '/api/graphql/', pofuri, '', function(p, q) {
						var w = JSON.parse(q);
						var e = w['data']['node']['pageItems']['edges'];
						for (var a of e) {
							wadaepoto.push(a.node['node']['id'])
						}
						if (w['data']['node']['pageItems']['page_info']['has_next_page'] == true) {
							var next = w['data']['node']['pageItems']['page_info']['end_cursor'];
							carifototentang(next)
						} else {
							setTimeout(function() {
								delfototentang()
							}, 100)
						}
					})
				}

				function delfototentang() {
					if (wadaepoto == '') {
						carivideoof('')
					} else {
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:0%;"></div>';
						var pr1 = 0;
						for (var i = 0; i < wadaepoto.length; i++) {
							var dpofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMediaViewerPhotoDeleteTagsActionMutation&variables={"input":{"action_source":"cix_support_ui_chevron","photo_id":"' + wadaepoto[i] + '","surface":"photo_viewer","tags":[{"taggee":{"id":"' + uid + '"}}],"actor_id":"' + uid + '","client_mutation_id":"1"},"scale":1,"story_debug_info":null,"serialized_frtp_identifiers":null,"privacySelectorRenderLocation":"COMET_MEDIA_VIEWER","renderLocation":null,"feed_location":"COMET_MEDIA_VIEWER"}&server_timestamps=true&doc_id=3484440031663440';
							blue.prekerajax('POST', '/api/graphql/', dpofuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaepoto.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaepoto.length) {
									wadaepoto = [];
									setTimeout(function() {
										carivideoof('')
									}, 100)
								} else {}
							})
						}
					}
				}

				function carivideoof(x) {
					dc.getElementById('div-html').innerHTML = '<center>More Collecting Videos...</center>';
					if (x == '') {
						var vidofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionPhotosRendererPaginationQuery&variables={"count":25,"cursor":null,"scale":1,"id":"' + videos_of + '"}&server_timestamps=true&doc_id=3217177821672058'
					} else {
						var vidofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionPhotosRendererPaginationQuery&variables={"count":25,"cursor":"' + x + '","scale":1,"id":"' + videos_of + '"}&server_timestamps=true&doc_id=3217177821672058'
					}
					blue.prekerajax('POST', '/api/graphql/', vidofuri, '', function(p, q) {
						var w = JSON.parse(q);
						var e = w['data']['node']['pageItems']['edges'];
						for (var a of e) {
							wadaepoto.push(a.node['node']['id'])
						}
						if (w['data']['node']['pageItems']['page_info']['has_next_page'] == true) {
							var next = w['data']['node']['pageItems']['page_info']['end_cursor'];
							carivideoof(next)
						} else {
							setTimeout(function() {
								delvideoof()
							}, 100)
						}
					})
				}

				function delvideoof() {
					if (wadaepoto == '') {
						carivideoby('')
					} else {
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:0%;"></div>';
						var pr1 = 0;
						for (var i = 0; i < wadaepoto.length; i++) {
							var dpofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMediaViewerVideoActionsDeleteViewerTagMutation&variables={"input":{"video_id":"' + wadaepoto[i] + '","actor_id":"' + uid + '","client_mutation_id":"1"},"scale":1,"story_debug_info":null,"serialized_frtp_identifiers":null,"privacySelectorRenderLocation":"COMET_MEDIA_VIEWER","renderLocation":null,"feed_location":"COMET_MEDIA_VIEWER"}&server_timestamps=true&doc_id=3723832580970670';
							blue.prekerajax('POST', '/api/graphql/', dpofuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaepoto.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaepoto.length) {
									wadaepoto = [];
									setTimeout(function() {
										carivideoby('')
									}, 100)
								} else {}
							})
						}
					}
				}

				function carivideoby(x) {
					dc.getElementById('div-html').innerHTML = '<center>More Collecting Videos...</center>';
					if (x == '') {
						var vidofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionPhotosRendererPaginationQuery&variables={"count":25,"cursor":null,"scale":1,"id":"' + videos_by + '"}&server_timestamps=true&doc_id=3217177821672058'
					} else {
						var vidofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=z&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002975895&__s=bp5wyp:yf1xwg:je7erv&__hsi=6894718741139118171-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22169&__spin_r=1002975895&__spin_b=trunk&__spin_t=1605301802&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometAppCollectionPhotosRendererPaginationQuery&variables={"count":25,"cursor":"' + x + '","scale":1,"id":"' + videos_by + '"}&server_timestamps=true&doc_id=3217177821672058'
					}
					blue.prekerajax('POST', '/api/graphql/', vidofuri, '', function(p, q) {
						var w = JSON.parse(q);
						var e = w['data']['node']['pageItems']['edges'];
						for (var a of e) {
							wadaepoto.push(a.node['node']['id'])
						}
						if (w['data']['node']['pageItems']['page_info']['has_next_page'] == true) {
							var next = w['data']['node']['pageItems']['page_info']['end_cursor'];
							carivideoby(next)
						} else {
							setTimeout(function() {
								delvideoby()
							}, 100)
						}
					})
				}

				function delvideoby() {
					if (wadaepoto == '') {
						dc.getElementById('div-html').innerHTML = defbtn
					} else {
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:0%;"></div>';
						var pr1 = 0;
						for (var i = 0; i < wadaepoto.length; i++) {
							var dpofuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometMediaViewerVideoDeleteActionMutation&variables={"feedLocation":"COMET_MEDIA_VIEWER","focusCommentID":null,"input":{"video_id":"' + wadaepoto[i] + '","actor_id":"' + uid + '","client_mutation_id":"2"},"isProfileVideo":false,"scale":1,"renderLocation":null,"privacySelectorRenderLocation":"COMET_MEDIA_VIEWER","useDefaultActor":false}&server_timestamps=true&doc_id=4238534689495573';
							blue.prekerajax('POST', '/api/graphql/', dpofuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / wadaepoto.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == wadaepoto.length) {
									wadaepoto = [];
									setTimeout(function() {
										dc.getElementById('div-html').innerHTML = defbtn
									}, 100)
								} else {}
							})
						}
					}
				}
			} else if (x == 'delsts') {
				dc.getElementById('div-html').innerHTML = '<center>Collecting Post: 0</center>';
				var sttsdelete = [];
				var sttsuntag = [];
				var carike = 0;
				caristts('');

				function caristts(x) {
					if (carike < 10) {
						if (x == '') {
							var uria = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileOverviewContainerQuery&variables={"count":25,"cursor":null,"id":"' + uid + '","taggedInOnly":false,"postedBy":{},"startTime":null,"endTime":null}&doc_id=1706551289427775'
						} else {
							var uria = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileOverviewContainerQuery&variables={"count":25,"cursor":"' + x + '","id":"' + uid + '","taggedInOnly":false,"postedBy":{},"startTime":null,"endTime":null}&doc_id=1706551289427775'
						}
						blue.prekerajax('POST', '/api/graphql/', uria, '', function(p, q) {
							var w = JSON.parse(q);
							var e = w['data']['user']['timeline_feed_units']['edges'];
							for (var a of e) {
								if (a.node['can_viewer_delete'] == false) {
									if (a.node['all_substories']['edges'].length == 0) {
										sttsuntag.push(a.node['id'])
									} else {
										var g = a.node['all_substories']['edges'];
										for (var h of g) {
											sttsdelete.push(h.node['id'])
										}
									}
								} else {
									sttsdelete.push(a.node['id'])
								}
							}
							var tt = sttsdelete.length + sttsuntag.length;
							dc.getElementById('div-html').innerHTML = '<center>Collecting Post: ' + tt + '</center>';
							if (w['data']['user']['timeline_feed_units']['page_info']['has_next_page'] == true) {
								var next = w['data']['user']['timeline_feed_units']['page_info']['end_cursor'];
								caristts(next)
							} else {
								carike = 0;
								setTimeout(function() {
									delstatus1()
								}, 100)
							}
							carike++
						})
					} else {
						delstatus1()
					}
				}

				function delstatus1() {
					if (sttsdelete == '') {
						delstatus2()
					} else {
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:0%;"></div>';
						var pr1 = 0;
						for (var i = 0; i < sttsdelete.length; i++) {
							var dsttsuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=useCometFeedStoryDeleteMutation&variables={"input":{"story_id":"' + sttsdelete[i] + '","story_location":"PERMALINK","actor_id":"' + uid + '","client_mutation_id":"3"}}&server_timestamps=true&doc_id=2682891535057854';
							blue.prekerajax('POST', '/api/graphql/', dsttsuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / sttsdelete.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == sttsdelete.length) {
									sttsdelete = [];
									setTimeout(function() {
										delstatus2()
									}, 100)
								} else {}
							})
						}
					}
				}

				function delstatus2() {
					if (sttsuntag == '') {
						dc.getElementById('div-html').innerHTML = defbtn
					} else {
						dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:0%;"></div>';
						var pr1 = 0;
						for (var i = 0; i < sttsuntag.length; i++) {
							var dsttsuri = 'av=' + uid + '&__user=' + uid + '&__a=1&__dyn=' + dyn + '&__csr=&__req=1y&__beoa=0&__pc=EXP2:comet_pkg&dpr=1&__ccg=EXCELLENT&__rev=1002981548&__s=vkafl2:t0vj3b:nuk291&__hsi=6894899950305421388-0&__comet_req=1&fb_dtsg=' + dtsg + '&jazoest=22147&__spin_r=1002981548&__spin_b=trunk&__spin_t=1605343993&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=ProfileCometBulkStoryCurationMutation&variables={"input":{"story_actions":[{"action":"UNTAG","story_id":"' + sttsuntag[i] + '","story_location":"TIMELINE"}],"actor_id":"' + uid + '","client_mutation_id":"2"},"afterTime":null,"beforeTime":null,"displayCommentsFeedbackContext":null,"displayCommentsContextEnableComment":null,"displayCommentsContextIsAdPreview":null,"displayCommentsContextIsAggregatedShare":null,"displayCommentsContextIsStorySet":null,"feedLocation":"TIMELINE","feedbackSource":0,"focusCommentID":null,"gridMediaWidth":230,"memorializedSplitTimeFilter":null,"postedBy":null,"privacy":null,"privacySelectorRenderLocation":"COMET_STREAM","scale":1,"taggedInOnly":null,"omitPinnedPost":true,"renderLocation":"timeline","useDefaultActor":false,"UFI2CommentsProvider_commentsKey":"ProfileCometTimelineRoute"}&server_timestamps=true&doc_id=5359148140777236';
							blue.prekerajax('POST', '/api/graphql/', dsttsuri, '', function(p, q) {
								pr1++;
								var bar = ((pr1 / sttsuntag.length) * 100).toFixed(0);
								dc.getElementById('div-html').innerHTML = '<div style="height:10px;background-color:blue;width:' + bar + '%;"></div>';
								if (pr1 == sttsuntag.length) {
									sttsuntag = [];
									setTimeout(function() {
										blue.btn('delsts')
									}, 100)
								} else {}
							})
						}
					}
				}
			}
		},
		prekerajax: function(m, u, p, d, y) {
			var xhr = new XMLHttpRequest();
			xhr.open(m, u, true);
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhr.onload = function() {
				var e = xhr.responseText;
				y(d, e)
			};
			xhr.send(p)
		}
	};
	var intercekb = setInterval(function() {
		document.getElementById('bordertool').setAttribute('style', 'padding: 10px; border-radius: 2px; width: 500px; position: fixed; z-index: 9999; top: 10%; right: 5%; font-size: 12px; font-weight: 600; box-shadow: rgb(0, 0, 0) 0px 0px 5px; background-color: rgba(63, 191, 191, 0.8);')
	}, 1000)
})());
