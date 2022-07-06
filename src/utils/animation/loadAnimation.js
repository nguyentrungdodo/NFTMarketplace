import lottie from 'lottie-web';

function loadAnimation(wrapper, config, speed = 1) {
  lottie
    .loadAnimation({
      wrapper,
      rendererSettings: {
        filterSize: {
          width: '600%',
          height: '600%',
          x: '-200%',
          y: '-200%',
        },
      },
      animType: 'svg',
      loop: true,
      animationData: config,
    })
    .setSpeed(speed);
}

export default loadAnimation;
