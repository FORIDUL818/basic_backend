
// getData simulates an asynchronous operation using a Promise
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

// Using async/await to handle the Promise
async function showData() {
 try {
    await getData()
   .then((res) => console.log(res))
   .catch((err) => console.error(err));
   
 } catch (error) {
   console.error("Error occurred:", error);
 }
}

showData();
 