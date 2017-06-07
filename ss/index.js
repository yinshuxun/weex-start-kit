import hs from 'https'
import queryString from 'querystring'
import koa from "koa"
import koaRouter from 'koa-router'
import koaBody from 'koa-body'
import cors from 'koa-cors'

const router = koaRouter()
const kb = koaBody()

const data = queryString.stringify({
    word: "led"
})

const opt = {
    type: "json",
    method: "POST",
    hostname: 'm.made-in-china.com',
    port: 443,
    path: "/search/product",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "X-Requested-With": 'XMLHttpRequest'
    },
    data
}

const _client = (body) => {
    return new Promise((succ, reject) => {
        try {
            const req = hs.request(opt, res => {
                const buffers = []
                res.on('data', d => {
                    buffers.push(d)
                })
                res.on('end', () => {
                    succ(buffers)
                })
            })
            req.write(data)
            req.end()
        } catch (e) {
            reject(e)
        }
    })
}

const app = new koa()

router.post('/search/product', kb, async (ctx) => {
    console.log(ctx.request.body)

    await _client(ctx.request.body).then(res => {
        ctx.body = JSON.parse(res.toString())
    })
})


app.use(router.routes())
app.use(cors())
app.listen(8082)

console.log('the server is starting at port 8082')

