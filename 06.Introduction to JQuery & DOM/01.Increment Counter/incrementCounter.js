function increment(selector) {
    let container=$(selector);
    let fragment=$('div');
    let textarea = $('<textarea>');
    let incrementBtn=$('<button>Increment</button>');
    let addBtn=$('<button>Add</button>');
    let list=$('<ul>');



    textarea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    fragment.appendTo(container);

textarea.addClass('counter').val(0).attr('disabled',true);
incrementBtn.addClass('btn').attr('id','incrementBtn');
addBtn.addClass('btn').attr('id','addBtn');
list.addClass('result');
}
$('body')
    .on('click','#incrementBtn',function () {
       let textAreaValue=parseInt($('textarea').val());
        $('textarea').val(textAreaValue+1);
    })

    .on('click','#addBtn',function () {
        let textAreaValue=parseInt($('textarea').val());
    let li=$('<li>');
    li.text(textAreaValue);
    li.appendTo('ul');
    })
increment('#wrapper');