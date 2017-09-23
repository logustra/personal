"use strict";

var bar1 = new ProgressBar.Line(progress, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '80%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 80) + ' %');
  }
});

var bar2 = new ProgressBar.Line(progress2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '96%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 96) + ' %');
  }
});

var bar3 = new ProgressBar.Line(progress3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '98%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 98) + ' %');
  }
});

var bar4 = new ProgressBar.Line(progress4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '78%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 78) + ' %');
  }
});

var bar5 = new ProgressBar.Line(progress5, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '94%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 94) + ' %');
  }
});

var bar6 = new ProgressBar.Line(progress6, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '77%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 77) + ' %');
  }
});

var bar7 = new ProgressBar.Line(progress7, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '88%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 88) + ' %');
  }
});

var bar8 = new ProgressBar.Line(progress8, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '85%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 85) + ' %');
  }
});

var bar9 = new ProgressBar.Line(progress9, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#31b7ea',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '86%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 86) + ' %');
  }
});
