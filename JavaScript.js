var radios = document.getElementsByName('gender');
//var dateControl = document.querySelector('input[type="date"]');
var wiek = 0;

function send() {
    var wiek = getAge()
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value == "female") {
                if(wiek < 5 && wiek > 0) {
                    changeText("Niestety jesteś za młoda!");
                    return false;
                } else if(wiek > 20) {
                    changeText("Niestety jesteś za stara!");
                    return false;
                }
                
            }
            else if(radios[i].value == "male") {
                if(wiek < 5 && wiek > 0) {
                    changeText("Niestety jesteś za młody!");
                    return false;
                } else if(wiek > 20) {
                    changeText("Niestety jesteś za stary!");
                    return false;
                }
                
            }
            else if(radios[i].value == "other") {
                if(wiek < 5 && wiek > 0)  {
                    changeText("Niestety jesteś za młod... Niestety masz za mało lat!");
                    return false;
                } else if(wiek > 20) {
                    changeText("Niestety jesteś za star... Niestety masz za dużo lat!");
                    return false;
                }
                
            }

            if(wiek <= 10 && wiek > 0) {
                changeText("Należysz do kategorii Rookie!");
            } else if(wiek <= 15 && wiek > 0) {
                changeText("Należysz do kategorii Skilled!");
            } else if (wiek > 0) {
                changeText("Należysz do kategorii Master!");
            }
          
      
          // only one radio can be logically checked, don't check the rest
          break;
        }
      } 

      

}

function getAge() {
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      alert( "Podaj datę urodzenia!");    
      return false;   
    } else {  
      
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    if(year >1970) {
        var age = Math.abs(year - 1970); 
        return age; 
    }
    else {
        alert("Podaj prawidłową datę urodzenia!");
        return false;
    }

 
    }
}

function changeText(value) {
    document.getElementById('result_p').innerHTML = value;
}