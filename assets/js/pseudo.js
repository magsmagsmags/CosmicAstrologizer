

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
// (buttons) (submit id="add-sign")
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
var signInput = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

//playlist id object
var signSpotifyId {
    virgo: "37i9dQZF1DX6PdsVYbP4rI",
}

var sign = $(this).attr("data-name");
var queryURL = "https://api.spotify.com/v1/playlists/" + signSpotifyId;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    //create div to hold playlist
    var playlistDiv = $("<div class = 'sign'>");

    //store playlist data
    var playlist = id.{ signSpotifyValue }

    //create element to render playlist
    var pCol2 = $("<p>").text(//how to render playlist)
        //  GET https://api.spotify.com/v1/playlists/37i9dQZF1DX6PdsVYbP4rI
        //   API Key: Client ID fa4347351fa54d869af431cb5a0e79d5
        //   Auth token  BQDx3fuXoL68PA7P1ZFGPUKq_ObQZMPk1jL7y5DSRmAPTRLucf4JE3M-yguO56f8TvIkg4igDJLFXlybwrZ6sJzZtPa-BXp44jp32SSeMmINkoFUxgCW1laAPMd3H-nv8DNPolFIVxO6

        //display playlist
        playlistDiv.append(pCol2);

    //for loop function when sign input received
    for (var i = 0; i < signInput.length; i++) {

        $("#add-sign").on("click", function (event) {
            event.preventDefault();
            // This line grabs the sign input
            var movie = $("#signInput").val().trim();

            $(document).on("click", "#add-sign", displayPlaylist);



        });

    }


})
















        //ajax call for spotify using user input?
    // http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6
    // The base address of Web API is https://api.spotify.com
    // >> https://developer.spotify.com/documentation/web-api/reference/object-model/
        // playlist object (full):
            // key: external_urls    // Value desc.: Known external URLs for this playlist.
            // key: id  // Value descr.: 	The Spotify ID for the playlist.
                // ex (Virgo)       key: id             value: 37i9dQZF1DX6PdsVYbP4rI
                // ex (Virgo)       key: external_urls  value: https://open.spotify.com/playlist/37i9dQZF1DX6PdsVYbP4rI
                // ex (Virgo)       key: uri            value: spotify:playlist:37i9dQZF1DX6PdsVYbP4rI
    //  API Key: Client ID fa4347351fa54d869af431cb5a0e79d5
    //  API Key: Client Secret 31727c46061146fbbab0c6c4933bfa74 
    //  GET https://api.spotify.com/v1/playlists/37i9dQZF1DX6PdsVYbP4rI
   // Auth token  BQDx3fuXoL68PA7P1ZFGPUKq_ObQZMPk1jL7y5DSRmAPTRLucf4JE3M-yguO56f8TvIkg4igDJLFXlybwrZ6sJzZtPa-BXp44jp32SSeMmINkoFUxgCW1laAPMd3H-nv8DNPolFIVxO6

//display playlist


//Have a button to show what planets are in retrograde? Or something with the Nasa API?
    // https://www.programmableweb.com/api/mercury-retrograde

