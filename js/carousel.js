const cardsContainer = document.querySelector(".card-carousel");

class CardCarousel {
    constructor(container) {
        this.container = container;
        this.cards = container.querySelectorAll(".card");
        this.centerIndex = (this.cards.length - 1) / 2;
        this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100;
        this.xScale = {};
        window.addEventListener("resize", this.updateCardWidth.bind(this));
        this.build();
        this.autoRotate();
    }
  
    updateCardWidth() {
        this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100;
        this.build();
    }
  
    build() {
        for (let i = 0; i < this.cards.length; i++) {
            const x = i - this.centerIndex;
            const scale = this.calcScale(x);
            const scale2 = this.calcScale2(x);
            const zIndex = -(Math.abs(i - this.centerIndex));
            const leftPos = this.calcPos(x, scale2);
            this.xScale[x] = this.cards[i];
            this.updateCards(this.cards[i], {
                x: x,
                scale: scale,
                leftPos: leftPos,
                zIndex: zIndex
            });
        }
    }

    updateCards(card, data) {
        card.setAttribute("data-x", data.x);
        card.style.transform = `scale(${data.scale})`;
        card.style.left = `${data.leftPos}%`;
        card.style.zIndex = data.zIndex;
        if (data.scale == 0) {
            card.style.opacity = data.scale;
        } else {
            card.style.opacity = 1;
        }
    }

    calcPos(x, scale) {
        let formula;
        const spacingFactor = 10;
        formula = window.innerWidth/15- (scale * 100 + this.cardWidth) / 2 + spacingFactor * x;

        if (window.innerWidth <= 768) {
            formula = 80 - (scale * 100 + this.cardWidth) / 2 + spacingFactor * x; // adjust as per requirement
        }
        return formula;
    }

    calcScale(x) {
        let reductionFactor = 0.1;

        // For mobile scaling adjustments
        if (window.innerWidth <= 768) {
            reductionFactor = 0.2; // adjust as per requirement
        }

        const formula = 1 - reductionFactor * Math.abs(x);
        return formula > 0 ? formula : 0;
    }
    
    calcScale2(x) {
        let formula;
        formula = 1 - 1 / 5 * x;
        return formula;
    }

    autoRotate() {
        this.autoRotateInterval = setInterval(() => {
            this.rotateCard("next");
        }, 3000);
    }

    stopAutoRotate() {
        clearInterval(this.autoRotateInterval);
    }

    rotateCard(direction) {
        const temp = { ...this.xScale };
        if (direction === "next") {
            const lastValue = temp[this.centerIndex];
            for (let x = this.centerIndex; x > -this.centerIndex; x--) {
                temp[x] = temp[x-1];
            }
            temp[-this.centerIndex] = lastValue;
        } else if (direction === "prev") {
            const firstValue = temp[-this.centerIndex];
            for (let x = -this.centerIndex; x < this.centerIndex; x++) {
                temp[x] = temp[x+1];
            }
            temp[this.centerIndex] = firstValue;
        }
    
        this.xScale = temp;
        for (let x in temp) {
            const scale = this.calcScale(x),
                  scale2 = this.calcScale2(x),
                  leftPos = this.calcPos(x, scale2),
                  zIndex = -Math.abs(x);
            this.updateCards(this.xScale[x], {
                x: x,
                scale: scale,
                leftPos: leftPos,
                zIndex: zIndex
            });
        }
    }
}

// After initializing and appending cards to the DOM.
const carousel = new CardCarousel(cardsContainer);
