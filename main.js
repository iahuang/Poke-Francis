// "lol javascript bad amirite" -/r/programmerhumor

var angery = 0;
var pokesTotal = 0;
var ppc = 1; // pokes per click

order.forEach(name => {
    $("#menu")[0].appendChild(createElementFromHTML('<div id="item-'+name+'"><p>Loading...</p></div>'));
    auto[name] = [];
});

function onClick() {
    angery+=ppc;
}
function onHover(e) {
    $("#desc")[0].innerHTML = "Description:<br>"+desc[e.getAttribute("name")];
}
function clearDesc() {
    $("#desc")[0].innerHTML = "Nothing Selected";
}
function onUpdate() { // Asynchronous to poke updates so js doesn't have a fit when you start having lots of pokes/sec
    $("#counter")[0].innerHTML = "Angery: "+angery;
    let shake = Math.log(angery)/Math.log(10);
    let sx = randint(-shake,shake);
    let sy = randint(-shake,shake);
    if (angery>200) {
        $("#pope")[0].src = "pope2.jpg";
    }
    $("#pope")[0].style.transform = "translate("+sx+"px,"+sy+"px)";
}
function updatePrices() {
    order.forEach(name => {
        let num = auto[name].length;
        let vars = rates[name];
        let price = Math.round(vars[0]*Math.pow(1.2,num));
        $("#item-"+name)[0].innerHTML = '<div onmouseover="onHover(this)" onmouseout="clearDesc()" class="row" name="'+name+'" id="item-'+name+'"><p class="item-name">'+autoNames[name]+" ("+num+') </p><button class="buy" onclick="onBuy(this)">Buy ('+price+' Angery)</button></div>';
    });
}
function onBuy(e) {
    let name = e.parentElement.getAttribute("name");
    let num = auto[name].length;
    let vars = rates[name];
    let price = Math.round(vars[0]*Math.pow(vars[1],num));
    if (angery >= price) {
        angery-=price;
        auto[name].push(effects[name]());
    }
    updatePrices();
}
setInterval(onUpdate,10);
clearDesc();
updatePrices();