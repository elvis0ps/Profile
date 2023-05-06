const mod = document.querySelector('#light')
const bod = document.querySelector('body')

mod.addEventListener('click',()=>{
    document.querySelector('a').innerHTML='<i class="fa fa-sun"></i>';
    document.querySelector('body').classList.toggle('dark')
})