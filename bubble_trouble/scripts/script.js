$(document).ready(function(){
	var name=prompt("Enter Your Name:");
	$('section').ready(function(){
		$('section').height($(document).height()-120);
	});
	$('section').ready(function(){
		$(document).keydown(function(event)
		{
			if(event.which==13||event.which==32)
				pause();
			if(event.which==27)
			{
				var answer=confirm("Are You Sure Want to Exit???");
				if(answer)
					window.close();
				else
					window.location.assign("index.html");
			}
		});
	});
	$('button').click(function(){pause()});
	function pause()
	{
		var answer=confirm('Paused!!!\nWant to Resume???');
		if(!answer)
		{
			var exit=confirm('Are You Sure Want to exit???');
			if(exit)
			{
				window.location.assign("index.html");
			}
			else
			{
				pause();
			}
		}
	}
	var appearTime=[],count=0,miss=0,speed=1000,level=1,rembub=10,bub=10;
	var obj=setInterval(function(){change();},speed)
	function change()
	{
		var no=Math.floor(Math.random()*18);
		document.getElementById("div"+no).style.visibility="visible";
		if(Math.floor(Math.random()*10)>5)
		{
			if(document.getElementById("div"+no).innerHTML[18]=='u')
			{
				miss++;
				document.getElementById("missed").innerHTML=miss;
			}
			document.getElementById("div"+no).innerHTML="<img src='images/bomb.png' style='height:200px;width:240px;cursor:not-allowed;'>";
		}
		else
		{
			document.getElementById("div"+no).innerHTML="<img src='images/bubble.png' style='height:200px;width:240px;cursor:pointer;'>";
			appearTime[no]=Date.now();
		}
	}
	function levelup()
	{
		level+=1;
		bub+=5;
		rembub=bub;
		if(speed>200)
		{
			speed-=100;
		}
		$('#level').html(level);
		$('#bub').html(bub);
		$('#rembub').html(rembub);
	}
	$('div').click(function()
	{
		if($(this).html()[18]=='u')
		{

			$(this).html('<img src="images/burst.gif" style="height:160px;width:160px;cursor:not-allowed; margin:15px;" class="burst">');
			var audio = new Audio('audio/bubbleburst.ogg');
			audio.play();
			setTimeout(function(){
				$('.burst').css("visibility","hidden");
			},500);
			if(this.id[4]==undefined)
			{
				document.getElementById("time").innerHTML=(Date.now()-appearTime[this.id[3]])/1000;
			}
			else
			{
				document.getElementById("time").innerHTML=(Date.now()-appearTime[this.id[3]+this.id[4]])/1000;
			}
			if(document.getElementById("stime").innerHTML>document.getElementById("time").innerHTML)
				document.getElementById("stime").innerHTML=document.getElementById("time").innerHTML;
			if(document.getElementById("ltime").innerHTML<document.getElementById("time").innerHTML)
				document.getElementById("ltime").innerHTML=document.getElementById("time").innerHTML;
			count++;
			document.getElementById("count").innerHTML=count;					
			rembub-=1;
			$('#rembub').html(rembub);
			if(rembub=="0")
			{
				alert("Congragulation!!!\nYou Completed Level "+level+".\nBe Ready For the next Level");
				levelup();
			}
		}
		else
		{
			clearInterval(obj);
			$(this).html('<img src="images/blast.gif" style="height:400px;width:320px;cursor:not-allowed; margin:-100px -66.66px;">');
			var audio = new Audio('audio/explosion.ogg');
			audio.play();
			setTimeout(function(){lost();},800);
			function lost()
			{
				$(this).css("visibility","hidden");
				document.open();
				document.writeln("<html>");
				document.writeln("<head>");
				document.writeln("<title>Loser!!!</title>");
				document.writeln("<style>");
				document.writeln("body{");
				document.writeln("background-color:#43609c;");
				document.writeln("font-family:sans-serif;}");
				document.writeln("*{");
				document.writeln("position:absolute;");
				document.writeln("left:50%;");
				document.writeln("text-align:center;}");
				document.writeln("#one{");
				document.writeln("top:80px;");
				document.writeln("text-transform:capitalize;");
				document.writeln("padding:10px 0px;");
				document.writeln("color:orange;");
				document.writeln("border-radius:10px;");
				document.writeln("background-color:#63409C;");
				document.writeln("margin-left:-200px;");
				document.writeln("width:400px;}");
				document.writeln("#two{");
				document.writeln("top:150px;");
				document.writeln("margin-left:-200px;");
				document.writeln("width:400px;}");
				document.writeln("#three{");
				document.writeln("top:200px;");
				document.writeln("margin-left:-200px;");
				document.writeln("width:400px;}");
				document.writeln("#four{");
				document.writeln("top:250px;");
				document.writeln("margin-left:-200px;");
				document.writeln("width:400px;}");
				document.writeln("#five{");
				document.writeln("top:300px;");
				document.writeln("margin-left:-200px;");
				document.writeln("width:400px;}");
				document.writeln("hr{left:0px;width:100%}");
				document.writeln("a{");
				document.writeln("top:400px;");
				document.writeln("font-size:24px;")
				document.writeln("color:black;");
				document.writeln("width:100px;");
				document.writeln("padding:20px;");
				document.writeln("text-decoration:none;");
				document.writeln("background-color:orange;");
				document.writeln("border-radius:10px;");
				document.writeln("text-shadow:1px 1px 1px black;}");
				document.writeln("a#Retry{");
				document.writeln("margin-left:-150px;}");
				document.writeln("a#Quit{");
				document.writeln("margin-left:10px;}");
				document.writeln("a:hover{");
				document.writeln("background-color:#ff6600}");
				document.writeln("</style>");
				document.writeln("</head>");
				document.writeln("<body>");
				document.writeln("<h1 id='one'>You Lose "+name+"<hr></h1>");
				document.writeln("<h2 id='two'>You clicked the Bomb!!!<hr></h2>");
				document.writeln("<h2 id='three'>Bursted Bubbles: "+count+"<hr></h2>");
				document.writeln("<h2 id='four'>Missed Bubbles: "+miss+"<hr></h2>");
				document.writeln("<h2 id='five'>Level Completed: "+level+"<hr></h2>");
				document.writeln("<a href='play.html' id='Retry'>Retry</a>");
				document.writeln("<a onclick='window.close()' id='Quit' style='cursor:pointer'>");
				document.writeln("Quit</a>");
				document.writeln("</body>");
				document.writeln("</html>");
				$('#Quit').click(function(){
					window.close();
				});
			}
		}
	});
});
