$(document).ready(function() {

    var currentData = null;
    var th = "";

    $(function (){

        $.ajax({
            url: 'http://www.devcodecampmusiclibrary.com/api/music',
            dataType: "json",
            type: 'GET',
            success: function(data){
                currentData = data;
                buildTable(currentData);
            }
        });
    });

    function buildTable(data){
        var $jsonData = $('#jsonData');
        var songTemplate = "" +
        "<tr>" +
        "<td>{{title}}</td>" +
        "<td>{{album}}</td>" +
        "<td>{{artist}}</td>" +
        "<td>{{genre}}</td>" +
        "<td>{{releaseDate}}</td>" + 
        "</tr>";

        $.each(data, function(i, jsonData) {
            $jsonData.append(Mustache.render(songTemplate, jsonData));
        });
    };

    function filterResults(currentData, th, str){
        var newResults = $(currentData).filter(function(i) {
            return currentData[i][th] === str;
        });
        $("#jsonData > tr").remove();
        buildTable(newResults);
    };

    function inputSearch(th){
        $("#" + th).empty();
        $("#" + th + "Input").fadeIn();
        $("#btn").fadeIn();
        $("#reset").fadeIn();
        $("#btn").click(function(){
            var str = $("#" + th + "Input").val();
            filterResults(currentData, th, str);
        });
    };

    $("#reset").click(function(){
        window.location.reload();
    });

    $("#title").click(function(event) {
        th = "title";
        inputSearch(th);
    });

    $("#album").click(function(event) {
        th = "album";
        inputSearch(th);
    });

    $("#artist").click(function(event) {
        th = "artist";
        inputSearch(th);
    });

    $("#genre").click(function(event) {
        th = "genre";
        inputSearch(th);
    });

    $("#date").click(function(event) {
        th = "releaseDate";
        inputSearch(th);
    });

});