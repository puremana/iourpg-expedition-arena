//Expedition Calculations
//Global Variables

//Calculate Button
function arenaLevelCalculate() {
    document.getElementById("arenaLevelButton").className = "ui button blue loading";
    var level = document.getElementById("arenaLevelInput").value;
    var globalDamage = (document.getElementById("bonus-totalDMG").value / 100);
    var globalHP = (document.getElementById("bonus-totalHP").value / 100);

    //Damage Current
    var currentDamageCenter = Math.ceil(((10 + 2.5 * document.getElementById("current-center-weapon").value) * (1 + Math.floor(document.getElementById("current-center-weapon").value / 5) / 20) * globalDamage) * 100) / 100;
    var currentDamageLeft = Math.ceil(((10 + 2.5 * document.getElementById("current-left-weapon").value) * (1 + Math.floor(document.getElementById("current-left-weapon").value / 5) / 20) * globalDamage) * 100) / 100;
    var currentDamageRight = Math.ceil(((10 + 2.5 * document.getElementById("current-right-weapon").value) * (1 + Math.floor(document.getElementById("current-right-weapon").value / 5) / 20) * globalDamage) * 100) / 100;
    var currentDamageEnemy = Math.ceil(((10 + 2.5 * (level - 1)) * (1 + Math.floor((level - 1) / 5) / 20)) * 100) / 100;

    document.getElementById("current-center-stats-damage").innerHTML = currentDamageCenter;
    document.getElementById("current-left-stats-damage").innerHTML = currentDamageLeft;
    document.getElementById("current-right-stats-damage").innerHTML = currentDamageRight;
    document.getElementById("current-enemy-stats-damage").innerHTML = currentDamageEnemy;

    //Speed Current
    var currentSpeedCenter = Math.round((10 + 0.8 * document.getElementById("current-center-wings").value) * (1 + Math.floor(document.getElementById("current-center-wings").value / 5) / 20) * 100) / 100;
    var currentSpeedLeft = Math.round((10 + 0.8 * document.getElementById("current-left-wings").value) * (1 + Math.floor(document.getElementById("current-left-wings").value / 5) / 20) * 100) / 100;
    var currentSpeedRight = Math.round((10 + 0.8 * document.getElementById("current-right-wings").value) * (1 + Math.floor(document.getElementById("current-right-wings").value / 5) / 20) * 100) / 100;
    var currentSpeedEnemy = Math.round((10 + 0.8 * (level - 1)) * (1 + Math.floor((level - 1) / 5) / 20) * 100) / 100;

    document.getElementById("current-center-stats-speed").innerHTML = currentSpeedCenter;
    document.getElementById("current-left-stats-speed").innerHTML = currentSpeedLeft;
    document.getElementById("current-right-stats-speed").innerHTML = currentSpeedRight;
    document.getElementById("current-enemy-stats-speed").innerHTML = currentSpeedEnemy;

    //Reactor Current
    var currentReactorCenter = Math.round((0 + 10 * document.getElementById("current-center-reactor").value) * (1 + Math.floor(document.getElementById("current-center-reactor").value / 5) / 20) * 100) / 100;
    var currentReactorLeft = Math.round((0 + 10 * document.getElementById("current-left-reactor").value) * (1 + Math.floor(document.getElementById("current-left-reactor").value / 5) / 20) * 100) / 100;
    var currentReactorRight = Math.round((0 + 10 * document.getElementById("current-right-reactor").value) * (1 + Math.floor(document.getElementById("current-right-reactor").value / 5) / 20) * 100) / 100;
    var currentReactorEnemy = Math.round((0 + 10 * (level - 1)) * (1 + Math.floor((level - 1) / 5) / 20) * 100) / 100;

    document.getElementById("current-center-stats-reactor").innerHTML = currentReactorCenter;
    document.getElementById("current-left-stats-reactor").innerHTML = currentReactorLeft;
    document.getElementById("current-right-stats-reactor").innerHTML = currentReactorRight;
    document.getElementById("current-enemy-stats-reactor").innerHTML = currentReactorEnemy;

    //HP Current - KEEPING THE DECIMAL VERSION OF HP
    var currentHPCenter = ((60 + 20 * document.getElementById("current-center-hull").value) * (1 + Math.floor(document.getElementById("current-center-hull").value / 5) / 20) * globalHP);
    var currentHPLeft = ((60 + 20 * document.getElementById("current-left-hull").value) * (1 + Math.floor(document.getElementById("current-left-hull").value / 5) / 20) * globalHP);
    var currentHPRight = ((60 + 20 * document.getElementById("current-right-hull").value) * (1 + Math.floor(document.getElementById("current-right-hull").value / 5) / 20) * globalHP);
    var currentHPEnemy = (60 + 20 * (level - 1)) * (1 + Math.floor((level - 1) / 5) / 20);

    document.getElementById("current-center-stats-hp").innerHTML = Math.round(currentHPCenter * 100) / 100;
    document.getElementById("current-left-stats-hp").innerHTML = Math.round(currentHPLeft * 100) / 100;
    document.getElementById("current-right-stats-hp").innerHTML = Math.round(currentHPRight * 100) / 100;
    document.getElementById("current-enemy-stats-hp").innerHTML = Math.round(currentHPEnemy * 100) / 100;

    //Effective HP
    document.getElementById("current-center-stats-effhp").innerHTML = Math.round((currentReactorCenter + currentHPCenter) * 100) / 100;
    document.getElementById("current-left-stats-effhp").innerHTML = Math.round((currentReactorLeft + currentHPLeft) * 100) / 100;
    document.getElementById("current-right-stats-effhp").innerHTML = Math.round((currentReactorRight + currentHPRight) * 100) / 100;
    document.getElementById("current-enemy-stats-effhp").innerHTML = Math.round((currentReactorEnemy + currentHPEnemy) * 100) / 100;

    document.getElementById("arenaLevelButton").className = "ui button blue";
}

