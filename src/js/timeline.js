import anime from 'animejs';

const btnTest = document.querySelector('.btn-tester');

// TODO Finir l'anim du texte qui se fait pousser par le svg
// TODO Finir l'anim du texte qui se fait pousser par le svg
// TODO Finir l'anim du texte qui se fait pousser par le svg

(function () {
    const tl = anime.timeline({
        // duration: 2000,
        easing: 'easeInOutCubic',
        autoplay: false,
    });

    // const titleStroke = document.querySelectorAll('.first-page h1 .__char');
    const titleStroke = document.querySelectorAll('.first-page svg > path');
    const titlefill = document.querySelectorAll('.first-page svg .name-char-fill > path');
    const subtitle = document.querySelectorAll('.first-page h2 .__char');

    anime.set(titlefill, {
        'transform-box': 'fill-box',
    });

    const titlesKeyframes = {
        duration: 1000,
        opacity: [0.8, 1],
        translateY: [-100, 0],
        rotateX: [90, 0],
        rotateY: [90, 0],
        // easing: 'easeInExpo',
        // easing: 'easeInOutBack',
        // easing: 'easeOutBounce',
        easing: 'easeInOutExpo',
        // easing: 'easeOutQuart',
        // easing: 'easeOutBack',
        // easing: 'easeInOutElastic',
        // easing: 'easeOutCirc',
    };

    //? draw title stroke
    tl.add(
        {
            targets: [titleStroke],
            duration: 1500,
            // ...titlesKeyframes,
            strokeDashoffset: [anime.setDashoffset, 0],
            delay: anime.stagger(150, { from: 'center' }),
        },
        0
    );

    //? wave on title
    tl.add({
        targets: '.name-wave',
        duration: 1500,
        translateX: [-50, 0],
        d: [
            {
                value: 'M0 77V0H28.3269C28.3269 0 774.402 24.0625 775.997 38.5C777.593 52.9375 28.3269 77 28.3269 77H0Z',
            },
            {
                value: 'M0 77V0H775.997C775.997 0 782.904 22.5625 784.5 37C786.096 51.4375 775.997 77 775.997 77H0Z',
            },
        ],
    });

    //? remove opacity on title stroke
    tl.add({
        targets: [titleStroke],
        opacity: 0,
        delay: anime.stagger(150, { from: 'center' }),
    });

    //? spawn subtitle
    tl.add(
        {
            targets: [subtitle],
            ...titlesKeyframes,
            delay: anime.stagger(150, { from: 'center' }),
        },
        0
    );

    tl.add(
        {
            targets: '.loader-svg--path',
            d: [
                {
                    value: 'M0 833.5V0H1440V833.5C1440 833.5 1346.5 898 1127.5 498C908.5 98 569 140.5 353 498C137 855.5 0 833.5 0 833.5Z',
                    duration: 1000,
                },
                {
                    value: 'M0 0V-62H1440V0C1440 0 1293 -40 1043 12C793 64 660.5 86 411.5 12C162.5 -62 0 0 0 0Z',
                    duration: 500,
                },
            ],
        },
        '+=500'
    );

    tl.add(
        {
            targets: '.loader-svg',
            translateY: '-10%',
        },
        '-=1000'
    );

    const titlesKeyframesReverse = {
        duration: 500,
        opacity: [1, 0.5],
        translateY: [0, -100],
        rotateX: [0, 90],
        rotateY: [0, 90],
    };

    // tl.add(
    //     {
    //         targets: [titlefill],
    //         'transform-box': 'fillbox',
    //         ...titlesKeyframesReverse,
    //         delay: anime.stagger(50, { from: 'center' }),
    //     }
    //     // '-=1100'
    // );

    tl.add(
        {
            targets: [subtitle],
            ...titlesKeyframesReverse,
            delay: anime.stagger(50, { from: 'center' }),
        },
        '-=1100'
    );

    btnTest.addEventListener('click', () => {
        tl.restart();
    });
})();
