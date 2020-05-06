alert("yo");
$("input").keypress(function(e)
{
    var textt = e.key;
    $("h1").text(textt);
});    

$("button").on("click", function()
{
    $("h1").slideUp().slideDown();
});