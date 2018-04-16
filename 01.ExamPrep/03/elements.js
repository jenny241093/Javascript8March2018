function renderElementsInHTML() {
    let heading=$('<h1>');
    heading
        .text('Choose Your Destiny');
    heading
        .prependTo('#elementsContainer');
    let firstDivContainer=$('<div>');
    firstDivContainer
        .addClass("containers")
        .appendTo('.container');

    let secondDivContainer=$('<div>');
    secondDivContainer
        .addClass("containers")
        .appendTo('.container');

    let airDiv=$("<div>");
    airDiv
        .attr("id",'air')
        .addClass("first clickable")
        .appendTo(firstDivContainer);

    let fireDiv=$("<div>");
    fireDiv
        .attr("id",'fire')
        .addClass("second clickable")
        .appendTo(firstDivContainer);

    let waterDiv=$("<div>");
    waterDiv
        .attr("id",'water')
        .addClass("third clickable")
        .appendTo(secondDivContainer);

    let earthDiv=$("<div>");
    earthDiv
        .attr("id",'earth')
        .addClass("fourth clickable")
        .appendTo(secondDivContainer);

    $('#elementInfo').addClass('no-display');

    let listItem=$('<li>');
    listItem.appendTo('.creatures');

    let firstRadioButton=$('<input>');
    firstRadioButton
        .addClass('radio-button checked')
        .attr("name","selector")
        .attr("type", "radio")
        .attr("value","archangel")
        .appendTo(listItem);

    let firstRadioLabel=$('<label>');
    firstRadioLabel
        .text('Archangel')
        .appendTo(listItem);

    let secondListItem=$('<li>');
    secondListItem.appendTo('.creatures');

    let secondRadioButton=$('<input>');
    secondRadioButton
        .addClass('radio-button checked')
        .attr("name","selector")
        .attr("type", "radio")
        .attr("value","elemental")
        .appendTo(secondListItem);

    let secondRadioLabel=$('<label>');
    secondRadioLabel
        .text('Elemental')
        .appendTo(secondListItem);


    let imageTag=$("<img>");
    imageTag
     .attr('id','creature-image')
     .attr('src','images/archangel.jpg')
     .attr('alt','archangel');
    imageTag.appendTo(".center-after-click");

    let creatureNameParagraph=$("<p>");
    creatureNameParagraph.attr('id','creature-name')
        .text('Archangel')
        .appendTo("#right-after-click");

    let creaturePowerParagraph=$("<p>");
    creaturePowerParagraph.attr('id','creature-power')
        .text('Power:2000')
        .appendTo("#right-after-click");

    let creatureUltimateParagraph=$("<p>");
    creatureUltimateParagraph.attr('id','creature-ultimae')
        .text('Ultimate: Wind Justice')
        .appendTo("#right-after-click");

    let creatureRegionParagraph=$("<p>");
    creatureRegionParagraph.attr('id','creature-region')
        .text('Region: Heaven’s Kingdom')
        .appendTo("#right-after-click");
}
let main=$('#elementsContainer');
let secondLayout=$('#elementInfo');
function clickElement() {
    $('div.clickable').on('click',function () {
        main.addClass('no-display');
        secondLayout.removeClass('no-display');
    })

}

renderElementsInHTML()
clickElement()