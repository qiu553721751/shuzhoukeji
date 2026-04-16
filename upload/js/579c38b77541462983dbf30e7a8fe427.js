// 移动端 点击出现
$('.wy_Cate').on('click', function () {
  // 按钮隐藏
  $(this).css({
    'opacity': 0
  }, 500)
  // 内容滑出
  $('.wy_CateList').animate({
    "left": 0
  }, 500)
})
// 移动端 点击收回
$('.wy_backBtn').on('click', function () {
  // 按钮显示
  $('.wy_Cate').css({
    'opacity': 1
  }, 500)
  // 内容收回
  $('.wy_CateList').animate({
    "left": "100%"
  }, 500)
})
/*分类高亮*/
$(function() {
  var pathName = window.location.pathname; //        获得路径信息
  var subUrl = pathName.substring(pathName.lastIndexOf("/"));
  $(".s_button3").each(function() { //        遍历a链接的路径
    var aLinkUrl = $(this).attr("href"); //        得到a链接的路径
    if (aLinkUrl == pathName) {
      $(this).addClass("wy_Click");
      return;
    };
  });
});
/*end*/
/*首页*/
new Swiper(".home_products", {
   // 自动轮播
   //autoplay: 3000,
   // 循环
   //loop: true,
   // 轮播速度
   speed: 500,
   // 一屏幕显示个数
   //slidesPerView:2,
   // slide 之间的距离
   //spaceBetween: 20,
   direction : 'vertical',
   height: 500,//你的slide高度
   breakpoints: {
     468: {
       direction : 'horizontal',
       autoHeight: true, //高度随内容变化
     },
   },
   pagination : '.product_page',
   paginationClickable :true,
   paginationBulletRender: function (swiper, index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
   },
   mousewheelControl:true,
   Scroll:function(i){
     $(".product_page span").eq(i).addClass("active").siblings().removeClass("active");
   },
   observer:true,
   observeParents:true,
});
var name_swiper = new Swiper('.case_name', {
  autoplay:5000,//可选选项，自动滑动
  autoplayDisableOnInteraction : true,
  slidesPerView :5,//'auto'
  //spaceBetween : 20,
  speed:800,
  slideToClickedSlide:true,
  // 媒体查询
  breakpoints: {
    468: {
      slidesPerView:1,
    },
  },
  observer:true,
  observeParents:true,
})  
var case_swiper = new Swiper('.home_case', {
  //autoplay:3000,//可选选项，自动滑动
  autoplayDisableOnInteraction : true,
  speed:800,
  effect:'fade',
  onSlideChangeStart: function(swiper){
    name_swiper.slideTo(swiper.activeIndex, 1000, false);
    $(".case_name .swiper-slide").eq(swiper.activeIndex).addClass("active").siblings().removeClass("active")
  },
  prevButton:'.case_left',
  nextButton:'.case_right',
  observer:true,
  observeParents:true,
});
$(".case_name .swiper-slide").eq(0).addClass("active");
$(".case_name .swiper-slide").click(function(){
  var sm_in=$(this).index();
  $(this).addClass("active").siblings().removeClass("active");
  name_swiper.slideTo(sm_in, 1000, false);
  case_swiper.slideTo(sm_in, 1000, false);   
});
/*end*/
new WOW().init();
/*行业应用*/
$(function() {
  $(window).scroll(function () {
      if ($(document).scrollTop() > 0) {
          $('.application_banner .applicationBox').addClass('scroll');
      } else {
          $('.application_banner .applicationBox').removeClass('scroll');
      }
  })
})
/*锚点跳转*/
 $(".wy_Point").click(function () {
   $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - 90}, 1000);
   return false;
 });
/*软件中心*/
new Swiper('.soft_application', {
   // 自动轮播
   //autoplay: 3000,
   // 循环
   loop: true,
   // 轮播速度
   speed: 500,
   // 一屏幕显示个数
   slidesPerView:2,
   // slide 之间的距离
   //spaceBetween: 20,
   // 媒体查询
   breakpoints: {
       768: {
           slidesPerView: 1,
       },
   },
   prevButton:'.Particles_left',
   nextButton:'.Particles_right',
   //pagination : '.news_page',
   //paginationClickable :true,
   observer:true,
   observeParents:true,
});
/*岗位招聘*/
$('.join_top').on('click', function () {
  $(this).find('.wy_iconfont').toggleClass('rotate');
  $(this).parents('.p_loopitem').find('.join_bottom').slideToggle().end().siblings('.p_loopitem').find('.join_bottom').slideUp().end().find('.wy_iconfont').removeClass('rotate');
});
/*导航高亮*/
var url = window.location.href;
var name = url .lastIndexOf("\/");  
url = url.substring(name + 1, url.length);
/*

$(function(){
  var menuitem = $("#c_static_001-1654509446249 .e_loop-20 .p_list > .p_loopitem");
  for(var i=0,l=menuitem.length;i<l;i++){  
    var time = i * 0.2 + 0.5;
    menuitem[i].setAttribute("data-wow-delay",time+"s");
  }
});

*/