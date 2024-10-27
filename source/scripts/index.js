import '../vendor/nouislider.min.js';

const rangeSlider = document.querySelector('.price__range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 900
    },
    cssPrefix: 'noui-'
  });

  const inputLow = document.querySelector('.price__field--low');
  const inputHigh = document.querySelector('.price__field--high');
  const inputsArray = [inputLow, inputHigh];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputsArray[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    const arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  inputsArray.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
