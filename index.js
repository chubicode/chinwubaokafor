document.addEventListener('DOMContentLoaded', function() {
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
  const nav = document.querySelector("nav")

  function handleScroll() {
    for (let i = 0; i < animateOnScrollElements.length; i++) {
      const element = animateOnScrollElements[i];
      const rect = element.getBoundingClientRect();
      const inView = rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
      if (inView) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    }
    if(document.documentElement.scrollTop > 20){
      nav.classList.add("sticky");
    } else{
      nav.classList.remove("sticky");
    }

  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();  // Initial check
});


