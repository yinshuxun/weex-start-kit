import hs from 'https'
import h from 'http'
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

const suggOpt = {
    method: "GET",
    type: "jsonp",
    hostname: 'keywordsuggestions.made-in-china.com',
    path: `/suggest/getEnProdSuggest.do?count=10&kind=5&call=jsonpCallback&param=led`,
}


const _client = (options, params) => {
    return new Promise((succ, reject) => {
        try {
            const req = hs.request(options, res => {
                let buffers = ""
                res.on('data', d => {
                    buffers += d
                })
                res.on('end', () => {
                    succ(buffers.toString())
                })
            })
            params && req.write(queryString.stringify(params))
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
    console.log(ctx.request.url)
    if(/getSugg/.exec(ctx.request.url)){
        await _client(suggOpt).then(res => {
            const suggs = res.replace(/^jsonpCallback\((.*)\)$/,"$1")
            ctx.body = suggs
        })
    }else if(/search\/product/.exec(ctx.request.url)){
        await _client(opt, typeof ctx.request.body === 'object' ? ctx.request.body : JSON.parse(ctx.request.body))
        .then(res => {
            ctx.body = res
        })
    }
})

app.listen(9000)

console.log('the server is starting at port 9000')

