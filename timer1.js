let input = process.argv.slice(2);


const timer = function(time) {

  for (const t of time) {
    let interval = t * 1000;

    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval);
  }
};

timer(input);