

function renderForm() {
    let heading=$('<h1>');
    heading.text('Basic calculated fields sample.')
        .appendTo('#header-ctr');
    let h3=$('<h3/>');
    h3.appendTo(heading);

    let labelOne=$('<label>');
    labelOne.addClass("one")
        .appendTo('form');
        let span=$('<span>');
        span.text('Distance (mi) *')
            .appendTo(labelOne);

        let inputDistance=$('<input>');
            inputDistance.attr('type','text')
                .attr('placeholder','Enter Distance')
                .attr('required','true')
                .appendTo(labelOne);

    let labelTwo=$('<label>');
    labelTwo.addClass("two")
        .appendTo('form');
    let spanTwo=$('<span>');
    spanTwo.text('Weight (lb)')
        .appendTo(labelTwo);
    let weight=$('<input>');
    weight.attr('type','text')
        .attr('placeholder','Enter Weight')
        .attr('required','true')
        .appendTo(labelTwo);
    let spanFragile=$('<span>');
    spanFragile.addClass('fragile')
        .text('Fragile')
        .appendTo(labelTwo);

    let select=$('<select>');
    select.attr('name','fragile-menu')
        .appendTo(labelTwo);

    let firstOption=$('<option>');
    firstOption.attr('value','Value 0')
        .attr('selected',true)
    .attr('disabled',true)
        .text('Select Something')
        .appendTo(select);
    let secondOption=$('<option>');
    secondOption.attr('value','Value 1')
        .text('No')
        .appendTo(select);
    let thirdOption=$('<option>');
    thirdOption.attr('value','Value 2')
        .text('Yes')
        .appendTo(select);

    let labelThree=$('<label>');
    labelThree.addClass("three")
        .appendTo('form');
    let spanThree=$('<span>');
    spanThree.text('Length (in)')
        .appendTo(labelThree);

    let spanHeight=$('<span>');
    spanHeight.addClass('height')
        .text('height (in)')
        .appendTo(labelThree);

    let spanWidth=$('<span>');
    spanWidth.addClass('width')
        .text('width (in)')
        .appendTo(labelThree);

    let inputLength=$('<input>');
    inputLength.attr('type','number')
        .attr('placeholder','Length')
        .appendTo(labelThree);

    let inputHeight=$('<input>');
    inputHeight.attr('type','number')
        .attr('placeholder','Height')
        .appendTo(labelThree);

    let inputNumber=$('<input>');
    inputNumber.attr('type','number')
        .attr('placeholder','10')
        .attr('min','1')
        .attr('max','1000')
        .appendTo(labelThree);

    let labelFour=$('<label>');
    labelFour.addClass("four")
        .appendTo('form');

    let labelHeader=$('<h3>');
    labelHeader.text('Extra services:')
    labelHeader.appendTo(labelFour);

    let firstParagraph=$('<p>')
        .text('Insurance')
        .appendTo(labelFour);

    let inputOne=$('<input>');
    inputOne.attr('type','checkbox')

        .appendTo(firstParagraph);

    let secondParagraph=$('<p>')
        .text('Express Delivery')
        .appendTo(labelFour);
    let inputTwo=$('<input>');
    inputTwo.attr('type','checkbox')
        .appendTo(secondParagraph);

    let labelPrice=$('<label>');
    labelPrice.addClass("price")
        .appendTo('form');
    let priceSpan=$('<span>');
    priceSpan.text('total:')
        .appendTo(labelPrice);
    let totalP=$('<p>');
    totalP.addClass('total-price')
        .text('$ 00.00')
        .appendTo(priceSpan);
let submitP=$('<p>');
submitP.text('Im Ready')
    .addClass('submit')
    .appendTo('form');

let afterSuccess=$('<section>');
afterSuccess.addClass('after-success')
    .appendTo('main');
let successHeading=$('<h1>');
successHeading.text('Good Job!')
    .appendTo(afterSuccess);
let successImg=$('<img>');
successImg.attr('src','register_success.png')
    .appendTo(afterSuccess);


}
let form=$('form');
let secondLayout=$('.after-success');
function clickElement() {
    $('.submit').on('click',function () {
        form.addClass('hidden');
        secondLayout.removeClass('hidden');
    })

}
renderForm();
clickElement();
