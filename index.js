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
 switch(tip) { 
  case "generous": 
    say = "Thank you so much."; 
    return say
  break; 
  case "not as generous":
    say = "Thank you.";
    return say 
  break; 
  case "thanks for everything": 
    say = "Bye."
    return say 
  break;
    }
}
