document.addEventListener('DOMContentLoaded', () => {

    // --- Chart.js Implementation (Machine Language to AI) ---
    // --- Chart.js Implementation (Machine Language to AI) ---
    // Sync with typewriter: 1s delay + 4s duration = 5000ms total
    setTimeout(() => {
        const ctx = document.getElementById('techChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Machine Language', 'Assembly', 'C/C++', 'Systems/Kernel', 'AI/Modern'],
                    datasets: [{
                        label: 'Expertise Spectrum',
                        data: [15, 20, 25, 25, 15],
                        backgroundColor: [
                            '#000000',
                            '#333333',
                            '#666666',
                            '#999999',
                            '#cccccc'
                        ],
                        borderColor: '#fdfbf7', // Match bg for clean cut
                        borderWidth: 2,
                        hoverOffset: 15,
                        hoverBorderColor: '#111'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '60%', /* VISUAL STUNNING: Modern Doughnut style */
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: { family: 'Fira Code' },
                                boxWidth: 10,
                                padding: 20
                            }
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true,
                        duration: 2500, // Slow draw
                        easing: 'easeOutQuart'
                    }
                }
            });
        }
    }, 5000);

    // --- Source Example Logic (Converted to modern JS/GSAP) ---

    // Navigation Toggle
    $("#toggle").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });

    $("#resize ul li a").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });

    $(".close-btn").click(function () {
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    });

    // Nav Animations with TweenMax
    TweenMax.from("#brand", 1, {
        delay: 0.4,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });

    TweenMax.staggerFrom("#menu li a", 1, {
        delay: 0.4,
        opacity: 0,
        ease: Expo.easeInOut
    }, 0.1);

    // Initial WOW.js for scroll animations
    new WOW().init();

    // Scroll Progress Logic
    function progress() {
        var windowScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

        // Custom Logic: Keep pastel white theme, don't invert to full black/white like source
        // Just update the bar height and counter text

        $("div.counter h2").text(Math.round(progress) + "%");
        $(".fill").height(progress + "%");
    }
    progress();
    $(document).on("scroll", progress);

    // Smooth Scroll for local anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