//Export Button
function exportUpdate() {
    var raw = document.getElementById("exportInput").value;
    var json = JSON.parse(raw);
    var ships = json["shipArena"];

    //Ships
    if (ships["ships"] == 1) {
        setShip("current", "center", ships["ship1"]["weapon_level"], ships["ship1"]["reactor_level"], ships["ship1"]["hull_level"], ships["ship1"]["wings_level"]);
        setShip("current", "left", 0, 0, 0, 0);
        setShip("current", "right", 0, 0, 0, 0);
    }
    else if (ships["ships"] == 2) {
        setShip("current", "center", ships["ship1"]["weapon_level"], ships["ship1"]["reactor_level"], ships["ship1"]["hull_level"], ships["ship1"]["wings_level"]);
        setShip("current", "left", ships["ship2"]["weapon_level"], ships["ship2"]["reactor_level"], ships["ship2"]["hull_level"], ships["ship2"]["wings_level"]);
        setShip("current", "right", 0, 0, 0, 0);
    }
    else if (ships["ships"] == 3) {
        setShip("current", "center", ships["ship1"]["weapon_level"], ships["ship1"]["reactor_level"], ships["ship1"]["hull_level"], ships["ship1"]["wings_level"]);
        setShip("current", "left", ships["ship2"]["weapon_level"], ships["ship2"]["reactor_level"], ships["ship2"]["hull_level"], ships["ship2"]["wings_level"]);
        setShip("current", "right", ships["ship3"]["weapon_level"], ships["ship3"]["reactor_level"], ships["ship3"]["hull_level"], ships["ship3"]["wings_level"]);
    }
    
    //Bonuses
    //Ship orb
    if (json["soulOrbs"]["orbs"][12]["unlocked"] == true) {
        switch (json["soulOrbs"]["orbs"][12]["rarity"]) {
            case 1:
                var shipBonus = 2 + (0.048 * json["soulOrbs"]["orbs"][12]["level"]);
                break;
            case 2:
                var shipBonus = 8 + (0.08 * json["soulOrbs"]["orbs"][12]["level"]);
                break;
            case 3:
                var shipBonus = 18 + (0.112 * json["soulOrbs"]["orbs"][12]["level"]);
                break;
            case 4:
                var shipBonus = 32 + (0.144 * json["soulOrbs"]["orbs"][12]["level"]);
                break;
            case 5:
                var shipBonus = 50 + (0.176 * json["soulOrbs"]["orbs"][12]["level"]);
                break;
            case 6:
                var shipBonus = 72 + (0.208 * json["soulOrbs"]["orbs"][12]["level"]);
                break;
            case 7:
                var shipBonus = 98 + (0.24 * json["soulOrbs"]["orbs"][12]["level"]);
                break;
        }
        document.getElementById("bonus-shipOrb").value = shipBonus;
    }
    //Trophies
    document.getElementById("bonus-trophyDMG").value = json["upgrades"]["trophy"]["shipDmg"]["level"];
    document.getElementById("bonus-trophyHP").value = json["upgrades"]["trophy"]["shipHP"]["level"];
    //Legendary
    document.getElementById("bonus-Legendary").value = json["upgrades"]["legend"]["shipArenaDmg"]["level"];
    //Ascension Upgrades
    document.getElementById("bonus-ascDMG").value = (json["upgrades"]["ascension"]["shipDmg"]["level"] * 2);
    document.getElementById("bonus-ascHP").value = (json["upgrades"]["ascension"]["shipHp"]["level"] * 2);
    //Guild Bonuses are not included in JSON
    //Update Total Inputs
    updateBonusTotal();
    //Drones
    //Loop for the amount of drones you have
    for (var i = 1; i <= json["shipArena"]["drones"]; i++) {
        console.log(i);
        var drone = "drone" + i;
        var droneLevel = "dronelevel" + i;
        if ((droneType[json["shipArena"][drone]]) != "inverter") {
            document.getElementById(droneType[json["shipArena"][drone]]).value = json["shipArena"][droneLevel];
        }
    }
}

