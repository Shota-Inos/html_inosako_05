// jsを記述する際はここに記載していく


//フローティングボタン
$('#character_btn').click(function () {
    $('body, html').animate({
        scrollTop: 0 
    }, 500);
    return false;
});

//ハンバーグメニュー
$(function() {
    $('.btn-gNav').on("click", function(){
  
      $(this).toggleClass('open');
      $('#gNav').toggleClass('open');
    });
  
  });
  
  // メニューをクリックされたら、非表示にする
  $(function() {
    $('.gNav-menu').on("click", function(){
       $('#gNav').removeClass('open');
    });
  });