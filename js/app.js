

  const despositBtn=document.getElementById("despositBtn");


  const deposit = () => {
    const depoInput= parseFloat(
        document.getElementById("depoInput").value
    );
    document.getElementById("depoInput").value ="";

    const DepositAmount =parseFloat(
        document.getElementById("DepositAmount").innerText
    );


    const Displaydepos= depoInput+DepositAmount;
    document.getElementById("DepositAmount").innerText=Displaydepos;


   const total=document.getElementById("total").innerText;
   document.getElementById("total").innerText=Displaydepos;

  }

  despositBtn.addEventListener("click", deposit);

   
  //withdraw

   

   const widthBtn=document.getElementById("widthBtn");

   const getAmount = () => {
    const widthInput=parseFloat(document.getElementById("widthInput").value);
    document.getElementById("widthInput").value="";
    console.log(widthInput);

    const displayWidth =parseFloat(
        document.getElementById("displayWidth").innerText
    );
   const disTotal=widthInput+displayWidth;
   document.getElementById("displayWidth").innerText=disTotal;

  const totalMoney= document.getElementById("total").innerText;
    
  const final= totalMoney-disTotal;
  document.getElementById("total").innerText=final;

   }

   widthBtn.addEventListener("click", getAmount);