var droneTypeRaw = '{"1":"drone-current-regen", "2":"drone-current-leech", "3":"inverter", "4":"drone-current-penetrator", "5":"drone-current-reflector", "6":"drone-current-absorption", "7":"drone-current-deadly"}';
var droneType = JSON.parse(droneTypeRaw);

function updateBonusTotal() {
    var totalDMG = (1 + (document.getElementById("bonus-shipOrb").value / 100)) * (1 + (document.getElementById("bonus-trophyDMG").value / 100)) * (1 + (document.getElementById("bonus-Legendary").value / 100)) * (1 + (document.getElementById("bonus-ascDMG").value / 100)) * (1 + (document.getElementById("bonus-guildLevel").value / 100)) * (1 + (document.getElementById("bonus-academyTotal").value / 100));
    var totalHP = (1 + (document.getElementById("bonus-shipOrb").value / 100)) * (1 + (document.getElementById("bonus-trophyHP").value / 100)) * (1 + (document.getElementById("bonus-ascHP").value / 100)) * (1 + (document.getElementById("bonus-academyTotal").value / 100));
    document.getElementById("bonus-totalDMG").value = totalDMG * 100;
    document.getElementById("bonus-totalHP").value = totalHP * 100;
}

//Copy Builds Functions
function copyToWanted() {
    document.getElementById("wanted-center-weapon").value = document.getElementById("current-center-weapon").value;
    document.getElementById("wanted-center-reactor").value = document.getElementById("current-center-reactor").value;
    document.getElementById("wanted-center-hull").value = document.getElementById("current-center-hull").value;
    document.getElementById("wanted-center-wings").value = document.getElementById("current-center-wings").value;

    document.getElementById("wanted-left-weapon").value = document.getElementById("current-left-weapon").value;
    document.getElementById("wanted-left-reactor").value = document.getElementById("current-left-reactor").value;
    document.getElementById("wanted-left-hull").value = document.getElementById("current-left-hull").value;
    document.getElementById("wanted-left-wings").value = document.getElementById("current-left-wings").value;

    document.getElementById("wanted-right-weapon").value = document.getElementById("current-right-weapon").value;
    document.getElementById("wanted-right-reactor").value = document.getElementById("current-right-reactor").value;
    document.getElementById("wanted-right-hull").value = document.getElementById("current-right-hull").value;
    document.getElementById("wanted-right-wings").value = document.getElementById("current-right-wings").value;

    document.getElementById("drone-wanted-reflector").value = document.getElementById("drone-current-reflector").value;
    document.getElementById("drone-wanted-deadly").value = document.getElementById("drone-current-deadly").value;
    document.getElementById("drone-wanted-penetrator").value = document.getElementById("drone-current-penetrator").value;
    document.getElementById("drone-wanted-leech").value = document.getElementById("drone-current-leech").value;
    document.getElementById("drone-wanted-regen").value = document.getElementById("drone-current-regen").value;
    document.getElementById("drone-wanted-absorption").value = document.getElementById("drone-current-absorption").value;
}
function copyToCurrent() {
    document.getElementById("current-center-weapon").value = document.getElementById("wanted-center-weapon").value;
    document.getElementById("current-center-reactor").value = document.getElementById("wanted-center-reactor").value;
    document.getElementById("current-center-hull").value = document.getElementById("wanted-center-hull").value;
    document.getElementById("current-center-wings").value = document.getElementById("wanted-center-wings").value;

    document.getElementById("current-left-weapon").value = document.getElementById("wanted-left-weapon").value;
    document.getElementById("current-left-reactor").value = document.getElementById("wanted-left-reactor").value;
    document.getElementById("current-left-hull").value = document.getElementById("wanted-left-hull").value;
    document.getElementById("current-left-wings").value = document.getElementById("wanted-left-wings").value;

    document.getElementById("current-right-weapon").value = document.getElementById("wanted-right-weapon").value;
    document.getElementById("current-right-reactor").value = document.getElementById("wanted-right-reactor").value;
    document.getElementById("current-right-hull").value = document.getElementById("wanted-right-hull").value;
    document.getElementById("current-right-wings").value = document.getElementById("wanted-right-wings").value;

    document.getElementById("drone-current-reflector").value = document.getElementById("drone-wanted-reflector").value;
    document.getElementById("drone-current-deadly").value = document.getElementById("drone-wanted-deadly").value;
    document.getElementById("drone-current-penetrator").value = document.getElementById("drone-wanted-penetrator").value;
    document.getElementById("drone-current-leech").value = document.getElementById("drone-wanted-leech").value;
    document.getElementById("drone-current-regen").value = document.getElementById("drone-wanted-regen").value;
    document.getElementById("drone-current-absorption").value = document.getElementById("drone-wanted-absorption").value;
}
function copyFromCalc(type) {
    if (type == "current") {
        document.getElementById("current-center-weapon").value = document.getElementById("calc-center-weapon").value;
        document.getElementById("current-center-reactor").value = document.getElementById("calc-center-reactor").value;
        document.getElementById("current-center-hull").value = document.getElementById("calc-center-hull").value;
        document.getElementById("current-center-wings").value = document.getElementById("calc-center-wings").value;

        document.getElementById("current-left-weapon").value = document.getElementById("calc-left-weapon").value;
        document.getElementById("current-left-reactor").value = document.getElementById("calc-left-reactor").value;
        document.getElementById("current-left-hull").value = document.getElementById("calc-left-hull").value;
        document.getElementById("current-left-wings").value = document.getElementById("calc-left-wings").value;

        document.getElementById("current-right-weapon").value = document.getElementById("calc-right-weapon").value;
        document.getElementById("current-right-reactor").value = document.getElementById("calc-right-reactor").value;
        document.getElementById("current-right-hull").value = document.getElementById("calc-right-hull").value;
        document.getElementById("current-right-wings").value = document.getElementById("calc-right-wings").value;

        document.getElementById("drone-current-reflector").value = document.getElementById("drone-calc-reflector").value;
        document.getElementById("drone-current-deadly").value = document.getElementById("drone-calc-deadly").value;
        document.getElementById("drone-current-penetrator").value = document.getElementById("drone-calc-penetrator").value;
        document.getElementById("drone-current-leech").value = document.getElementById("drone-calc-leech").value;
        document.getElementById("drone-current-regen").value = document.getElementById("drone-calc-regen").value;
        document.getElementById("drone-current-absorption").value = document.getElementById("drone-calc-absorption").value;
    }
    else if (type == "wanted") {
        document.getElementById("wanted-center-weapon").value = document.getElementById("calc-center-weapon").value;
        document.getElementById("wanted-center-reactor").value = document.getElementById("calc-center-reactor").value;
        document.getElementById("wanted-center-hull").value = document.getElementById("calc-center-hull").value;
        document.getElementById("wanted-center-wings").value = document.getElementById("calc-center-wings").value;

        document.getElementById("wanted-left-weapon").value = document.getElementById("calc-left-weapon").value;
        document.getElementById("wanted-left-reactor").value = document.getElementById("calc-left-reactor").value;
        document.getElementById("wanted-left-hull").value = document.getElementById("calc-left-hull").value;
        document.getElementById("wanted-left-wings").value = document.getElementById("calc-left-wings").value;

        document.getElementById("wanted-right-weapon").value = document.getElementById("calc-right-weapon").value;
        document.getElementById("wanted-right-reactor").value = document.getElementById("calc-right-reactor").value;
        document.getElementById("wanted-right-hull").value = document.getElementById("calc-right-hull").value;
        document.getElementById("wanted-right-wings").value = document.getElementById("calc-right-wings").value;

        document.getElementById("drone-wanted-reflector").value = document.getElementById("drone-calc-reflector").value;
        document.getElementById("drone-wanted-deadly").value = document.getElementById("drone-calc-deadly").value;
        document.getElementById("drone-wanted-penetrator").value = document.getElementById("drone-calc-penetrator").value;
        document.getElementById("drone-wanted-leech").value = document.getElementById("drone-calc-leech").value;
        document.getElementById("drone-wanted-regen").value = document.getElementById("drone-calc-regen").value;
        document.getElementById("drone-wanted-absorption").value = document.getElementById("drone-calc-absorption").value;
    }
}
//Copy to Clipboard Functions
function copyCurrentClipboard(id) {
    var string = "Expedition Arena Ships (Weapon/Reactor/Hull/Wings) \n" +
    "Center: " + document.getElementById("current-center-weapon").value + ", " + document.getElementById("current-center-reactor").value + ", " + document.getElementById("current-center-hull").value + ", " + document.getElementById("current-center-wings").value + "\n" +
    "Left: " + document.getElementById("current-left-weapon").value + ", " + document.getElementById("current-left-reactor").value + ", " + document.getElementById("current-left-hull").value + ", " + document.getElementById("current-left-wings").value + "\n" +
    "Right: " + document.getElementById("current-right-weapon").value + ", " + document.getElementById("current-right-reactor").value + ", " + document.getElementById("current-right-hull").value + ", " + document.getElementById("current-right-wings").value;
    //Drones
    var dronesString = "";
    if (document.getElementById("drone-current-reflector").value != "0")
        dronesString = "Reflector: " + document.getElementById("drone-current-reflector").value + " ";

    if (document.getElementById("drone-current-deadly").value != "0")
        dronesString = dronesString + "Deadly: " + document.getElementById("drone-current-deadly").value + " ";

    if (document.getElementById("drone-current-penetrator").value != "0")
        dronesString = dronesString + "Penetrator: " + document.getElementById("drone-current-penetrator").value + " ";
        
    if (document.getElementById("drone-current-leech").value != "0")
        dronesString = dronesString + "Leech: " + document.getElementById("drone-current-leech").value + " ";

    if (document.getElementById("drone-current-regen").value != "0")
        dronesString = dronesString + "Regen: " + document.getElementById("drone-current-regen").value + " ";

    if (document.getElementById("drone-current-absorption").value != "0")
        dronesString = dronesString + "Absorption: " + document.getElementById("drone-current-absorption").value + " ";

    copyToClipboard(string + "\n" + dronesString);
    document.getElementById(id).innerHTML = "Copied!";
    setTimeout(copiedChange, 600);
}
function copyWantedClipboard(id) {
    var string = "Expedition Arena Ships (Weapon/Reactor/Hull/Wings) \n" +
    "Center: " + document.getElementById("wanted-center-weapon").value + ", " + document.getElementById("wanted-center-reactor").value + ", " + document.getElementById("wanted-center-hull").value + ", " + document.getElementById("wanted-center-wings").value + "\n" +
    "Left: " + document.getElementById("wanted-left-weapon").value + ", " + document.getElementById("wanted-left-reactor").value + ", " + document.getElementById("wanted-left-hull").value + ", " + document.getElementById("wanted-left-wings").value + "\n" +
    "Right: " + document.getElementById("wanted-right-weapon").value + ", " + document.getElementById("wanted-right-reactor").value + ", " + document.getElementById("wanted-right-hull").value + ", " + document.getElementById("wanted-right-wings").value;
    //Drones
    var dronesString = "";
    if (document.getElementById("drone-wanted-reflector").value != "0")
        dronesString = "Reflector: " + document.getElementById("drone-wanted-reflector").value + " ";

    if (document.getElementById("drone-wanted-deadly").value != "0")
        dronesString = dronesString + "Deadly: " + document.getElementById("drone-wanted-deadly").value + " ";

    if (document.getElementById("drone-wanted-penetrator").value != "0")
        dronesString = dronesString + "Penetrator: " + document.getElementById("drone-wanted-penetrator").value + " ";
        
    if (document.getElementById("drone-wanted-leech").value != "0")
        dronesString = dronesString + "Leech: " + document.getElementById("drone-wanted-leech").value + " ";

    if (document.getElementById("drone-wanted-regen").value != "0")
        dronesString = dronesString + "Regen: " + document.getElementById("drone-wanted-regen").value + " ";

    if (document.getElementById("drone-wanted-absorption").value != "0")
        dronesString = dronesString + "Absorption: " + document.getElementById("drone-wanted-absorption").value + " ";

    copyToClipboard(string + "\n" + dronesString);
    document.getElementById(id).innerHTML = "Copied!";
    setTimeout(copiedChange, 600);
}
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 
    } 
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            alert("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
function copiedChange(id) {
    if (document.getElementById("clipboardCurrentButton").innerHTML == "Copied!") {
        document.getElementById("clipboardCurrentButton").innerHTML = "Copy to Clipboard";
    }
    else if (document.getElementById("clipboardWantedButton").innerHTML == "Copied!") {
        document.getElementById("clipboardWantedButton").innerHTML = "Copy to Clipboard";
    }
}
//Calculate Button



//Random Helper Functions
function setShip(type, position, weapon, reactor, hull, wings) {
    if (type == "current") {
        if (position == "center") {
            document.getElementById("current-center-weapon").value = weapon;
            document.getElementById("current-center-reactor").value = reactor;
            document.getElementById("current-center-hull").value = hull;
            document.getElementById("current-center-wings").value = wings;
        }
        else if (position == "left") {
            document.getElementById("current-left-weapon").value = weapon;
            document.getElementById("current-left-reactor").value = reactor;
            document.getElementById("current-left-hull").value = hull;
            document.getElementById("current-left-wings").value = wings;
        }
        else if (position == "right") {
            document.getElementById("current-right-weapon").value = weapon;
            document.getElementById("current-right-reactor").value = reactor;
            document.getElementById("current-right-hull").value = hull;
            document.getElementById("current-right-wings").value = wings;
        }
    }
    else if (type == "wanted") {
        if (position == "center") {
            document.getElementById("wanted-center-weapon").value = weapon;
            document.getElementById("wanted-center-reactor").value = reactor;
            document.getElementById("wanted-center-hull").value = hull;
            document.getElementById("wanted-center-wings").value = wings;
        }
        else if (position == "left") {
            document.getElementById("wanted-left-weapon").value = weapon;
            document.getElementById("wanted-left-reactor").value = reactor;
            document.getElementById("wanted-left-hull").value = hull;
            document.getElementById("wanted-left-wings").value = wings;
        }
        else if (position == "right") {
            document.getElementById("wanted-right-weapon").value = weapon;
            document.getElementById("wanted-right-reactor").value = reactor;
            document.getElementById("wanted-right-hull").value = hull;
            document.getElementById("wanted-right-wings").value = wings;
        }
    }
    else if (type == "calc") {
        if (position == "center") {
            document.getElementById("calc-center-weapon").value = weapon;
            document.getElementById("calc-center-reactor").value = reactor;
            document.getElementById("calc-center-hull").value = hull;
            document.getElementById("calc-center-wings").value = wings;
        }
        else if (position == "left") {
            document.getElementById("calc-left-weapon").value = weapon;
            document.getElementById("calc-left-reactor").value = reactor;
            document.getElementById("calc-left-hull").value = hull;
            document.getElementById("calc-left-wings").value = wings;
        }
        else if (position == "right") {
            document.getElementById("calc-right-weapon").value = weapon;
            document.getElementById("calc-right-reactor").value = reactor;
            document.getElementById("calc-right-hull").value = hull;
            document.getElementById("calc-right-wings").value = wings;
        }
    }
}

//Styles and HTML
function changeTab(linker, content, type) {
    if (type == 1) {
        resetTab("link", 1);
        document.getElementById(linker).className = "item active";
        resetTab("tab", 1);
        document.getElementById(content).className = "ui bottom attached tab segment active";
    }
    else if (type == 2) {
        resetTab("link", 2);
        document.getElementById(linker).className = "item active";
        resetTab("tab", 2);
        document.getElementById(content).className = "ui bottom attached tab segment active";
    }
}
function resetTab(linkTab, type) {
    if (type == 1) {
        if (linkTab == "link") {
            document.getElementById("first-one-link").className = "item";
            document.getElementById("second-one-link").className = "item";
            document.getElementById("third-one-link").className = "item";
            document.getElementById("fourth-one-link").className = "item";
        }
        else if (linkTab == "tab") {
            document.getElementById("first-one").className = "ui bottom attached tab segment";
            document.getElementById("second-one").className = "ui bottom attached tab segment";
            document.getElementById("third-one").className = "ui bottom attached tab segment";
            document.getElementById("fourth-one").className = "ui bottom attached tab segment";
        }
    }
    else if (type == 2) {
        if (linkTab == "link") {
            document.getElementById("first-two-link").className = "item";
            document.getElementById("second-two-link").className = "item";
            document.getElementById("third-two-link").className = "item";
        }
        else if (linkTab == "tab") {
            document.getElementById("first-two").className = "ui bottom attached tab segment";
            document.getElementById("second-two").className = "ui bottom attached tab segment";
            document.getElementById("third-two").className = "ui bottom attached tab segment";
        }
    }
}