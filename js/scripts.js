$(document).ready(function() {
  $("#add-city").click(function() {
    $("#new-cities").append("<div class='new-city'>" +
      "<div class='form-group'>" +
      "<label for='new-city'>City</label>" +
      "<input type='text' class='form-control new-city-name'>" +
      "</div>" +
      "<div class='form-group'>" +
      "<label for='duration'>Duration</label>" +
      "<input type='text' class='form-control duration'>" +
      "</div>" +
      "</div>");
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCountryName = $("input#new-country-name").val();

    var newPlace = { countryName: inputtedCountryName, cities: []};

    $(".new-city").each(function() {
      var inputtedCityName = $(this).find("input.new-city-name").val();
      var inputtedDuration = $(this).find("input.duration").val();

      var newCity = { cityName: inputtedCityName, duration: inputtedDuration};
      newPlace.cities.push(newCity);
    });

    $("ul#countries").append("<li><span class='country'>" + newPlace.countryName + "</span></li>");

    $(".country").last().click(function() {
      $("#show-country").show();

      $("#show-country h2").text(newPlace.countryName);
      $(".country-name").text(newPlace.countryName);

      $("ul#cities").text("");
      newPlace.cities.forEach(function(city) {
        $("ul#cities").append("<li> City Name: " + city.cityName + "</li>" + "<li> Duration: " + city.duration + "</li>");
      });
    });

    $("input#new-country-name").val("");
    $("input.new-city-name").val("");
    $("input.duration").val("");
  });
});
