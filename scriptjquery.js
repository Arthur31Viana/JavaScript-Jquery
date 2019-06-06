//$(seletor).ação();

/*
// Primeiro Passo
$(document).ready(function(){
    $('button').click(function(){
        $('h1').hide();
    });
});
*/

/*
// Forma reduzida
$(function(){
    $('button').click(function(){
        $('h1').hide();
    });
});
*/

/*
// Implantando CSS
$(function(){
    $('button').click(function(){
        $('h1').css("color", "red");
    });
});

$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
    });

    $('#vermelho').click(function(){
        $('p').css("color", "red");
    });
});
*/

/*
// Efeito Fade
$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut();
        $('p').delay(3000);
        $('p').fadeIn();
    });

    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('p').fadeOut('slow');
        $('p').delay(3000);
        $('p').fadeIn('slow');
    });
});
*/

/*
// Gravando Mensagens
$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').fadeOut();
        $('p').delay(3000);
        $('p').fadeIn();
    });

    $('#vermelho').click(function(){
        $('p').css("color", "red");
        $('#mensagem').text("Cor alterada com sucesso!");
    });
});
*/

/*
// Encadeamento em Bloco
$(function(){
    $('#azul').click(function(){
        $('p')
            .css("color", "blue")
            .fadeOut()
            .delay(3000)
            .fadeIn();
    });
});
*/

/*
// Declaração Multipla de CSS
$(function(){
    $('#azul').click(function(){
        $('p')
            .css({color: 'red', border: '1px solid red'})
            .fadeOut()
            .delay(3000)
            .fadeIn();
    });
});
*/

/*
// Adicionando e removendo classes
$(function(){
    $('#azul').click(function(){
        $('p')
            .css({color: 'red', border: '1px solid red'})
            .fadeOut()
            .delay(3000)
            .fadeIn();
            .addClass('green');

        $('button').removeClass('red');
    });
});
*/


// SlideShow
$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
});
