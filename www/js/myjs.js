function opencamara(){
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
    image.src = imageURI;
}

function onFail(message) {
    alert('Failed because: BECAUSE YES' + message);
}
    
    
    
}
function init(){
 document.getElementById("mybutton").addEventListener("click",opencamara);
}