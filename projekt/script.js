function kivalaszt (kuldott) {
    document.getElementById("kep").setAttribute("src", `images\\${kuldott.value}.png`)
}

function meretvaltoztat() {
    document.getElementById("kep").setAttribute("width", document.getElementById("szelesseg").value)
    document.getElementById("kep").setAttribute("height", document.getElementById("magassag").value)
}

function kepmodosit() {
    effektSor="";

    if (document.getElementById("kepmodositBlur").checked)
        effektSor+="blur(5px) ";




        
    if (document.getElementById("kepmodositBlur").checked && document.getElementById("kepmodositOpacity").checked) {
        document.getElementById("kep").style.filter = "opacity(70%) blur(5px)"
    } else if (!document.getElementById("kepmodositBlur").checked && document.getElementById("kepmodositOpacity").checked) {
        document.getElementById("kep").style.filter = "opacity(70%)"
    } else if (document.getElementById("kepmodositBlur").checked && !document.getElementById("kepmodositOpacity").checked) {
        document.getElementById("kep").style.filter = "blur(2px)"
    } else {
        document.getElementById("kep").style.filter = "none"
    }
}