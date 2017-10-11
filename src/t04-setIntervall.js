function longForLoop(limit) {
  var i = 0;
  var ref = setInterval(() => {
    console.log("This is a long for loop. We are at " + ++i);
    if (i == limit) clearInterval(ref);
  }, 1000);
}

longForLoop(10);