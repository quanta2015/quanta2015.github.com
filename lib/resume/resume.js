$(initPage); // 抑或 $(document).ready(initPage);



function initPage(){

	$(window).scroll(function(){
      var navAnchor = $('.cv-title').offset().top;
      if ($(this).scrollTop() > navAnchor) {
          $('.nav').addClass('splited');
      } else if ($(this).scrollTop() < navAnchor) {
          $('.nav').removeClass('splited');
      }
   });
   

	$.getJSON("resume.json",function(data){

		headData = data.header;
		var headHtml = $.templates("#headTmpl").render(headData);
		$(".resume").append(headHtml);
	 	
	 	aboutData = data.about;
	 	var aboutHtml = $.templates("#aboutTmpl").render(aboutData);
	 	$(".resume").append(aboutHtml);

	 	educationData = data.education;
	 	var educationHtml = $.templates("#educationTmpl").render(educationData);
	 	$(".resume").append(educationHtml);

	 	employmentData = data.employment;
	 	var employmentHtml = $.templates("#employmentTmpl").render(employmentData);
	 	$(".resume").append(employmentHtml);

	 	skillData = data.skill;
	 	var skillHtml = $.templates("#skillTmpl").render(skillData);
	 	$(".resume").append(skillHtml);

	 	projectData = data.project;
	 	var projectHtml = $.templates("#projectTmpl").render(projectData);
	 	$(".resume").append(projectHtml);

	 	$('ul.nav a').click(function(e){
		   e.preventDefault();
		   slideToElement($(this).attr('href'));
		   $('select.nav').val($(this).attr('href'));
		});

		$('select.nav').change(function(){
         slideToElement($(this).val());
      });

	 	function slideToElement(ele) {
         $('html, body').stop().animate({
             scrollTop: $(ele).offset().top - 30
         }, 1500, 'easeInOutExpo');
     }

	});
}


