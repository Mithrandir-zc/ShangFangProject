/* Author: 
    Mithrandir-zc
*/
var lis = document.querySelector('list-gallery');
var imglist = document.querySelector('gallery-images');
for(var i=0; i<lis.children.length; i++){
    var index = i;
    lis.children[i].setAttribute('index',index);
    lis.children[i].addEventListener('click',function(){
        for(var j=0; j<imglist.children.length; j++){
            var img = imglist.children[0].children[0];
            img.src = "assets/images/gallery" + lis.children[i].getAttribute('index') + "/" + "img" + j + ".jpg";
        }
    });
}






















