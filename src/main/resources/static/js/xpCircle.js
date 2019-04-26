function generateCircle() {

        var bar = new ProgressBar.Circle(container, {
          color: '#000',
          // This has to be the same size as the maximum width to
          // prevent clipping
          strokeWidth: 4,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          text: {
            autoStyleContainer: false
          },
          from: { color: '#fcd5b7', width: 1 },
          to: { color: '#ea6c0b', width: 4 },
          // Set default step function for all animate calls
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value+'%');
            }

          }
        });
        bar.text.style.fontFamily = 'PNCSans-Medium';
        bar.text.style.fontSize = '3.2rem';

        bar.animate(0.79);  // Number from 0.0 to 1.0
}