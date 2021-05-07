/* Custom Javascript */

/* NAVBAR - Mouse Scroll Active Link Navbar */
$(function() {
    var links = $("#navbarNav a");

    $(window).scroll(function() {
        var topScroll = $(window).scrollTop();
        links.each(function() {
            var href = $(this).attr('href');
            var el = $(href);
            var posSection = el.offset().top;
            var hSection = el.height();
            
            if(posSection <= topScroll && (posSection + hSection) > topScroll){
                links.removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});

/* ABOUT US - Buttons */
var prev = 1;
function showHide(valor) {
    if(prev === valor){
        return;
    }
    else{
        if(prev === 1){
            var botao = $('.mission');
            var texto = $('.mission-text');
            var remove = 'mission-text';
        }
        else if(prev === 2){
            var botao = $('.vision');
            var texto = $('.vision-text');
            var remove = 'vision-text';
        }
        else{
            var botao = $('.values');
            var texto = $('.values-text');
            var remove = 'values-text';
        }

        if(valor === 1){
            botao.removeClass("active");
            $('.mission').addClass("active");
            texto.addClass("mission-text");
            texto.removeClass(remove);

            if(prev === 2){
                $(".mission-text p").remove();
            }
            else{
                $(".mission-text ul").remove();
            }

            $(".mission-text").append("<p>Apresentar soluções de marketing digital inovadoras e de qualidade, objetivando o fortalecimento das marcas/produtos de nossos clientes diretos e indiretos, aproximando e aprimorando as relações entre a empresa — cliente — e seu público-alvo, contribuindo assim em seu crescimento e lucratividade.</p>");
        }
        else if(valor === 2){
            botao.removeClass("active");
            $('.vision').addClass("active");
            texto.addClass("vision-text");
            texto.removeClass(remove);

            if(prev === 1){
                $(".vision-text p").remove();
            }
            else{
                $(".vision-text ul").remove();
            }

            $(".vision-text").append("<p>Estar entre as 12 melhores agências de consultoria de marketing atuantes no mercado brasileiro</p>");
        }
        else{
            botao.removeClass("active");
            $('.values').addClass("active");
            texto.addClass("values-text");
            texto.removeClass(remove);
            $(".values-text p").remove();

            $(".values-text").append("<ul><li>Satisfação do ciente</li><li>Competência</li><li>Seriedade</li><li>Inovação</li><li>Ética</li>")
        }
    }

    prev = valor;
}

function formulario(){

    

    if((document.getElementById("cNome").value=='')||(document.getElementById("cEmail").value=='')||(document.getElementById("cmensagem").value=='')){
        alert("Por favor preencha todos os campos do formulario");
    }
    else{
        var res=confirm("Deseja enviar essa mensagem?");

         if(res){
            alert("Mensagem enviada!");
            
            fContato.reset();          
          

        }
        else{
           alert("Mensagem não enviada!");
        }
    }

}