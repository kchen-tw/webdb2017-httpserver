var getData = function() {

    // 抓資料庫
    $.get("http://127.0.0.1:1337/find/student", function(data, status) {
        //alert("Data: " + data + "\nStatus: " + status);
        console.log(data);

        var str = '學號\t姓名\n';
        for (var i in data) {
            str += data[i].sid + "\t" + data[i].name + "\n";
        }

        $('textarea').text(str);

        for (var i in data) {
            var $td1 = $('<td>').text(data[i].sid);
            var $td2 = $('<td>').text(data[i].name);
            var $tr = $('<tr>').append($td1).append($td2);
            $('tbody').append($tr);
        }

    });


}

$('button').on('click', getData);