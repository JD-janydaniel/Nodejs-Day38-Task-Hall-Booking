//import section
import express from 'express';
import cors from 'cors';
import roombookingRouter from'./Routers/roomsbookingRouters.js';

//declaration/initialization section
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(cors());

//default Routing
app.get('/',(req,res)=>{
res.status(200).send("Welcome TO HAll BOOKING APP")
})

//Routing
app.use('/api',roombookingRouter)
//listening section
app.listen(PORT,()=>{
    console.log("App is running");
})