// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can perform your API request or any asynchronous operation here.
    // For demonstration, let's resolve the promise after a timeout.
    setTimeout(() => {
      // Simulate a successful response
      resolve("API response data");
      
      // If there's an error, you can reject the promise instead
      // reject(new Error("API request failed"));
    }, 1000); // Simulating a 1-second delay
  });
}
