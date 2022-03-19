// this is the Ui logic,the beginning of the 

$(document).ready(function(){
    // getting the input fields

    let cartBtns=$('.sc button');
    cartBtns.click(function(e){
        // e.preventDefault();
        let size= $(this).closest('.card').find('h5.card-title').text();
        let crust= $(this).closest('.card').find('.card-footer select[name=crust]').val();
        let topping=$(this).closest('.card').find('.card-footer select[name=topping]').val();
        let price=$(this).closest('.card').find('.card-text span').text();
        let quantity= $(this).closest('.card').find('.quantity input').val();
        console.log(size,quantity,price,topping,crust);




    })
    

})