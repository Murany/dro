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
var money = 0;
var lvl = 0;
var game_mode = "auto";
var time_limit = null;
var time_repeat = null;
var pets = [{image:"images/pets/cat1.png",width:119,height:105}, {image:"images/pets/dog1.png",width:140,height:122}];
var ownerheads = [{image:"images/heads/o_h1.png",width:63,height:78}, {image:"images/heads/o_h2.png",width:35,height:56}, {image:"images/heads/o_h3.png",width:49,height:56}];
var ownertorsos = [{image:"images/torsos/o_t1.png",width:63,height:81,cutoff:18}, {image:"images/torsos/o_t2.png",width:63,height:70}, {image:"images/torsos/o_t3.png",width:63,height:63,cutoff:7}];
var ownerlegs = [{image:"images/legs/o_l1.png",width:63,height:105}, {image:"images/legs/o_l2.png",width:57,height:105}, {image:"images/legs/o_l3.png",width:63,height:84}];	
var colors = [{image:"images/s_red.png",code:"#c43810"}, {image:"images/s_black.png",code:"#000000"},  {image:"images/s_blue.png",code:"#1747ba"},  {image:"images/s_green.png",code:"#36b60f"}, {image:"images/s_orange.png",code:"#d06612"} ];
var curr_illnesses = new Array;
var curr_customer = {
	pixels_to_reach : 0,
	money:0,
};
game_start();
	//var audio = new Audio('sss_theme.mp3');


function game_start() {

	$("#maincontainer").show();
	$("#loading").hide();
	//audio.loop=true;
	//audio.play();
	var m_padded = create_padded_string(money.toString(),"0",4);
	var l_padded = create_padded_string(lvl.toString(),"0",2);
	$("#money-value").html(m_padded);
	$("#lvl-value").html(l_padded);
	$("#start-next").show();
	$("#game-mode").html("mode: "+game_mode);
	
}

function create_padded_string(str,padStr, len) {
	while (str.length < len)
	   str = padStr + str;
	return str;
}


