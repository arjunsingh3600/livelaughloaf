const axios = require('axios');
// 'event' and 'context' are automatically passed to the function
// event contains the query parameters that we will be passing with the API call
export async function handler(event, context) {
//   extract the word query parameter from the HTTP request
 
  try {
    // send request to the WordsAPI
    const response = await axios({
      "method":"GET",
      "url":`https://random-word-api.herokuapp.com/word/?number=1`,
    })
    
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),

    }
  } catch (err) {
    console.log(err);
    return { statusCode: 500, body: err.toString() }
  }
}