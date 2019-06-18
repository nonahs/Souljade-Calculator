
function calcData() {
    let level = document.getElementById("initLevel").value;
    let finalLevel = document.getElementById("desiredLevel").value;
    let cost = document.getElementById("sjCost").value;

    //Check for valid input and add defaults if required
    if (level < 0) {
        document.getElementById("initLevel").value = defLevel;
        level = defLevel;
    } else if (level > 14) {
        document.getElementById("initLevel").value = defFinal - 1;
        level = defFinal - 1;
    }

    if (finalLevel < 1) {
        document.getElementById("desiredLevel").value = defLevel + 1;
        finalLevel = defLevel + 1;
    } else if (finalLevel > 15) {
        document.getElementById("desiredLevel").value = defFinal;
        finalLevel = defFinal;
    }

    if (isNaN(level)) {
        document.getElementById("initLevel").value = defLevel;
        level = defLevel;
    }
    if (isNaN(finalLevel)) {
        document.getElementById("desiredLevel").value = defFinal;
        finalLevel = defFinal;
    }
    if (isNaN(cost)) {
        document.getElementById("sjCost").value = defCost;
        cost = defCost;
    }

    level = parseInt(level);
    finalLevel = parseInt(finalLevel);

    if (level > finalLevel) return;

    
    //Calculate cost
    if (level > 0 ) {
        var aurasRequired = Math.pow(3, finalLevel) - Math.pow(3, level);
    } else {
        var aurasRequired = Math.pow(3, finalLevel);
    }
    
    let totalSjCost = aurasRequired * cost;
    let upgradeCost = upgradeCosts[finalLevel] - upgradeCosts[level];
    let combinedCost = totalSjCost + upgradeCost;

    //console.log(aurasRequired, totalSjCost, upgradeCost);

    document.getElementById("sjAmount").innerHTML = aurasRequired.toLocaleString();
    document.getElementById("totalSjCost").innerHTML = totalSjCost.toLocaleString() + " coins";
    document.getElementById("upgradeCost").innerHTML = upgradeCost.toLocaleString() + " coins";
    document.getElementById("totalCost").innerHTML = combinedCost.toLocaleString() + " coins";

    updateStats(finalLevel);
}

function updateStats (lvl) {
    //lvl = parseInt(lvl);
    //console.log(typeof(lvl));
    //console.log("level is ", souljadeStats[1][2]);
    document.getElementById("statsLevel").innerHTML = souljadeStats[lvl][0];
    document.getElementById("statsAttack").innerHTML = souljadeStats[lvl][1] + "-" + souljadeStats[lvl][2];
    document.getElementById("statsMagic").innerHTML = souljadeStats[lvl][3];
    document.getElementById("statsAcc").innerHTML = souljadeStats[lvl][4];
    document.getElementById("statsAttackSpeed").innerHTML = souljadeStats[lvl][5] + "%";
    document.getElementById("statsMoveSpeed").innerHTML = souljadeStats[lvl][6] + "%";
    document.getElementById("statsCrit").innerHTML = souljadeStats[lvl][7] + "%";
}

let defLevel = 0;
let defFinal = 15;
let defCost = 3000;

const upgradeCosts = [0, 3000, 13500, 46875, 149625, 461250, 1400250, 4222125, 12693375, 38113500, 114381000, 343191375, 1029631125, 3088959750, 9266955750, 27800954625];

//0-level, 1-min phys, 2-max phys, 3-magic, 4-acc&eva, 5-atkspd, 6-movspd, 7-crit
const souljadeStats = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 5, 15, 10, 0, 0, 0, 0],
    [2, 10, 30, 20, 0, 0, 0, 0],
    [3, 16, 48, 32, 54, 0, 0, 0],
    [4, 24, 72, 48, 88, 0, 0, 0],
    [5, 36, 108, 72, 144, 0, 0, 0],
    [6, 54, 162, 108, 232, 0, 0, 0],
    [7, 90, 270, 180, 414, 4, 0, 0],
    [8, 135, 405, 270, 661, 4, 5, 0],
    [9, 200, 600, 400, 1040, 4, 5, 2],
    [10, 300, 900, 600, 1650, 8, 5, 2],
    [11, 425, 1275, 850, 2465, 8, 10, 2],
    [12, 550, 1650, 1100, 3355, 8, 10, 4],
    [13, 700, 2100, 1400, 4480, 12, 10, 4],
    [14, 875, 2626, 1750, 5862, 12, 15, 4],
    [15, 1075, 3225, 2150, 7525, 12, 15, 6]
]