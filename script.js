//Expedition Calculations
//Global Variables

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
}

function updateBonusTotal() {
    var totalDMG = (1 + (document.getElementById("bonus-shipOrb").value / 100)) * (1 + (document.getElementById("bonus-trophyDMG").value / 100)) * (1 + (document.getElementById("bonus-Legendary").value / 100)) * (1 + (document.getElementById("bonus-ascDMG").value / 100)) * (1 + (document.getElementById("bonus-guildLevel").value / 100)) * (1 + (document.getElementById("bonus-academyTotal").value / 100));
    var totalHP = (1 + (document.getElementById("bonus-shipOrb").value / 100)) * (1 + (document.getElementById("bonus-trophyHP").value / 100)) * (1 + (document.getElementById("bonus-ascHP").value / 100)) * (1 + (document.getElementById("bonus-academyTotal").value / 100));
    document.getElementById("bonus-totalDMG").value = totalDMG * 100 + "%";
    document.getElementById("bonus-totalHP").value = totalHP * 100 + "%";
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
}

//Copy to Clipboard Functions
function copyCurrentClipboard(id) {
    var string = "Expedition Arena Ships (Weapon/Reactor/Hull/Wings) \n" +
    "Center: " + document.getElementById("current-center-weapon").value + ", " + document.getElementById("current-center-reactor").value + ", " + document.getElementById("current-center-hull").value + ", " + document.getElementById("current-center-wings").value + "\n" +
    "Left: " + document.getElementById("current-left-weapon").value + ", " + document.getElementById("current-left-reactor").value + ", " + document.getElementById("current-left-hull").value + ", " + document.getElementById("current-left-wings").value + "\n" +
    "Right: " + document.getElementById("current-right-weapon").value + ", " + document.getElementById("current-right-reactor").value + ", " + document.getElementById("current-right-hull").value + ", " + document.getElementById("current-right-wings").value;
    //Drones are not added yet

    copyToClipboard(string);
    document.getElementById(id).innerHTML = "Copied!";
    setTimeout(copiedChange, 600);
}
function copyWantedClipboard(id) {
    var string = "Expedition Arena Ships (Weapon/Reactor/Hull/Wings) \n" +
    "Center: " + document.getElementById("wanted-center-weapon").value + ", " + document.getElementById("wanted-center-reactor").value + ", " + document.getElementById("wanted-center-hull").value + ", " + document.getElementById("wanted-center-wings").value + "\n" +
    "Left: " + document.getElementById("wanted-left-weapon").value + ", " + document.getElementById("wanted-left-reactor").value + ", " + document.getElementById("wanted-left-hull").value + ", " + document.getElementById("wanted-left-wings").value + "\n" +
    "Right: " + document.getElementById("wanted-right-weapon").value + ", " + document.getElementById("wanted-right-reactor").value + ", " + document.getElementById("wanted-right-hull").value + ", " + document.getElementById("wanted-right-wings").value;
    //Drones are not added yet

    copyToClipboard(string);
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