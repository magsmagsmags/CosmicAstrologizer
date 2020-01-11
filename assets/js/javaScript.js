$(document).ready(function () {
    //global varibales

    var spotifyFrameEl = $("#spotifyFrame");
    var spotifyDivEl = $("#spotifyDiv");
    var spotifyUrl = "https://open.spotify.com/embed/playlist/";

    var currentDay = moment().format("YYYYMMDD");
    var currentYear = moment().format("YYYY");

    console.log(currentDay);
    console.log(currentYear);
    var retrograde;
    var answerEl = $("#answer");
    answerEl.hide();

    var zodiacNameEl = $(".zodiacName");
    var zodiacTraitsEl = $(".zodiacTraits");
    var zodiacSymbolEl = $(".zodiacSymbol");
    var zodiacVibeEl = $(".zodiacVibe");
    var zodiacMentalEl = $(".zodiacMental");
    var zodiacDatesEl = $(".zodiacDates");
    var zodiacGraphicEl = $(".zodiacGraphic");
    var zodiacSignEl = $(".zodiacSign");
    var rulingPlanetEl = $(".rulingPlanet");


    //holding spotify URL path
    var userSign = {

        aries: "37i9dQZF1DX2DC3Q7JOmYe",
        taurus: "37i9dQZF1DXbCgDGG5xQtb",
        gemini: "37i9dQZF1DWWVULl5wUsL9",
        cancer: "37i9dQZF1DXaeX3MJpiD4U",
        leo: "37i9dQZF1DX7cvHpkIJFt2",
        virgo: "37i9dQZF1DX6PdsVYbP4rI",
        libra: "37i9dQZF1DXco4NYQOMLiT",
        scorpio: "37i9dQZF1DX0YZgrwmizcR",
        sagittarius: "37i9dQZF1DX93MXPufCcuk",
        capricorn: "37i9dQZF1DX2rcqmLx0nK4",
        aquarius: "37i9dQZF1DX7F9VDRJOFhw",
        pisces: "37i9dQZF1DWX0EDWtabVRv"

    };


    //button click functions


    $(".aries").on("click", function (event) {
        console.log(spotifyUrl + userSign.aries);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN ARIES IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        //Adding name of Astrological Sign + Spotify Playlist to Title
        $("#spotifyListName").text("Aries Spotify PlayList");

        //adding attribute of URL to iframe tag in index
        spotifyFrameEl.attr("src", spotifyUrl + userSign.aries);
        //appending the element to the div holding iframe
        spotifyDivEl.append(spotifyFrameEl);

        //calling function and passing the sign name and the appropriate index number that shows in the API documentation as arguments.
        displayZodiacInfo("Aries", 0);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/aries-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/aries.png")

    });


    $(".taurus").on("click", function (event) {
        console.log(spotifyUrl + userSign.taurus);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN TAURUS IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Taurus Spotify PlayList");


        spotifyFrameEl.attr("src", spotifyUrl + userSign.taurus);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Taurus", 1);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/taurus-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/taurus.png")

    });

    $(".gemini").on("click", function (event) {
        console.log(spotifyUrl + userSign.gemini);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN GEMINI IS CLICKED");
        console.log("EXAMPLE OF SPAN");
        $("#spotifyListName").text("Gemini Spotify PlayList");




        spotifyFrameEl.attr("src", spotifyUrl + userSign.gemini);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Gemini", 2);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/gemini-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/gemini.png")


    });
    $(".cancer").on("click", function (event) {
        console.log(spotifyUrl + userSign.cancer);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN CANCER IS CLICKED");
        console.log("EXAMPLE OF PTAG");
        $("#spotifyListName").text("Cancer Spotify PlayList");


        spotifyFrameEl.attr("src", spotifyUrl + userSign.cancer);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Cancer", 3);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/cancer-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/cancer.png")


    });
    $(".leo").on("click", function (event) {
        console.log(spotifyUrl + userSign.leo);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN LEO IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Leo Spotify PlayList");


        spotifyFrameEl.attr("src", spotifyUrl + userSign.leo);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Leo", 4);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/leo-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/leo.png")


    });
    $(".virgo").on("click", function (event) {
        console.log(spotifyUrl + userSign.virgo);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN VIRGO IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Virgo Spotify PlayList");


        spotifyFrameEl.attr("src", spotifyUrl + userSign.virgo);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Virgo", 5);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/virgo-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/virgo.png")


    });
    $(".libra").on("click", function (event) {
        console.log(spotifyUrl + userSign.libra);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN LIBRA IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Libra Spotify PlayList");



        spotifyFrameEl.attr("src", spotifyUrl + userSign.libra);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Libra", 6);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/libra-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/libra.png")



    });
    $(".scorpio").on("click", function (event) {
        console.log(spotifyUrl + userSign.scorpio);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN SCORPIO IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Scorpio Spotify PlayList");



        spotifyFrameEl.attr("src", spotifyUrl + userSign.scorpio);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Scorpio", 7);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/scorpio-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/scorpio.png")



    });
    $(".sagittarius").on("click", function (event) {
        console.log(spotifyUrl + userSign.sagittarius);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN SAGITTARIUS IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Sagittarius Spotify PlayList");


        spotifyFrameEl.attr("src", spotifyUrl + userSign.sagittarius);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Sagittarius", 8);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/sagittarius-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/sagittarius.png")



    });
    $(".capricorn").on("click", function (event) {
        console.log(spotifyUrl + userSign.capricorn);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN CAPRICORN IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Capricorn Spotify PlayList");



        spotifyFrameEl.attr("src", spotifyUrl + userSign.capricorn);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Capricorn", 9);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/capricorn-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/capricorn.png")



    });
    $(".aquarius").on("click", function (event) {
        console.log(spotifyUrl + userSign.aquarius);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN AQUARIUS IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Aquarius Spotify PlayList");



        spotifyFrameEl.attr("src", spotifyUrl + userSign.aquarius);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Aquarius", 10);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/aquarius-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/aquarius.png")



    });
    $(".pisces").on("click", function (event) {
        console.log(spotifyUrl + userSign.pisces);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN PISCES IS CLICKED");
        console.log("EXAMPLE OF BUTTON");
        $("#spotifyListName").text("Pisces Spotify PlayList");



        spotifyFrameEl.attr("src", spotifyUrl + userSign.pisces);
        spotifyDivEl.append(spotifyFrameEl);

        displayZodiacInfo("Pisces", 11);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/pisces-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/pisces.png")


    });

    //if-statements for putting current sign on Spotify

    if (moment().subtract(1, "year") + moment().format('1222') <= currentDay && currentDay <= (currentYear + moment().format('0119'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.capricorn);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Capricorn Spotify PlayList");
        displayZodiacInfo("Capricorn", 9);
        zodiacGraphicEl.attr("src", "assets/img/zodiac-graphics/capricorn-graphic.jpg")
        zodiacSignEl.attr("src", "assets/img/zodiac-buttons/capricorn.png")


    };


    if (currentYear + moment().format('0119') <= currentDay && currentDay <= (currentYear + moment().format('0218'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.aquarius);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Aquarius Spotify PlayList");
        displayZodiacInfo("Aquarius", 10);


    };

    if (currentYear + moment().format('0219') <= currentDay && currentDay <= (currentYear + moment().format('0320'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.pisces);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Pisces Spotify PlayList");
        displayZodiacInfo("Pisces", 11);


    };

    if (currentYear + moment().format('0321') <= currentDay && currentDay <= (currentYear + moment().format('0419'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.aries);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Aries Spotify PlayList");
        displayZodiacInfo("Aries", 0);


    };

    if (currentYear + moment().format('0420') <= currentDay && currentDay <= (currentYear + moment().format('0520'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.taurus);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Taurus Spotify PlayList");
        displayZodiacInfo("Taurus", 1);


    };

    if (currentYear + moment().format('0521') <= currentDay && currentDay <= (currentYear + moment().format('0620'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.gemini);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Gemini Spotify PlayList");
        displayZodiacInfo("Gemini", 2);

    };

    if (currentYear + moment().format('0621') <= currentDay && currentDay <= (currentYear + moment().format('0722'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.cancer);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Cancer Spotify PlayList");
        displayZodiacInfo("Cancer", 3);


    };

    if (currentYear + moment().format('0723') <= currentDay && currentDay <= (currentYear + moment().format('0822'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.leo);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Leo Spotify PlayList");
        displayZodiacInfo("Leo", 4);


    };

    if (currentYear + moment().format('0823') <= currentDay && currentDay <= (currentYear + moment().format('0922'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.virgo);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Virgo Spotify PlayList");
        displayZodiacInfo("Virgo", 5);


    };

    if (currentYear + moment().format('0923') <= currentDay && currentDay <= (currentYear + moment().format('1022'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.libra);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Libra Spotify PlayList");
        displayZodiacInfo("Libra", 6);


    };

    if (currentYear + moment().format('1023') <= currentDay && currentDay <= (currentYear + moment().format('1121'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.scorpio);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Scorpio Spotify PlayList");
        displayZodiacInfo("Scorpio", 7);


    };

    if (currentYear + moment().format('1122') <= currentDay && currentDay <= (currentYear + moment().format('1221'))) {
        spotifyFrameEl.attr("src", spotifyUrl + userSign.sagittarius);
        spotifyDivEl.append(spotifyFrameEl);
        $("#spotifyListName").text("Sagittarius Spotify PlayList");
        displayZodiacInfo("Sagittarius", 8);


    };


    //AJAX to zodiacal to show traits about your sign;

    //creating function. Passing x and y as arguments
    function displayZodiacInfo(x, y) {
        //calling api function
        $.ajax({
            url: "https://cors-ut-bootcamp.herokuapp.com/https://zodiacal.herokuapp.com/api",
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                //making sure the btn click matches to the api call
                console.log(response[y].name);
                if (x === response[y].name) {

                    console.log("DEBUG: TRUE");
                } else {
                    console.log("DEBUG: FALSE");
                }
                //INPUTTING TEXT INTO MY P TAGS IN INDEX FROM MY API CALL
                zodiacNameEl.text(x);
                zodiacTraitsEl.text("Good Traits: " + response[y].good_traits);
                zodiacSymbolEl.text("Symbol: " + response[y].symbol);
                zodiacVibeEl.text("Vibe: " + response[y].vibe);
                zodiacMentalEl.text("Mental Traits: " + response[y].mental_traits);
                zodiacDatesEl.text("Sign Dates:" + response[y].sun_dates);
                rulingPlanetEl.text("Ruling Planet:" + response[y].ruling_planet);
                zodiacTraitsEl.text(" " + response[y].good_traits);
                zodiacSymbolEl.text(" " + response[y].symbol);
                zodiacVibeEl.text(" " + response[y].vibe);
                zodiacMentalEl.text(" " + response[y].mental_traits);




            });


    };

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

            // log caption output
            console.log(response.title);
            // create caption variable from API (response.explanation)
            var nasaCaption = response.title;
            // creating span tag
            var captionEl = $("<p>");
            // adding caption to span tag
            captionEl.text(nasaCaption);
            captionEl.attr("width", "auto");
            captionEl.attr("height", "auto");
            // append image to html text p
            $("#iotd-caption").append(captionEl);

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
                $("#retrograde").append("Pay Attention! We are currently experiencing the effects of a Mercury Retrograde!");
                // $("#meaning").append("What that means <a href='https://www.mnn.com/lifestyle/arts-culture/stories/what-does-mercury-retrograde-mean'>here!</a>")
            }
            else {
                $("#retrograde").append("Relax! We are not currently experiencing the effects of a Mercury Retrograde.");
                // $("#meaning").append("What that means <a href='https://www.refinery29.com/en-us/mercury-retrograde-end-direct-meaning-november-2019'>here!</a>")
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
                    answerEl.show();

                    answerEl.append("Mercury will be in retrograde then!");


                }
                else if (userDate === "") {
                    alert("Please input a valid date");
                    //alerting the user they didn't put in a date

                }
                else {
                    console.log("FALSE");
                    answerEl.show();

                    answerEl.append("Mercury will not be in retrograde then!");

                };

            });
    });
});




/* MODAL FUNCTIONALITY SCRIPTS */
class BulmaModal {
    constructor(selector) {
        this.elem = document.querySelector(selector)
        this.close_data()
    }

    show() {
        this.elem.classList.toggle('is-active')
        this.on_show()
    }

    close() {
        this.elem.classList.toggle('is-active')
        this.on_close()
    }

    close_data() {
        var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
        var that = this
        modalClose.forEach(function (e) {
            e.addEventListener("click", function () {

                that.elem.classList.toggle('is-active')

                var event = new Event('modal:close')

                that.elem.dispatchEvent(event);
            })
        })
    }

    on_show() {
        var event = new Event('modal:show')

        this.elem.dispatchEvent(event);
    }

    on_close() {
        var event = new Event('modal:close')

        this.elem.dispatchEvent(event);
    }

    addEventListener(event, callback) {
        this.elem.addEventListener(event, callback)
    }
}


/* START MODAL SCRIPTS */
var mrBtn = document.querySelector("#modalBtn")
var mrMdl = new BulmaModal("#mrModal")

mrBtn.addEventListener("click", function () {
    mrMdl.show()
})

mrMdl.addEventListener('modal:show', function () {
    console.log("opened")
})

mrMdl.addEventListener("modal:close", function () {
    console.log("closed")
})
/* END ARIES MODAL SCRIPTS */





