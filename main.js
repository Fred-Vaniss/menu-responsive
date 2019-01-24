// var opened = false
document.getElementById("burger").addEventListener('click', function(){
    var menu = document.getElementsByTagName('nav')[0]
    var opened = menu.style.display

    console.log(opened)

    if (opened != "block") {
        menu.style.display = "block"
        opened = true
    } else {
        menu.style.display = "none"
        opened = false
    }
})