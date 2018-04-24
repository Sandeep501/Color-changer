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
    var hours=(date.getHours()%12);
    var minutes=date.getMinutes();
    var sec=date.getSeconds();

    if(hours<=9)
    {
        hours='0'+hours;
        
      
    }
    if( minutes<=9)
    {
        minutes='0'+minutes;

    }
    if(sec<=9){
        sec='0'+sec;
    }

    return [hours,':',minutes,':', sec].map(function (time) {

        x.innerHTML += time;
       
        document.getElementById('big-body').style.backgroundColor = 'rgb(' + [date.getHours(), date.getMinutes(), date.getSeconds()].join(',') + ')';

    });
}
