function initMap() {
    var uluru = { lat: 41.304168, lng: 69.235773 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$("#adress").click(function() {
    var a = $("#contacts").offset();
    console.log(a);
    $("body").animate({
        scrollTop: a.top
    }, 800)
});