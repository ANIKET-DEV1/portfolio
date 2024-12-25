function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex';
    sidebar.style.animation='opening 0.2s ease-in 1';
    const gayab=document.querySelector('.nav-11')
    gayab.style.display='none';
}
function noShow(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none';
    sidebar.style.animation='closing 0.2s ease-out 1';
    const gayab=document.querySelector('.nav-11')
    gayab.style.display='flex';
}