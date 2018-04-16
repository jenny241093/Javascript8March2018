function renderElementsInHTML() {
    let divTop=$('.top');
    let divLang=$('<div>');
    divLang.addClass("languagues")
        .appendTo(divTop);
    let firstSpan=$('<span>');
    firstSpan.attr('id','bg')
        .text('BG')
        .appendTo(divLang);
    let secondSpan=$('<span>');
    secondSpan.text('/').appendTo(divLang);

    let thirdSpan=$('<span>');
    thirdSpan.
        attr('id','en')
        .text('EN')
        .appendTo(divLang);
    let h1=$('<h1>');
    h1.attr('id','heading')
        .text('The most used programming languages')
        .appendTo(divTop);

    let h2=$('<h2>');
    h2.addClass('article-header')
        .text('JavaScript')
        .appendTo('.first-article');
    let divCont=$('<div>');
    divCont.addClass('js-container')
        .appendTo('.first-article');

    let img=$('<img class="js-logo" src="js.png" alt="js">');
    img.appendTo(divCont);

    let p=$('<p>');
    p.addClass('js-info')
        .text('JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.\n' +
            '                It is a language which is also characterized as dynamic, weakly typed, prototype-based and\n' +
            '                multi-paradigm.\n' +
            '                Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.\n' +
            '                It is used to make dynamic webpages interactive and provide online programs, including video games. The\n' +
            '                majority\n' +
            '                of websites employ it[citation needed], and all modern web browsers support it without the need for\n' +
            '                plug-ins by means\n' +
            '                of a built-in JavaScript engine. Each of the many JavaScript engines represent a different\n' +
            '                implementation of JavaScript,\n' +
            '                all based on the ECMAScript specification, with some engines not supporting the spec fully, and with\n' +
            '                many engines\n' +
            '                supporting additional features beyond ECMA.\n')
        .appendTo(divCont);

    let secH2=$('<h2>');
    secH2.addClass('article-header')
        .text('C#')
        .appendTo('.second-article');
    let divCont2=$('<div>');
    divCont2.addClass('csharp-container')
        .appendTo('.second-article');

    let img2=$('<img src="csharp.jpg" alt="csharp-logo">');
    img2.appendTo(divCont2);

    let p2=$('<p>');
    p2.addClass('csharp-info')
        .text('C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative,\n' +
            '                functional, generic, object-oriented (class-based), and component-oriented programming disciplines.\n' +
            '                It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma\n' +
            '                (ECMA-334)\n' +
            '                and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language\n' +
            '                Infrastructure.C# is a general-purpose, object-oriented programming language. Its development team is\n' +
            '                led\n' +
            '                by Anders Hejlsberg. The most recent version is C# 7.2, which was released in 2017 along with\n' +
            '                Visual Studio 2017 version 15.5.\n')
        .appendTo(divCont2);

    let javah2=$('<h2>');
    javah2.addClass('article-header')
        .text('Java')
        .appendTo('.last-article');
    let javaCont=$('<div>');
    javaCont.addClass('java-container')
        .appendTo('.last-article');

    let img3=$('<img src="java-logoo.png" alt="java-logo">');
    img3.appendTo(javaCont);

    let p3=$('<p>');
    p3.addClass('java-info')
        .text('Java is a general-purpose computer-programming language that is concurrent, class-based,\n' +
            '                object-oriented,\n' +
            '                and specifically designed to have as few implementation dependencies as possible. It is intended to let\n' +
            '                application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on\n' +
            '                all platforms that support Java without the need for recompilation. Java applications are typically\n' +
            '                compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture.\n' +
            '                As of 2016, Java is one of the most popular programming languages in use, particularly for\n' +
            '                client-server web applications, with a reported 9 million developers. Java was originally developed by\n' +
            '                James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in\n' +
            '                1995\n' +
            '                as a core component of Sun Microsystems\' Java platform. The language derives much of its syntax from C\n' +
            '                and C++,\n' +
            '                but it has fewer low-level facilities than either of them.\n')
        .appendTo(javaCont);
}
clicked = true;
function changeColor() {
    $("#en").click(function(){
        var color = clicked ? 'purple' : 'black';
        $(this).css('color', color);
        $(this).css('font-style', 'italic');
        clicked = !clicked;
    });
    $("#bg").click(function(){
        var color = clicked ? 'purple' : 'black';
        $(this).css('color', color);
        $(this).css('font-style', 'italic');
        clicked = !clicked;
    });



}

renderElementsInHTML();
changeColor();
