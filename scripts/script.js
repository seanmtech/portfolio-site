(function($) {
var getGif = function()
{
    var gif = [];
    $('img').each(function() 
    {
        // double check if 'images' should be 'img', the source code had 'img' but I thought it might have to be 'images' since that's what my folder is called
        var data = $(this).data('alt');
        gif.push(data);
    });
    return gif;
}
var gif = getGif();

// preload all GIFs
var image = [];

$.each(gif, function(index)
{
    image[index] = new Image();
    image[index].src = gif[index];
});

$('figure').on('click', function()
{
    var $this = $(this),
        $index = $this.index(),
        $img = $this.children('img'),
        $imgSrc = $img.attr('src'),
        $imgAlt = $img.attr('data-alt'),
        $imgExt = $imgAlt.split('.');

    if($imgExt[1] === 'gif')
    {
        $img.attr('src', $img.data('alt')).attr('data-alt', $imgSrc);
        
    }
    else{
        $img.attr('src', $imgAlt).attr('data-alt', $img.data('alt'));
    }
});



})(jQuery);


function accordion(id) {
    let x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }