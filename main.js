var opened = false
var menu = document.getElementsByTagName('nav')[0]
document.getElementById("burger").addEventListener('click', function(){
    opened = menu.style.display

    console.log(opened)

    if (opened != "block") {
        menu.style.display = "block"
        opened = true
    } else {
        menu.style.display = "none"
        opened = false
    }
});

var menuButton = document.getElementsByClassName("menuButton")

for(i = 0; i < menuButton.length; i++) {
    menuButton[i].addEventListener('click', function(){
        menu.style.display = "none"
        opened = false
    })
}