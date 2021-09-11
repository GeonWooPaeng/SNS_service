import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) //express에서 json 형태로 사용하겠다.

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    }),
)

// app[method](route, handler)

// app.get('/', (req, res) => {
//     res.send('ok')
// })

// app.post('/messages', (req, res) => {
//     ...
// })

// app.put('./messages/:id', (req, res) => {
//     ...
// })

// app.delete(...)

app.listen(8000, () => {
    //서버 경로 8000
    //서버가 띄어 지면 해당 console.log가 출력된다.
    console.log("server listening on 8000...")
})