const widthBtn=document.getElementById("widthBtn");

   const getAmount = () => {

    // input from user
    const widthInput=parseFloat(document.getElementById("widthInput").value);

        document.getElementById("widthInput").value="";
    // used alert for NAN value

        if(isNaN(widthInput)){
            alert("give minimum amount");
            }
     // else it will show total money on total id block(which will no change on total money)

            else{
                if(widthInput<1000){
                    alert("minimum 1000")
                }
                else{
                    const totalMoney= document.getElementById("total").innerText;
                if(widthInput>totalMoney){
                    alert("this transaction not possible");
                }
                else{
                    if(totalMoney<1000){
                        //used the comparison between user withdraw input and total ammount        
                      
                           alert("You cannot withdraw this amount");
                   }
                         
                // if the condition not match then it will show total withdrawamount  
                         else{
                           const displayWidth =parseFloat(
                               document.getElementById("displayWidth").innerText
                           );
               //  user withdraw amount+ withdrawtotal 
                          const disTotal=widthInput+displayWidth;
                          document.getElementById("displayWidth").innerText=disTotal;
                          const final= totalMoney-widthInput;
                          document.getElementById("total").innerText=final;
                           
                         }
                }
                }
                    

                   
                }
                
            }
            

   widthBtn.addEventListener("click", getAmount);
