$(document).ready(function(){
$("#qbutton").on("click",function(d){
	d.preventDefault();
	$.ajax({
    url:'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
    type:"GET",
    success:function(data){
    console.log(data);
    data.forEach(function(val){
     $("#heading").html(val.title );
     $("#displayQuote").html(val.content);
    });

    },
    cache:false,
	});
 });
});