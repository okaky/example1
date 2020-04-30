$(function(){
    //ページ内リンク
  $('.menu a').click(function(){
      const id = $(this).attr('href');
      const position = $(id).offset().top;
      $('html, body').animate({'scrollTop':position}, 500);
      });
  });
    // 背景スライドショー
  jQuery(function($) {
    $('.slider').bgSwitcher({
      images: ['./img/1.jpg', './img/2.jpg', './img/3.jpg','./img/4.jpg'], // 切り替える背景画像を指定
      interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
      loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
      shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
      effect: "drop", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
      duration: 3000, // エフェクトの時間を指定します。
      easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
  });
