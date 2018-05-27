hexo.extend.tag.register('post_img', function(args){
  var src = args[0];
  var alt = args[1];
	return "<p class='content-image'>" + "<img src='" + src + "' alt='" + (alt ? alt : '') + "'/>" + "</p>";
});
