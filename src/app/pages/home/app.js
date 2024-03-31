// const canvas = document.querySelector('.canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const context = canvas.getContext("2d");
// const frameCount = 314;
// const startFrame = 75; // Define the starting frame
// const images = [];

// let ball = { frame: 147 };

// for (let i = startFrame; i < startFrame + frameCount; i++) {
//     // const img = new Image();
//     // img.src = `../../../assets/img/watch/${i.toString().padStart(3, '0')}.jpg`;
//     // images.push(img);
//     console.log();
// }

// gsap.to(ball, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger: {
//         scrub: true,
//         pin: "canvas",
//         end: "500%",
//         // markers: true
//     },
//     onUpdate: render,
// });

// images[0].onload = render;

// gsap.fromTo(
//     ".ball-text",
//     {
//         opacity: 0,
//     },
//     {
//         opacity: 1,
//         scrollTrigger: {
//             scrub: 1,
//             start: "50%",
//             end: "60%",
//         },
//         onComplete: () => {
//             gsap.to(".ball-text", { opacity: 0 });
//         },
//     }
// );

// function render() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.drawImage(images[Math.round(ball.frame) - startFrame], 0, 0, canvas.width, canvas.height);
// }
