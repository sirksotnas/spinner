const spinner = function(spinnerArr) {
  let delay = 100;
  for (const spin of spinnerArr) {
    setTimeout(() => {
      process.stdout.write(`\r${spin}    `)
    }, delay)
    delay += 100
  }
  setTimeout(() => {
    process.stdout.write("\n")
  }, delay);
};
spinner(["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]);
