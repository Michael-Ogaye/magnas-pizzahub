// This is the business logic
$(document).ready(function(){
// creation of the pizza object
function Pizza (size,crust,topping,price,quantity, transport){
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.price=price;
    this.quantity=quantity;
    this.transport=transport;



}

//pizza prototype
Pizza.prototype.calculateTotalPrice=function(){
    let unitPrice= parseInt(this.price.slice(3));

    let NumQuantity=0;

    if(this.quantity!= ''){
        NumQuantity= parseInt(this.quantity);

    }
    else{
        NumQuantity= 1;
    }
     
    
    return (unitPrice*NumQuantity)+this.transport;


}


// adding the Transport costs for each order
 

var transport = 0;

$('#confirm').val(this.checked);

    $('#confirm').change(function() {
        if(this.checked) {
            transport=+300;
            $(this).prop("checked", transport);
        }
        else{
            transport=0;
        }
            
    });



// This is the ui logic
let cartBtns=$('.sc button');
    cartBtns.click(function(e){
        e.preventDefault();
       let size= $(this).closest('.card').find('h5.card-title').text();
        let crust= $(this).closest('.card').find('.card-footer select[name=crust]').val();
        let topping=$(this).closest('.card').find('.card-footer select[name=topping]').val();
        let price=$(this).closest('.card').find('.card-text span').text();
        let quantity= $(this).closest('.card').find('.quantity input').val();


       
// creating a new instance of the pizza object

    let newEntry= new Pizza(size,crust,topping,price,quantity,transport);
    console.log(newEntry)

    // generating the price details table
      let table=$('table tbody');
      let tableData=`
      <tr>
  <td>${newEntry.size}</td>
  <td>${newEntry.crust}</td>
  <td>${newEntry.topping}</td>
  <td>${newEntry.price}</td>
  <td>${newEntry.quantity}</td>
  <td>${newEntry.transport}</td>
  <td class= "capt">${newEntry.calculateTotalPrice()}.</td>


</tr>

      
      `
      table[0].innerHTML+=tableData;
      
      //populating the totals

    
      let lastCol=$('.capt').text().split('.')
      let arrSum=[];
      for(var i=0;i<(lastCol.length-1);i++){
          arrSum.push(lastCol[i]);
      }
      let ttsumA= arrSum.map((a)=>{
          return +a ;
      })
    
      
      let totalAmount=ttsumA.reduce((total,sum)=>{
          return total+sum;

      },0)

      console.log(lastCol,arrSum,ttsumA,totalAmount);
      let tfoot=$('table tfoot');
      let tfotVal=`
      <tr class="p-4">
            <td>TOTAL SPENDING</td>
            <td class="text-danger">${totalAmount}</td>

         </tr>


      `
      tfoot[0].innerHTML=tfotVal;

    
// cloning the image into the basket
 let clona= $(this).closest('.card').find('img').clone();
 clona.addClass('fly');
 let basket = $('.basket');
 basket.before(clona);








        



    })
    




})