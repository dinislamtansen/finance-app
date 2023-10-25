const ctx = document.getElementById('myChart');

 new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['deposit', 'total', 'withdraw'],
      datasets: [{
        label: '# Transaction',
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const depobtn =document.getElementById("despositBtn");
  depobtn.addEventListener("click",()=>{
    const displayDepo=parseFloat(document.getElementById("DepositAmount").innerText);
    chart.data.datasets[0].data[0]=displayDepo;

    chart.update();
    
    const totalDis=parseFloat(document.getElementById("total").innerText);
    chart.data.datasets[0].data[1]=totalDis;

    chart.update();
    
  });

  // withdraw chart
  const widBtn=document.getElementById("widthBtn");
  widBtn.addEventListener("click",()=>{
    const widamount= parseFloat(document.getElementById("displayWidth").innerText);
    chart.data.datasets[0].data[2]=widamount;
    chart.update();
    const totalDis=parseFloat(document.getElementById("total").innerText);
    chart.data.datasets[0].data[1]=totalDis;

    chart.update();

  })