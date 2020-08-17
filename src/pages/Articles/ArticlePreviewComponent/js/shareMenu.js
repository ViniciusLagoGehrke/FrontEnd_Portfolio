const $btnShare = document.querySelector('.btnShare')
const $btnShareBack = document.querySelector('.btnShare-back')
const $menuFront = document.querySelector('.front')
const $menuBack = document.querySelector('.back')

$btnShare.addEventListener('click',function(){
  $menuBack.classList.remove('hidden')
})

$btnShareBack.addEventListener('click',function(){
  $menuBack.classList.add('hidden')
})