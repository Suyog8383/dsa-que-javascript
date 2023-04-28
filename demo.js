// for (var i = 0; i < 5; i++) {
//   function data(i) {
//     setTimeout(() => {
//       console.log({ i });
//     }, 1000);
//   }
//   data(i);
// }

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo); //bar
    console.log("outer func:  self.foo = " + self.foo); //bar
    (() => {
      console.log("inner func:  this.foo = " + this.foo); //bar
      console.log("inner func:  self.foo = " + self.foo); //bar
    })();
  },
};
myObject.func();
