var KEY = "pooboodachew";

var KEYS = ['zoom','font-zoom','scale','line-height']

// just a super simple way to load and save settings
function saveTypographySettings(settings){
    // write
    localStorage.setItem(KEY,{

    })
}

function loadTypographySettings(){
    // read
    var settings = localStorage.getItem(KEY)
}

// check to see if there are any options with these settings...