//www.devcodecampmusiclibrary.com/api/music



$(function (){
    var $jsonData = $('#jsonData');
    var songTemplate = "" +
    "<tr>" +
    "<td>{{title}}</td>" +
    "<td>{{album}}</td>" +
    "<td>{{artist}}</td>" +
    "<td>{{genre}}</td>" +
    "<td>{{releaseDate}}</td>" + 
    "</tr>";

    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: "json",
        type: 'GET',
        success: function(data){
            $.each(data, function(i, jsonData) {
                $jsonData.append(Mustache.render(songTemplate, jsonData));
            });
        }
    });
});
