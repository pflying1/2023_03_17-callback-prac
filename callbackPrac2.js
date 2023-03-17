async function myfunc(){
  await new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("첫번째 함수");
      resolve()
    }, 1000)
  });
  await new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("두번째 함수");
      resolve()
    }, 1000)
  });
    await new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("세번째 함수");
      resolve()
    }, 1000)
  });
    await new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("네번째 함수");
      resolve()
    }, 1000)
  });
    await new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("다섯번째 함수");
      resolve()
    }, 1000)
  })
}
//myfunc 함수 호출 해줘야함
myfunc();