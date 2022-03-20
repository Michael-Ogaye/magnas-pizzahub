// this is the Ui logic,the beginning of the 

$(document).ready(function(){
    

    // changing the menu photos
    $('#crus').change(function(){
        let crustV=$(this).val();
        let imaga= $(this).closest('.card').find('img');
        
        if(crustV=='stuffed'){
        
            imaga.attr('src','assets/images/pizza-2.jpg')


        }

        else if(crustV=='glutten-free'){
            imaga.attr('src','assets/images/pizza-7.jpg')
        }

        else{
            imaga.attr('src','assets/images/pizza-8.jpg')

        }
    })

    //medium  
    $('#mds').change(function(){
        let crustVtwo=$(this).val();
        let imagaTwo= $(this).closest('.card').find('img');
        
        if(crustVtwo=='stuffed'){
        
            imagaTwo.attr('src','assets/images/md.jpg')


        }

        else if(crustVtwo=='glutten-free'){
            imagaTwo.attr('src','assets/images/mda.jpg')
        }

        else{
            imagaTwo.attr('src','assets/images/medf.jpg')

        }
    })

    // large
    $('#larsa').change(function(){
        let crustVtwo=$(this).val();
        let imagaTwo= $(this).closest('.card').find('img');
        
        if(crustVtwo=='stuffed'){
        
            imagaTwo.attr('src','assets/images/lga.jpg')


        }

        else if(crustVtwo=='glutten-free'){
            imagaTwo.attr('src','assets/images/lagap.jpg')
        }

        else{
            imagaTwo.attr('src','assets/images/pizza-1.jpg')

        }
    })

    // spending table toggler
    $('#tg').click(function (){
        $(this).closest('.price').find('.strait').slideToggle();

    })
    

})