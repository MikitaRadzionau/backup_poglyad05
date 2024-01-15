let http = new XMLHttpRequest();
http.open('get', "/data/subs.json", true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let subs = JSON.parse(this.responseText);
      let output = "";
      for(let item of subs){
        output += `
        <a href="/watch?c="><img src="${item.icon}" alt="nope"><p>${item.name}</p></a>
        `;
      }
      document.querySelector(".subs-list").innerHTML = output;
   }
}
// 

