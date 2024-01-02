var Rect = document.querySelector("#center");
Rect.addEventListener("mousemove", function (details) {

    var rectangleLocation = Rect.getBoundingClientRect();
    var rectangleval = details.clientX - rectangleLocation.left;

    if (rectangleval < rectangleLocation.width / 2) {
        var redColor = gsap.utils.mapRange(
            0,
            rectangleLocation.width / 2,
            255,
            0,
            rectangleval
        );
        gsap.to(Rect, {
            backgroundColor: `rgb(${redColor},0, 0)`,
            ease: Power4,
        });
    } else {
        var blueColor = gsap.utils.mapRange(
            rectangleLocation.width / 2,
            rectangleLocation.width,
            0,
            255,
            rectangleval
        );
        gsap.to(Rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
    }
});