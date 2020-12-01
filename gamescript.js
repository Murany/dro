$(document).ready(function(){
	
$('<img/>').attr('src', 'images/dro.png').on('load', function() {
   $(this).remove(); 
   /*
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
		*/
   game_start();
});
/*
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
var paused = false;
var lvl = 0;
var music_mode = false;
var customer_num = 0;
var succes_num = 0;
var game_mode = "auto";
var can_click = false;
var time_limit = null;
var time_repeat = null;
var ost1 = new Audio('sounds/sdro_ost1.mp3');
var ok_sound = new Audio('sounds/good.mp3');
var bad_sound = new Audio('sounds/bad.mp3');
var akos = {head:{image:"images/heads/akos_h.png",width:49,height:49},
			torso:{image:"images/torsos/akos_t.png",width:77,height:77,cutoff:7},
			legs:{image:"images/legs/akos_l.png",width:77,height:91,w1:"images/legs/akos_l_w1.png",w2:"images/legs/akos_l_w2.png"}
			};
var assistants = [{width:77,height:231,w1:"images/assistants/assistant1_w1.png",w2:"images/assistants/assistant1_w2.png"}, 
				  {width:77,height:231,w1:"images/assistants/assistant2_w1.png",w2:"images/assistants/assistant2_w2.png"}, ];
var mini_pets = [{width:69,height:56,image:"images/assistants/mini_pet_1.png"}, 
				 {width:69,height:56,image:"images/assistants/mini_pet_2.png"} ];				  
var pets = [{image:"images/pets/cat1.png",width:119,height:105,w1:"images/pets/cat1w1.png",w2:"images/pets/cat1w2.png"}, 
			{image:"images/pets/dog1.png",width:140,height:122,w1:"images/pets/dog1w1.png",w2:"images/pets/dog1w2.png"},
			{image:"images/pets/rabbit.png",width:91,height:77,w1:"images/pets/rabbitw1.png",w2:"images/pets/rabbitw2.png"}, 
			{image:"images/pets/horse1.png",width:245,height:280,w1:"images/pets/horse1w1.png",w2:"images/pets/horse1w2.png"}, 
			{image:"images/pets/giraffe.png",width:252,height:469,w1:"images/pets/giraffew1.png",w2:"images/pets/giraffew2.png"},
			{image:"images/pets/dog2.png",width:98,height:105,w1:"images/pets/dog2w1.png",w2:"images/pets/dog2w2.png"},
			{image:"images/pets/ostrich.png",width:182,height:273,w1:"images/pets/ostrichw1.png",w2:"images/pets/ostrichw2.png"},
			{image:"images/pets/pig.png",width:189,height:91,w1:"images/pets/pigw1.png",w2:"images/pets/pigw2.png"},
			{image:"images/pets/goat.png",width:133,height:133,w1:"images/pets/goatw1.png",w2:"images/pets/goatw2.png"},
			{image:"images/pets/sneak.png",width:196,height:224,w1:"images/pets/sneakw1.png",w2:"images/pets/sneak.png"},
			{image:"images/pets/shark.png",width:220,height:245,w1:"images/pets/sharkw1.png",w2:"images/pets/sharkw2.png"},
			{image:"images/pets/lion.png",width:217,height:196,w1:"images/pets/lionw1.png",w2:"images/pets/lionw2.png"}
			];
var ownerheads = [{image:"images/heads/o_h1.png",width:63,height:78}, 
				  {image:"images/heads/o_h2.png",width:35,height:56}, 
				  {image:"images/heads/o_h3.png",width:49,height:56},
				  {image:"images/heads/o_h4.png",width:35,height:56}];
var ownertorsos = [{image:"images/torsos/o_t1.png",width:63,height:81,cutoff:18},
				   {image:"images/torsos/o_t2.png",width:63,height:70}, 
				   {image:"images/torsos/o_t3.png",width:63,height:63,cutoff:7},
				   {image:"images/torsos/o_t4.png",width:63,height:74,cutoff:14}];
var ownerlegs = [{image:"images/legs/o_l1.png",width:63,height:105,w1:"images/legs/o_l1_w1.png",w2:"images/legs/o_l1_w2.png"}, 
				 {image:"images/legs/o_l2.png",width:57,height:105,w1:"images/legs/o_l2_w1.png",w2:"images/legs/o_l2_w2.png"},
				 {image:"images/legs/o_l3.png",width:63,height:84,w1:"images/legs/o_l3_w1.png",w2:"images/legs/o_l3_w2.png"},
				 {image:"images/legs/o_l4.png",width:63,height:98,w1:"images/legs/o_l4_w1.png",w2:"images/legs/o_l4_w2.png"}];	
var colors = [{image:"images/s_red.png",code:"#c43810"}, {image:"images/s_black.png",code:"#000000"},  {image:"images/s_blue.png",code:"#1747ba"},  {image:"images/s_green.png",code:"#36b60f"}, {image:"images/s_orange.png",code:"#d06612"} ];
var curr_illnesses = new Array;
var curr_customer = {
	pixels_to_reach : 0,
	money:0,
};
var curr_owner = {
	walking:false,
	stand:"",
	walk1:"",
	walk2:""
};
var curr_pet = {
	walking:false,
	stand:"",
	walk1:"",
	walk2:""
};
curr_assistant_direction = true;
var last_pet = null;
//game_start();
	//var audio = new Audio('sss_theme.mp3');


function game_start() {

	$("#maincontainer").show();
	$("#loading").hide();
	ost1.loop=true;
	ost1.volume = 0.2;
	ok_sound.volume = 0.3;
	bad_sound.volume = 0.3;
	//ost1.play();
	var m_padded = create_padded_string(money.toString(),"0",4);
	var l_padded = create_padded_string(lvl.toString(),"0",2);
	$("#money-value").html(m_padded);
	$("#lvl-value").html(l_padded);
	$("#start-next").show();
	$("#game-mode").html("mode: "+game_mode);
	$("#music").html("music: off");
	
	
	setInterval(() => {
		if(!paused){
			create_assistant(curr_assistant_direction);
		}
	}, 8000);

}

function create_padded_string(str,padStr, len) {
	while (str.length < len)
	   str = padStr + str;
	return str;
}

function set_lvl(){
	var padded = create_padded_string(lvl.toString(),"0",2);
	$("#lvl-value").html(padded);
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
	
	return Math.floor(Math.random() * max) + 10 
}
function create_illness() {
	
	var s_length = 0;
	var milliseconds = 0;
	var used_colors = [];
	var arr_illnesses = [];
	if(lvl <= 3){
		s_length = 3;
		milliseconds = 40000
	}
	else if(6 >= lvl >3 )
	{
		s_length = 5;
		milliseconds = 30000
	}
	else if(9 >= lvl >6 )
	{
		s_length = 7;
		milliseconds = 20000
	}
	else{
		s_length = 9;
		milliseconds = 15000
	}
	while (arr_illnesses.length != s_length) {
		var color = colors[Math.floor(Math.random() * colors.length)];
		if (used_colors.findIndex(element => element === color) == -1){
			arr_illnesses.push(color);
		}
		used_colors.push(color);
		
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

/*function color_code_shuffle(corr_array,ref_array) {
	
	var return_array = [];
	var i = 0;
	while(i < corr_array.length){
		var index = ownerheads[Math.floor(Math.random() * ownerheads.length)];
		if(return_array[i].code != corr_array[index].code && return_array[i].code != ref_array[index].code] ){
			return_array.push(corr_array[index]);
			i++;
		}
	}

  return_array;
}*/

function arrays_compare(arrays,found_limit) {
	
	var total_diff_found_count = 0;
	var cols = arrays[0].length;
	var i = 0;
	var j = 0;
	//var prew = null;

	while(i < cols && total_diff_found_count != found_limit) {
		var curr_col_same_count = 0;
		var curr_col_history = [];
		j = 0;
		while (j < arrays.length) {
			if( j> 0 && curr_col_history.find(element => element === arrays[j][i])){
				curr_col_same_count++;
			}
			
			//prew = arrays[j][i];
			curr_col_history.push( arrays[j][i]);
			j++;
		}
		if(curr_col_same_count == 0){
			total_diff_found_count++;
		}
		i++;
	}
	return total_diff_found_count == found_limit;

}

function start_timer(){
	$("#time-limit").html(time_limit.getMinutes()+":"+time_limit.getSeconds());
	$('#time-limit').show();
	time_repeat = setInterval(function(){
		if(!paused){
		if(time_limit.getTime() > 0 ){
			
			time_limit = new Date(time_limit-1000);
			$("#time-limit").html(time_limit.getMinutes()+":"+time_limit.getSeconds());
		}
		else{
			bad_sound.loop=false;
			bad_sound.play();
			can_click = false;
			set_money(curr_customer.money,false);
			clearInterval(time_repeat);
			$('#time-limit').hide();
			setTimeout(function(){
			
					$('#result-bubble').show();
					$('#result').css("background-image" , "url('images/frown.png')" );
				
			},500);

			setTimeout(function(){
				
					$('#result').css("background-image" , "none" );
					$('#result-bubble').hide();
					move_costumer(curr_customer.pixels_to_reach,true);
				
			},1500);
			
		}
	}
	},1000);
}
function animate_pet(){
	pet_time_repeat = setInterval(function(){
		if(!paused){
			if( curr_pet.walking ){
				
				$('#pet').css({"background-image" : "url("+curr_pet.walk1+")"});
				setTimeout(function(){
					
							$('#pet').css({"background-image" : "url("+curr_pet.walk2+")"});
						
					},300);
			}
			else{
				clearInterval(pet_time_repeat);
				$('#pet').css({"background-image" : "url("+curr_pet.stand+")"});
			}
		}
	},600);
	
}

function animate_owner(){
	owner_time_repeat = setInterval(function(){
		if( curr_owner.walking ){
			
			$('#owner-legs').css({"background-image" : "url("+curr_owner.walk1+")"});
			setTimeout(function(){
					
						$('#owner-legs').css({"background-image" : "url("+curr_owner.walk2+")"});
					
				},300);
		}
		else{
			clearInterval(owner_time_repeat);
			$('#owner-legs').css({"background-image" : "url("+curr_owner.stand+")"});
		}
	},600);
}
function move_costumer(amount,positive){
	
	curr_pet.walking = true;
	curr_owner.walking = true;
	animate_pet();
	animate_owner();	
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
			curr_pet.walking=false;
			curr_owner.walking=false;
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
			
		if(!paused){	
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
		}
			
	}, 2000);
	
}

