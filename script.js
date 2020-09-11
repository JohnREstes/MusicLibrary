$(document).ready(function() {

    var currentData = null;

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

    function filterResults(currentData, th){
        //var newResults = null;
        var newResults = $(currentData).filter(function(i) {
            return currentData[i][th] === "The Beatles";
        });
        //newResults = currentData.filter(el => el.[artist] === "The Beatles");
        $("#jsonData > tr").remove();
        buildTable(newResults);
    };

    var th = ""

    $("#title").click(function(event) {
    th = "title";
    filterResults(currentData, th);
    });
    $("#album").click(function(event) {
    th = "album";
    filterResults(currentData, th);
    });
    $("#artist").click(function(event) {
    th = "artist";
    filterResults(currentData, th);
    });
    $("#genre").click(function(event) {
    th = "genre";
    filterResults(currentData, th);
    });
    $("#date").click(function(event) {
    th = "releaseDate";
    filterResults(currentData, th);
    });

    
    // $('.tbl').on('click','#title',function(event) {
    //         console.log(event.target);
    //     var t = $(this).text();
    //     $(this).text('').append($('<input />',{'value' : t}));
    //     $('input').focus();
        
    // });

    // $('.tbl').on('blur','input',function() {
    // $(this).parent().text($(this).val());
    // });

    // $('.tbl').on('click','#date',function() {
            
    //     var t = $(this).text();
    //     $(this).text('').append($('<input />',{'value' : t}));
    //     $('input').focus();
        
    // });

    // $('.tbl').on('blur','input',function() {
    // $(this).parent().text($(this).val());
    // });

    // $(function (){
    //     var $jsonData = $('#jsonData');
    //     var songTemplate = "" +
    //     "<tr>" +
    //     "<td>{{title}}</td>" +
    //     "<td>{{album}}</td>" +
    //     "<td>{{artist}}</td>" +
    //     "<td>{{genre}}</td>" +
    //     "<td>{{releaseDate}}</td>" + 
    //     "</tr>";

    //     $.ajax({
    //         url: 'http://www.devcodecampmusiclibrary.com/api/music',
    //         dataType: "json",
    //         type: 'GET',
    //         success: function(data){
    //             $.each(data, function(i, jsonData) {
    //                 $jsonData.append(Mustache.render(songTemplate, jsonData));
    //             });
    //         }
    //     });
    // });
});