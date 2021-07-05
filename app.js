const path = require('path');   
express = require('express');
const axios = require('axios');

app = express();
app.use(express.static(path.join(__dirname, 'public')));

//const url =`https://random-word-api.herokuapp.com/word/?number=1`;
const db = require('./utils/database')



function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

app.get('/word',(req,res,next)=>{

    
  db.execute('SELECT * from verbs ORDER BY RAND() LIMIT 1').then( ([rows,data]) => {

     send_response ={
      statusCode: 200,
      body: rows[0].word,
      };

     console.log(send_response)
  
     res.send(send_response)
  }
  ).catch( err =>{

    console.log(err);
  
  }); 
    
    
   

    
    

    
    // axios.get(url).then((response)=>{
    //     console.log(response.data)
    //     send_response ={
    //         statusCode: 200,
    //         body: JSON.stringify(response.data),

    //     };
    //     res.send(send_response);
    // },
    // (error)=>{
    //     console.log(error)
    //     error_response ={ 
    //         statusCode: 500, 
    //         body: err.toString()

    //     };
    //     res.send(error_response);
    // });
   
});

app.get('/wordAll',(req,res,next)=>{
 
    
  db.execute(` SELECT * from (SELECT * from verbs  WHERE word LIKE '${generateRandomLetter()}%' ORDER BY RAND()  LIMIT 3) AS derived ORDER BY length`).then( ([rows,data]) => {
  

    

     send_response ={
      statusCode: 200,
      body:rows.map(x => x.word),
      };

     console.log(send_response)
  
     res.send(send_response)
  }
  ).catch( err =>{

    console.log(err);
  
  }); 
    
    
   
   
});

app.use((req,res,next)=>{

    res.sendFile('index.html');
    
});




app.listen(3000);