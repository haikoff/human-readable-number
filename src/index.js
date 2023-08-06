module.exports = function toReadable (str) {
  let dlinna = String(str).length
    switch (dlinna){
        case 1:
            return first10(str)
            break;
        case 2:
            return first100(str)
        case 3:{
            switch (String(str)[0]){
                case '1':
                    if (String(str)[1] == 0 && String(str)[2] == 0){
                        return "one hundred"
                    }
                    else if (String(str)[1] == 0){
                       return ("one hundred " + first10(String(str)[2]))
                    }
                    else {
                        return "one hundred " + first1000(str);
                    }
                case '2':
                    if (String(str)[1] == 0 && String(str)[2] == 0){
                        return "two hundred"
                    }
                    else if (String(str)[1] == 0){
                        return ("two hundred " + first10(String(str)[2]))
                    }
                    else {
                        return "two hundred " + first1000(str);
                    }
                case '3':
                    if (String(str)[1] == 0 && String(str)[2] == 0){
                        return "three hundred"
                    }
                    else if (String(str)[1] == 0){
                        return "three hundred " + first10(String(str)[2])
                    }
                    else {
                        return "three hundred " + first1000(str);
                    }    
                case '4':
                    if (String(str)[1] == 0 && String(str)[2] == 0){
                        return "four hundred"
                    }
                    else if (String(str)[1] == 0){
                        return "four hundred " + first10(String(str)[2])
                    }
                    else {
                        return "four hundred " + first1000(str);
                    }   
                case '5':
                    if (String(str)[1] == 0 && String(str)[2] == 0){
                        return "five hundred"
                    }
                    else if (String(str)[1] == 0){
                        return "five hundred " + first10(String(str)[2])
                    }
                    else {
                        return "five hundred " + first1000(str);
                    }  
                case '6':
                if (String(str)[1] == 0 && String(str)[2] == 0){
                    return "six hundred"
                }
                else if (String(str)[1] == 0){
                    return "six hundred " + first10(String(str)[2])
                }
                else {
                    return "six hundred " + first1000(str);
                    }    
                case '7':
                    if (String(str)[1] == 0 && String(str)[2] == 0){
                        return "seven hundred"
                    }
                    else if (String(str)[1] == 0){
                        return "seven hundred " + first10(String(str)[2])
                    }
                    else {
                        return "seven hundred " + first1000(str);
                    } 
                case '8':
                    if (String(str)[1] == 0 && String(str)[2] == 0){
                        return "eight hundred"
                    }
                    else if (String(str)[1] == 0){
                        return "eight hundred " + first10(String(str)[2])
                    }
                    else {
                        return "eight hundred " + first1000(str);
                    } 
                case '9':
                    if (String(str)[1] == 0 && String(str)[2] == 0){
                        return "nine hundred"
                    }
                    else if (String(str)[1] == 0){
                        return "nine hundred " + first10(String(str)[2])
                    }
                    else {
                        return "nine hundred " + first1000(str);
                    } 

            }
        }
    }
}

function first10 (str){
    switch (String(str)){
        case '1':
            return 'one'
            break;
        case '2':
            return 'two'
            break;  
        case '3':
            return 'three'
            break;  
        case '4':
            return 'four'
            break;     
        case '5':
            return 'five'
            break;
        case '6':
            return 'six'
            break;
        case '7':
            return 'seven'
            break;  
        case '8':
            return 'eight'
            break;  
        case '9':
            return 'nine'
            break;     
        case '0':
            return 'zero'
            break;           
    }
}                 

function first100 (str){
    switch (String(str)[0]){
        case '1':
            switch (str){
                case 10:
                    return 'ten'
                    break;
                case 11:
                    return 'eleven'
                    break;  
                case 12:
                    return 'twelve'
                    break;  
                case 13:
                    return 'thirteen'
                    break;     
                case 14:
                    return 'fourteen'
                    break;
                case 15:
                    return 'fifteen'
                    break;
                case 16:
                    return 'sixteen'
                    break;  
                case 17:
                    return 'seventeen'
                    break;  
                case 18:
                    return 'eighteen'
                    break;     
                case 19:
                    return 'nineteen'
                    break;           
            }
        break;   
        case '2':
            return first10(String(str)[1]) == 'zero'? 'twenty': 'twenty ' + first10(String(str)[1]); 
        case '3':
            return first10(String(str)[1]) == 'zero'? 'thirty': 'thirty ' + first10(String(str)[1]); 
        case '4':
            return first10(String(str)[1]) == 'zero'? 'forty': 'forty ' + first10(String(str)[1]); 
        case '5':
            return first10(String(str)[1]) == 'zero'? 'fifty': 'fifty ' + first10(String(str)[1]); 
        case '6':
            return first10(String(str)[1]) == 'zero'? 'sixty': 'sixty ' + first10(String(str)[1]); 
        case '7':
            return first10(String(str)[1]) == 'zero'? 'seventy': 'seventy ' + first10(String(str)[1]); 
        case '8':
            return first10(String(str)[1]) == 'zero'? 'eighty': 'eighty ' + first10(String(str)[1]); 
        case '9':
            return first10(String(str)[1]) == 'zero'? 'ninety': 'ninety ' + first10(String(str)[1]); 
    }
}

function first1000 (str){
    switch (String(str)[1]){
        case '1':
            switch (String(str)[1]+String(str)[2]){
                case "10":
                    return 'ten'
                    break;
                case "11":
                    return 'eleven'
                    break;  
                case "12":
                    return 'twelve'
                    break;  
                case "13":
                    return 'thirteen'
                    break;     
                case "14":
                    return 'fourteen'
                    break;
                case "15":
                    return 'fifteen'
                    break;
                case "16":
                    return 'sixteen'
                    break;  
                case "17":
                    return 'seventeen'
                    break;  
                case "18":
                    return 'eighteen'
                    break;     
                case "19":
                    return 'nineteen'
                    break;           
            }
        break;   
        case '2':
            return first10(String(str)[2]) == 'zero'? 'twenty': 'twenty ' + first10(String(str)[2]); 
        case '3':
            return first10(String(str)[2]) == 'zero'? 'thirty': 'thirty ' + first10(String(str)[2]); 
        case '4':
            return first10(String(str)[2]) == 'zero'? 'forty': 'forty ' + first10(String(str)[2]); 
        case '5':
            return first10(String(str)[2]) == 'zero'? 'fifty': 'fifty ' + first10(String(str)[2]); 
        case '6':
            return first10(String(str)[2]) == 'zero'? 'sixty': 'sixty ' + first10(String(str)[2]); 
        case '7':
            return first10(String(str)[2]) == 'zero'? 'seventy': 'seventy ' + first10(String(str)[2]); 
        case '8':
            return first10(String(str)[2]) == 'zero'? 'eighty': 'eighty ' + first10(String(str)[2]); 
        case '9':
            return first10(String(str)[2]) == 'zero'? 'ninety': 'ninety ' + first10(String(str)[2]); 
    }
}