/*
    Convert HTML inputs to Joules
    butter: X grams
    water: boil X litres from room temp (~25 C)
    X volkswagen: dropped from 2m
    battery: X number of 13in Macbook Airs
    food: X number of 2000 DV caloric intakes
    nuclear: fission energy X g U 238
    Cyclist: pedaling for X hours
*/

var conversions = {
        "butter": 29990,
        "water": 334500,
        "volkswagen": 16464,
        "battery": 194400,
        "food": 8368000,
        "nuclear": 86750000000,
        "cyclist": 756000,
        "sun": 3600000,
        "gasoline": 1483561
};

function calculateEnergy(value, energyType) {
    return conversions[energyType] * value;
}

function calculateEntities(energy, energyType) {
    return energyType === "nuclear" ? parseFloat(energy / conversions[energyType]).toFixed(8) : parseFloat(energy / conversions[energyType]).toFixed(3);
}
function keyPress(e, value, energyType) {
    if (e.keyCode == 13) {
        outputEnergies(value, energyType);
        return false;
    }
}
function outputEnergies(value, energyType) {
    energy = calculateEnergy(value, energyType);
    document.getElementById("butter").value = calculateEntities(energy, "butter");
    document.getElementById("water").value = calculateEntities(energy, "water");
    document.getElementById("volkswagen").value = calculateEntities(energy, "volkswagen");
    document.getElementById("battery").value = calculateEntities(energy, "battery");
    document.getElementById("food").value = calculateEntities(energy, "food");
    document.getElementById("nuclear").value = calculateEntities(energy, "nuclear");
    document.getElementById("cyclist").value = calculateEntities(energy, "cyclist");
    document.getElementById("sun").value = calculateEntities(energy, "sun");
    document.getElementById("gasoline").value = calculateEntities(energy, "gasoline");
}
