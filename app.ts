import express from 'express'
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes/route';



const app = express().use(bodyParser.json());
app.use(morgan('dev'))

app.use('/', routes)

const PORT = 10101;

app.listen(PORT, ()=>{
    console.log('Servidor ejecutandose en el puesrto: ', PORT);
}).on('error', (error)=>{
    throw new Error(error.message);
})
