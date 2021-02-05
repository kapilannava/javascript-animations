const greyBlock = document.querySelector('.anim');

observer = new IntersectionObserver((entries) =>{
    console.log(entries);
})

observer.observe(greyBlock);