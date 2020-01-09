
//figure out how to update the calendar, add an input for users to pick a date. Highlight that date. put my no next to my title to add space, or lengthen the tiles? 
$(document).ready(function () {
    //global variables
    var currentDay = moment().format("YYYYMMDD");
    var monthDisplay = moment().format('MMMM')
    var yearDisplay = moment().format("YYYY")
    console.log(currentDay);
    var retrograde;
    var answerEl = $("#answer");
    monthEl = $("#month");
    yearEl = $("#year");
    

    $(monthEl).text(monthDisplay)
    $(yearEl).append(yearDisplay);

    console.log(monthEl.val());   
     
   
    
   
   
   
    //calendar click functions


    $(".calendarNum").on("click", function() {
        userNum = $(this).val();
        console.log(userNum);
    


    });
    //event listener for the div to get the moment month and year?


    $(".prev").on("click", function(event) {
        event.preventDefault();
        console.log("Hello");
        monthDisplay = moment().format(1, 'MMMM');
        console.log(monthDisplay);
        $(monthEl).append(monthDisplay);

        
    });
    $(".next").on("click", function(event) {
        event.preventDefault();
        console.log("World");
        
    });  
   
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
    $("#searchDate").on("click", function (event) {


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
    });
});
