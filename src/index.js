module.exports = function zeros(expression) {
  // your solution
  let arr = (expression.split('*'));

  let typeOfFactor = {
    'single': []
    , 'dual': []
  };

  arr.forEach(elem => {
    if (elem.endsWith('!!')) {
      typeOfFactor['dual'].push(parseInt(elem));
    } else {
      typeOfFactor['single'].push(parseInt(elem));
    }
  })

  let twoAndfive = {
    'two': 0
    , 'five': 0
  };

  typeOfFactor['single'].forEach(elem => {
    for (let i = elem; i > 0; i--) {
      let devider = i;
      for (devider; devider % 5 == 0; devider /= 5) {
        twoAndfive['five']++;
      }
      for (devider; devider % 2 == 0; devider /= 2) {
        twoAndfive['two']++;
      }
    }
  });

  typeOfFactor['dual'].forEach(elem => {
    for (let i = elem; i > 0; i -= 2) {
      let devider = i;
      for (devider; devider % 5 == 0; devider /= 5) {
        twoAndfive['five']++;
      }
      for (devider; devider % 2 == 0; devider /= 2) {
        twoAndfive['two']++;
      }
    }
  });

  if (twoAndfive['two'] > twoAndfive['five']) {
    return twoAndfive['five'];
  } else {
    return twoAndfive['two'];
  }

}
