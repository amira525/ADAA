//my team
(function($) {

  /* Select the checkbox */
  var checkList = $('.check'),
      toDoCheck = checkList.children('input[type="checkbox"]');

  /* Check out whether checkbox is checked, and add 'task-checked' class to
    the closest <li> item
  */
  toDoCheck.each(function(index, element) {
    var $this = $(element),
        taskItem = $this.closest('li');

    $this.on('click', function(e) {
      taskItem.toggleClass('task-checked');
    });
  });

  })(jQuery);

//services
$(function () {
  'use strict';

  $('#all_service li').click(function () {
                  
      var myID = $(this).attr('id');
              
      $(this).removeClass('inactive').siblings('li').addClass('inactive');
              
      $('.all-services > div').hide();
              
      $('#' + myID + '-screen').show();
      
  });
});
// jquery
  $(document).ready(function () {
    'use strict';
    // slick slider
    $('.teams-slider').slick({
      rtl: document.dir === "rtl" ? true : false,
      slidesToShow: 3,
      prevArrow: '<span class="slick-prev"><i class="fas fa-caret-left"></i></span>',
      nextArrow: '<span class="slick-next"><i class="fas fa-caret-right"></i></span>',
    // });
    responsive: [{
 
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      }
 
    
 
    }]
});
    
  });
  

  function results() {
  // show the results and hide the form
  const resultsWrap = document.getElementById("results"); resultsWrap.setAttribute(
     "style", "opacity:1;height:auto;");
  document.getElementById("pollForm").style.display = "none";
    
  // example of a json array you'd be working with
  const json = [{
      "item" : "ممتازة", 
      "votes"   : 90,
      "data" : "yes"
    },
    {
      "item" : "تحتاج لتعديل", 
      "votes"   : 77,
      "data" : "no"
  }];
  
  // get total votes so you can calculate the percentages
  var votingTotal = json.reduce(function(prev, cur) {
    return prev + cur.votes;
  }, 0);
  
  var foodPerc = 0;
  // loop through the data
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
     // calculate the percentage
     var itemPerc = ((json[key].votes / votingTotal) * 100).toFixed(1);
      // create divs/spit out the data
      resultsDiv = document.createElement("div");
      resultsDiv.innerHTML = "<strong>" + json[key].item + ":</strong> " + itemPerc + "%";
      var childElement = "<div style='width:0;' data-width='" + itemPerc + "' id='" + json[key].data + "Results'></div>";
      resultsDiv.innerHTML += childElement;
      resultsWrap.appendChild(resultsDiv);
    }
  } 
    
  // Get the user's choice
  const userPick = document.getElementById('pollForm').elements['poll'].value;
    
  // Find the largest vote value
  var maxVote = json.reduce(function (prev, current) {
     return (prev.votes > current.votes) ? prev : current
  });
    
  // Change the width of the child divs (delayed so you see it change)
  setTimeout(function(){
    var childElem = document.querySelectorAll("#results div");
    for(var i = 0; i < childElem.length; i++) {    
      var theWidth = childElem[i].getAttribute("data-width");
      childElem[i].style.width = theWidth + "%";
    }
  }, 200);
  
  }
  // document.querySelector('#social-button').onclick = function(){
  //   console.log(000);
  //   document.querySelector('#social-list').style.display = 'block'
  // }
  //target
  $(document).on("click", "li", function(){
    $(this).toggleClass("completed");
  });
  
  $(document).on("click", "li span", function(){
    $(this).parent().fadeOut(function(){
      $(this).remove();
    });
  })
  
  $("input[type='text']").on("keypress", function(){
    if(event.which == 13){
      var newItem = "<li><span><i class='fas fa-trash-alt'></i></span>" + $(this).val() + "</li>";
      $("ul").append(newItem);
      $(this).val("");
    }
  });
  
  $("h1 i").click(function(){
    $(".slide").slideToggle();
  });
  $('.total').hover(function () {
    $(this).find('span').eq(0).animate({
        width: document.querySelector('.target-color').getAttribute('data-progress')+ '%',
        opacity:1
    }, 300);
}, function () {
    $(this).find('span').eq(0).animate({
        width: 0,
        opacity:0
    }, 300);
});
var html = document.querySelector(".main_tag");
        if (html.getAttribute("dir") == "rtl"){
            console.log("hi ahmed");
        }else{

            console.log("hi amira");
            
            this.style.direction = "ltr";
        }
        var bersintge_one = document.querySelector('.outer-one');
        var chart= document.querySelector('.chart');
        if(chart.getAttribute('data-percent') > '50'){
          bersintge_one.style.stroke= '#198754';
          console.log("hello")
        }else{
          bersintge_one.style.stroke= '#ba2026';
          console.log("hi")
        }
        var bersintge_two = document.querySelector('.outer-two');
        if(chart.getAttribute('data-percent') < '50'){
          bersintge_two.style.stroke= '#198754';
          console.log("hello")
        }
        if(bersintge_two.style.strokeDasharray > '268'){
          bersintge_two.style.stroke= '#ba2026';
          console.log("hi")
        }
        var bersintge_three = document.querySelector('.outer-three');
        if(chart.getAttribute('data-percent') < '50'){
          bersintge_three.style.stroke= '#198754';
          console.log("hello")
        }
        if(bersintge_three.style.strokeDasharray < '268'){
          bersintge_three.style.stroke= '#ba2026';
          console.log("hi")
        }
        var color = document.querySelector('.target-color').getAttribute('data-progress')
          var total = document.querySelector('.total');
          document.querySelector('.target-color').style.width = document.querySelector('.target-color').getAttribute('data-progress')+"%"
          if(0 < color < 26){
            total.style.border = '2px solid red';
          }
          if(25 < color > 51){
            total.style.border = '2px solid orange';
          }
          if(50 < color < 76){
            total.style.border = '2px solid yellow';
          }
          if(75 < color < 100){
            total.style.border = '2px solid green';
          }
          function changeColorRed(){
            if(color < 26){
              total.style.border = '2px solid red';
            }
            if(color > 25){
              total.style.border = '2px solid orange';
            }
            if(color > 49){
              total.style.border = '2px solid yellow';
            }
            if(color > 75){
              total.style.border = '2px solid green';
            }
            }