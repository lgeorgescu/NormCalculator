const numberOfGames = 9;
var a, b, c, d, e, f, g, h, i;
var score

document.getElementById("calculate").addEventListener("click", calculatePerformance);

document.getElementById("adjustLowest").addEventListener("click", changeVisibilityOfTitleSelection);

function calculatePerformance(){
        readRatings();
        var bool=titleSelectionIsVisible();
        if (bool){
                raiseLowest();
        }
        var average = averageOfNine(a, b, c, d, e, f, g, h, i);
        var result = addRatingDifference(average, score, numberOfGames);
        document.getElementById('result').innerHTML = result;
}


function readRatings(){
        a = document.getElementById('a').value;
        a = parseFloat(a);
        b = document.getElementById('b').value;
        b = parseFloat(b);
        c = document.getElementById('c').value;
        c = parseFloat(c);
        d = document.getElementById('d').value;
        d = parseFloat(d);
        e = document.getElementById('e').value;
        e = parseFloat(e);
        f = document.getElementById('f').value;
        f = parseFloat(f);
        g = document.getElementById('g').value;
        g = parseFloat(g);
        h = document.getElementById('h').value;
        h = parseFloat(h);
        i = document.getElementById('i').value;
        i = parseFloat(i);
        score=document.getElementById('score').value;
        score = parseFloat(score);
}

//Change text on button as well as visibility
function titleSelectionIsVisible(){
        if (document.getElementById('kindOfTitle').style.visibility==="visible"){
                return true;
        }
        return false;
}


function changeVisibilityOfTitleSelection(){
        if (document.getElementById('kindOfTitle').style.visibility==="visible"){
                document.getElementById('kindOfTitle').style.visibility="hidden";
                document.getElementById('adjustLowest').innerHTML = "Adjust rating floor";
        }
        else if (document.getElementById('kindOfTitle').style.visibility==="hidden"){
                document.getElementById('kindOfTitle').style.visibility="visible";
                document.getElementById('adjustLowest').innerHTML = "Don't adjust";
        
        }
}

function raiseLowest(){
        var selectedTitle = document.getElementById('titleChoice').value;
        var newValue; 
        switch (selectedTitle){
                case "gm":
                        newValue = 2200;
                        break;
                case "im":
                        newValue = 2050;
                        break;
                case "wgm":
                        newValue = 2000;
                        break;
                case "wim":
                        newValue = 1850;
                        break;
        }
        var lowest = Math.min(a, b, c, d, e, f, g, h, i);
        //Couldn't find a more elegant way to do that as js is pass by value, it disgusts me slightly though
        setToNewValue(lowest, newValue);    
}

function setToNewValue (oldValue, newValue){
        if (a===oldValue){
                a=newValue;
        }
        else if (b===oldValue){
                b=newValue;
        }
        else if (c===oldValue){
                c=newValue;
        }
        else if (d===oldValue){
                d=newValue;
        }
        else if (e===oldValue){
                e=newValue;
        }
        else if (f===oldValue){
                f=newValue;
        }
        else if (g==lowest){
                g=newValue;
        }
        else if (h===oldValue){
                h=newValue;
        }
        else if (h===oldValue){
                h=newValue;
        }
}



function averageOfNine(a, b, c, d, e, f, g, h, i){
    var sum = a + b + c + d + e + f + g + h + i;
    var average = sum / 9;
    return average;
}

