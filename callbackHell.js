setTimeout(function() {
  console.log("1번 함수");
  setTimeout(function(){
    console.log("2번 함수");
    setTimeout(function(){
      console.log("3번 함수");
      setTimeout(function() {
        console.log("4번 함수");
      });
    });
  });
});