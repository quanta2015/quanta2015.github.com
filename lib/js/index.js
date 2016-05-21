$(init)

function init() {

	loadJson("data/art.json","#artTmpl");

	$(".nav-menu-item").click(doSelectMenu);
	$(".dropdown").change(doSelectMenu);

}

function doSelectMenu() {
	tag = parseInt($(this).attr("tag") || $(this.selectedOptions).attr("tag"));
	switch(tag) {
		case 0:
			loadJson();
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
	})
}