

document.addEventListener("DOMContentLoaded", function () {
let series = document.getElementById("series");
let find = document.getElementById("find");
function renderData(result)
{
    const resDiv = document.createElement("div");
    resDiv.className="row";
    resDiv.className = "card";
    resDiv.innerHTML = `

    
    
    
    <img src="${result.image_url}"    />
    <h2 style ="text-align:center"> Title:  <strong>${result.title}</strong></h2>
    <h5 style ="text-align:center">Start date: ${result.start_date}</h5>
    <h5 style ="text-align:center">End date: ${result.end_date}</h5>
    <h5 style ="text-align:center">Type: ${result.type}</h5>
    <h5 style ="text-align:center">IMDB rating: ${result.score}</h5>
     </div>
     
    <br>
    <br>
    
   
    `;

    series.appendChild(resDiv);
}

function renderAll(res,inp) {
    series.innerHTML = "";
    res.filter(i => {i.title ===inp});
    res.forEach((x) => {
          
     x.start_date=x.start_date.slice(0,10);
     x.end_date=x.end_date.slice(0,10);
     
        renderData(x)});
  }





    find.addEventListener('click', e =>{
        var inputVal = document.getElementById("myInput").value;
        console.log(inputVal);
        e.preventDefault();
        fetch('https://api.jikan.moe/v3/search/anime?q='+inputVal)
        .then(response => {return response.json()})
        .then(data => renderAll(data.results,inputVal))
        .catch(e => console.log(e.message));
        
    });
        
       
   
        
        
        
        
       


  
      
        
    

});

