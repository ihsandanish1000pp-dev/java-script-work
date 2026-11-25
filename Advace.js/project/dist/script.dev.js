"use strict";

// function PlaceHolder(){
//     alert('Hello')
// }
function PlaceHolder() {
  return regeneratorRuntime.async(function PlaceHolder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          document.querySelector('#result').innerHTML = 'Order Placed';
          _context.next = 3;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            return setTimeout(resolve, 4000);
          }));

        case 3:
          document.querySelector('#result').innerHTML = 'Order Pending';
          _context.next = 6;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            return setTimeout(resolve, 4000);
          }));

        case 6:
          document.querySelector('#result').innerHTML = 'order SuccessFull';

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}