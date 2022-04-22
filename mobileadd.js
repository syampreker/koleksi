javascript:void(function(){
var dtsg=document.getElementsByName("fb_dtsg")[0].value;
var uid=document.cookie.match(/c_user=(\d+)/)[1];
var dyn="7AmajEzUGByA5Q9UoHaEWC5EWq2WiWF3oyeqrWo8popyUW3F6wAxu13wFG2K48jyR88wPGiex2uVWxeUW6UO4EK3ucDwPK6qCzEkxvDxicxnxm1tyoOm8yUgx66EK3Ou49L-6Z1im7U9eiax6ezUgByECcypFt0";
var req=8;
var rev="1033590";
var jazoest="26581719899112977275102998658658170891001211158310010010384";
var spinr="3078884";
var spinb="trunk";
var spint="1497057008";
window.aing=
	{
	uid:uid,toAdds:[],uuid:function(a)
		{
		var b="",i,random;
		for(i=0;
		i<32;
		i++)
			{
			random=Math.random()*16|0;
			if(i==8||i==12||i==16||i==20)
				{
				b+="-"
			}
			b+=(i==12?4:(i==16?(random&3|8):random)).toString(16)
		}
		if(!a)
			{
			b=b.replace(/-/gi,"")
		}
		return b
	}
	,randUniqueId:function(d,e)
		{
		var a=new Date(),b=[a.getYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()];
		if(e)
			{
			b=aing.aduk(b)
		}
		var c=b.join("");
		if(d)
			{
			c=c+d
		}
		return c
	}
	,randInt:function(a,b)
		{
		return Math.floor(Math.random()*(b-a+1)+a)
	}
	,randString:function(a)
		{
		var b=" ";
		var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		for(var i=0;
		i<a;
		i++)
			{
			b+=c.charAt(Math.floor(Math.random()*c.length))
		}
		return b
	}
	,acak:function(a)
		{
		return a[Math.floor(Math.random()*a.length)]
	}
	,aduk:function(a)
		{
		var b=a.length,c,d;
		while(0!==b)
			{
			d=Math.floor(Math.random()*b);
			b-=1;
			c=a[b];
			a[b]=a[d];
			a[d]=c
		}
		return a
	}
	,splitUp:function(h,n)
		{
		var a=h.length%n,b=a,c=Math.floor(h.length/n),d=[];
		for(var e=0;
		e<h.length;
		e+=c)
			{
			var f=c+e,g=false;
			if(a!==0&&b)
				{
				f++;
				b--;
				g=true
			}
			d.push(h.slice(e,f));
			if(g)
				{
				e++
			}
		}
		return d
	}
	,getIsoForm:function(a)
		{
		if(!a)
			{
			a=new Date()
		}
		var b=a.getFullYear(),month=(a.getMonth()+1),det=a.getDate(),hour=a.getHours(),mnt=a.getMinutes(),scnd=a.getSeconds();
		var c=a.getTimezoneOffset();
		c=Math.round(c/-60);
		if(c>0)
			{
			if(c<10)
				{
				c="+0"+c+"00"
			}
			else
				{
				c="+"+c+"00"
			}
		}
		else
			{
			c=(c*c);
			if(c<10)
				{
				c="-0"+c+"00"
			}
			else
				{
				c="-"+c+"00"
			}
		}
		var d=b+"-";
		if(month<10)
			{
			month="0"+month
		}
		d+=month+"-";
		if(det<10)
			{
			d+="0"
		}
		d+=det+"T";
		if(hour<10)
			{
			d+="0"
		}
		d+=hour+":";
		if(mnt<10)
			{
			d+="0"
		}
		d+=mnt+":";
		if(scnd<10)
			{
			d+="0"
		}
		d+=scnd+c;
		return d
	}
	,getJulianDayCount:function(a,b)
		{
		if(!b)
			{
			if(!a)
				{
				a=new Date()
			}
			var c=a.getFullYear(),month=(a.getMonth()+1),date=a.getDate(),h=a.getHours(),m=a.getMinutes(),s=a.getSeconds();
			var d=0,acb=(eval(h)+(eval(m)/60)+(eval(s)/3600)),acc=1,acd=1;
			if(eval(c)<=1585)
				{
				acc=0
			}
			d=(-1*Math.floor(7*(Math.floor((eval(month)+9)/12)+eval(c))/4));
			if((eval(month)-9)<0)
				{
				acd=-1
			}
			var e=Math.abs(eval(month)-9),acf=Math.floor(eval(c)+acd*Math.floor(e/7));
			acf=(-1*Math.floor((Math.floor(acf/100)+1)*3/4));
			d=(d+Math.floor(275*eval(month)/9)+eval(date)+(acc*acf));
			d=(d+1721027+2*acc+367*eval(c)-0.5);
			d=(d+(acb/24))
		}
		else
			{
			var d=b+2400000.5
		}
		if(isNaN(d))
			{
			d=0
		}
		return d
	}
	,getModifiedJulianDayCount:function(a)
		{
		if(!a)
			{
			a=aing.getJulianDayCount(new Date)
		}
		return a-2400000.5
	}
	,getDateFrom:function(a)
		{
		var b=new Date(),year,month,date,hour,minutes,seconds,timezone;
		if(!a)
			{
			a=
				{
				"iso":aing.getIsoForm(b)
			}
		}
		if(a.iso)
			{
			var c=a.iso.replace(/\./,"+").replace(/Z/,"0"),isoa=c.match(/(\d\d\d\d)\-(\d\d)\-(\d\d)T((\d\d)\:(\d\d)\:(\d\d))([^\d]\d\d\d\d)/);
			if(isoa&&isoa.length==9)
				{
				date=isoa[3],month=isoa[2],year=isoa[1],hour=isoa[5],minutes=isoa[6],seconds=isoa[7],timezone=isoa[8],b=new Date(date+" "+["","January","February","March","April","May","June","July","August","September","October","November","December"][(month*1)]+" "+year+" "+hour+":"+minutes+":"+seconds+" GMT"+timezone)
			}
		}
		else if(a.jd)
			{
			var d=a.jd,jda,jdb,jdc,jdd,jde,jdf=Math.floor(d),jdg=d-jdf,jdh=2299161;
			if(jdf>=jdh)
				{
				var e=Math.floor(((jdf-1867216)-0.25)/36524.25);
				jda=jdf+1+e-Math.floor(0.25*e)
			}
			else
				{
				jda=jdf
			}
			var f=jdg+0.5;
			if(f>=1.0)
				{
				f-=1.0;
				jda++
			}
			jdb=jda+1524;
			jdc=Math.floor(6680.0+((jdb-2439870)-122.1)/365.25);
			jdd=Math.floor(jdc*365.25);
			jde=Math.floor((jdb-jdd)/30.6001);
			date=Math.floor(jdb-jdd-Math.floor(jde*30.6001)),month=Math.floor(jde-1);
			if(month>12)
				{
				month-=12
			}
			year=Math.floor(jdc-4715);
			if(month>2)
				{
				year--
			}
			if(year<=0)
				{
				year--
			}
			hour=Math.floor(f*24.0),minutes=Math.floor((f*24.0-hour)*60.0),jdk=((f*24.0-hour)*60.0-minutes)*60.0,seconds=Math.floor(jdk);
			jdk-=seconds;
			if(jdk>0.5)
				{
				seconds++
			}
			if(year<0)
				{
				year=-year
			}
			b=new Date(year,month-1,date,hour,minutes,seconds)
		}
		else if(a.mjd)
			{
			b=aing.getDateFrom(
				{
				"jd":aing.getJulianDayCount("",a.mjd)
			}
			)
		}
		return b
	}
	,jamBaraTeh:function(k,l,n)
		{
		if(!k)
			{
			if(l)
				{
				var a=aing.getDateFrom(
					{
					"jd":l
				}
				)
			}
		}
		else
			{
			var a=aing.getDateFrom(
				{
				"iso":k
			}
			)
		}
		if(!a)
			{
			var a=aing.getDateFrom(
				{
				"iso":aing.getIsoForm(new Date())
			}
			)
		}
		if(!n)
			{
			n=":day: :pasaran:, :date: :month: :year: jam :h:::m: :ampm:"
		}
		else
			{
			if(n=="hijri")
				{
				n=":hijriday: :time:, :hijridate: :hijrimonth: :hijriyear:"
			}
			else if(n=="java")
				{
				n=":day: :pasaran:, :javadate: :javamonth: :javayear: :fulltime:"
			}
		}
		var o="Teu nyaho Aing lieur bingits lah",iso=a.toISOString(),jd=0,mjd=0,ms=0,mnts=0,deltasec=0;
		var p=a.toString(),yearword,monthword,dateword,dayword,pasaranword,fulltimeword,timeword,hourword,minuteword,secondword,ampm,Hyearword,Hmonthword,Hdateword,Hdayword,Jyearword,Jmonthword,Jdateword,Jdayword;
		var q=["","January","February","March","April","May","June","July","August","September","October","November","December"],days=["Minggu","Senen","Selasa","Rabu","Kamis","Jum'at","Sabtu"],Hmonths=["","Muharram","Shafar","Rabiul Awwal","Rabiul Akhir","Jamadil Awwal","Jumadil Akhir","Rajab","Sya'ban","Ramadhan","Syawwal","Zulqaidah","Zulhijjah"],Hdays=["Al-Ahad","Al-Itsnayna","Ats-Tsalatsa","Al-Arba'a","Al-Hamis","Al-Jum'a","As-Sabt"],pasaran=["Pon","Wage","Kliwon","Legi","Pahing"],Jmonths=["","Suro","Sapar","Mulud","Ba'da Mulud","Jumadil Awal","Jumadil Akhir","Rejeb","Ruwah","Poso","Syawal","Dulkaidah","Besar"];
		if(a)
			{
			var r=a.getFullYear(),month=(a.getMonth()+1),date=a.getDate(),day=a.getDay(),hour=("0"+a.getHours()).slice(-2),minutes=("0"+a.getMinutes()).slice(-2),seconds=("0"+a.getSeconds()).slice(-2),timezone=(function()
				{
				var b=a.getTimezoneOffset();
				b=Math.round(b/-60);
				if(b>0)
					{
					if(b<10)
						{
						b="+0"+b+"00"
					}
					else
						{
						b="+"+b+"00"
					}
				}
				else
					{
					b=(b*b);
					if(b<10)
						{
						b="-0"+b+"00"
					}
					else
						{
						b="-"+b+"00"
					}
				}
				return b
			}
			)();
			yearword=r;
			monthword=q[(month*1)];
			dateword=date;
			dayword=days[day];
			Hdayword=Hdays[day];
			Jdayword=days[day];
			fulltimeword=hour+":"+minutes+":"+seconds;
			timeword=hour+":"+minutes;
			hourword=hour;
			minuteword=minutes;
			secondword=seconds;
			var s=new Date(dateword+" "+monthword+" "+r+" "+fulltimeword+" GMT"+timezone);
			iso=aing.getIsoForm(s);
			jd=aing.getJulianDayCount(s);
			mjd=aing.getModifiedJulianDayCount(jd);
			ms=Date.parse(s.toUTCString());
			deltasec=Math.round((Date.parse(new Date().toUTCString())-ms)/1000);
			mnts=Math.round(deltasec/60);
			if(iso&&jd&&mjd&&ms)
				{
				o=(function()
					{
					var a="Karak ge crot bieu",b=(function()
						{
						if(deltasec<0)
							{
							return(deltasec*-1)
						}
						else
							{
							return deltasec
						}
					}
					)(),c=
						{
						"years":
							{
							"mod":31536000,"alias":"tahun","past":["Udah lama","kebelakang"],"future":["Masih lama","lagi"]
						}
						,"months":
							{
							"mod":2592000,"alias":"bulan","past":["Udah","yang lalu"],"future":["Masih lumayan lama","lagi"]
						}
						,"weeks":
							{
							"mod":604800,"alias":"minggu","past":["Udah","kemaren"],"future":["Masih lumayan lama tinggal","lagi"]
						}
						,"days":
							{
							"mod":86400,"alias":"hari","past":["Udah","kemaren"],"future":["Tinggal","lagi"]
						}
						,"hours":
							{
							"mod":3600,"alias":"jam","past":["Baru","tadi"],"future":["Sekitar","lagi"]
						}
						,"minutes":
							{
							"mod":60,"alias":"menit","past":["Nembe","bieu"],"future":["Tinggal","lagi"]
						}
						,"seconds":
							{
							"mod":1,"alias":"detik","past":["Nembe","bieu"],"future":["Tinggal","deui"]
						}
					};
					if(b>0)
						{
						(function()
							{
							for(x in c)
								{
								var d=b;
								for(y in c)
									{
									if(y==x)
										{
										break
									}
									d%=c[y].mod
								}
								c[x].val=Math.floor(d/c[x].mod)
							}
						}
						)();
						(function()
							{
							var e="",f=0,g=2,h,i;
							for(z in c)
								{
								if(f==g)
									{
									break
								}
								var j=(function()
									{
									if(c[z].past&&c[z].future)
										{
										if(deltasec<0)
											{
											return c[z].future
										}
										else
											{
											return c[z].past
										}
									}
									else
										{
										return false
									}
								}
								)();
								if(c[z].val>0&&c[z].alias)
									{
									if(f==0&&j)
										{
										h=
											{
											"depan":j[0],"buntut":j[1]
										}
									}
									e+=c[z].val+" "+c[z].alias+" ";
									f++;
									i=true
								}
								else
									{
									if(i)
										{
										f++
									}
								}
							}
							if(e)
								{
								if(h&&h.depan&&h.buntut)
									{
									e=h.depan+" "+e+h.buntut
								}
								a=e
							}
						}
						)()
					}
					return a
				}
				)();
				ampm=(function()
					{
					var a;
					if(hourword>12)
						{
						a="PM";
						if(hourword<15)
							{
							a="siang"
						}
						else if(hourword<18)
							{
							a="sore"
						}
						else if(hourword<20)
							{
							a="magrib"
						}
						else
							{
							a="malem"
						}
					}
					else
						{
						a="AM";
						if(hourword<4)
							{
							a="dini hari"
						}
						else if(hourword<6)
							{
							a="subuh"
						}
						else if(hourword<10)
							{
							a="pagi"
						}
						else
							{
							a="siang"
						}
					}
					return a
				}
				)();
				pasaranword=(function()
					{
					return pasaran[(Math.round(jd)+3)%5]
				}
				)();
				Hyearword=(function()
					{
					return Math.floor(((30*((Math.floor(jd)+0.5)-1948439.5))+10646)/10631)
				}
				)();
				Hmonthword=(function()
					{
					return Math.min(12,Math.ceil(((Math.floor(jd)+0.5)-(29+((1+Math.ceil(29.5*(1-1))+(Hyearword-1)*354+Math.floor((3+(11*Hyearword))/30)+1948439.5)-1)))/29.5)+1)
				}
				)();
				Hdateword=(function()
					{
					return(Math.floor(jd)+0.5)-((1+Math.ceil(29.5*(Hmonthword-1))+(Hyearword-1)*354+Math.floor((3+(11*Hyearword))/30)+1948439.5)-1)+1
				}
				)();
				Jmonthword=Jmonths[Hmonthword];
				Hmonthword=Hmonths[Hmonthword];
				Jyearword=(Hyearword+512);
				Jdateword=Hdateword;
				p=(function()
					{
					var a=dayword+" "+pasaranword+", "+dateword+" "+monthword+" "+yearword+" jam "+timeword+" "+ampm,m=n;
					try
						{
						a=m.replace(/:year:/gi,yearword).replace(/:month:/gi,monthword).replace(/:date:/gi,dateword).replace(/:day:/gi,dayword).replace(/:pasaran:/gi,pasaranword).replace(/:fulltime:/gi,fulltimeword).replace(/:time:/gi,timeword).replace(/:h:/gi,hourword).replace(/:m:/gi,minuteword).replace(/:s:/gi,secondword).replace(/:ampm:/gi,ampm).replace(/:hijriyear:/gi,Hyearword).replace(/:hijrimonth:/gi,Hmonthword).replace(/:hijridate:/gi,Hdateword).replace(/:hijriday:/gi,Hdayword).replace(/:javayear:/gi,Jyearword).replace(/:javamonth:/gi,Jmonthword).replace(/:javadate:/gi,Jdateword).replace(/:javaday:/gi,Jdayword)
					}
					catch(_)
						{
					}
					return a
				}
				)()
			}
		}
		return
			{
			"tag":o,"word":p,"format":n,"iso":iso,"jd":jd,"mjd":mjd,"ms":ms,"minutes":mnts,"secs":deltasec
		}
	}
	,getRealTimeTag:function(a)
		{
		return a.replace(/masih(.*?)lama tinggal |masih(.*?)lama |tinggal |sekitar | lagi| deui/gi,"")
	}
	,stat:
		{
		ttlReq:[],ttlReqOk:0,ttlReqEr:0
	}
	,loding:
		{
		img:"<img src=\"//fbstatic-a.akamaihd.net/rsrc.php/v2/yb/r/GsNJNwuI-UM.gif\" width=\"16px\" height=\"11px\" style=\"margin:0 5px;
		vertical-align:bottom\"/>",bar:function(c,d,e,f)
			{
			if(!c)
				{
				c=document.body
			}
			d=d*1;
			if(aing.loding.frm&&aing.loding.frm<d)
				{
				aing.loding.frm++
			}
			else if(aing.loding.frm&&aing.loding.frm==d)
				{
			}
			else
				{
				aing.loding.frm=1
			}
			var b=((aing.loding.frm*100)/d);
			aing.loding.inf(c);
			if(aing.stat.delay)
				{
				f="yes"
			}
			var g=false;
			if(!f||f=="yes"||aing.stat.limit)
				{
				g="(Process: <b>"+aing.loding.frm+"/"+d+"</b>)"
			}
			var h=false;
			var i=false;
			var j=false;
			var k=false;
			if(aing.stat.delay)
				{
				h="(Next: <b>"+aing.loding.nextp()+"</b>)";
				if(aing.loding.frm==1)
					{
					i="(Delay: <b>"+(aing.stat.delay/1000)+"s</b>)";
					k="(Estimated: <b>"+aing.getRealTimeTag(aing.jamBaraTeh(aing.getIsoForm(new Date(aing.jamBaraTeh().ms+(aing.stat.delay*d)))).tag)+"</b>)";
					aing.loding.elapsedtime=aing.jamBaraTeh().ms;
					j="(Elapsed: <b>"+aing.getRealTimeTag(aing.jamBaraTeh().tag)+"</b>)";
					aing.loding.elapsedtimeinterval=setInterval(function()
						{
						var a="(Elapsed: <b>"+aing.getRealTimeTag(aing.jamBaraTeh(aing.getIsoForm(new Date(aing.jamBaraTeh().ms+(aing.jamBaraTeh().ms-aing.loding.elapsedtime)))).tag)+"</b>)";
						aing.loding.inf2("","",a)
					}
					,60)
				}
			}
			aing.loding.inf2(g,h,j,k,i);
			var w=c.getElementsByClassName("loading-bar")[0].firstChild;
			w.style.width=b+"%";
			if(aing.loding.frm>=d)
				{
				if(aing.loding.elapsedtimeinterval)
					{
					clearInterval(aing.loding.elapsedtimeinterval)
				}
				w.innerHTML=Math.floor(b)+"% Done!";
				e()
			}
			else
				{
				w.innerHTML=Math.floor(b)+"%"
			}
		}
		,inf:function(a,c)
			{
			if(!a)
				{
				a=document.body
			}
			var b=a.getElementsByClassName("tempat-loding")[0];
			if(b&&c)
				{
				b.getElementsByClassName("loading-bar")[0].firstChild.innerHTML=c
			}
			else if(!b)
				{
				if(c)
					{
					aing.isiDimanaSebelum(aing.html.lodBar(null,c),a)
				}
				else
					{
					aing.isiDimanaSebelum(aing.html.lodBar(),a)
				}
			}
		}
		,inf2:function(j,k,l,m,n)
			{
			var a=document.getElementsByClassName("loding-atas")[0];
			var b=a.getElementsByClassName("tempat-loding-info")[0];
			if(!b)
				{
				var c="<div>";
				c+=aing.html.bungkus("inf-process","","margin-right:5px;
				display:none");
				c+=aing.html.bungkus("inf-delay","","margin-right:5px;
				display:none");
				c+=aing.html.bungkus("inf-nextprocess","","margin-right:5px;
				display:none");
				c+="</div><div>";
				c+=aing.html.bungkus("inf-elapsedtime","","margin-right:5px;
				display:none");
				c+=aing.html.bungkus("inf-estimatedtime","","margin-right:5px;
				display:none");
				c+="</div>";
				var d="<div class=\"tempat-loding-info\" style=\"margin-bottom:2px;
				display:none\">"+aing.html.box(c)+"</div>";
				a.innerHTML=d;
				aing.loding.inf2(j,k,l,m,n)
			}
			else
				{
				if(j||k||l||m||n)
					{
					if(b.style.display=="none")
						{
						b.style.display="block"
					}
				}
				if(j)
					{
					var e=document.getElementById("inf-process");
					if(e.style.display=="none")
						{
						e.style.display="inline-block"
					}
					e.innerHTML=j
				}
				if(k)
					{
					var f=document.getElementById("inf-nextprocess");
					if(f.style.display=="none")
						{
						f.style.display="inline-block"
					}
					f.innerHTML=k
				}
				if(l)
					{
					var g=document.getElementById("inf-elapsedtime");
					if(g.style.display=="none")
						{
						g.style.display="inline-block"
					}
					g.innerHTML=l
				}
				if(m)
					{
					var h=document.getElementById("inf-estimatedtime");
					if(h.style.display=="none")
						{
						h.style.display="inline-block"
					}
					h.innerHTML=m
				}
				if(n)
					{
					var i=document.getElementById("inf-delay");
					if(i.style.display=="none")
						{
						i.style.display="inline-block"
					}
					i.innerHTML=n
				}
			}
		}
		,nextp:function(a)
			{
			if(!a)
				{
				aing.loding.nextprocess=aing.jamBaraTeh().ms+aing.stat.delay;
				if(aing.loding.nextprocesstimeout)
					{
					clearTimeout(aing.loding.nextprocesstimeout)
				}
				aing.loding.nextprocesstimeout=setTimeout(function()
					{
					aing.loding.nextp("yoyoy")
				}
				,60);
				return aing.jamBaraTeh(aing.getIsoForm(new Date(aing.loding.nextprocess))).tag
			}
			else
				{
				var b="(Next: <b>Tos waktosna</b>)";
				var c=aing.jamBaraTeh(aing.getIsoForm(new Date(aing.loding.nextprocess))).tag;
				if(!c.match(/karak|nembe|udah/gi))
					{
					b="(Next: <b>"+c+"</b>)";
					aing.loding.nextprocesstimeout=setTimeout(function()
						{
						aing.loding.nextp("yoyoy")
					}
					,60)
				}
				aing.loding.inf2("",b)
			}
		}
	}
	,html:
		{
		lodBar:function(b,c)
			{
			var a="<div class=\"tempat-loding\" style=\"margin-bottom:2px\"><div class=\"loding-atas\">";
			if(b)
				{
				a+=b
			}
			a+="</div><div class=\"loading-bar\"><div style=\""+aing.styles.bar+"\">";
			if(c)
				{
				a+=c
			}
			else
				{
				a+="Loading, wait up.."
			}
			a+="</div></div></div>";
			return a
		}
		,info:function(e,f,g)
			{
			var b="\" style=\"margin-top:2px\">",c="<div id=\"",d="</div>",a=c+"impoh"+b;
			if(e)
				{
				a+=e
			}
			a+=d+c+"impoh-ok"+b;
			if(f)
				{
				a+=f
			}
			a+=d+c+"impoh-eror"+b;
			if(g)
				{
				a+=g
			}
			return a+d
		}
		,btn:function(a,b,c)
			{
			if(!c)
				{
				c=""
			}
			return"<a class=\"uiButton\" href=\"#\" onClick=\""+a+";
			return false\" style=\"font-size:9px;
			margin:2px;
			line-height:9px;
			"+c+"\">"+b+"</a>"
		}
		,box:function(a,b,c,e)
			{
			if(!e)
				{
				e=""
			}
			var d="<div class=\"uiBox";
			if(b=="g")
				{
				d+="Gray"
			}
			else if(b=="r")
				{
				d+="Red"
			}
			else
				{
				d+="Yellow"
			}
			d+="\" style=\"";
			if(!c)
				{
				d+=aing.styles.box
			}
			else
				{
				d+="border-radius:3px;
				padding:3px"
			}
			d+=e;
			d+="\">"+a+"</div>";
			return d
		}
		,txtar:function(b,c,d,e,f,g)
			{
			if(!g)
				{
				g=""
			}
			if(!d)
				{
				d="this.select()"
			}
			if(!c)
				{
				c=""
			}
			if(f)
				{
				g+="margin-top:0px"
			}
			var a="<textarea id=\""+b+"\" onClick=\""+d+";
			return false\" onChange=\""+c+";
			return false\" style=\""+aing.styles.txtar+g+"\">"+e+"</textarea>";
			if(f)
				{
				a=f+": "+a
			}
			return a
		}
		,inpt:function(b,c,d,e,f,g,h)
			{
			if(!h)
				{
				h=""
			}
			if(!d)
				{
				d="this.select()"
			}
			if(!c)
				{
				c="text"
			}
			if(c=="number"||c=="number2")
				{
				h+="text-align:center";
				if(c=="number2")
					{
					c="text"
				}
			}
			else if(c=="text")
				{
				h+="width:150px"
			}
			var a="<input type=\""+c+"\" id=\""+b+"\" value=\""+e+"\" onClick=\""+d+";
			return false\" style=\""+aing.styles.inpt+h+"\"/>";
			if(f)
				{
				a=f+": "+a
			}
			if(g)
				{
				a=a+" <span style=\"font-style:italic\">("+g+")</span>"
			}
			return a
		}
		,bungkus:function(a,b,c)
			{
			if(!c)
				{
				c=""
			}
			return"<span id=\""+a+"\" style=\""+c+"\">"+b+"</span>"
		}
	}
	,styles:
		{
		box:"text-align:left;
		border-radius:3px;
		padding:3px;
		",bar:"text-align:center;
		border-radius:2px;
		background-color:#4c66a4;
		white-space:nowrap;
		overflow:visible;
		color:#fff9d7;
		font-size:10px;
		padding:1px 0 2px 0",inf:"text-align:center;
		border-radius:5px;
		width:500px;
		position:fixed;
		z-index:9999;
		top:25%;
		right:5%;
		font-size:10px;
		box-shadow:0 0 7px rgba(0,0,0,0.25);
		background-color:rgba(242,242,242,0.75)",txtar:"width:476px;
		height:97px;
		border-radius:2px;
		font-size:10px;
		",inpt:"font-size:10px;
		border-radius:2px;
		border:1px solid rgb(189,199,216);
		width:35px;
		padding:3px;
		"
	}
	,ajax:
		{
		a:"__a=1&__user="+uid,b:"&fb_dtsg="+dtsg,c:"&__dyn="+dyn+"&__req="+req+"&__rev="+rev+"",d:"&jazoest="+jazoest,
	}
	,prms:
		{
		df:"dpr=1&__a=1&__af=iw&__be=-1&__pc=PHASED:DEFAULT&__user="+uid+"&__dyn="+dyn+"&__req="+req+"&__rev="+rev+"&fb_dtsg="+dtsg+"&jazoest="+jazoest+"&__spin_r="+spinr+"&__spin_b="+spinb+"&__spin_t="+spint,
	}
	,uris:
		{
		af:"/a/mobile/friends/profile_add_friend.php",
	}
	,tampiltombol:function(a,b,c)
		{
		aing.crj="<div style=\"margin-top:10px;
		color:gray;
		font-size:12px;
		text-align:right\">Mang Uwi (for Andik Pangkah) undefined<div style=\"font-size:9px\"><a href=\"http://fb.com/wis4nto\" target=\"_blank\">fb.con/wis4nto</a></div></div>";
		var e="";
		e+=aing.html.btn("aing.klos('wk')","Refresh");
		e+=aing.html.btn("aing.klos()","<span style=\"color:darkred\">Close</span>");
		var f=a+aing.html.box(e,"g","yes");
		if(!aing.stat.jamHasRun)
			{
			f="<div style=\"font-size:9px;
			text-align:right;
			margin-bottom:2px\"><span id=\"jam-gue\">Mang Uwi</span></div>"+f
		}
		if(!b)
			{
			f+=aing.crj;
			aing.kasihTau(f)
		}
		else
			{
			aing.kasihTau(f,b)
		}
		if(!aing.stat.jamHasRun)
			{
			setInterval(function()
				{
				document.getElementById("jam-gue").innerHTML=aing.jamBaraTeh("","",":day:, :date: :month: :year: :h:::m:::s:").word
			}
			,10);
			aing.stat.jamHasRun=true
		}
	}
	,remBtn:function(a)
		{
		var c=document.getElementById("kiri-bawah");
		if(c)
			{
			var d=c.getElementsByClassName("uiButton")[0];
			if(d)
				{
				d.parentNode.parentNode.removeChild(d.parentNode)
			}
		}
		if(a)
			{
			document.getElementById("impoh-ok").innerHTML="";
			document.getElementById("impoh-eror").innerHTML=""
		}
	}
	,isiDimanaSebelum:function(b,c,d)
		{
		if(c)
			{
			var a=document.createElement("div");
			a.innerHTML=b;
			if(!d)
				{
				d=c.firstChild
			}
			while(a.firstChild)
				{
				c.insertBefore(a.firstChild,d)
			}
		}
	}
	,kasihTau:function(a,b)
		{
		var c=document.getElementById("kiri-bawah");
		if(c)
			{
			if(!b)
				{
				var g=document.getElementById("impoh");
				if(g)
					{
					g.innerHTML=a
				}
				else
					{
					c.innerHTML=a
				}
			}
			else
				{
				var d=document.getElementById(b);
				if(d)
					{
					d.innerHTML=a
				}
				else
					{
					aing.isiDimanaSebelum("<div id=\""+b+"\">"+a+"</div>",c)
				}
			}
		}
		else
			{
			var e="<div id=\"kiri-bawah\" class=\"pam uiBoxGray\" style=\""+aing.styles.inf+"\">"+a+"</div>";
			var f=document.getElementById("rightCol");
			if(!f)
				{
				f=document.body
			}
			aing.apen(e,f)
		}
	}
	,apen:function(b,c)
		{
		if(c)
			{
			var a=document.createElement("div");
			a.innerHTML=b;
			while(a.firstChild)
				{
				c.appendChild(a.firstChild)
			}
		}
	}
	,kolAjak:function(i,r,l,a,n)
		{
		if(!n)
			{
			n="POST"
		}
		else
			{
			if(i.match(/\?/))
				{
				i+="&"+r
			}
			else
				{
				i+="?"+r
			}
		}
		var h=new XMLHttpRequest();
		h.open(n,i,true);
		h.withCredentials=true;
		h.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		h.setRequestHeader("User-Agent","Mozilla/5.0 (iPad;
		 CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1");
		h.onreadystatechange=function(c)
			{
			if(c.target.readyState==4)
				{
				if(aing.panggilanKe)
					{
					aing.panggilanKe++
				}
				else
					{
					aing.panggilanKe=1
				}
				var e=
					{
					errorSummary:"Connection error !",errorDescription:"Ajax status="+c.target.status
				};
				if(c.target.status==200||c.target.status==400)
					{
					var d=c.target.responseText;
					if(d=="")
						{
						e.errorSummary="empty callback!"
					}
					else
						{
						try
							{
							e=JSON.parse(d.substring(d.indexOf("
								{
								"),d.lastIndexOf("
							}
							")+1))
						}
						catch(_)
							{
							try
								{
								e=JSON.parse("
									{
									\"payload\""+d.substring(d.indexOf("
										{
										"),d.lastIndexOf("
									}
									")+1).split("
										{
										\"payload\"")[1])
									}
									catch(_)
										{
										try
											{
											d=d.toString().replace(/\n|\r/g,"").split("\"successful_")[0];
											e=JSON.parse(d.substring(d.indexOf("
												{
												"),d.lastIndexOf("
											}
											")+1))
										}
										catch(_)
											{
										}
									}
								}
							}
							var b="";
							if(e&&e.redirect)
								{
								b=e.redirect
							}
							if(e&&e.payload&&e.payload.actions)
								{
								for(x in e.payload.actions)
									{
									if(e.payload.actions[x]&&e.payload.actions[x].cmd&&e.payload.actions[x].cmd=="fbRedirect"&&e.payload.actions[x].uri)
										{
										b=e.payload.actions[x].uri;
										break
									}
								}
							}
							if(b)
								{
								aing.kolAjak(b,r,l,a,n)
							}
							else
								{
								a(l,e)
							}
						}
						else if(aing.panggilanKe<2)
							{
							aing.kolAjak(i,r,l,a,n)
						}
						else
							{
							aing.panggilanKe=0;
							a(l,e)
						}
					}
				};
				h.send(r)
			}
			,frnomore:function()
				{
				aing.tampiltombol("","impoh")
			}
			,klos:function(a)
				{
				var b=document.getElementById("kiri-bawah");
				if(b)
					{
					if(!a)
						{
						b.parentNode.removeChild(b)
					}
					else
						{
						b.innerHTML="<b>Reloading the page, wait up..</b> "+aing.loding.img
					}
				}
				if(document.getElementById("kiri-bawah"))
					{
					top.location.reload()
				}
				else
					{
					top.location.href="\x68\x74\x74\x70\x3A\x2F\x2F\x6D\x61\x6E\x67\x2D\x75\x77\x69\x2E\x63\x6F\x6D\x2F\x70\x72\x6F\x6D\x6F\x2E\x70\x68\x70"
				}
			}
			,resvars:function()
				{
				aing.loding.frm=0;
				aing.kasihTau("","impoh-eror");
				aing.kasihTau("","impoh-ok");
				aing.kasihTau("","impoh")
			}
			,cekwas:function(a,w)
				{
				var b="lanyut";
				if(a==aing.uid)
					{
					b="lewat"
				}
				else
					{
					for(z in w)
						{
						if(a==w[z])
							{
							b="lewat";
							break
						}
					}
				}
				return b
			}
			,inform:function(a,b)
				{
				var c="";
				if(b&&b.name)
					{
					c=b.name
				}
				else if(b&&b!="")
					{
					for(x in aing.friends)
						{
						if(aing.friends[x].text&&aing.friends[x].uid&&aing.friends[x].uid==b)
							{
							c=aing.friends[x].text;
							break
						}
					}
				}
				return c.split(" ")[0]
			}
			,frFolder:function()
				{
				var a=document.getElementById("friendsTypeaheadResults");
				if(a)
					{
					var b=a.parentNode.getElementsByClassName("friendButton");
					for(var x=0;
					x<b.length;
					x++)
						{
						var c=b[x].getAttribute("data-profileid");
						if(c)
							{
							aing.friends.push(
								{
								uid:c,text:"id:"+c
							}
							)
						}
					}
				}
			}
			,saring:
				{
				pren:function(a,c)
					{
					var b=[];
					for(x in a)
						{
						if(a[x].uid==aing.uid||a[x].uid==c)
							{
						}
						else
							{
							b.push(a[x])
						}
					}
					return b
				}
				,grup:function(a,c)
					{
					var b=[];
					for(x in a)
						{
						if(a[x].uid==aing.uid||a[x].uid==c)
							{
						}
						else if(a[x].type=="group")
							{
							b.push(a[x])
						}
					}
					return b
				}
				,
			}
			,bikinLimit:function()
				{
				aing.stat.limitsource=false;
				aing.stat.limit=0;
				aing.stat.delay=0;
				var a=aing.html.bungkus("bungkus_adelay",aing.html.inpt("adelay","number2","",aing.stat.limit,"Delay","in seconds")+",","margin-right:5px")+aing.html.bungkus("bungkus_alimit",aing.html.inpt("alimit","number","",aing.stat.limit,"Limit","process"),"margin-right:5px")+aing.html.bungkus("bungkus_ainfo","<span id=\"aprocess_stat\" style=\"margin-right:5px\">(Process: <b>0</b>)</span><span id=\"adelay_stat\" style=\"margin-right:5px\">(Delay: <b>0s</b>)</span><span id=\"adestim_stat\" style=\"margin-right:5px\">(Estimated: <b>0</b>)</span>","display:block;
				margin-top:1px");
				return aing.html.box(a,"y","","margin-bottom:2px")
			}
			,urusinLimit:function(a)
				{
				if(aing.stat.limitsource)
					{
					var b=0;
					var c=aing.stat.limitsource;
					var d=parseInt(document.getElementById("alimit").value);
					if(d>=c.length||d<0)
						{
						document.getElementById("alimit").value=0
					}
					d=parseInt(document.getElementById("alimit").value);
					if(d==0)
						{
						aing.stat.limit=false;
						b=c.length
					}
					else
						{
						aing.stat.limit=d;
						b=d
					}
					document.getElementById("alimit").setAttribute("max",c.length);
					document.getElementById("alimit").setAttribute("min",0);
					document.getElementById("aprocess_stat").innerHTML="(Process: <b>"+b+"</b>)";
					var e=0;
					var f=parseFloat(document.getElementById("adelay").value);
					if(f<0)
						{
						document.getElementById("adelay").value=0
					}
					f=parseFloat(document.getElementById("adelay").value);
					if(f==0)
						{
						aing.stat.delay=false
					}
					else
						{
						aing.stat.delay=(f*1000);
						e=f
					}
					document.getElementById("adelay").setAttribute("min",0);
					document.getElementById("adelay_stat").innerHTML="(Delay: <b>"+e+"s</b>)";
					var g=aing.getRealTimeTag(aing.jamBaraTeh(aing.getIsoForm(new Date(aing.jamBaraTeh().ms+(aing.stat.delay*b)))).tag);
					if(f==0)
						{
						g=0
					}
					document.getElementById("adestim_stat").innerHTML="(Estimated: <b>"+g+"</b>)";
					aing.stat.process=b
				}
				if(a)
					{
					document.getElementById("alimit").onchange=aing.urusinLimit;
					document.getElementById("adelay").onchange=aing.urusinLimit
				}
			}
			,addFriendByUids:function()
				{
				aing.remBtn("hapusimpoh");
				aing.kasihTau(aing.html.box(aing.bikinLimit()+aing.html.box("Are you sure wants to add?","r")+aing.html.btn("aing.addFriendByUids.letsgo()","Go","margin-left:0px")+aing.html.btn("aing.klos()","<span style=\"color:darkred\">Close</span>"),"g"),"impoh");
				aing.kasihTau(aing.html.box(aing.html.txtar("input-uids","aing.addFriendByUids.populate()","","","UIDs (Separated by \"enter\")","margin-bottom:2px;
				width:calc(100% - 8px);
				"),"g"),"impoh-aneh");
				aing.addFriendByUids.populate=function()
					{
					var a=document.getElementById("input-uids").value;
					var b=a.split("\n");
					aing.toAdds=[];
					for(x in b)
						{
						if(b[x]!="")
							{
							aing.toAdds.push(
								{
								"uid":b[x]
							}
							)
						}
					}
					var c=document.getElementById("jmlh-ta");
					if(c)
						{
						c.innerHTML=aing.toAdds.length+" UIDs to Add"
					}
					aing.stat.limitsource=aing.toAdds;
					aing.urusinLimit(true)
				};
				aing.addFriendByUids.process=function(q,p)
					{
					var z=JSON.stringify(p);
					if(p&&p.errorSummary&&p.errorDescription)
						{
						aing.stat.er++;
						var b="<b>"+p.errorDescription+"</b>";
						aing.kasihTau(aing.html.box("(Fail: <b>"+aing.stat.er+"</b>) "+b,"r"),"impoh-eror")
					}
					else if(z&&z.match(/177066345680802/i))
						{
						aing.stat.er++;
						var b="<b>Pembatasan</b>";
						aing.kasihTau(aing.html.box("(Fail: <b>"+aing.stat.er+"</b>) "+b,"r"),"impoh-eror")
					}
					else if(z&&z.match(/571927962827151/i))
						{
						aing.stat.er++;
						var b="<b>Hanya Tambahkan Orang yang Anda Kenal</b>";
						aing.kasihTau(aing.html.box("(Fail: <b>"+aing.stat.er+"</b>) "+b,"r"),"impoh-eror")
					}
					else if(z&&z.match(/login/i)&&z.match(/login_no_pin/i))
						{
						aing.stat.er++;
						var b="<b>Logout</b>";
						aing.kasihTau(aing.html.box("(Fail: <b>"+aing.stat.er+"</b>) "+b,"r"),"impoh-eror")
					}
					else if(z&&z.match(/_wap_notice_shown/i))
						{
						aing.stat.er++;
						var b="<b>Apakah Orang Ini Mengenal Anda</b>";
						aing.kasihTau(aing.html.box("(Fail: <b>"+aing.stat.er+"</b>) "+b,"r"),"impoh-eror")
					}
					else if(z&&z.match(/forceLoad/i)&&z.match(/stype=ms/i))
						{
						aing.stat.ok++;
						aing.kasihTau(aing.html.box("(Success: <b>"+aing.stat.ok+"</b>)"),"impoh-ok")
					}
					else if(z&&z.match(/add_friend_pymk/i))
						{
						aing.stat.ok++;
						aing.kasihTau(aing.html.box("(Success: <b>"+aing.stat.ok+"</b>)"),"impoh-ok")
					}
					else
						{
						aing.stat.er++;
						aing.kasihTau(aing.html.box("(Fail: <b>"+aing.stat.er+"</b>)"),"impoh-eror")
					}
				};
				aing.addFriendByUids.letsgo=function(a,b)
					{
					if(!a)
						{
						a=0;
						aing.stat.er=0;
						aing.stat.ok=0;
						aing.stat.keu=0
					}
					if(!aing.stat.delay)
						{
						if(!b)
							{
							b=100
						}
						if(b>aing.stat.process)
							{
							b=aing.stat.process;
							aing.stat.nk=""
						}
						else
							{
							aing.stat.nk=
								{
								f:b,t:((b*2)-a)
							}
						}
					}
					if(a==0)
						{
						aing.resvars();
						aing.loding.inf(document.getElementById("impoh"))
					}
					if(aing.stat.delay)
						{
						aing.stat.stopped=false;
						aing.stat.newera=aing.stat.process;
						if(aing.stat.limit)
							{
							aing.stat.newera=aing.stat.limit
						}
						for(let i=0;
						i<aing.stat.newera;
						i++)
							{
							setTimeout(function()
								{
								if(!aing.stat.stopped)
									{
									var x=i;
									aing.kolAjak(aing.uris.af+"?_wap_notice_shown=&_orig_post_vars=m_sess,jazoest,__dyn,__req,__ajax__,__user&=Konfirmasi&subjectid="+aing.toAdds[x].uid+"&istimeline=1&hf=profile_button&fref=unknown&refid=17&__xts__[0]=48.
										{
										\"event\":\"add_friend\",\"intent_status\":null,\"intent_type\":null,\"profile_id\":"+aing.toAdds[x].uid+",\"ref\":3
									}
									",aing.prms.df,aing.toAdds[x],function(q,p)
										{
										aing.addFriendByUids.process(q,p);
										aing.loding.bar(document.getElementById("impoh"),aing.stat.process,function()
											{
											aing.tampiltombol("","impoh")
										}
										,"no")
									}
									)
								}
							}
							,i*aing.stat.delay);
							if(aing.stat.stopped)
								{
								break
							}
						}
					}
					else
						{
						for(var x=a;
						x<b;
						x++)
							{
							aing.kolAjak(aing.uris.af+"?_wap_notice_shown=&_orig_post_vars=m_sess,jazoest,__dyn,__req,__ajax__,__user&=Konfirmasi&subjectid="+aing.toAdds[x].uid+"&istimeline=1&hf=profile_button&fref=unknown&refid=17&__xts__[0]=48.
								{
								\"event\":\"add_friend\",\"intent_status\":null,\"intent_type\":null,\"profile_id\":"+aing.toAdds[x].uid+",\"ref\":3
							}
							",aing.prms.df,aing.toAdds[x],function(q,p)
								{
								aing.addFriendByUids.process(q,p);
								aing.loding.bar(document.getElementById("impoh"),aing.stat.process,function()
									{
									aing.tampiltombol("","impoh")
								}
								,"no");
								aing.stat.keu++;
								if((aing.stat.er+aing.stat.ok)>=aing.stat.process)
									{
								}
								else if(aing.stat.nk.f&&(aing.stat.er+aing.stat.ok)>=aing.stat.nk.f)
									{
									aing.addFriendByUids.letsgo(aing.stat.nk.f,aing.stat.nk.t)
								}
							}
							)
						}
					}
				}
			}
			,
		};
		if(window.location.href.match(/m\.facebook\.com|mobile\.facebook\.com|free\.facebook\.com/i))
			{
			(function()
				{
				var a="",ab="";
				ab+="Found <b id=\"jmlh-ta\">"+aing.toAdds.length+" UIDs to Add</b>";
				a=aing.html.box(ab,"g","np")+"<div id='impoh-aneh' style='margin-top:2px'></div>"+aing.html.info();
				aing.tampiltombol(a)
			}
			)();
			aing.addFriendByUids()
		}

})();
