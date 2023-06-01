/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

// Here the value is stored in new variable x 
 function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}
*/


const lngth = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const btn = document.getElementById("convert-btn")
const alliws = document.getElementById("inp-number")


btn.addEventListener("click", function(){
    if (alliws.value != ""){
    var x = alliws.value;
    let slengthCalcMeter = x  * 3.281 
    let lengthCalcMeter = slengthCalcMeter.toFixed(2)
   
    let svolumeCalcLiter = x * 0.264
    let volumeCalcLiter = svolumeCalcLiter.toFixed(2)

    let smassCalcKilogram = x * 2.204
    let massCalcKilogram = smassCalcKilogram.toFixed(2)

    let slengthCalcFeet = x * 0.3048
    let lengthCalcFeet = slengthCalcFeet.toFixed(2)

    let svolumeCalcGallon = x * 3.78541178 
    let volumeCalcGallon = svolumeCalcGallon.toFixed(2)

    let smassCalcPound = x * 0.45359237
    let massCalcPound = smassCalcPound.toFixed(2)

    lngth.textContent = `${x} meters are ${lengthCalcMeter} feet | ${x} feet are ${lengthCalcFeet} meters`
    volume.textContent = `${x} liters are ${volumeCalcLiter} gallons | ${x} gallons are ${volumeCalcGallon} liters`
    mass.textContent = `${x} kilos are ${massCalcKilogram} pounds | ${x} pounds are ${massCalcPound} kilos`
    }
    else
    {

    }


})

 