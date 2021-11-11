{
    var image =[]
      image[0] = "static/media/body.jpg"
      image[1] = "static/media/danceBalance.jpg"
      image[2] = "static/media/body2.jpg"
      image[3] = "static/media/dance1.jpg"

var i = 0;
var timer = 2000;
function changeimage () {
    document.diapo.src = image[i];
    if(i<image.length-1) {
        i++;
    }
    else {
        i=0;
    }
    setTimeout("changeimage()",timer);
}
window.onload=changeimage;
    

}  


const sr = ScrollReveal({
    duration: 1000,
    reset:true,
});
sr.reveal('a',{
    origin:'top',
    distance:'50px'
});
sr.reveal('.btn',{
    origin:'top',
    distance:'50px',
    delay:300

});





