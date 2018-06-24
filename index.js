// Write your code in this file!

function scuberGreetingForFeet(someValue) {
    
    if (someValue <= 400) {
        return "This one is on me!"
    } 
    else if (someValue > 2000 && someValue < 2500) {
        return "I will gladly take your thirty bucks."
    }  
    else if (someValue > 2500) {
       return "No can do."
    }
    
}

function ternaryCheckCity(city) {
  return (city === "NYC") ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
 switch (tip) { 
    case "generous":
    let text = "Thank you so much";
    return text;
    case "not as generous":
    let text2 = "Thank you";
    return text2;
    case "thanks for everything":
 let text3  = "Bye";
 return text3;
  
 }
}
