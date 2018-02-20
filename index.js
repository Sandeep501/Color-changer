$(document).ready(function() {
    // all custom jQuery will go here
    setInterval(clikme, 1000);
     $("#flip").click(function(){
        $("#author_info").  slideToggle("slow");
    });
    
});
function clikme() {
    var x = document.getElementById('para');
    document.getElementById('para').innerHTML = " ";
    var date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds()].map(function (time) {

        x.innerHTML += time;
        //console.log(date.getHours(),date.getMinutes(),date.getSeconds());
        document.getElementById('big-body').style.backgroundColor = 'rgb(' + [date.getHours(), date.getMinutes(), date.getSeconds()].join(',') + ')';

        // body...
    });
}
