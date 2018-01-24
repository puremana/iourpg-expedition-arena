//Expedition Calculations
//Global Variables


function exportUpdate() {
    var raw = document.getElementById("exportInput").value;
    var json = JSON.parse(raw);
    var ships = json["shipArena"];

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
}

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