# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions within asynchronous callbacks.  The server simulates an asynchronous operation that might fail.  The original code incorrectly handles this failure by throwing an error directly within the callback, causing the server to crash without proper error logging or client response.  The solution demonstrates proper error handling using try-catch blocks and error logging, ensuring the server remains operational and provides a relevant response to the client even upon errors.

## Bug

The `bug.js` file contains the buggy code, which throws an error directly within the asynchronous callback function. This results in a server crash upon failure without providing any feedback to the client.

## Solution

The `bugSolution.js` file provides the corrected code, implementing proper error handling.  This solution incorporates a `try...catch` block to gracefully handle exceptions within the asynchronous callback.  Any errors are caught, logged to the console for debugging, and an appropriate error response is sent to the client.

## How to Run

1. Clone the repository.
2. Navigate to the directory in your terminal.
3. Run the original buggy code using `node bug.js`.
4. Observe the server crashing.  
5. Run the fixed code using `node bugSolution.js`
6. The server will now remain operational and provide error messages to the client on failure.