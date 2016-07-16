$(document).ready(function() {
    $("#theform").on("submit", function(e){
        var number = $(".form-control").val();
        e.preventDefault();
        $.getJSON("cats.json", function(json) {
            var html = "";
            json = json.filter(function(val) {
                return val.id == number;
            });
            json.forEach(function(val) {
                //var keys = Object.keys(val);
                html += "<div class = 'cat'>";
                // keys.forEach(function(key) {
                html += "<img src = '" + val.imageLink + "'>";
                //});
                html += "</div><br>";
            });
            $(".message").html(html);
        });
    });
});