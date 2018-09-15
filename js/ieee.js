$(document).ready(function () {
    //$('.js-grid').tightGrid();

    //var $ = require('jquery');
    //var SimpleLightbox = require('simple-lightbox');
    //SimpleLightbox.registerAsJqueryPlugin($);

    //$('.imageGallery1 a').simpleLightbox({navText:		['&lsaquo;','&rsaquo;']});
});


function sendMessage(){
    if (!(ValidateEmail(document.getElementById("email").value) )){
        return;
    }
    to = 'ieeesb@iitp.ac.in';
    cc = 'talktopramit@gmail.com;'+document.getElementById("email").value;
    sub = 'Enquiry about ieee by '+document.getElementById("name").value;
    body = document.getElementById("message").value+'%0D%0A%0D%0A%0D%0A'+document.getElementById("name").value+'%0D%0A'+document.getElementById("email").value+'%0D%0A'+document.getElementById("phone").value;

    window.location.href = 'mailto:'+to+'?cc='+cc+'&subject='+sub+'&body='+body;
}

function ValidateEmail(email)
{
    //   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase()) ){
        return (true)
    }
    return (false)
}