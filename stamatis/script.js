(function(){


	var texts = {

		"innA" : "You are sitting inside your favorite inn, where you spend all the nights now.<br> You recall the adventures of a life,<br> that seems now as if it belonged to another person,<br> and the long gone companions of then.<br> Unlike the other nights though today you feel uneasy. Although there should be no reason for it, and despite the fact that you haven't practiced magic in years, you know better than ignoring your intuition after so many years of adventuring..<br><br>  As your eyes scan the room you spot an old elf looking intensly at you... There is something odly familiar about this fella that you can not yet comprehend. Your eyes meet, he doesn't look away, he doesn't even blink as he rises and comes towards you.<br><br> You know these eyes, but from where, from when.. ",
		"innB" : "Hello Doreon. Remember me?! <br><br>  It's been a while since you all left me for dead. Not that I did not deserve it, but still, it was cold.<br> It is sad that it is only you left. OK, for the pscychopath Mirillir don't expect any tears, but Adriel, what a beauty..<br><br> Have you recognised me yet, or is it that I don't have my earings anymore, and that makes me look naked and weird?!<br> What is my name Doreon?",
		"innC" : "I thought so. You remember me! <br> Streight to the point then, I have a mission for you. I can only imagine how eager you are to decline my suggestion, but do not. Hear me out, and it will be worth your time.<br><br> The Moon Demon that you once set free brought the world to the current state of misery and destruction. I know you drink every night to forget, as do I. This is not how I thought it would work. But there is a way out of this hell. <br> I visited the Ice Library, that is beeing rebuilt, and although it has not yet got to the glory of the past, is still the bigest repository of knowledge in the world. This is where I found one of the strongest spells ever to exist, the only spell with the power to send you back in time, and see the world again through your own eyes, still retaining all of your accumulated knowledge. I do not know if you can alter you actions but I believe it is worth a try. As I said you are the only one left from your party, and maybe the only chance for change.<br> There is only one scroll with this spell on it and this is my gift to you. In order to cast it though you will need to find the altar of the Dragons that is located at the ruined city of Ald'ronville.  <br><br>But let us see is your mind as sharp as it used to be, so that you stand a chance against the devious traps and riddles awaiting?<br>I have rivers without water,<br>Forests without trees,<br> Mountains without rocks, <br> Towns without houses.<br> What am I?!",
		"innD" : "Sir Marcius stands, places the two parchments on the table and leaves as abruptly as he arrived, not saying another word.<br>You find yourself in deep thought looking at the spell scroll and the map to Ald'ronville that are lying on the table. A fire long gone from inside of you is starting to light again. The chance to not only escape from the world of memories but to actually forge new ones, the chance to see once again the loved faces of the past has a calling tha you feel you can not ignore even though you can feel the weight of time on you. <br> Surrounded by the smoke of your pipe in the now empty inn, you make the decesion, the decision to embark on your last adventure, or maybe on your first one once again... ",
		"tower": "You are back at your shack, and although too tired, you open the big wooden chest where you keep all the mementos of the past. You see your half melted mirror mask as well as two small bags filled with ash, that you have no idea why you kept. Well when you kept them they were looking a bit more like keftedakia...!  And there it is, your mighty spellbook, covered in dust but enclosing powerfull magic that you once wielded masterfully. You open it and before you even know it you are drawn into it, smelling the old paper, hearing the whistle of the big pages while they turn like dancing. And you remember the study needed to memorize spells to be able to cast them at will, and how the beautifully written letters feel like coming to life as your eyes run through them. <br> The dawn is breaking as you decide to get a little sleep. ",
		"teleport" : "You wake up and smile thinking that you where given a map.. What a waste of paper when you can just teleport. You may have not casted such a powerfull spell in years but you feel very calm about the fact. You don your hooded cloak over your robe, tie fast your pouch that you enchated to be a lot more spacious than it looks like and start casting a teleport spell.",
		"ruinsA": "Ald'ronville or what is left of it lies in front of you. The city of the thousand stone pillars, all conected through tunnels and intricate bridges, lies to waste. only a few pillars remain standing amidst a sea of waste dust and stones. What strucks your attention is that only one of those pillars looks not in an immediate danger of collapsing, and the huge wooden door leading into it has to be bound with powerfull magic, because it looks as if it was constructed but a year ago. The lionhead carved in stone over the door looks ferocius and has had to be the work of a master craftsman. <br> Yo go closer and try to push the door open but it doesn't open. To make matters worse there seems to be no lock. <br> You decide to cast a spell to undo the wards and unhidden locks of the door. As the energy of your spell reaches the door intricate patterns appear on the door. They capture your spell and you can see its energy moving in circles traveling upwards until the energy vanishes in the stone on top of the stair. For a momment everything stays still, and then the eyes of the lionhead light with a deep orange color, the head looks down at you and says:  <br><br>  You seek to enter a sacred place<br> only the worthy shall pass.<br> The worthy can take the whole world,<br>the whole world that shelters our existance <br>and make it small and make it tiny.<br>Then and only then is the key revealed to them.<br>Are you worthy???",
		"ruinsB": "The door opens and a beatifull woman reveals herself. She gently grabs your arm leading you in, and you know you can not do but as she pleases.The door behind you closes silently.<br> Hi she says, my name is An-kala. I will guide you towards your future. But is it not so interesting, how new the future always is, and how strong the roots of the past are? And how these two dance together round and round, and carefull now, when the conductor a well nourished soul is, how the new evolves into a core of beauty unseen before, protected by the roots of times gone.<br> And when a hungry soul he is, how the past feeds from the future, it roots piercing everything new and feeding off of it, in a neverending hunger, always lurking and craving, until the past is the present and the future. <br><br> Be weary traveller, because when the journey ends what you will see you know already, you did already. Be weary..",
		"ruinsC": "As you walk the corridor you realize that the woman has vanished. Was it a dream, or did it happen. And when? You thoughts are racing when you reallize that you need to focus once again to the task at hand. Before you is a door, radiating a pale yellow light. As if the sun is behind it, and it is so thin that you can see some of the light past it. I is held tightly closed with four chains forming an X, and at the center of it is an incription. You look closely and read the following: <br><br> DREIBUCHSTABENWUERDENDIETUERWASMACHEN <br> ",
		"firstRoom": "The light shine is dimmed as the lock unlocks, the chains fall to the ground and the door creeks open. Inside there is a beautifull room, counterintuitively clean and well taken care of. Everywhere you look you see books, artifacts, vials, gems, works of art, magic objects. In your youth you would want to stuff your pockets and bags, or as you got richer maybe your bag of holding. But now the effect of such a place is different. With all the misery in the world, what you see is beauty. Time and energy invested on evolving the spirit and mind, pushing the boundaries of science. <br><br> You start looking around the room. <br> The room is something more abstract than just a picture.. <br> and there, right on the corner is written what you seek. <br> Did you see it yet? <br> Or is it too well hidden... "	,
		"secondRoom": "Only thinking about these words makes the candlelights dance as from a light touch of wind. <br> And the you see, and you don't know if he was there all along, or not. Hello says the creature, I know what you seek. And all this hard path that led you here will be rewarded. I will take you to the altar. And give you the gift reserved for only but the most special. Be warned, the hardest part of the road is ahead of you. But it also so little left. Do not give up and you shall be rewarded. <br> <br> The creature vanishes. <br>You are not there anymore. <br> You are in a big round chamber <br> In the middle fabric hanged from the ceiling forming what seems as many circles one just wider of the one enclosing it flop lightly. <br> Light so strong that should hurt your eyes eminates from the center. <br> It doesn't hurt though. <br> Everything is so similar as it used to but not quite the same. ",
		"thirdRoom": "And once again you are somewhere else. You know you are getting closer to the end of your journey. Vague melodies sound in the distance. <br> You hear a voice, standing in front of you all along, how did you not notice, is a big rat warrior. I will go straight to the chase wizzard. <br> Tell me, when I travelled with my rat brothers we saw ourselves in a magic mirror. <br> Carefull there, the mirror saw us as well. <br> And we asked him, you that see all and from your own perspective, <br> do you know where we come from? <br> Hell we liked the answer.<br> Can you see the answer as well mage??? ",
		"final": "The melody grows louder. A portal stands before you. The melody repeats itself. It looks inactive. On and on the melody goes. <br><br>How long...  <br><br> (in a the USB stick go to the sys folder) <br><br> Beg a little more...",
		"credits": "I hope the journey was worth it. Here is your reward. <br><br> <a href='https://www.youtube.com/watch?v=SxLI41RKdCA&t=148s' target='_blanc'>First one </a> <br><br> <a href='https://www.youtube.com/watch?v=N_9x2z4azuM' target='_blanc'>Second one </a> "
	}


//caching the oftenly used terms
var textDisp = $("#textDisp");
var picDisp = $("#picDisp");
var inputs = $("#inputs");
var buttons = $("#buttons");
var textInput = $("#answers");

picDisp.hide();
inputs.hide();

// intro functionality
$("#startBtn").click(function(){
	$(this).fadeOut();
	functionalityChange("btn1");
	sceneChange(texts.innA,"pics/inn.jpeg");
});

// inn part A to part B

buttons.on("click", "button#btn1", function(){
	$(this).fadeOut();
	functionalityChange("btn2",true, "You need to answer to continue.");
	sceneChange(texts.innB, "pics/sirMarciusOld.jpg");
})


// inn part B to part C

buttons.on("click", "button#btn2",function(){
	if (textInput.val().toLowerCase() == "sir marcius") {
		console.log("Correct!");
		functionalityChange("btn3",true, "No punctuation.");
		sceneChange(texts.innC,  "pics/sirMarciusOld2.jpg");

	}
});

// inn part C to inn D

buttons.on("click", "button#btn3",function(){
	if (  
		(textInput.val().toLowerCase() == "map") || (textInput.val().toLowerCase() == "a map")
		)  {
		console.log("Correct!")
	sceneChange(texts.innD,  "pics/doreon.jpg");
	functionalityChange("btn4",false, "functionality testing")

	
}
});

// inn D to stams tower

buttons.on("click", "button#btn4",function(){

	sceneChange(texts.tower,  "pics/shack.jpg");
	functionalityChange("btn5",false, "functionality testing")
});

// tower to teleport

buttons.on("click", "button#btn5",function(){

	sceneChange(texts.teleport,  "pics/spell.jpg");
	functionalityChange("btn6",false, "")
});

//teleport to ruins

buttons.on("click", "button#btn6",function(){

	sceneChange(texts.ruinsA,  "pics/ruins.jpg");
	functionalityChange("btn7",true, "Enter the key")
});

//ruins A to ruinsB

buttons.on("click", "button#btn7",function(){

	if (textInput.val() == "CE") {
		sceneChange(texts.ruinsB,  "pics/door1.jpg");
		functionalityChange("btn8",false, "");
	}
});

//ruins B to C

buttons.on("click", "button#btn8",function(){


		sceneChange(texts.ruinsC,  "pics/door2.jpg");
		functionalityChange("btn9",true, "Think think little wizzard...");
	
});

// ruins C to first room

buttons.on("click", "button#btn9",function(){

	if (textInput.val().toLowerCase() == "auf"){
		sceneChange(texts.firstRoom,  "pics/firstRoom.jpg");
		functionalityChange("btn10",true, "");
	}
});

// first to second

buttons.on("click", "button#btn10",function(){

	if (textInput.val().toLowerCase() == "oh the beautiful sundays"){
		sceneChange(texts.secondRoom,  "pics/secondRoom.jpg");
		functionalityChange("btn11",false, "The end is coming closer");
	}
});


// second to third

buttons.on("click", "button#btn11",function(){

	if (textInput.val().toLowerCase() == ""){
		sceneChange(texts.thirdRoom,  "pics/thirdRoom.png");
		functionalityChange("btn12",true, "Brute force is not appreciated!");
	}
});

// third to fourth

buttons.on("click", "button#btn12",function(){

	if (textInput.val().toLowerCase() == "star"){
		sceneChange(texts.final,  "pics/portal.jpg");
		functionalityChange("btn13",true, "Single space no punctuation");
	}
});

// fourth to finale
	buttons.on("click", "button#btn13",function(){

	if (textInput.val().toLowerCase() == "a decade faded a dead face begged"){
		sceneChange(texts.credits,  "pics/credits.jpg");
		functionalityChange("btn14",false, "Single space no punctuation");
		$("button#btn14").remove();
	}
});

// ------------------------*************************---------------------------------------


function functionalityChange (buttonId,inputRequired, inputPlaceholder){
	inputs.hide();
	buttons.fadeOut();
	textInput.val("");
	
	if(inputPlaceholder){
		textInput.attr("placeholder", inputPlaceholder)
	}
	if(inputRequired){
		inputs.fadeIn();
	}
	
	buttons.html('<button id="'+ buttonId +'" class="center-block nextBtn" > Click to continue.</button>').hide();
	buttons.fadeIn();
}


function sceneChange(newText, newPic){
	
	picDisp.fadeOut();
	textDisp.fadeOut(function(){
		
		picDisp.attr("src", newPic).fadeIn();
		textDisp.html(newText).fadeIn();
		window.scrollTo(0,0);
	});
}



//when the key appears scroll to top to make sure that it is seen 
$( window ).resize(function() {

	if($(window).width() < 550){
		window.scrollTo(0,0);
	}
});




})();