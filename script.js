function bmi(){
    var height = parseInt (document.getElementById('height').value);
    var weight = parseInt(document.getElementById('weight').value);
    var bmi1 = weight/height*height
    document.getElementById('res').value = bmi1
    if(bmi1<=18.5){
        document.getElementById('res').innerHTML = 'Underweight'
    }
    else if (bmi1<18.5 && bmi>=25.4){
        document.getElementById('res').innerHTML =  'Normal'
    }
    else{
        document.getElementById('res').innerHTML= 'Overweight'
    }

  


}