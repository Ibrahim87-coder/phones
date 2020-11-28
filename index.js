fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(json => {
      for (let i = 0; i < json.length; i++) {

         
        var y = document.createElement('li');
        var content =  `<div class="card" style="width:400px">
                        <img class="card-img-top" src="FFF" alt="Flowers in Chania">
                        <div class="card-body">
                        <h4 class="card-title">YYY / DDD</h4>
                        <p class="card-text">ZZZ <br>AAA <br>  SSS</p>
                        <a href="HHH" class="btn btn-outline-info">More Details</a>
                        </div>
                          </div> `

        var test= content.replace("XXX",json[i].name);
        test= test.replace("YYY",json[i].name);
        test= test.replace("DDD",json[i].Type);
        test= test.replace("FFF",json[i].photo);
        test= test.replace("HHH",json[i].link);

        test= test.replace("ZZZ","RAM : "  + json[i].RAM);
        test= test.replace("SSS", " Storage : " +json[i].Storage);
        test= test.replace("AAA","Price ($$$) : " + json[i].Price);
       
        y.innerHTML =test;
        y.className = "list-group-item";
        document.getElementById('myUL').appendChild(y);

                                              

      }
      
  })
