$(document).ready(function( ){
   
    $('theorem').each(function( ){
	var text   = "Theorem";
	var title  = $(this).data("title");
	var number = $(this).data("number");

	if (!(typeof number === "undefined"))
	    text += " "+number ;
	
	if (!(typeof title === "undefined"))
	    text += " ("+title+") " ;
	
	$(this).prepend("<b style='font-style:normal'>"+text+"</b>");
    });

    $('corollary').each(function( ){
	var text   = "Corollary";
	var title  = $(this).data("title");
	var number = $(this).data("number");

	if (!(typeof number === "undefined"))
	    text += " "+number ;
	
	if (!(typeof title === "undefined"))
	    text += " ("+title+") " ;
	
	$(this).prepend("<b style='font-style:normal'>"+text+"</b>");
    });

    /* $('section').each(function(index){
	var number = $(this).data("number") || (index + 1) ;
	$(this).prepend(number+" ");

	var subsections = $(this).nextUntil($('section')[index+1], 'subsection');
	subsections.each(function(subindex){
	    var subsection = $(subsections[subindex]); 
	    var subnumber = subsection.data("number") || (subindex + 1);
	    subsection.prepend(number+"."+subnumber+" ");
	});
 	
    }); */
    
    
});
