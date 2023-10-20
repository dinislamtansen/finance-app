

  const despositBtn=document.getElementById("despositBtn");
 

  const deposit = () => {

   
     // getting input from user
    const depoInput= parseFloat(
        document.getElementById("depoInput").value
    );
    document.getElementById("depoInput").value ="";
    

    if(isNaN(depoInput)){
        alert("please insert minimum amount");
       
    }
    else{
        if(depoInput<1000){
            alert("Minimum 1000");
            
        }
        else{
            
        
            // empty input field
        
            const DepositAmount =parseFloat(
                document.getElementById("DepositAmount").innerText
            );
        
        //  total display deposit
            const Displaydepos= depoInput+DepositAmount;
            document.getElementById("DepositAmount").innerText=Displaydepos;
        
        // final amount
           const total=parseFloat(document.getElementById("total").innerText);
           document.getElementById("total").innerText=depoInput+total;
        }
              }

        }
   
      despositBtn.addEventListener("click", deposit);
  
   


   

   