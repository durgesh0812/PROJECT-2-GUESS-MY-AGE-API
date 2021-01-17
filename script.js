  let input=document.getElementById("input1")
  let searchbtn=document.querySelector("#search1")
  searchbtn.addEventListener("click",()=>{
      console.log("button pressed")
      sendapirequest()
  }) 



  async function sendapirequest(){
    let inputData = input1.value;
    
   let response=await fetch(`https://api.agify.io?name=${inputData}`)
 
  console.log(response)
    let data=await response.json();
    console.log(data)
    useapidata(data)





}
function useapidata(data)

{
     document.querySelector("#content").innerHTML=`
     <div class="container">
   <div style="text-align:center";>
   <div class="card text-white bg-dark mb-3 "  style="max-width: 100rem; ">
  <div class="card-header" ><p style=" font-family: 'Yusei Magic', sans-serif";>YOUR AGE IS:</p></div>
  <div class="card-body">
   
  <p class="card-text"style=" font-family: 'Yusei Magic', sans-serif";>YOUR NAME:${data.name}</p>
  <p class="card-text"style=" font-family: 'Yusei Magic', sans-serif";>GUESSED AGE:${data.age}</p>
  
  <a href="index.html" class="btn btn-primary"style=" font-family: 'Yusei Magic', sans-serif";>REFRESH</a>
  </div>
</div></div></div>
     `
}
