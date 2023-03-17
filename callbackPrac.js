new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("첫번째 함수");
    resolve();
  },1000);
})
.then(()=> {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("두번째 함수");
      resolve();
    }, 1000);
  });
}).then(()=> {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("세번째 함수");
      resolve();
    }, 10);
  });
}).then(()=> {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("네번째 함수");
      resolve();
    }, 3000);
  });
}).then(()=> {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("다섯번째 함수");
      resolve();
    }, 100);
  });
})