function set_money(amount,addition){
	var sign = (addition)?"+":"-";
	$("#money-change").show();
	$("#money-change").html(sign+amount);
	(addition)?money+=amount:money-=amount;
	money_string = money.toString();
	var padded = (money>0)?create_padded_string(money_string,"0",4):money_string;
	$("#money-value").html(padded);
	setTimeout(function(){
		$("#money-change").hide();
	},1500)
}
function create_money(){
	var max = 0;
	if(lvl < 3){
		max = 50;
	}
	else if(6 >lvl >3 )
	{
		max = 100;
	}
	else if(9 >lvl >6 )
	{
		max = 150;
	}
	
	return Math.floor(Math.random() * max) + 1 
}
function create_illness() {
	
	var s_length = 0;
	var milliseconds = 0;
	var last_color = null;
	var arr_illnesses = [];
	if(lvl < 3){
		s_length = 3;
		milliseconds = 50000
	}
	else if(6 >lvl >3 )
	{
		s_length = 5;
		milliseconds = 40000
	}
	else if(9 >lvl >6 )
	{
		s_length = 7;
		milliseconds = 30000
	}
	else{
		s_length = 9;
		milliseconds = 20000
	}
	for (i = 0; i < s_length; i++) {
		var c = colors[Math.floor(Math.random() * colors.length)];
		if (c !== last_color){
			arr_illnesses.push(c);
		}
		last_color = c;
		
	}
	time_limit = new Date(milliseconds);
	
	curr_illnesses = arr_illnesses;	
	tell_illnesses(arr_illnesses);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

 
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function start_timer(){
	$('#time-limit').show();
	time_repeat = setInterval(function(){
		if(time_limit.getTime() > 0 ){
			
			time_limit = new Date(time_limit-1000);
			$("#time-limit").html(time_limit.getMinutes()+":"+time_limit.getSeconds());
		}
		else{
			clearInterval(time_repeat);
			$('#time-limit').hide();
			set_money(curr_customer.money,false);
			move_costumer(curr_customer.pixels_to_reach,true);
		}
	},1000);
}

function move_costumer(amount,positive){
	
	var string_val = ((positive)?"+":"-")+"=";
	if(positive){ //leaving
		$('.bg-to-flip').each(function( index ) {
			$( this ).css({"-moz-transform" : "scaleX(-1)" , "-o-transform" : "scaleX(-1)" , "transform" : "scaleX(-1)", "filter" :  "FlipH", "-ms-filter":"FlipH"})
		});
	}
	else{
		$('.bg-to-flip').each(function( index ) {
			$( this ).css({"-moz-transform" : "scaleX(1)" , "-o-transform" : "scaleX(1)" , "transform" : "scaleX(1)", "filter" :  "FlipH", "-ms-filter":"FlipH"})
		});
	}
	
	$( "#customer" ).animate({
    left: string_val+amount,}, {duration: 3300,specialEasing: {width: "linear"},
		complete: function() {
			if(!positive){	// arriwing	
				create_illness();
			}else{
				setTimeout(function(){
				reset_syringes();
				if(game_mode == "auto"){
					create_customer();
				}
				else{
					$("#start-next").show();
				}
				},2500);
			}
		}
	});
	
}

function reset_syringes(){
	$('#selected-syringe').hide();
	$('.syringe').css("background-image","url('images/syringe.png')");
	$('.code-wrap').show();
	$('.color-code').remove();
}

function tell_illnesses(illnesses) {
	$('#speech_bubble').show();
	
	i = 0;
		
	var repeat = setInterval(function(){
			
			
			if(i < illnesses.length){
				$('#symptom').css("background-image" , "url("+illnesses[i].image+")" );
				setTimeout(function(){
					$('#symptom').css("background-image" , "none" );
					i++;
				},1000);
				
			}
			if(i == illnesses.length){
				setTimeout(function(){
					//$('#symptom').css("background-image" , "none" );
					$('#speech_bubble').hide();
					create_medicine(illnesses);
				},1000);
				clearInterval(repeat);
			}
			
			
	}, 2000);
	

	
}

function create_medicine(illnesses){
	
	var shelves = ["#option-1 .code-wrap","#option-2 .code-wrap","#option-3 .code-wrap"];
	var correct_self = shelves[Math.floor(Math.random() * shelves.length)];
	
	var uncorrects = [];
	var uncorrects = illnesses.slice();
	
	illnesses.forEach(function(illness) { 
		$(correct_self).append("<div class='color-code' id='id"+illness.code+"' style='background-color:"+illness.code+"'></div>" );
	}
	);
	
	shelves.forEach(function(self) {  
		if(self != correct_self){
			uncorrects = shuffle(uncorrects);
			uncorrects.forEach(function(uncorrect) {  
					$(self).append( "<div class='color-code'  id='id"+uncorrect.code+"' style='background-color:"+uncorrect.code+"'></div>" );
			});
			
		}
	});
	$('.syringe').show();
	start_timer();
	
}

function create_customer() {
	var pet = pets[Math.floor(Math.random() * pets.length)];
	var head = ownerheads[Math.floor(Math.random() * ownerheads.length)];
	var torso = ownertorsos[Math.floor(Math.random() * ownertorsos.length)];
	var legs = ownerlegs[Math.floor(Math.random() * ownerlegs.length)];
	
	$('#pet').css({"background-image" : "url("+pet.image+")" , "width" : pet.width , "height" : pet.height});
	$('#owner-head').css({"background-image" : "url("+head.image+")" , "width" : head.width , "height" : head.height});
	$('#owner-torso').css({"background-image" : "url("+torso.image+")" , "width" : torso.width , "height" : torso.height});
	$('#owner-legs').css({"background-image" : "url("+legs.image+")" , "width" : legs.width , "height" : legs.height});
	
	if(torso.hasOwnProperty("cutoff")){
		$('#owner-torso').css("margin-bottom" , "-"+String(torso.cutoff)+"px");
	}
	var game_container_width = $('#gamecontainer').width();
	var owner_width = $('#owner').width();
	
	$('#pet-wrap').css("left" , "-"+pet.width+"px");
	var customer_width = $('#customer').width();
	$('#customer').css("left" , (game_container_width+pet.width+owner_width)-customer_width+"px");
	var total_width = pet.width+customer_width;
	var pixels_to_reach = (game_container_width-571); //571 is the tip of the selected syringe;
	curr_customer.pixels_to_reach = pixels_to_reach;
	curr_customer.money = create_money();
	move_costumer(pixels_to_reach,false);
	/*$( "#customer" ).animate({
    left: "-="+pixels_to_reach}, {duration: 3300,specialEasing: {width: "linear"},
		complete: function() {
		  create_illness()
		}
	});*/
		
}
	$("#start-next").click(function(){
		create_customer();
		$(this).hide();
		$(this).html("Next");
	});
	$("#game-mode").click(function(){
		(game_mode == "auto")?game_mode="manual":game_mode="auto";
		$("#game-mode").html("mode: "+game_mode);
	});
	$(".syringe").click(function(){
			
		var codes = $(this).siblings(".code-wrap").children();
		$(this).siblings().css("display","none");
		$(this).css("background-image","none");
		$("#selected-syringe").show();
		ok = true;
		i=0;
		
		while(ok && i< curr_illnesses.length){
			id = codes.eq(i).attr('id');
			id = id.replace('id','');
			
			if(curr_illnesses[i].code === id){
				ok = true;
			}
			else{
				ok = false;
			}
			
			i++;
		}
		
		if(ok){
			set_money(curr_customer.money,true);
		}
		else{
			set_money(curr_customer.money,false);
		}
		clearInterval(time_repeat);
		$('#time-limit').hide();
		move_costumer(curr_customer.pixels_to_reach,true);
	});
		
});
	/*
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