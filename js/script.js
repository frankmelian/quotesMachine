$(document).ready(function(){
$("#qbutton").on("click",function(d){
	d.preventDefault();
    $.support.cors = true;
	$.ajax({
    url:'http://quotes.stormconsultancy.co.uk/random.json',
    type:"GET",
    crossDomain:true,
    success:function(data){
    $("#heading").html(data.author);
    $("#displayQuote").html(data.quote);
    var share = data.quote;
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
     + encodeURIComponent('"' + share + '"'))
    },
    cache:false,
	});
 });

});


