// 页面 header 处理
var currentScrollHeight = window.pageYOffset, scrollOffset = 0
window.onscroll = function(e) {
  scrollOffset = window.pageYOffset - currentScrollHeight
  currentScrollHeight = window.pageYOffset
  if(scrollOffset > 0){ //如果向下浏览大于 100px 则隐藏，否则显示
    document.querySelector('.site-header').classList.add('header-hidden');
  }else{
    document.querySelector('.site-header').classList.remove('header-hidden');
  }
}
