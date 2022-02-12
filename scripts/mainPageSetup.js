function menuClickListener() {
    var x = document.getElementById("list-menu");
    if (x.value === "yes") {
        x.style.display = "none";
        x.value = "no"
    } else {
        x.style.display = "flex";
        x.value = "yes"
    }
}


function adjustMenu(windowSize) {
    var menu = document.getElementById("list-menu");
    if (windowSize.matches) {
        menu.style.display = "none";
    } else {
        menu.style.display = null;
    }
}

var windowSize = window.matchMedia("(max-width: 60rem)")
adjustMenu(windowSize)
windowSize.addListener(adjustMenu)




function setUpColors() {
    var root = document.querySelector(':root');
    let firstColors = ['#FF6CAB', '#B65EBA', '#64E8DE', '#7BF2E9', '#FF9482', '#FFCF1B', '#FFA62E', '#00FFED', '#6EE2F5', '#3499FF', '#FF9897', '#FFCDA5', '#FF5B94', '#F869D5', '#F00B51']
    let secondColors = ['#7366FF', '#2E8DE1', '#8A64EB', '#B65EBA', '#7D77FF', '#FF881B', '#EA4D2C', '#00B8BA', '#6454F0', '#3A3985', '#F650A0', '#EE4D5F', '#8441A4', '#5650DE', '#7366FF']
    let index = Math.floor(Math.random() * firstColors.length);
    root.style.setProperty('--gradient-begin-clr', firstColors[index]);
    root.style.setProperty('--gradient-end-clr', secondColors[index]);
    console.log(index + " " + firstColors[index] + " " + secondColors[index]);
    var mode = window.localStorage.getItem('mode')
    console.log(mode);
    if(mode == 'dark'){
        changeLightDark();
    }
}

function changeLightDark() {
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    var button = document.getElementById('switch-mode')
    if (rootStyles.getPropertyValue('--background-color') == 'black') {
        root.style.setProperty('--background-color', 'white');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--invert', '1');
        root.style.setProperty('--invert-icon', '0');
        root.style.setProperty('--neutral-clr', 'rgb(238, 238, 238, 0.95)');
        root.style.setProperty('--shadow-clr', 'rgba(0, 0, 0, 0.2)');
        root.style.setProperty('--card-bg-clr', 'rgba(0, 0, 0, 0.05)');
        root.style.setProperty('--card-hover-clr', 'rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--text-light-clr', 'rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--contrast-clr', '#2e2e2e');
        button.textContent = "Switch to dark mode"
        window.localStorage.setItem('mode', 'light');
    } else {
        root.style.setProperty('--background-color', 'black');
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--invert', '0');
        root.style.setProperty('--invert-icon', '1');
        root.style.setProperty('--neutral-clr', 'rgba(56, 56, 56, 0.9)');
        root.style.setProperty('--shadow-clr', 'rgba(255, 255, 255, 0.5)');
        root.style.setProperty('--card-bg-clr', 'rgba(255, 255, 255, 0.05)');
        root.style.setProperty('--card-hover-clr', 'rgba(255, 255, 255, 0.2)');
        root.style.setProperty('--text-light-clr', 'rgba(255, 255, 255, 0.7)');
        root.style.setProperty('--contrast-clr', 'white');
        button.textContent = "Switch to light mode"
        window,localStorage.setItem('mode', 'dark');
    }

}



