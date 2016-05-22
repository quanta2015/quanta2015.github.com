$(init)

function init() {

	loadJson("data/news.json","#newsTmpl");

	$(".nav-menu-item").click(doSelectMenu);
	$(".dropdown").change(doSelectMenu);

}

function doSelectMenu() {
	tag = parseInt($(this).attr("tag") || $(this.selectedOptions).attr("tag"));
	switch(tag) {
		case 0:
			loadJson("data/news.json","#newsTmpl");
			break;
		case 1:
			loadJson("data/art.json","#artTmpl");
			break;
		case 2:
			loadJson("data/trip.json","#tripTmpl");
			break;
		case 3:
			loadJson();
			break;
	}
}

function loadJson(file,tmpl) {
	$("#main").empty();
	$.getJSON(file,function(data){
		var htmlData = $.templates(tmpl).render(data);
		$("#main").append(htmlData);


		if (typeof(data.artList) != "undefined") {
			$(".col-art").click(doSelectImgType);
		}

		$(".img-item").fancybox({
          helpers: { overlay: { css: {'background': 'rgba(0, 0, 0, 0.8)'}}}
       });
	})
}

function doSelectImgType() {

	index = $(this).index();
	switch(index) {
		case 0:
			loadJson("data/sight.json","#imgTmpl");
			break;
		case 1:
			loadJson("data/wood.json","#imgTmpl");
			break;
		case 2:
			loadJson("data/skin.json","#imgTmpl");
			break;
		case 3:
			loadJson("data/person.json","#imgTmpl");
			break;
		case 4:
			loadJson("data/life.json","#imgTmpl");
			break;
		case 5:
			loadJson("data/draw.json","#imgTmpl");
			break;
	}
}