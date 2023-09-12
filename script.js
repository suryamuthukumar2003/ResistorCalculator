document.getElementById("dk-rb1").addEventListener("click", band3func);
document.getElementById("dk-rb2").addEventListener("click", band4func);
document.getElementById("dk-rb3").addEventListener("click", band5func);
document.getElementById("dk-rb4").addEventListener("click", band6func);

document.getElementById("calculate").addEventListener("click", resistorCalc);

//Band-3

function band3func() {
  document.getElementById("tolerance-value").value = "none";
  document.getElementById("ppm-value").value = "none";
  document.getElementById("third-band-value").value = "none";
  document.getElementById("tolerance").style.display = "none";
  document.getElementById("third-band").style.display = "none";
  document.getElementById("ppm").style.display = "none";
}

//Band-4

function band4func() {
  document.getElementById("ppm-value").value = "none";
  document.getElementById("third-band-value").value = "none";
  document.getElementById("tolerance").style.display = "block";
  document.getElementById("third-band").style.display = "none";
  document.getElementById("ppm").style.display = "none";
}

//Band-5

function band5func() {
  document.getElementById("ppm-value").value = "none";
  document.getElementById("tolerance").style.display = "block";
  document.getElementById("third-band").style.display = "block";
  document.getElementById("ppm").style.display = "none";
}

//Band-6

function band6func() {
  document.getElementById("tolerance").style.display = "block";
  document.getElementById("third-band").style.display = "block";
  document.getElementById("ppm").style.display = "block";
}

//Units

function unitsResult(answer) {
  let unit = document.getElementById("units-value").value;
  if (unit === "1") {
    return answer;
  } else if (unit === "1e3") {
    return (answer / Math.pow(10, 3)).toFixed(2);
  } else if (unit === "1e6") {
    return (answer / Math.pow(10, 6)).toFixed(2);
  } else {
    return (answer / Math.pow(10, 9)).toFixed(2);
  }
}

function unitDisplay() {
  let unit = document.getElementById("units-value").value;
  if (unit === "1") {
    return "Ω";
  } else if (unit === "1e3") {
    return "kΩ";
  } else if (unit === "1e6") {
    return "MΩ";
  } else {
    return "GΩ";
  }
}
//Resistor calculation

function resistorCalc() {
  let band_1 = document.getElementById("first-band-value").value;
  let band_2 = document.getElementById("second-band-value").value;
  let multiplier = parseFloat(
    document.getElementById("multiplier-value").value
  );
  let band_3, tolerance, ppm, resistance, result;

  // Condition for third band
  if (document.getElementById("third-band-value").value === "none") {
    band_3 = "";
  } else {
    band_3 = parseInt(document.getElementById("third-band-value").value);
  }

  //condition for tolerance
  if (document.getElementById("tolerance-value").value === "none") {
    tolerance = "";
  } else {
    tolerance = document.getElementById("tolerance-value").value;
  }

  //condition for ppm

  if (document.getElementById("ppm-value").value === "none") {
    ppm = "";
  } else {
    ppm = document.getElementById("ppm-value").value;
  }

  if (band_3 === "" && tolerance === "" && ppm === "") {
    //band-3 condition
    resistance = parseInt((band_1 + band_2) * Math.pow(10, multiplier));
    result=`${unitsResult(resistance)} ${unitDisplay()}`;
  } else if (band_3 === "" && ppm === "") {
    //band-4 condition
    resistance = parseInt((band_1 + band_2) * Math.pow(10, multiplier));
    result=`${unitsResult(resistance)} ${unitDisplay()} ${tolerance}%`;
  } else if (ppm === "") {
    //band-5 condition
    resistance = parseInt(
      (band_1 + band_2 + band_3) * Math.pow(10, multiplier)
    );
    result=`${unitsResult(resistance)} ${unitDisplay()} ${tolerance}%`;
  } else {
    //band-6 condition
    resistance = parseInt(
      (band_1 + band_2 + band_3) * Math.pow(10, multiplier)
    );
    result=`${unitsResult(resistance)} ${unitDisplay()} ${tolerance}% ${ppm} ppm`;
  }
  document.getElementById("result").textContent=result;
}
