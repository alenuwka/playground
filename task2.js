function getScore(score){
    let grade;
    if(score >= 0 && score <= 100){
        if(score >= 90 && score <= 100){
            grade = "A";
            //console.log("Student have A"); 
        } else if(score >= 80 && score <= 89){
            grade = "B";
        }else if (score >= 70 && score <= 79){
            grade = "C";
        }else if (score >= 60 && score <= 69){
            grade = "D";
        }else if (score >= 50 && score <= 59){
            grade = "E";
        }else if (score < 50){
            grade = "F";
        }
        return grade;
    }else{
        console.log("wrong number!")
    }
        
};

getScore(89);