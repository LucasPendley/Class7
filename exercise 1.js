function redundantReturn(str) {
    function returnStr() {
          return str;
    }
    console.log(str);
  }
  
  redundantReturn("str");