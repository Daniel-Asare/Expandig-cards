const panels = document.querySelectorAll('.panel')


panels.forEach((panel)=>{
 panel.addEventListener('click',()=>{
  //  removes active classes from panel
   panels.forEach(panel=> panel.classList.remove('active'))

  //  add active class to click panel
   panel.classList.add('active')
 })
})

// function removeActiveClasses(){
//   panels.forEach((panel)=>{
//     panel.classList.remove()
//   })
// }