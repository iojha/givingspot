// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready( function() {
  $(document).foundation();

 var campaigns = [{name: "Maiti Nepal", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund1.jpg", targ: "campaign_page.html"},
                  {name: "Aids Project Africa", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund2.jpg", targ: "campaign_page.html"},
                  {name: "India Wells", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund3.jpg", targ: "campaign_page.html"},
                  {name: "World Children Fund", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund4.jpg", targ: "campaign_page.html"},
                  {name: "World Children Fund", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund4.jpg", targ: "campaign_page.html"},
                  {name: "World Children Fund", organization: "Maiti Nepal", description: "helping young nepali girls find their way back into society", image: "img/fund4.jpg", targ: "campaign_page.html"},];
        

  var output = "<div class=\"row\">";
  var numCols = 3;

  $.each(campaigns, function(index, campaign) {
    output += "<div class=\"large-4 small-6 columns\"> <img src=\"" + campaign.image +
              "\"> <a href=\"" + campaign.targ + "\"> <div class=\"panel\"> <h5>" + campaign.name +
              "</h5> <h6 class=\"subheader\">" + campaign.organization + "</h6> </a> </div> </div> "

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




