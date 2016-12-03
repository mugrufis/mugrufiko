$(document).ready(function(){
	$(".btn1").click(function(){
		
			$(".paper").animate({top: "618" },"slow");
			$(".wood").animate({top: "618" },"fast");
	});
});

$(document).ready(function(){
	$(".btn2").click(function(){
		
			$(".paper2").animate({top: "618" });
			$(".wood2").animate({top: "618" });
	});
});

$(".reset").click(function(){
    $(".paper").offset({top:59})
    $(".paper2").offset({top:59})
    $(".wood").offset({top:59})
    $(".wood2").offset({top:59})
});
