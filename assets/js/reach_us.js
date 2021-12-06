let reach_us_back_btn = document.getElementById("reach_us_back_btn");
let reach_us_forward_btn = document.getElementById("reach_us_forward_btn");
let itemClassName = "means_of_transport";
items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;


// Next navigation handler
function moveNext() {
    // Check if moving
    if (!moving) {
        // If it's the last slide, reset to 0, else +1
        if (slide === (totalItems - 1)) {
            slide = 0;
        } else {
            slide++;
        }
        // Move carousel to updated slide
        moveCarouselTo(slide);
    }
}
// Previous navigation handler
function movePrev() {
    // Check if moving
    if (!moving) {
        // If it's the first slide, set as the last slide, else -1
        if (slide === 0) {
            slide = (totalItems - 1);
        } else {
            slide--;
        }

        // Move carousel to updated slide
        moveCarouselTo(slide);
    }
}
function setInitialClasses() {
    // Targets the previous, current, and next items
    // This assumes there are at least three items.
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
}

reach_us_back_btn.addEventListener("click", () => {
    movePrev();
});

reach_us_forward_btn.addEventListener("click", () => {
    moveNext();
});