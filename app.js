gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const sectionOneTl = gsap.timeline()

sectionOneTl
    .from('.content div h1 span:first-child', {
        x: '-100vw',
        duration: 1
    })
    .from('.content div h1 span:last-child', {
        x: '100vw',
        duration: 1

    }, '<')
    .from('.content div p', {
        opacity: 0,
        rotate: 90,
        transformOrigin: 'top left',
        duration: 1

    })
    .from('.content img', {
        y: '100vh',
        duration: 1

    })

const sectionTwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        // markers: true,
        start: 'top 30%',
        toggleActions: 'play none reverse reset'
    }
})

sectionTwoTl
    .from('.section2 div h2 span:first-child', {
        y: '-100vh',
        opacity: 0,
        duration: 1

    })
    .from('.section2 div h2 span:last-child', {
        y: '-100vh',
        opacity: 0,
        duration: 1

    })
    .from('.section2 div p', {
        scaleX: 0,
        opacity: 0,
        duration: 1

    })

const horizontalSectionsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.horizontal-sections',
        pin: true,
        // markers: true,
        scrub: true,
    }
})

horizontalSectionsTl
    .to('.horizontal-sections', {
        xPercent: -50
    })

const sectionThreeTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section3',
        // markers: true,
        start: 'top 30%',
        toggleActions: 'play none reverse none'
    }
})

sectionThreeTl
    .from('.section3 div h2', {
        x: '-100vw',
        scale: 10,
        duration: 1

    })
    .from('.section3 div p span', {
        y: '100vh',
        stagger: .2,
        duration: 1

    })
    .to('.section3 div p span', {
        backgroundColor: 'white',
        color: 'black',
        duration: 1

    }, '<')

const sectionFourTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section4',
        markers: true,
        start: 'bottom 40%',
        toggleActions: 'play none reverse none'
    }
})

sectionFourTl
    .from('.section4 div .portfolio-item', {
        x: '100vw',
        opacity: 0,
        stagger: .2,
        duration: 1
    })


const selector = document.querySelector('.section5 div h2')
const letters = document.querySelector('.section5 div h2').textContent.split('')
selector.innerHTML = ''

letters.forEach(letter => {
    const span = document.createElement('span')
    span.style.minWidth = '2rem',
        span.innerHTML = letter
    selector.appendChild(span)
})

const sectionFiveTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section5',
        // markers: true,
        pin: true,
        scrub: true
    }
})

sectionFiveTl
    .from('.section5 div h2 span', {
        y: '-100vh',
        stagger: .2
    })
    .from('.section5 div p', {
        y: '50px',
        opacity: 0
    })
    .from('.contact-btn', {
        scale: 0
    })
    .from('.section5', {
        backgroundPosition: '150% 90%'
    })
    .to('.section5', {
        backgroundColor: 'black'
    }, '<')