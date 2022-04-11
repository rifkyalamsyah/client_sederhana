function sendDataPost(action){
    var arr_link = action.split("#");
    var link = 'http://localhost/backend_sederhana/index.php/Berita/' + arr_link[1];

    var dataForm = {};
    var allInput = $(".form-user-input");

    $.each(allInput, function (i, val){
        dataForm[val['name']] = val['value'];
    });

    $.ajax(link, {
        type: 'POST',
        data: dataForm,
        success: function (data, status, xhr) {
            var data_str = JSON.parse(data);
            alert(data_str['pesan']);
            convertURL('#home');
        },
        error: function (jqXhr, textStatus, errorMessage){
            alert('Error : ' + errorMessage);
        }
    });
}