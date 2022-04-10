function reloadEvent() {
	$('.linkBerita').on('click', function () {
		convertURL(this.hash);		
	});
}

function loadKonten(link) {
	$.ajax(link, {
		type: 'GET',
		success: function (data, status, xhr) {
			var objData = JSON.parse(data);

			$('#kontenHTML').html(objData.konten);
			$('title').html(objData.titel);
			reloadEvent();
		},
		error: function (jqXHR, textStatus, errorMsg) {
			$('#kontenHTML').html('Error : ' + data.errorMsg);
			$('title').html('Error');
		}
	});
}

function convertURL(hash) {
	var hashClean = hash.replace('#','');
	var url = '';

	if (hashClean == 'home') {
		url = 'http://localhost/backend_sederhana/index.php/berita';
	} else {
		url = 'http://localhost/backend_sederhana/index.php/berita/detail_berita?id='+hashClean;
	}

	loadKonten(url);
}

convertURL('#home');

$('.menu').on('click', function () {
	convertURL(this.hash);
});