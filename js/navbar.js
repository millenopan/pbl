$(document).scroll(function () {
	 $(".navbar").toggleClass('.scrolled', $(this).scrollTop() > $nav.height());
});
