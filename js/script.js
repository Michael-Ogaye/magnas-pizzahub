// This is the business logic
$(document).ready(function(){
// creation of the pizza object
function Pizza (size,crust,topping,price,quantity){
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.price=price;
    this.quantity=quantity;



}



// This is the ui logic
let cartBtns=$('.sc button');
    cartBtns.click(function(e){
        e.preventDefault();
       let size= $(this).closest('.card').find('h5.card-title').text();
        let crust= $(this).closest('.card').find('.card-footer select[name=crust]').val();
        let topping=$(this).closest('.card').find('.card-footer select[name=topping]').val();
        let price=$(this).closest('.card').find('.card-text span').text();
        let quantity= $(this).closest('.card').find('.quantity input').val();
       

    let newEntry= new Pizza(size,crust,topping,price,quantity);
    console.log(newEntry)

    // generating the price details table
    let table=$('table tbody')









        



    })
    




})