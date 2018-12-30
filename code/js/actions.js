$(".cardSize").click(function(){
    $(".cardSize-container").slideToggle(1000)
});
$(".gallery").click(function(){
    $(".gallery-container").slideToggle(1000)
});
$(".uploadImage").click(function(){
    $(".upload-container").slideToggle(1000)
});



$('.cardsize').click(function(){
    $('.content').toggle();

})

$('.bground').click(function(){
    $('.contentpattern').toggle();

})


var lis = $(".contentpattern .colors li");
lis.eq(0).css("backgroundColor","yellow");
lis.eq(1).css("backgroundColor","#09c");
lis.eq(2).css("backgroundColor","orange");
lis.eq(3).css("backgroundColor","tomato");
lis.eq(4).css("backgroundColor","tan");
lis.eq(6).css("backgroundColor","deeppink");
lis.eq(7).css("backgroundColor","crimson");
lis.eq(8).css("backgroundColor","green");
lis.eq(9).css("backgroundColor","aqua");
lis.eq(10).css("backgroundColor","darkorange");
lis.eq(11).css("backgroundColor","darkgreen");
lis.eq(12).css("backgroundColor","grey");
lis.eq(13).css("backgroundColor","blueviolet");
lis.eq(14).css("backgroundColor","chocolate");
lis.eq(15).css("backgroundColor","black");





lis.click(function(){

    var bgcolor = $(this).css("backgroundColor");
    $(".canvas").css("backgroundColor",bgcolor);
});

$('.clipart').click(function(){
    $('.contentclipart').toggle();

})

var lis1 = $(".contentclipart li img");
lis1.click(function(){
    var img = $(this).attr('src');
    console.log(img);
    $("#mycanvas img:last-child").remove();
    $("#mycanvas").prepend($('<img>',{id:'imgs',width:'89px',height:'149px',src:img}));

});

