//From astrology Api github Repo
// HTML
//object
// div 
// 3 columns
// 1st column 
// Mercury Retrograde API
// API dump
// (Date Input) (Submit button)
//2nd column
// What's your sign
// (buttons) (submit)
// Spotify playlist API dump
// 3rd column
//Mother Planet
// image
// textbox explaiing what that mean's and each signs' planets
// NASA image of the day API
//background
// JAVASCRIPT
//variables
//signs array 
// var signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
//Client ID fa4347351fa54d869af431cb5a0e79d5
//Client Secret 31727c46061146fbbab0c6c4933bfa74
//figure out how to update the calendar, add an input for users to pick a date. Highlight that date. put my no next to my title to add space, or lengthen the tiles? 
$(document).ready(function () {
    //global variables
    var currentDay = moment().format("YYYYMMDD");
    console.log(currentDay);
    var retrograde;
    var answerEl = $("#answer");
    $("#month").append(moment().format("MMMM"))
    $("#year").append(moment().format("YYYY"));
    //calling NASA API

    $.ajax({
        url: "https://api.nasa.gov/planetary/apod?api_key=rYHbWVB1P6xDiWadsZ91DWA5QzfvGnUL881Rgcdn",
        method: "GET"
    })

        .then(function (response) {
            //logging what the output is
            console.log(response.url);
            //creating the image Url
            var imageUrl = response.url;
            //creating img tag
            var astroImg = $("<img>");
            //adding the img to the img tag
            astroImg.attr("src", imageUrl);
            astroImg.attr("width", "100%")
            // astroImg.attr("height", "700px")
            astroImg.attr("z-index", "-1");
            astroImg.attr("alt", "Astro Picture of the Day");
            //giving img to background
            $("#imageBackground").append(astroImg);
        });

    //calling Mercury Retrograde API        
    $.ajax({
        url: "https://mercuryretrogradeapi.com?date=" + currentDay,
        method: "GET"
    })
        .then(function (response) {
            //logging response
            console.log(response);
            retrograde = response.is_retrograde;


            //comparing response to boolean values and printing out appropriate responses
            if (retrograde === true) {
                $("#retrograde").append("Yes");
                $("#meaning").append("What that means <a href='https://www.mnn.com/lifestyle/arts-culture/stories/what-does-mercury-retrograde-mean'>here!</a>")
            }
            else {
                $("#retrograde").append("No");
                $("#meaning").append("What that means <a href='https://www.refinery29.com/en-us/mercury-retrograde-end-direct-meaning-november-2019'>here!</a>")
            };
        });


    //creating onClick event for Date search in MR Tile  
    $("#date-form").on("submit", function (event) {


        event.preventDefault();
        answerEl.empty();
        console.log("Hello");

        //grabbing user text date and putting it in variable
        var userDate = $("#date-text").val();
        //logging variable   
        console.log(userDate);
        $.ajax({
            url: "https://mercuryretrogradeapi.com?date=" + userDate,
            method: "GET"
        })
            .then(function (response) {
                //logging response
                console.log(response);
                retrograde = response.is_retrograde;

                if (retrograde === true) {
                    console.log("TRUE");
                    answerEl.append("Mercury will be in retrograde then!");

                }
                else {
                    console.log("FALSE");
                    answerEl.append("Mercury will not be in retrograde then!");

                }
            });
    })




});






