$("#qbutton").on("click",function(d){
	d.preventDefault();
	$.ajax({
    url:'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
    type:"GET",
    success:function(data){
    console.log(data);
    data.forEach(function(val){
     $("#heading").append(val.title );
     $("#displayQuote").append(val.content);
    });

    },

	});
});