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
game_start();
var canstartconvo = 0;
	var drunk=0;
	var ending=0;
	var year=2014;
	var audio = new Audio('sss_theme.mp3');


function game_start() {

	$("#maincontainer").show();
	$("#loading").hide();
	//audio.loop=true;
	//audio.play();

	
	setInterval(create_next_owner, 1900);
}

function create_next_owner() {

	
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