function getLADataFromAPI(){
  var endpoint ='https://data.lacity.org/resource/x89j-rsr4.json'
  
  
  fetch(endpoint)
  .then(function(data){
    return data.json()
  })
  .then(function(json){
    console.log(json)
        var finalHTML = ''
    resultDiv = document.getElementById('result')
    //resultDiv.innerHTML = JSON.stringify(json, undefined, 2)
    
    json.forEach(function(item){
      var cardItem = 
      `
      <div class="col s12 m7">
          <h2 class="header">Hi, How you doin?</h2>
          <div class="card horizontal">
            <div class="card-image">
              <img src="http://lorempixel.com/100/190/nature/6">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>On the day ${item.dispatchDate} around the area ${item.areaOcc} there were reports of ${item.callType} . </p>
              </div>
             
            </div>
          </div>
        </div>
                  
      `
      finalHTML += cardItem
    })
    
    // var wantedData = json.map(function(item){
    //   var callType = item.call_type_text
    //   var areaOcc = item.area_occ
    //   var dispatchDate = item.dispatch_date
    //   return 'On the day ' + dispatchDate + ' around the area ' + areaOcc + ' there were reports of' + dispatchDate + '.'
    // })
    // var htmlForWantedData = wantedData.map(function(string){
    //   return '<li>' + string + '</li>'
    // })

    // htmlForWantedData.forEach(function(listItem){
    //   finalHTML += listItem
    // })
    resultDiv.innerHTML = finalHTML
  })
  .catch(function(error){
    console.log(error)
  })


//function getData(){
//    var endpoint = 'https://controllerdata.lacity.org/resource/f3p3-3myx.json'
//    
//    fetch(endpoint)
//    .then(function(data){
//        return data.json()
//    }) // turn data into JSOn
//    .then(function(json){
//        console.log(json)
//        var finalHTML = ''
//        json.forEach(function(item){
//            var cardItem = `
//                    <div class="col s6 m4">
//                      <div class="card">
//                        <div class="card-image">
//                          <img src="http://www.thebluediamondgallery.com/wooden-tile/images/salary.jpg">
//                          <span class="card-title">${item.item.call_type_text}</span>
//                        </div>
//                        <div class="card-content">
//                          <p>
//                            The area occ was ${item.area_occ} 
//                            and the dispatch date was ${item.dispatch_date} 
//                          </p>
//                        </div>
//                        <div class="card-action">
//                          <a href="#">This is a link</a>
//                        </div>
//                      </div>
//                    </div>
//            `
//            finalHTML += cardItem
//        })
//        
//        var resultDiv = document.getElementById('result')
//        resultDiv.innerHTML = finalHTML
//    }) // do something with data
//    .catch(function(error){
//        console.log(error)
//    }) // catch any errors
//}



}



















































































































































































































//function getData(){
//    var endpoint = 'https://data.lacity.org/resource/x89j-rsr4.json'
//    
//    fetch(endpoint)
//    .then(function(data){
//        return data.json()
//    }) // turn data into JSOn
//    .then(function(json){
//        console.log(json)
//        var finalHTML = ''
//        json.forEach(function(item){
//            var cardItem = `
//                    <div class="col s6 m4">
//                      <div class="card">
//                        <div class="card-image">
//                          <img src="http://www.thebluediamondgallery.com/wooden-tile/images/salary.jpg">
//                          <span class="card-title">${item.department_title}</span>
//                        </div>
//                        <div class="card-content">
//                          <p>
//                            The average salary for males  is ${item.male_average_salary} 
//                            and the female average salary is ${item.female_average_salary} 
//                          </p>
//                        </div>
//                        <div class="card-action">
//                          <a href="#">This is a link</a>
//                        </div>
//                      </div>
//                    </div>
//            `
//            finalHTML += cardItem
//        })
//        
//        var resultDiv = document.getElementById('result')
//        resultDiv.innerHTML = finalHTML
//    }) // do something with data
//    .catch(function(error){
//        console.log(error)
//    }) // catch any errors
//}