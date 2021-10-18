const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(enter.target);
            }
        }) 
    }
);
export default {
    bind(el){
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    }
}