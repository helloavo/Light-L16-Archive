//////////////
//Javascript file on the host side (where the kb is hosted)
//This javascript is ran on *.helpjuice.com, not on client
//////////////
var height = 0;
var url_without_http = "/";
var min_height = 400;
var height_offset = 0.12;

window.onload = function(){
  //set defaults, on pageload.
  url_without_http = "/";
  height = $(document).height();

  //For smoother browsing experience,
  //Don't resize the window to the EXACT height
  //But also add 12% of the PREVIOUS height
  height = ($('#content:first').height() || $('body > div:first').height()) + (height * height_offset);

  //the comparison of min-height is used because
  //a lot of times all the user will see is the 'loading'
  //screen, and it has a very low height
  if (height < min_height){
    height = min_height;
  }

  //Send message to client
  if (parent.socket) {
    parent.socket.postMessage(json_response(height, url_without_http, false));
  }
};

//Upon every click, inject hash & don't resize
$(document).on("click", "a[target!='_blank']", function(){

  //Remove HTTP:// from url
  url_without_http = $(this).attr('href').replace('http://', '').replace('https://', '');

  //Make url into a 'relative url', not absolute url
  url_without_http = url_without_http.substr(url_without_http.indexOf('/'));

  //Encode the URL
  url_without_http = encodeURIComponent(url_without_http);

  //Don't resize height upon clicking, only upon loading
  height = -1;
  if (parent.socket) {
    parent.socket.postMessage(json_response(height, url_without_http, true));
  }
});


//Height: Height of the knowledge base

//URL: URL of the knowledge base. Used to inject into hash
//To be able to reference that url, and be able to pull up
//content

//*Force hash: Forces the url hash to be whatever the URL is,
//because by default we won't inject any hash lower than 2chars.
function json_response(height, url, force_hash){
  return '{"height":\"'+height+'\", "url":"'+url+'", "force_hash":"'+force_hash+'"}';
}
