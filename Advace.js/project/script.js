

// function PlaceHolder(){
//     alert('Hello')
// }


  async function PlaceHolder() {
            document.querySelector('#result').innerHTML = 'Order Placed';
           await new Promise(resolve => setTimeout(resolve , 4000));
            document.querySelector('#result').innerHTML = 'Order Pending';
           await new Promise(resolve => setTimeout(resolve, 4000));
           document.querySelector('#result').innerHTML = 'order SuccessFull';
  }

