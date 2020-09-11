$(document).ready(function() {

    $(function (){

        $.ajax({
            url: 'http://www.devcodecampmusiclibrary.com/api/music',
            dataType: "json",
            type: 'GET',
            success: function(data){
                buildString(data);
            }
        });
    });

    function buildString(data){
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


    var th = ""

    $("#title").click(function(event) {
    th = "#title";
    alert(th);
    });
    $("#album").click(function(event) {
    th = "#album";
    alert(th);
    });
    $("#artist").click(function(event) {
    th = "#artist";
    alert(th);
    });
    $("#genre").click(function(event) {
    th = "#genre";
    alert(th);
    });
    $("#date").click(function(event) {
    th = "#releaseDate";
    alert(th);
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