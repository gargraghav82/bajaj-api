import express from "express"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get('/' , (req , res) => {
    res.json("Hello World");
})

app.post('/bhfl' , (req , res) => {
    const {data} = req.body;
    var odd_numbers = [];
    var even_numbers = [];
    var alphabets = [];

    data.forEach(str => {
        if(str.length === 1 && str.match(/[a-z]/i)){
            alphabets.push(str.toUpperCase());
        }else{
            var num = parseInt(str);
            if(str % 2 == 0){
                even_numbers.push(num);
            }else{
                odd_numbers.push(num);
            }
        }
    });

    return res.json({
        "is_success" : true ,
        "user_id" : "garg_raghav_18092004" ,
        "roll_number" : "2110991107" ,
        "email" : "raghav1107.be21@chitkara.edu.in" ,
        odd_numbers ,
        even_numbers ,
        alphabets
    });
})

app.listen(3000 , (PORT) => {
    console.log("Server Lisetning on " , PORT);
});