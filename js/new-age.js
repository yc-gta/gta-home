(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // member - home(6)
  var memberInfo = [
    { id: '6', name: '이세현', desc: '선생님', fbUrl: "https://www.naver.com" },
    { id: '3', name: '전다혜', desc: '위원장', fbUrl: "https://www.google.com" },
    { id: '5', name: '이수빈', desc: '부위원장', fbUrl: "https://www.naver.com" },
    { id: '9', name: '김진아', desc: '서기', fbUrl: "https://www.google.com" },
    { id: '12', name: '신다혜', desc: '운영부장', fbUrl: "https://www.naver.com" },
    { id: '19', name: '조준호', desc: '홍보부장', fbUrl: "https://www.google.com" },
  ];
  for (var i = 0; i < memberInfo.length; ++i) {
    var member = memberInfo[i];
    var memberHTML = $('\
    <div class="col-sm-6 col-lg-4">\
    <div class="card pt-3 mb-3">\
      <div class="avatar mx-auto">\
          <img class="avatar-img card-img-top" src="img/member/' + member.id + '.jpg">\
      </div>\
      <div class="card-body text-center">\
        <h5 class="card-title">' + member.name + '</h5>\
        <p class="card-text">' + member.desc + '</p>\
      </div>\
      <div class="icon">\
          <ul class="list-inline list-social">\
              <li class="list-inline-item social-facebook">\
                <a href="' + member.fbUrl + '" target="_blank">\
                  <i class="fa fa-facebook"></i>\
                </a>\
              </li>\
          </ul>\
        </div>\
      </div>\
    </div>\
    ');
    $('#members').append(memberHTML);
  }

  // member - page(20 +@)
  var memberInfoAll = [
    { id: '6', name: '이세현', desc: '선생님', fbUrl: "https://www.naver.com" },
    { id: '3', name: '전다혜', desc: '위원장', fbUrl: "https://www.google.com" },
    { id: '5', name: '이수빈', desc: '부위원장', fbUrl: "https://www.naver.com" },
    { id: '9', name: '김진아', desc: '서기', fbUrl: "https://www.google.com" },
    { id: '12', name: '신다혜', desc: '운영부장', fbUrl: "https://www.naver.com" },
    { id: '19', name: '조준호', desc: '홍보부장', fbUrl: "https://www.google.com" },
    { id: '4', name: '이태규', desc: '기획부장', fbUrl: "https://www.naver.com" },
    { id: '1', name: '변혜란', desc: '운영부', fbUrl: "https://www.google.com" },
    { id: '20', name: '소연', desc: '운영부', fbUrl: "https://www.naver.com" },
    { id: '14', name: '김민철', desc: '운영부', fbUrl: "https://www.google.com" },
    { id: '18', name: '김재민', desc: '운영부', fbUrl: "https://www.naver.com" },
    { id: '17', name: '하건우', desc: '운영부', fbUrl: "https://www.google.com" },
    { id: '11', name: '민준희', desc: '홍보부', fbUrl: "https://www.naver.com" },
    { id: '15', name: '계동혁', desc: '홍보부', fbUrl: "https://www.google.com" },
    { id: '2', name: '최서윤', desc: '홍보부', fbUrl: "https://www.naver.com" },
    { id: '10', name: '조정호', desc: '홍보부', fbUrl: "https://www.google.com" },
    { id: '16', name: '양유노', desc: '홍보부', fbUrl: "https://www.naver.com" },
    { id: '13', name: '김하진', desc: '기획부', fbUrl: "https://www.google.com" },
    { id: '8', name: '윤채영', desc: '기획부', fbUrl: "https://www.google.com" },
    { id: '7', name: '이가윤', desc: '기획부', fbUrl: "https://www.google.com" },
    { id: '21', name: '황병민', desc: '기획부', fbUrl: "https://www.google.com" },
  ];
  for (var i = 0; i < memberInfoAll.length; ++i) {
    var member = memberInfoAll[i];
    var memberHTML = $('\
    <div class="col-sm-6 col-lg-4">\
    <div class="card pt-3 mb-3">\
      <div class="avatar mx-auto">\
          <img class="avatar-img card-img-top" src="img/member/' + member.id + '.jpg">\
      </div>\
      <div class="card-body text-center">\
        <h5 class="card-title">' + member.name + '</h5>\
        <p class="card-text">' + member.desc + '</p>\
      </div>\
      <div class="icon">\
          <ul class="list-inline list-social">\
              <li class="list-inline-item social-facebook">\
                <a href="' + member.fbUrl + '" target="_blank">\
                  <i class="fa fa-facebook"></i>\
                </a>\
              </li>\
          </ul>\
        </div>\
      </div>\
    </div>\
    ');
    $('#membersAll').append(memberHTML);
  }
  


})(jQuery); // End of use strict
