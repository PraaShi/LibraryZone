
function showfic() {
   document.querySelector('#fic').style.display = "flex";
   document.querySelector('#bio').style.display = "none";
   document.querySelector('#kid').style.display = "none";
   document.querySelector('#pol').style.display = "none";
   document.querySelector('#fich').style.display = "block";
   document.querySelector('#bioh').style.display = "none";
   document.querySelector('#kidh').style.display = "none";
   document.querySelector('#polh').style.display = "none";
 }
 function showbio() {
   document.querySelector('#bio').style.display = "flex";
   fic.style.display = 'none'
   kid.style.display = 'none'
   pol.style.display = 'none'
   fich.style.display = 'none'
   kidh.style.display = 'none'
   polh.style.display = 'none'
   bioh.style.display = 'block'

 }
 function showkid() {
   document.querySelector('#kid').style.display = "flex";
   document.querySelector('#bio').style.display = "none";
   document.querySelector('#fic').style.display = "none";
   document.querySelector('#pol').style.display = "none";
   fich.style.display = 'none'
   kidh.style.display = 'block'
   polh.style.display = 'none'
   bioh.style.display = 'none'
 }
function showpol() {
   document.querySelector('#pol').style.display = "flex";
   document.querySelector('#bio').style.display = "none";
   document.querySelector('#fic').style.display = "none";
   document.querySelector('#kid').style.display = "none";
   fich.style.display = 'none'
   kidh.style.display = 'none'
   polh.style.display = 'block'
   bioh.style.display = 'none'
}
function home() {
   // document.querySelector('#all').style.display = "flex";
   fic.style.display = 'flex'
   kid.style.display = 'flex'
   pol.style.display = 'flex'
   bio.style.display = 'flex'
   fich.style.display = 'block'
   kidh.style.display = 'block'
   polh.style.display = 'block'
   bioh.style.display = 'block'
 }

function icon(){
document.querySelector('.icon')
document.querySelector('.search')
search.classList.toggle('active')
}

// const search = document.getElementById('search').querySelector('input');
// search.addEventListener('keyup'.function(e){
//   const term = e.terget.value.toLowerCase();
//   const books = list.getElementByTagName('');
//   Array.from(books).forEach(function(book)){
//     const title = book.firstElementChild.textContent;
//     if(title.toLowerCase().indexOf(item)!=-1){
//       book.style.display = 'block';
//     }
//     else{
//       book.display.style='none';
//     }
//   }
// })