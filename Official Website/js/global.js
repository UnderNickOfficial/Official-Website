//
var marker = document.querySelector('#marker');
var items = document.querySelectorAll('.navigation li a')
var path = window.location.pathname;
var page = path.split("/").pop();
var cur = getCur();
if (cur != null)
{
    setLine(cur)
}
function getCur()
{
    switch(page)
    {
        case 'main.html':
            return items[0];
        case 'about.html':
                return items[1];
        case 'bam.html':
                return items[2];
        default:
            return null;
    }
}
function setLine(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}
items.forEach(link => {
    link.addEventListener('mouseover', (e)=>{
        setLine(e.target);
    })
    link.addEventListener('mouseout', (e)=>{
        setLine(cur);
    })
})
//toggles class active in components
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}