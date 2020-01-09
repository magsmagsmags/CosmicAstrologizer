
$(document).ready(function () {
    //global varibales

    var spotifyFrameEl = $("#spotifyFrame");
    var spotifyDivEl = $("#spotifyDiv");
    var spotifyUrl = "https://open.spotify.com/embed/playlist/";


    var userSign = {

        aries : "37i9dQZF1DX2DC3Q7JOmYe",
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
    $("#aries").on("click", function(event) {
        console.log(spotifyUrl + userSign.aries);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN ARIES IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
        //adding attribute of URL to iframe tag in index
        spotifyFrameEl.attr("src", spotifyUrl + userSign.aries);
        //appending the element to the div holding iframe
        spotifyDivEl.append(spotifyFrameEl);

    }); 

    $("#taurus").on("click", function(event) {
        console.log(spotifyUrl + userSign.taurus);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN TAURUS IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.taurus);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#gemini").on("click", function(event) {
        console.log(spotifyUrl + userSign.gemini);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN GEMINI IS CLICKED");
        console.log("EXAMPLE OF SPAN");    

        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.gemini);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#cancer").on("click", function(event) {
        console.log(spotifyUrl + userSign.cancer);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN CANCER IS CLICKED");  
        console.log("EXAMPLE OF PTAG");    

        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.cancer);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#leo").on("click", function(event) {
        console.log(spotifyUrl + userSign.leo);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN LEO IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.leo);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#virgo").on("click", function(event) {
        console.log(spotifyUrl + userSign.virgo);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN VIRGO IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.virgo);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#libra").on("click", function(event) {
        console.log(spotifyUrl + userSign.libra);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN LIBRA IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.libra);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#scorpio").on("click", function(event) {
        console.log(spotifyUrl + userSign.scorpio);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN SCORPIO IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.scorpio);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#sagittarius").on("click", function(event) {
        console.log(spotifyUrl + userSign.sagittarius);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN SAGITTARIUS IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.sagittarius);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#capricorn").on("click", function(event) {
        console.log(spotifyUrl + userSign.capricorn);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN CAPRICORN IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.capricorn);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#aquarius").on("click", function(event) {
        console.log(spotifyUrl + userSign.aquarius);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN AQUARIUS IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.aquarius);
        spotifyDivEl.append(spotifyFrameEl);

    });
    $("#pisces").on("click", function(event) {
        console.log(spotifyUrl + userSign.pisces);
        event.preventDefault();
        console.log("DEBUG: THIS WILL SHOW WHEN PISCES IS CLICKED");
        console.log("EXAMPLE OF BUTTON");    
        
    
        spotifyFrameEl.attr("src", spotifyUrl + userSign.pisces);
        spotifyDivEl.append(spotifyFrameEl);

    });
});


   

