function changeTheme() {
    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'dark.css') {
        theme.setAttribute('href', 'light.css');
    } else {
        theme.setAttribute('href', 'dark.css');
    }  
    
}

function changeHeader() {
    var header = document.getElementById('mon')

    if (header.src.match("https://cdn.discordapp.com/attachments/777542191031255040/928175565888962670/sun.png")) {
        header.src = "https://cdn.discordapp.com/attachments/777542191031255040/923797199589101618/moon.png";
    } else {
        header.src = "https://cdn.discordapp.com/attachments/777542191031255040/928175565888962670/sun.png";
    }
}

function changeGhost() {
    var ghost = document.getElementById('ghost')

    if (ghost.src.match ('https://cdn.discordapp.com/attachments/777542191031255040/923797199857532978/Sprite-0003.gif')) {
        ghost.src = "https://cdn.discordapp.com/attachments/777542191031255040/928251869707534396/gost.gif";
    } else {
        ghost.src = "https://cdn.discordapp.com/attachments/777542191031255040/923797199857532978/Sprite-0003.gif";
    }
}
