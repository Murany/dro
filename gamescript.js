$(document).ready(function(){
	
/*$('<img/>').attr('src', 'images/drunkstars.gif').on('load', function() {
   $(this).remove(); 
   $('#drunkstars').css('background-image', 'url(images/drunkstars.gif)');
   $('<img/>').attr('src', "images/richard.gif").on('load', function() {
   $(this).remove(); 
   $('#richard').css('background-image', 'url(images/richard.gif)');
   $('<img/>').attr('src', "images/anita.gif").on('load', function() {
   $(this).remove(); 
   $('#anita').css('background-image', 'url(images/anita.gif)');
   $('<img/>').attr('src', "images/moneymoneymoney.gif").on('load', function() {
   $(this).remove(); 
   $('#moneymoneymoney').css('background-image', 'url(images/moneymoneymoney.gif)');
   $('<img/>').attr('src', "images/bastard.gif").on('load', function() {
   $(this).remove(); 
   $('#bastardbastard').css('background-image', 'url(images/bastard.gif)');
   $('<img/>').attr('src', "images/drunktalk.gif").on('load', function() {
   $(this).remove(); 
   $('#drunktalk').css('background-image', 'url(images/drunktalk.gif)');
   $('<img/>').attr('src', "images/banner.gif").on('load', function() {
   $(this).remove(); 
   $('#banner').css('background-image', 'url(images/banner.gif)');
   $('<img/>').attr('src', "images/wave.gif").on('load', function() {
   $(this).remove(); 
   $('#gamecontainer').css('background-image', 'url(images/wave.gif)');
   $('<img/>').attr('src', "images/ladder.png").on('load', function() {
   $(this).remove(); 
   $('#ladder').css('background-image', 'url(images/ladder.png)');
   $('<img/>').attr('src', "images/loveyouforever.png").on('load', function() {
   $(this).remove(); 
   $('#loveyouforever').css('background-image', 'url(images/loveyouforever.png)');
   $('<img/>').attr('src', "images/butidontloveyou.png").on('load', function() {
   $(this).remove(); 
   $('#butidontloveyou').css('background-image', 'url(images/butidontloveyou.png)');
   $('<img/>').attr('src', "images/nothing.png").on('load', function() {
   $(this).remove(); 
   $('#nothing').css('background-image', 'url(images/nothing.png)');
   $('<img/>').attr('src', "images/death.png").on('load', function() {
   $(this).remove(); 
   $('#death').css('background-image', 'url(images/death.png)');
   $('<img/>').attr('src', "images/floor.png").on('load', function() {
   $(this).remove(); 
   $('#floor').css('background-image', 'url(images/floor.png)');
   $('<img/>').attr('src', "images/bastard.gif").on('load', function() {
   $(this).remove(); 
   $('#bastard').css('background-image', 'url(images/bastard.gif)');
   
    $('<img/>').attr('src', "images/bastardfall.gif").on('load', function() {
	$('<img/>').attr('src', "images/anitawalk.gif").on('load', function() {
	$('<img/>').attr('src', "images/anitahappy.png").on('load', function() {
	$('<img/>').attr('src', "images/richardhappy.png").on('load', function() {
	$('<img/>').attr('src', "images/richardwalk.gif").on('load', function() {
	$('<img/>').attr('src', "images/ladderfall.gif").on('load', function() {
	$('<img/>').attr('src', "images/loveforever.gif").on('load', function() {
	$('<img/>').attr('src', "images/babies.gif").on('load', function() {
   game_start();
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});*/
var money = "0000";
var lvl = "00";
var ownerheads = [{image:"images/heads/o_h1.png",width:63,height:78}, {image:"images/heads/o_h2.png",width:35,height:56}, {image:"images/heads/o_h3.png",width:49,height:56}];
var ownertorsos = [{image:"images/torsos/o_t1.png",width:63,height:81,cutoff:18}, {image:"images/torsos/o_t2.png",width:63,height:70}, {image:"images/torsos/o_t3.png",width:63,height:63,cutoff:7}];
var ownerlegs = [{image:"images/legs/o_l1.png",width:63,height:105}, {image:"images/legs/o_l2.png",width:57,height:105}, {image:"images/legs/o_l3.png",width:63,height:84}];	
var colors = [{image:"images/s_red.png",code:"#c43810"}, {image:"images/s_black.png",code:"#000000"},  {image:"images/s_blue.png",code:"#1747ba"},  {image:"images/s_green.png",code:"#36b60f"}, {image:"images/s_orange.png",code:"#d06612s"} ];

game_start();
	//var audio = new Audio('sss_theme.mp3');


function game_start() {

	$("#maincontainer").show();
	$("#loading").hide();
	//audio.loop=true;
	//audio.play();

	$("#lvl-value").html(lvl);
	$("#money-value").html(money);
	create_owner();
}
function create_illness() {
	var s_length = 0;
	var last_color = "";
	var arr_illnesses = [];
	if(lvl < 3){
		s_length = 3;
	}
	else if(6 >lvl >3 )
	{
		s_length = 5;
	}
	else if(9 >lvl >6 )
	{
		s_length = 7;
	}
	else{
		s_length = 9;
	}
	for (i = 0; i < s_length; i++) {
		var c = colors[Math.floor(Math.random() * colors.length)];
		arr_illnesses.push(c);
	}	
	return arr_illnesses;
	
}

function tell_illnesses(illnesses) {
	$('#speech_bubble').show();
	i = 0;
	
	if(i < illnesses.length){
		$('#symptom').css("background-image" , "url("+illnesses[i].image+")" );
		console.log(illnesses[i].image);
		i++;
		setTimeout(function(){ 
		debugger
			$('#symptom').css("background-image" , "none" );
		}, 3000);
		
	}
	
}

function create_owner() {
	var head = ownerheads[2]; //ownerheads[Math.floor(Math.random() * ownerheads.length)];
	var torso = ownertorsos[2]; //ownertorsos[Math.floor(Math.random() * ownertorsos.length)];
	var legs = ownerlegs[2]; //ownerlegs[Math.floor(Math.random() * ownerlegs.length)];
	$('#owner-head').css({"background-image" : "url("+head.image+")" , "width" : head.width , "height" : head.height});
	$('#owner-torso').css({"background-image" : "url("+torso.image+")" , "width" : torso.width , "height" : torso.height});
	$('#owner-legs').css({"background-image" : "url("+legs.image+")" , "width" : legs.width , "height" : legs.height});
	
	if(torso.hasOwnProperty("cutoff")){
		$('#owner-torso').css("margin-bottom" , "-"+String(torso.cutoff)+"px");
	}
	
	setTimeout(function(){ 
			var illnesses = create_illness();
			tell_illnesses(illnesses);
		}, 3000);
}


/*
	$("#drink").click(function(){
		if (drunk!=1 && ending!=1){
		drunk=1;
		$('#richard').css("background-image", "url(images/richarddrunk.gif)");
		$("#drunkstars").show();
		setTimeout(function(){
			drunk=0;
			$("#drunkstars").hide();
			$('#richard').css("background-image", "url(images/richard.gif)");
			}, 3500); 
	}
		
    });
	
    $("#richard").click(function(){
		if (canstartconvo==1 && ending != 1){
			canstartconvo=0;
			$("#butidontloveyou").hide();
			if (drunk == 1)
			{
				$("#drunktalk").show();
			}
			else{
        $("#loveyouforever").show();
		}
	
	setTimeout(function(){
		$("#loveyouforever").hide();	
		$("#drunktalk").hide();	
		$("#butidontloveyou").show();
		
			setTimeout(function(){
			$("#butidontloveyou").hide();
			canstartconvo=1;
			}, 2000); 
		}, 2000); 
		}
    });
	
	$("#anita").click(function(){
	if (canstartconvo!=0 && ending != 1){
	$("#butidontloveyou").show();
		
			setTimeout(function(){
			$("#butidontloveyou").hide();
			}, 2000); 
	}
	});
	
	$("#bastard").click(function(){
	if (canstartconvo!=0){
	$("#nothing").show();
		
			setTimeout(function(){
			$("#nothing").hide();
			}, 2000); 
	}
	});
	
	
	$("#ladder").click(function(){
			
			canstartconvo=0;
			drunk=0;
			ending=1;
			if (!$('#richard').css("background-image", "url(images/richard.gif)"))
			{$("#drunkstars").hide(); $('#richard').css("background-image", "url(images/richard.gif)"); }
		
			$('#ladder').css("width", "138px"); 
			$('#ladder').css("background-image", "url(images/ladderfall.gif)");  
		
			setTimeout(function(){
			$("#ladder").hide();
			}, 1000); 
			
			setTimeout(function(){
			$('#bastard').css("background-image", "url(images/bastardfall.gif)");
			$("#moneymoneymoney").hide();
			$("#bastard").animate({left: '+=500', top: '+=1200'}, 2300);
			}, 300); 
			
			setTimeout(function(){
			$("#death").show();
			}, 1500); 
			setTimeout(function(){
			$("#death").hide();
			}, 2500);
			
			setTimeout(function(){
			$('#richard').css("background-image", "url(images/richardwalk.gif)");
			$("#richard").animate({left: '+=140'}, 2300);
			$("#richard").css("z-index", 1);
			$('#anita').css("background-image", "url(images/anitawalk.gif)");
			$("#anita").animate({left: '-=80'}, 2300);
			$("#anita").css("z-index", 0);
			}, 2800);
			
			setTimeout(function(){
			$("#drink").hide();
			$('#richard').css("width", "78px"); 
			$('#richard').css("background-image", "url(images/richardhappy.png)");
			
			$('#anita').css("width", "68px"); 
			$('#anita').css("background-image", "url(images/anitahappy.png)");
			$('#gamecontainer').css("background-image", "none");
			$('#maincontainer').css("background-image", "url(images/loveforever.gif)");
			$('body').css("background-color", "#feb3b3");
			}, 4600);
			
			setTimeout(function(){
			$( "#gamecontainer" ).append( "<div id='babies'></div>" );
			}, 5600);
			
	});
			
			$("#musicbutton").click(function(){
				if (!audio.paused)
				{
				audio.pause();
				$( "#musicbutton" ).text( "Music:Off" );
				}
				else
				{audio.play();$( "#musicbutton" ).text( "Music:On" );}
			});
	*/
});