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
    { id: 'chojunho', name: '조준호', desc: '홍보담당', fbUrl: "https://www.naver.com" },
    { id: 'kk', name: '김진욱', desc: '놀기담당', fbUrl: "https://www.google.com" },
    { id: 'chojunho', name: '조준호', desc: '홍보담당', fbUrl: "https://www.naver.com" },
    { id: 'kk', name: '김진욱', desc: '놀기담당', fbUrl: "https://www.google.com" },
    { id: 'chojunho', name: '조준호', desc: '홍보담당', fbUrl: "https://www.naver.com" },
    { id: 'kk', name: '김진욱', desc: '놀기담당', fbUrl: "https://www.google.com" },
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
    { id: 'chojunho', name: '조준호1', desc: '홍보담당', fbUrl: "https://www.naver.com" },
    { id: 'kk', name: '김진욱', desc: '놀기담당', fbUrl: "https://www.google.com" },
    { id: 'chojunho', name: '조준호', desc: '홍보담당', fbUrl: "https://www.naver.com" },
    { id: 'kk', name: '김진욱', desc: '놀기담당', fbUrl: "https://www.google.com" },
    { id: 'chojunho', name: '조준호', desc: '홍보담당', fbUrl: "https://www.naver.com" },
    { id: 'kk', name: '김진욱', desc: '놀기담당', fbUrl: "https://www.google.com" },
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
