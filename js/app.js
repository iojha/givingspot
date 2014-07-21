// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready( function() {
  $(document).foundation();

 var campaigns = [{name: "Maiti Nepal", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund1.jpg"},
                  {name: "Aids Project Africa", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund2.jpg"},
                  {name: "India Wells", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund3.jpg"},
                  {name: "World Children Fund", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund4.jpg"},
                  {name: "World Children Fund", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund4.jpg"},
                  {name: "World Children Fund", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund4.jpg"},

                  
  ];

  var output = "<div class=\"row\">";
  var numCols = 3;

  $.each(campaigns, function(index, campaign) {
    output += "<div class=\"large-4 small-6 columns\"> <img src=\"" + campaign.image +
              "\"> <div class=\"panel\"> <h5>" + campaign.name +
              "</h5> <h6 class=\"subheader\">" + campaign.organization + "</h6> </div> </div> "

    // close and open new row when filled

    if (index % numCols === numCols - 1) {
      output += " </div><div class=\"row\"> "
    }

    // if this is the last campaign, add empty divs to fix formatting

    if (index == campaigns.length - 1) {
      for (var c = 0; c < numCols - 1 - index % numCols; c++) {
        output += "<div class=\"large-4 small-6 columns\"></div>"
      }
    }

  });

  output += "</div>"

  $(".campaign-listing").html(output);
});

//Campaign page



