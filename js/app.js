// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready( function() {
  $(document).foundation();

 var campaigns = [{name: "Maiti Nepal", organization: "Maiti Nepal", description: "Helping young nepali girls find their way back into society", image: "img/maitinepal.jpg", targ: "campaign_page.html"},
                  {name: "Africa AIDS", organization: "AIDS Project Africa", description: "Supporting AIDS victims in Africa by providing care and medication", image: "img/fund2.jpg", targ: "campaign_page.html"},
                  {name: "Wells for Good", organization: "Wells for Good", description: "Providing support by giving wells to villages going through drought in India", image: "img/fund3.jpg", targ: "campaign_page.html"},
                  {name: "World Childrens' Fund", organization: "World Childrens' Fund", description: "Our organization gives underserved children in South East Asia the opportunity to attend school", image: "img/kids_03.jpg", targ: "campaign_page.html"},
                  {name: "Bikes and Hikes", organization: "Bikes and Hikes Worldwide", description: "Encouraging developed nations to donate bikes to developing nations", image: "img/fund1.jpg", targ: "campaign_page.html"},
                  {name: "Edutainment", organization: "Education for Good", description: "Providing education to children in South East Asia using latest technology and entertainment", image: "img/young-girl-nepal-school-5015_15.jpg", targ: "campaign_page.html"},];
       

  var output = "<div class=\"row\">";
  var numCols = 3;

  $.each(campaigns, function(index, campaign) {

    output += "<div class=\"large-4 small-6 columns\"> <a href=\"" + campaign.targ + "\"> <img src=\"" + campaign.image +
              "\"> <div class=\"panel\"> <h5>" + campaign.name +
              "</h5> <h6 class=\"subheader\">" + campaign.organization + "</h6> </div> </a> </div> "


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




