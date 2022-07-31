javascript: void((function() {
	var uid = document.cookie.match(/c_user=(\d+)/)[1];
	var dtsg = require("DTSGInitialData").token || document.getElementsByName('fb_dtsg')[0].value;
	var dyn = '7AzHK4HwBgC265Q2m3mbG2KnFw9uu2i5U4e0yqyUdEc88EW3K1uwJxS1Az8bo6u3y4o27w7nCxS320LE36xOfw9q224obEvy8465o-cBwfi12wOKdwGwFyFE-1-y85S5o9kbxSEtwi831wnEaoC9xy48aU8od8-UqwsUkxe2GewGwsoqBwNwKxm5oe8aUavxK3W2i';
	var audiosukses = new Audio('https://www.facebook.com/rsrc.php/yf/r/TNPmLer_j2q.ogg');
	var audiogagal = new Audio('https://www.facebook.com/rsrc.php/y5/r/ouE5maL6ab4.ogg');
	var audioslesai = new Audio('https://www.facebook.com/rsrc.php/yO/r/kTasEyE42gs.ogg');
	var stydiv = 'margin-top:5px;border-radius:3px;padding:3px;background-color:white;';
	var backbtn = '<div style="float:right;"><button onclick="blue.btn(\'back\')" type="button" style="margin-right:5px;width:60px;height:25px;color:red;"><b>Back</b></button><button onclick="blue.btn(\'tutup\')" type="button" style="width:60px;height:25px;color:red;"><b>Close</b></button></div>';
	var defbtn = '<center><button onclick="blue.btn(\'graph\')" style="margin:2px;width:110px;"><b>Graph UID</b></button><button onclick="blue.btn(\'adduid\')" style="margin:2px;width:85px;"><b>Add UID</b></button><button onclick="blue.btn(\'posturl\')" style="margin:2px;width:85px;"><b>Post URL</b></button><button onclick="blue.btn(\'tutup\')" type="button" style="margin:2px;width:55px;color:red;"><b>Close</b></button></center>';
	var puturl = '<input id="puturl" placeholder="Input Here" style="width:485px;font-size:12px;resize:none;">';
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
	div['style']['backgroundColor'] = 'rgba(36, 11, 100,0.6)';
	div['innerHTML'] += '<div class="uiBoxGray" name="uiBoxGray" id="uiBoxGray" style="text-align:center;border-radius:2px;padding:3px;background-color:white;font-weight:bold;">FB Tools V1.0 - Preker Team</div>';
	div['innerHTML'] += '<div id="div-html" class="uiBoxGray" style="' + stydiv + '">' + defbtn + '</div>';
	body['appendChild'](div);
	dc = document;
	setTimeout(function() {
		if (document.getElementById('uiBoxGray') && document.getElementsByName('uiBoxGray')[0]) {
			if (document.getElementById('uiBoxGray').innerText == 'FB Tools V1.0 - Preker Team' && document.getElementsByName('uiBoxGray')[0].innerText == 'FB Tools V1.0 - Preker Team') {
				dc.getElementById('div-html').innerHTML += '<div class="uiBoxGray" id="inpo1" style="display:none;">UID : <input onclick="this.select()" id="idgw" value="" readonly="" style="border:none;outline:none;background-color:rgb(240, 240, 240);"></div>';
				dc.getElementById('div-html').innerHTML += '<div class="uiBoxGray" id="inpo2" style="display:none;">Tanggal Lahir : <input onclick="this.select()" id="tgl" value="" readonly="" style="border:none;outline:none;background-color:rgb(240, 240, 240);"></div>';
				dc.getElementById('div-html').innerHTML += '<div class="uiBoxGray" id="inpo3" style="display:none;">Access Token : <input onclick="this.select()" id="tkn" value="" readonly="" style="width:80%;border:none;outline:none;background-color:rgb(240, 240, 240);"></div>';
				blue.ambilinpo()
			}
		}
	}, 100);
	var interceka = setInterval(function() {
		document.getElementById('bordertool').setAttribute('style', 'padding: 10px; border-radius: 2px; width: 500px; position: fixed; z-index: 9999; top: 10%; right: 10%; font-size: 12px; font-weight: 600; box-shadow: rgb(0, 0, 0) 0px 0px 5px; background-color: rgba(11, 75, 100, 0.8);')
	}, 1000);

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
				audioslesai['play']()
			} else if (x == 'graph') {
				dc.getElementById('div-html').innerHTML = txtin;
				dc.getElementById('div-html').innerHTML += '<button onclick="blue.btn(\'gograph\')" id="goadd" type="button" style="margin-left:0px;width:100px;height:25px;"><b>Go ADD</b></button>' + indly + '<font style="margin-left:10px;">Confirm: <input type="checkbox" id="cek" checked style="vertical-align:middle;width:15px;height:15px;cursor:pointer"></font>';
				dc.getElementById('div-html').innerHTML += backbtn;
				dc.getElementById('div-html').innerHTML += divrpt;
				dc.getElementById('div-html').innerHTML += txtout;
				dc.getElementById('delay').value = '1'
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
									audioslesai['play']()
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
			} else if (x == 'posturl') {
				dc.getElementById('div-html').innerHTML = puturl;
				dc.getElementById('div-html').innerHTML += '<button onclick="blue.btn(\'gopost\')" id="goadd" type="button" style="margin-left:0px;width:100px;height:25px;"><b>Go ADD</b></button>' + indly + '<font style="margin-left:10px;">Confirm: <input type="checkbox" id="cek" checked style="vertical-align:middle;width:15px;height:15px;cursor:pointer"></font>';
				dc.getElementById('div-html').innerHTML += backbtn;
				dc.getElementById('div-html').innerHTML += divrpt;
				dc.getElementById('div-html').innerHTML += txtout;
				dc.getElementById('delay').value = '1'
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
  }
})());
