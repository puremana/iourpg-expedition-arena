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