// var query = escape('select item from weather.forecast where location="CHXX0049"'),
//     url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&callback=?"; 
// $.getJSON(url, function(data) {
//     console.log("Hong Kong: ", data.query.results.channel.item.condition);
// });
var tokyo = "1118370";
var hk = "24865698";
var paris = "615702";
var mountainView = "2455920";
var cairo = "1521894";
var forecastFlag = false;

// var triggerButton = document.getElementById('trigger');

//-----------------------------------
$(document).ready(function() {
  var $ul = $('.accordion');
  var forecast = [];
  var $content = $('#content');
  var jsonApi = function(location){
    var $url = "http://query.yahooapis.com/v1/public/yql?callback=?";
      $.getJSON($url, 
      {
        q: "select * from xml where url=" + "\"http://weather.yahooapis.com/forecastrss?w=" + location + "\"",
        format: "json"
      }, function (data) {
          var forecastTmr = data.query.results.rss.channel.item.forecast[0];
        	var forecastSecondDay = data.query.results.rss.channel.item.forecast[1];
        	var forecastThirdDay = data.query.results.rss.channel.item.forecast[2];
        if(location === tokyo){
          // $ul.append("<li id='tokyo'><button class='accordion-control'>"+"Tokyo"+"</button><div class='accordion-panel'><p>"+"humidity: "+ data.query.results.rss.channel.atmosphere.humidity+"</p>"
            // +"<p>"+"Temperature: "+data.query.results.rss.channel.item.condition.temp+"</p></div></li>");
          // +"<p>"+"temperature: "+ 
            // data.query.results.rss.channel.item.condition.temp+" F"+"</p>"
              $('#tokyo').append("<div class='accordion-panel'><p><center>"+"humidity: "+ data.query.results.rss.channel.atmosphere.humidity+"</p>"
            	+"<p>"+"Temperature: "+temperatureFontColor(data.query.results.rss.channel.item.condition.temp)+"</p><p><button id='tokyoId' class='trigger-button' type='button'>"+"Forecast"
            	+"</button><center></p></div>");
          	// var $content = $('#share-options').detach();
          	// console.log(data.query.results.rss.channel.item.forecast[0]);
            $(document).on('click',"#tokyoId",function() {
          		forecast[0] = "<li><center>"+"Weather Forecast"+"<p>"+"<strong>"+"Tomorrow: "+"</strong>"
                +temperatureFontColor(forecastTmr.low)+"F /"+temperatureFontColor(forecastTmr.high)+"F"
                +"<p><strong>"+forecastSecondDay.day+":</strong>"+temperatureFontColor(forecastSecondDay.high)
                +"F /"+temperatureFontColor(forecastSecondDay.low)+"F"+"<p><strong>"+forecastThirdDay.day+":</strong>"
                +temperatureFontColor(forecastThirdDay.high)+"F /"+temperatureFontColor(forecastThirdDay.low)+"F</center></li>";
                forecastModal(forecast[0]);
            });
        }
        if(location === hk){
        	// $ul.append("<li id='hk'>"+"<button class='accordion-control'>"+"Hong Kong"+"</button><div class='accordion-panel'><p>"+"humidity: "+data.query.results.rss.channel.atmosphere.humidity+"</p>"
        		// +"<p>"+"Temperature: "+data.query.results.rss.channel.item.condition.temp+"</p></div></li>");
			     $('#hk').append("<div class='accordion-panel'><p><center>"+"humidity: "+ data.query.results.rss.channel.atmosphere.humidity+"</p>"
          	 +"<p>"+"Temperature: "+temperatureFontColor(data.query.results.rss.channel.item.condition.temp)+"</p><p><button id='hkId' class='trigger-button' type='button'>"+"Forecast"
          	 +"</button></center></p></div>");
          $(document).on('click','#hkId',function() {
            forecast[1] = "<li><center>"+"Weather Forecast"+"<p>"+"<strong>"+"Tomorrow: "+"</strong>"
                +temperatureFontColor(forecastTmr.low)+"F /"+temperatureFontColor(forecastTmr.high)+"F"
                +"<p><strong>"+forecastSecondDay.day+":</strong>"+temperatureFontColor(forecastSecondDay.high)
                +"F /"+temperatureFontColor(forecastSecondDay.low)+"F"+"<p><strong>"+forecastThirdDay.day+":</strong>"
                +temperatureFontColor(forecastThirdDay.high)+"F /"+temperatureFontColor(forecastThirdDay.low)+"F</center></li>";
                forecastModal(forecast[1]);
          });
        }
        if(location === paris){
        	// $ul.append("<li id='paris'><button class='accordion-control'>"+"Paris"+"</button><div class='accordion-panel'><p>"+"humidity: "+data.query.results.rss.channel.atmosphere.humidity+"</p>"+"<p>"+"Temperature: "
        		// +data.query.results.rss.channel.item.condition.temp+"</p></div></li>");
			   $('#paris').append("<div class='accordion-panel'><p><center>"+"humidity: "+ data.query.results.rss.channel.atmosphere.humidity+"</p>"
              +"<p>"+"Temperature: "+temperatureFontColor(data.query.results.rss.channel.item.condition.temp)+"</p><p><button id='parisId' class='trigger-button' type='button'>"+"Forecast"
              +"</button></center></p></div>");
            $(document).on('click','#parisId',function() {
              forecast[2] = "<li><center>"+"Weather Forecast"+"<p>"+"<strong>"+"Tomorrow: "+"</strong>"
                +temperatureFontColor(forecastTmr.low)+"F /"+temperatureFontColor(forecastTmr.high)+"F"
                +"<p><strong>"+forecastSecondDay.day+":</strong>"+temperatureFontColor(forecastSecondDay.high)
                +"F /"+temperatureFontColor(forecastSecondDay.low)+"F"+"<p><strong>"+forecastThirdDay.day+":</strong>"
                +temperatureFontColor(forecastThirdDay.high)+"F /"+temperatureFontColor(forecastThirdDay.low)+"F</center></li>";
                forecastModal(forecast[2]);
            });
        }
        if(location === mountainView){
        	// $ul.append("<li id='mountainView'><button class='accordion-control'>"+"Mountain View"+"</button><div class='accordion-panel'><p>"+"humidity: "+data.query.results.rss.channel.atmosphere.humidity+"</p>"+"<p>"+"Temperature: "
        		// +data.query.results.rss.channel.item.condition.temp+"</p></div></li>");
			// $('#mountainView').append("<div class='accordion-panel'><p>"+"humidity: "+ data.query.results.rss.channel.atmosphere.humidity+"</p>"
          	// +"<p>"+"Temperature: "+data.query.results.rss.channel.item.condition.temp+"</p></div>");
  			    $('#mountainView').append("<div class='accordion-panel'><p><center>"+"humidity: "+ data.query.results.rss.channel.atmosphere.humidity+"</p>"
            	+"<p>"+"Temperature: "+temperatureFontColor(data.query.results.rss.channel.item.condition.temp)+"</p><p><button id='mountainViewId' class='trigger-button' type='button'>"+"Forecast"
            	+"</button></center></p></div>");
            $(document).on('click','#mountainViewId',function() {
               forecast[3]=("<li><center>"+"weather Forecast"+"<p>"+"<strong>"+"Tomorrow: "+"</strong>"
                  +temperatureFontColor(forecastTmr.low)+"F /"+temperatureFontColor(forecastTmr.high)+"F"
                  +"<p><strong>"+forecastSecondDay.day+":</strong>"+temperatureFontColor(forecastSecondDay.high)
                  +"F /"+temperatureFontColor(forecastSecondDay.low)+"F"+"<p><strong>"+forecastThirdDay.day+":</strong>"
                  +temperatureFontColor(forecastThirdDay.high)+"F /"+temperatureFontColor(forecastThirdDay.low)+"F</center></li>");
               forecastModal(forecast[3]);
             });
        }
        if(location === cairo){
        	// $ul.append("<li id='cairo'><button class='accordion-control'>"+"Cairo"+"</button><div class='accordion-panel'><p>"+"humidity: "+data.query.results.rss.channel.atmosphere.humidity+"</p>"+"<p>"+"Temperature: "
        		// +data.query.results.rss.channel.item.condition.temp+"</p></div></li>");
			$('#cairo').append("<div class='accordion-panel'><p><center>"+"humidity: "+ data.query.results.rss.channel.atmosphere.humidity+"</p>"
              +"<p>"+"Temperature: "+temperatureFontColor(data.query.results.rss.channel.item.condition.temp)+"</p><p><button id='cairoId' class='trigger-button' type='button'>"+"Forecast"
              +"</button></center></p></div>");
        }
        $(document).on('click','#cairoId',function() {
          forecast[4] = "<li><center>"+"Weather Forecast"+"<p>"+"<strong>"+"Tomorrow: "+"</strong>"
                +temperatureFontColor(forecastTmr.low)+"F /"+temperatureFontColor(forecastTmr.high)+"F"
                +"<p><strong>"+forecastSecondDay.day+":</strong>"+temperatureFontColor(forecastSecondDay.high)
                +"F /"+temperatureFontColor(forecastSecondDay.low)+"F"+"<p><strong>"+forecastThirdDay.day+":</strong>"
                +temperatureFontColor(forecastThirdDay.high)+"F /"+temperatureFontColor(forecastThirdDay.low)+"F<center></li>";
                forecastModal(forecast[4]);
              });
      }
    )

  }
  jsonApi(tokyo);
  function temperatureFontColor(temp){
  	if(temp >= 70){
  		return "<font color='red'>"+temp+"</font>";
  	}
  	else{
  		return "<font color='blue'>"+temp+"</font>";
  	}
  }



  $('.accordion').on('click', '.accordion-control', function(e){ // When clicked
  	e.preventDefault();                    // Prevent default action of button
  	var city = $(this).text();
  	if(city === "Tokyo"){
  		jsonApi(tokyo);
  	}
  	if(city === "Hong Kong"){
  		jsonApi(hk);
  	}
  	if(city === "Paris"){
  		jsonApi(paris);
  	}
  	if(city === "Mountain View"){
  		jsonApi(mountainView);
  	}
  	if(city === "Cairo"){
  		jsonApi(cairo);
  	}
  	$(this)                                // Get the element the user clicked on
    	.next('.accordion-panel')            // Select following panel 
    	.not(':animated')                    // If it is not currently animating
    	.slideToggle();                      // Use slide toggle to show or hide it
  });
  function forecastModal(temp){
      modal.open({
      content: temp,//"<li><center>"+"Weather Forecast"+"</center><p>"+"<strong>"+"Tomorrow: "+"</strong>"
                // +temperatureFontColor(forecastTmr.low)+"F /"+temperatureFontColor(forecastTmr.high)+"F"
                // +"<p><strong>"+forecastSecondDay.day+":</strong>"+temperatureFontColor(forecastSecondDay.high)
                // +"F /"+temperatureFontColor(forecastSecondDay.low)+"F"+"<p><strong>"+forecastThirdDay.day+":</strong>"
                // +temperatureFontColor(forecastThirdDay.high)+"F /"+temperatureFontColor(forecastThirdDay.low)+"F</li>",
               width:340,
               height:300
             });
  }
});
















