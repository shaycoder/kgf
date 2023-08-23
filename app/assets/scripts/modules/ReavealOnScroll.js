class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll(".fade-in-image");
        this.hideInitially();
        this.events();
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => el.classList.add("reveal-item"));
    }

    events() {
        window.addEventListener("scroll", () => {
            this.itemsToReveal.forEach(el => {
                this.calculateIfScrolledTo(el);
            })
        })
    }

    calculateIfScrolledTo(el) {
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
        if(scrollPercent < 50) {
            el.classList.add("reveal-item--is-visible");
        }
    }

}

export default RevealOnScroll;