require('./db/mongoose')
const express = require('express');
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')
const app = express()
const port = process.env.PORT || 3000

//adding middleware 
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log("App's running on port " + port)
})