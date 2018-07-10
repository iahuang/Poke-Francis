var auto = {}; // Storage for all them items
var autoNames = {
    "macro":"Auto-Poking Macro",
    "pokepoke":"Poke with Rice",
    "fingers":"Mutant hand",
    "motor":"Reciprocator",
    "flares":"Solar Flares"
}; // Human-readable names for all them items
var desc = {
    "macro":"1 poke every 15 seconds",
    "pokepoke":"A Hawaiian dish: salad with raw fish and various greens and usually served with rice.<br><i>Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness</i><hr>1 poke every second",
    "fingers":"Each click is worth +1 poke",
    "motor":"Disembodied finger zip-tied to a motor from a reciprocating saw<hr>20 pokes every second",
    "flares":"Occasionally the Sun will release massive amounts of energy in the form of a large, singular poke<hr>1000 pokes every 5 minutes"
}; // Descriptions of all them items
var order = ["macro","pokepoke","fingers","motor","flares"]; // Order in which them items should be putted
var rates = {
    "macro":[10,1.1],
    "fingers":[30,1.2],
    "motor":[500,1.1],
    "flares":[750,1.3],
    "pokepoke":[100,1.2]
}; // (a,b) for f(x) = ax^b for them item prices
var effects = {
    "macro":()=>{
        return setInterval((timer)=>{
            angery++
        },15000)
    },
    "pokepoke":()=>{
        return setInterval((timer)=>{
            angery+=1
        },1000)
    },
    "fingers":()=>{ppc++},
    "motor":()=>{
        return setInterval((timer)=>{
            angery++
        },1000/20)
    },
    "flares":()=>{
        return setInterval((timer)=>{
            angery+=1000
        },5*60*1000)
    }
};