function create_medicine(illnesses){
	
	var shelves = ["#option-1 .code-wrap","#option-2 .code-wrap","#option-3 .code-wrap"];
	shelves.forEach(function(shelf) {  
		$(shelf).empty();
	});
	//clearing possible previous color codes
	var correct_self_index = Math.floor(Math.random() * shelves.length);
	var correct_self = shelves[correct_self_index];
	
	shelves.splice(correct_self_index, 1); //removing the correct one
	var arrays = [];
	var uncorrects1 = [];
	var uncorrects2 = [];
	var uncorrects1 = illnesses.slice(); // copy the original
	var uncorrects2 = illnesses.slice(); // copy the original

	arrays.push(illnesses);
	arrays.push(uncorrects1);
	arrays.push(uncorrects2);
	//gettin all of them together for checking
	
	while(!arrays_compare(arrays,1)){
		let sh = shuffle(arrays[1]);
		let sh2 = shuffle(arrays[2]);
		arrays[1] = sh.slice(0);
		arrays[2] = sh2.slice(0);
		//while all arrays are different at least in one part
	}
	console.log(arrays);
	
	illnesses.forEach(function(illness) { 
		$(correct_self).append("<div class='color-code' id='id"+illness.code+"' style='background-color:"+illness.code+"'></div>" ); 
		//fill the correct self's color codes
	}
	);
	
	arrays.shift(); //getting the correct ones out, leaving only the uncorrects
	for (i = 0; i < shelves.length; i++) {
		
		arrays[i].forEach(function(color) {  
			$(shelves[i]).append( "<div class='color-code'  id='id"+color.code+"' style='background-color:"+color.code+"'></div>" );
		});
		
	}
	$('.syringe').show();
	can_click = true;
	start_timer();
	
}
function create_assistant(direction){
	var string_val = ((direction)?"+":"-")+"=";
	var assistant = assistants[Math.floor(Math.random() * assistants.length)];
	var mini_pet = mini_pets[Math.floor(Math.random() * mini_pets.length)];
	$('#mini-pet').css({"background-image" : "url("+mini_pet.image+")"});
	$('#assistant').css({"height":assistant.height});
	if(!direction){ //left-to-right
		$('#assistant,#mini-pet').css({"-moz-transform" : "scaleX(-1)" , "-o-transform" : "scaleX(-1)" , "transform" : "scaleX(-1)", "filter" :  "FlipH", "-ms-filter":"FlipH"})
		$('#mini-pet').css({"left":"7px"});
	}
	else{
		$('#assistant,#mini-pet').css({"-moz-transform" : "scaleX(1)" , "-o-transform" : "scaleX(1)" , "transform" : "scaleX(1)", "filter" :  "FlipH", "-ms-filter":"FlipH"})
		$('#mini-pet').css({"left":"22px"});
	}
	
	assistant_time_repeat = setInterval(function(){
		if(!paused){
		$('#assistant').css({"background-image" : "url("+assistant.w1+")"});
		setTimeout(function(){
				
					$('#assistant').css({"background-image" : "url("+assistant.w2+")"});
				
			},300);
		}
	},600);
	
	$( "#assistant" ).animate({
		left: string_val+300,}, {duration: 3500,specialEasing: {width: "linear"},
			complete: function() {
				curr_assistant_direction = !curr_assistant_direction;
				clearInterval(assistant_time_repeat);
			}
	});
}
function create_customer() {
	if(succes_num%5==0){
		lvl++;
		set_lvl();
	}
	
	pet = pets[Math.floor(Math.random() * pets.length)];
	while (pet == last_pet) {
		pet = pets[Math.floor(Math.random() * pets.length)];
	}
	if(customer_num == 9){ //akos
		pet = pets[0];  //cat
	}
	last_pet = pet;
	
	var head = ownerheads[Math.floor(Math.random() * ownerheads.length)];
	var torso = ownertorsos[Math.floor(Math.random() * ownertorsos.length)];
	var legs = ownerlegs[Math.floor(Math.random() * ownerlegs.length)];
	if(customer_num == 9){ //akos
		head = akos.head; 
		torso = akos.torso; 
		legs = akos.legs; 
	}
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
	
	curr_pet.walk1 = pet.w1;
	curr_pet.walk2 = pet.w2;
	curr_pet.stand = pet.image;
	
	curr_owner.walk1 = legs.w1;
	curr_owner.walk2 = legs.w2;
	curr_owner.stand = legs.image;
	
	curr_customer.pixels_to_reach = pixels_to_reach;
	curr_customer.money = create_money();
	move_costumer(pixels_to_reach,false);
	
	customer_num++;
		
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
	$("#music").click(function(){
		music_mode = !music_mode;
		$("#music").html("music: "+((music_mode)?"on":"off"));
		if(music_mode){
			ost1.play();
		}
		else{
			ost1.pause();
		}

	});

	
	$(".syringe").click(function(){
		if(can_click){
			can_click = false;
			var codes = $(this).siblings(".code-wrap").children();
			$(this).siblings().css("display","none");
			$(this).css("background-image","none");
			$("#selected-syringe").show();
			setTimeout(function(){
				
					$("#syringe-effect").show();
					
						setTimeout(function(){
							$("#syringe-effect").hide();
						},500);
					
				
			},500);
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
				ok_sound.loop=false;
				ok_sound.play();
				set_money(curr_customer.money,true);
				setTimeout(function(){
					
						$('#result-bubble').show();
						$('#result').css("background-image" , "url('images/smiley.png')" );
						succes_num++;
					
				},500);
			}
			else{
				bad_sound.loop=false;
				bad_sound.play();
				set_money(curr_customer.money,false);
				setTimeout(function(){
					
						$('#result-bubble').show();
						$('#result').css("background-image" , "url('images/frown.png')" );
					
				},500);
			}
			clearInterval(time_repeat);
			$('#time-limit').hide();
			setTimeout(function(){
			
					$('#result').css("background-image" , "none" );
					$('#result-bubble').hide();
					move_costumer(curr_customer.pixels_to_reach,true);
				
			},1500);
		}
	});
	window.onfocus = function() {
		paused = false;
	}
	window.onblur = function() {
		paused = true;
	}
		
});