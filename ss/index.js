import hs from 'https'
import queryString from 'querystring'
import koa from "koa"
import koaRouter from 'koa-router'
import koaBody from 'koa-body'
import cors from 'koa-cors'

const router = koaRouter()

const opt = {
    type: "json",
    method: "POST",
    hostname: 'm.made-in-china.com',
    port: 443,
    path: "/search/product",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        "X-Requested-With": 'XMLHttpRequest'
    }
}

const _client = (params) => {
    return new Promise((succ, reject) => {
        try {
            const req = hs.request(opt, res => {
                let buffers = ""
                res.on('data', d => {
                    buffers+=d
                })
                res.on('end', () => {
                    succ(buffers.toString())
                })
            })
            req.write(queryString.stringify(params))
            req.end()
        } catch (e) {
            reject(e)
        }
    })
}

const app = new koa()
app.use(cors())
app.use(koaBody())


app.use(async (ctx, context) => {
    console.log(ctx.request.body)
    await _client(JSON.parse(ctx.request.body)).then(res => {
        ctx.body = res
    })
})

app.listen(9000)

console.log('the server is starting at port 9000')