// From FIDE handbook: All percentages are rounded to the nearest whole number. 0.5 % is rounded up.
function addRatingDifference(average, score, numberOfGames){
    var percentage = score / numberOfGames;
    percentage *= 100;
    percentage = Math.round(percentage); //always round .5 up
    var difference;
    switch (percentage){
        case 100: 
                difference = 800;
                break;
        case 99: 
                difference = 677;
                break;
        case 98: 
                difference = 589;
                break;
        case 97: 
                difference = 538;
                break;
        case 96: 
                difference = 501;
                break;
        case 95:
                difference = 490;
                break; 
        case 94: 
                difference = 444;
                break;
        case 93: 
                 difference = 422;
                break;
        case 92: 
                difference = 401;
                break;
        case 91: 
                difference = 383;
                break;
        case 90:   
                difference = 366;
                break;      
        case 89: 
                difference = 351;
                break;
        case 88: 
                difference = 336;
                break;
        case 87: 
                difference = 322;
                break;
        case 86:
                difference= 309;
                break;   
        case 85: 
                difference = 296;
                break;
        case 84: 
                difference = 284;
                break;
        case 83: 
                difference = 273;
                break;
        case 82: 
                difference = 262;
                break;
        case 81: 
                difference = 251;
                break;
        case 80: 
                difference = 240;
                break;
        case 79: 
                difference = 230;
                break;
        case 78: 
                difference = 220;
                break;
        case 77: 
                difference = 211;
                break;
        case 76: 
                difference = 202;
                break;
        case 75: 
                difference = 193;
                break;
        case 74: 
                difference = 184;
                break;
        case 73: 
                difference = 175;
                break;
        case 72: 
                difference = 166;
                break;
        case 71: 
                difference = 158;
                break;
        case 70: 
                difference = 149;
                break;
        case 69: 
                difference = 141;
                break;
        case 68: 
                difference = 133;
                break;
        case 67: 
                difference = 125;
                break;
        case 66: 
                difference = 117;
                break;   
        case 65: 
                difference = 110;
                break;
        case 64: 
                difference = 102;
                break;
        case 63: 
                difference = 95;
                break;
        case 62: 
                difference = 87;
                break;
        case 61: 
                difference = 80;
                break;
        case 60: 
                difference = 72;
                break;
        case 59: 
                difference = 65;
                break;
        case 58:  
                difference = 57;
                break;       
        case 57: 
                difference = 50;
                break;
        case 56: 
                difference = 43;
                break;
        case 55: 
                difference = 36;
                break;
        case 54: 
                difference = 29;
                break;
        case 53: 
                difference = 21;
                break;
        case 52: 
                difference = 14;
                break; 
        case 51:  
                difference = 7;
                break;      
        case 50: 
                difference = 0;
                break;
        case 49: 
                difference = -7;
                break;
        case 48: 
                difference = -14;
                break;
        case 47: 
                difference = -21;
                break;
        case 46: 
                difference = -29;
                break;
        case 45: 
                difference = -36;
                break;
        case 44: 
                difference = -43;
                break;
        case 43: 
                difference = -50;
                break;
        case 42: 
                difference = -57;
                break;
        case 41: 
                difference = -65;
                break;
        case 40: 
                difference = -72;
                break;
        case 39: 
                difference = -80;
                break;
        case 38: 
                difference = -87;
                break;
        case 37: 
                difference = -95;
                break;
        case 36:
                difference = -102;
                break;
        case 37: 
                difference = -95;
                break;
        case 36: 
                difference = -102;
                break;
        case 35: 
                difference = -110;
                break;
        case 34:
                difference = -117;
                break; 
        case 33: 
                difference = -125;
                break;
        case 32: 
                difference = -133;
                break;
        case 31: 
                difference = -141;
                break;
        case 30:     
                difference = -149;
                break;    
        case 29: 
                difference = -158;
                break;
        case 28: 
                difference = -166;
                break;
        case 27: 
                difference = -175;
                break;
        case 26: 
                difference = -184;
                break;
        case 25: 
                difference = -193;
                break;
        case 24: 
                difference = -202;
                break;
        case 23: 
                difference = -211;
                break;
        case 22: 
                difference = -220;
                break;
        case 21: 
                difference = -230;
                break;
        case 20: 
                difference = -240;
                break;
        case 19: 
                difference = -251;
                break;
        case 18: 
                difference = -262;
                break;
        case 17: 
                difference = -273;
                break;
        case 16: 
                difference = -284;
                break;
        case 15: 
                difference = -296;
                break;
        case 14: 
                difference = -309;
                break;
        case 13: 
                difference = -322;
                break;
        case 12:
                difference = -336;
                break; 
        case 11: 
                difference = -351;
                break;
        case 10:    
                difference = -366;
                break;     
        case  9: 
                difference = -383;
                break;
        case  8: 
                difference = -401;
                break;
        case  7:  
                difference = -422;
                break;
        case  6:
                difference = -444;
                break;
        case  5:
                difference = -470;
                break;
        case  4: 
                difference = -501;
                break;
        case  3: 
                difference = -538;
                break;
        case  2: 
                difference = -589;
                break;
        case  1: 
                difference = -677;
                break;
        case  0: 
                difference = -800;
                break;       
        //default: throw some exception somehow?
    }  
        var result = average + difference;
        return result;
    }


