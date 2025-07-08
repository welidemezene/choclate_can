// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Set up responsive breakpoints
const setupAnimations = () => {
    const isMobile = window.innerWidth < 768;
    
    // First animation timeline (about section)
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top bottom",
            end: "bottom center",
            scrub: true,
            markers: false // Set to true for debugging
        }
    });

    tl.to("#can", {
        top: isMobile ? "85%" : "95%",
        left: isMobile ? "5%" : "12%",
        rotate: "30deg"
    }, 'choclate')
    .to("#choclate", {
        top: isMobile ? "140%" : "160%",
        left: isMobile ? "15%" : "23%"
    }, 'choclate')
    .to("#choclate2", {
        width: isMobile ? "20%" : "25%",
        top: isMobile ? "140%" : "160%",
        right: isMobile ? "5%" : "10%",
        rotate: "-15deg"
    }, 'choclate')
    .to("#almod", {
        top: isMobile ? "100%" : "110%",
        rotate: "130deg",
        left: isMobile ? "60%" : "70%"
    }, 'choclate')
    .to("#almod2", {
        top: isMobile ? "100%" : "110%",
        rotate: "130deg",
        left: isMobile ? "5%" : "0%"
    }, 'choclate');

    // Second animation timeline (product section)
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".product",
            start: "top bottom",
            end: "top center",
            scrub: true,
            markers: false
        }
    });

    tl2.to("#choclate", {
        width: isMobile ? "25%" : "28%",
        left: isMobile ? "35%" : "42%",
        top: isMobile ? "180%" : "214%"
    }, 'can')
    .to("#choclate2", {
        width: isMobile ? "12%" : "15%",
        left: isMobile ? "30%" : "35%",
        top: isMobile ? "220%" : "270%"
    }, 'can')
    .to("#can", {
        width: isMobile ? "25%" : "30%",
        top: isMobile ? "180%" : "212%",
        left: isMobile ? "30%" : "35%",
        rotate: "0deg"
    }, 'can');
};

// Initialize animations
setupAnimations();

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        setupAnimations();
    }, 200);
});