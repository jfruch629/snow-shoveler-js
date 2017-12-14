cubic_feet = 8 * 20 * .75;

if (cubic_feet > 0 && cubic_feet <= 49) {
  quote_price = '$20';
} else if (cubic_feet > 49 && cubic_feet <= 149) {
  quote_price = '$50';
} else if (cubic_feet > 149 && cubic_feet <= 299) {
  quote_price = '$100';
} else {
  quote_price = '$150';
}

message = 'Cubic Feet: \n' + cubic_feet + '\n' + 'Quote Price: ' + quote_price;
let mainDiv = document.getElementById("main");
mainDiv.innerHTML = message;
