(function($) {
  'use strict';
    if ($("#currentBalanceCircle").length) {
      var bar = new ProgressBar.Circle(currentBalanceCircle, {
        color: '#000',
        strokeWidth: 12,
        trailWidth: 12,
        trailColor: '#eee',
        easing: 'easeInOut',
        lineCap: 'round',
        duration: 1400,
        from: {
          color: '#ec3432',
          width: 12
        },
        to: {
          color: '#ec3432',
          width: 12
        },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }

        }
      });

      bar.text.style.fontSize = '1.5rem';
      bar.animate(0.4);
    }
  });
})(jQuery);