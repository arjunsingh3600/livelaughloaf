const path = require('path');   
express = require('express');
const axios = require('axios');

app = express();
app.use(express.static(path.join(__dirname, 'public')));

const url =`https://random-word-api.herokuapp.com/word/?number=1`;

app.get('/word',(req,res,next)=>{
    var word;

    axios.get(url).then((response)=>{
        console.log(response.data)
        send_response ={
            statusCode: 200,
            body: JSON.stringify(response.data),

        };
        res.send(send_response);
    },
    (error)=>{
        console.log(error)
        error_response ={ 
            statusCode: 500, 
            body: err.toString()

        };
        res.send(error_response);
    });
   
});

app.use((req,res,next)=>{

    res.sendFile('index.html');
    
});

// 'event' and 'context' are automatically passed to the function
// event contains the query parameters that we will be passing with the API call
 async function getWord() {
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

app.listen(3000);