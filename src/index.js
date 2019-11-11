const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log("App's running on port " + port)
})

const User = require('./models/user')

const main = async () => {
    const user = await User.findById("5dc922fe6fea614a943b72ae")
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()