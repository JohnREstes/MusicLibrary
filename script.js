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

    $("#reset").click(function(){
        window.location.reload();
    });

    $("#title").click(function(event) {
        th = "title";
        $("#title").empty();
        $("#titleInput").fadeIn();
        $("#btn").fadeIn();
        $("#reset").fadeIn();
        $("#btn").click(function(){
            var str = $("#titleInput").val();
            filterResults(currentData, th, str);
        });
    });

    $("#album").click(function(event) {
        th = "album";
        $("#album").empty();
        $("#albumInput").fadeIn();
        $("#btn").fadeIn();
        $("#reset").fadeIn();
        $("#btn").click(function(){
            var str = $("#albumInput").val();
            filterResults(currentData, th, str);
        });
    });

    $("#artist").click(function(event) {
        th = "artist";
        $("#artist").empty();
        $("#artistInput").fadeIn();
        $("#btn").fadeIn();
        $("#reset").fadeIn();
        $("#btn").click(function(){
            var str = $("#artistInput").val();
            filterResults(currentData, th, str);
        });
    });

    $("#genre").click(function(event) {
        th = "genre";
        $("#genre").empty();
        $("#genreInput").fadeIn();
        $("#btn").fadeIn();
        $("#reset").fadeIn();
        $("#btn").click(function(){
            var str = $("#genreInput").val();
            filterResults(currentData, th, str);
        });
    });

    $("#date").click(function(event) {
        th = "releaseDate";
        $("#date").empty();
        $("#dateInput").fadeIn();
        $("#btn").fadeIn();
        $("#reset").fadeIn();
        $("#btn").click(function(){
            var str = $("#dateInput").val();
            filterResults(currentData, th, str);
        });
    });

});