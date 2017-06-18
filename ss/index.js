import hs from "https"
import queryString from "querystring"
import Koa from "koa"
import koaBody from "koa-body"
import cors from "koa-cors"

const opt = {
	type: "json",
	method: "POST",
	hostname: "m.made-in-china.com",
	port: 443,
	path: "/search/product",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		"X-Requested-With": "XMLHttpRequest"
	}
}

const getSuggOpts = (word = "led") => {
	return {
		method: "GET",
		type: "jsonp",
		hostname: "keywordsuggestions.made-in-china.com",
		path: `/suggest/getEnProdSuggest.do?count=10&kind=5&call=jsonpCallback&param=${encodeURIComponent(word)}`
	}
}

const _client = (options, params) => {
	return new Promise((succ, reject) => {
		try {
			const req = hs.request(options, res => {
				let buffers = ""
				res.on("data", d => {
					buffers += d
				})
				res.on("end", () => {
					succ(buffers)
				})
			})
			params && req.write(queryString.stringify(params))
			req.end()
		} catch (e) {
			reject(e)
		}
	})
}

const app = new Koa()
app.use(cors())
app.use(koaBody())

app.use(async (ctx, context) => {
	console.log(`${Date.now()}::${ctx.request.url}`)
	if (/getSugg/.exec(ctx.request.url)) {
		await _client(getSuggOpts(ctx.request.query.word)).then(res => {
			global.jsonpCallback = (res) => {
				ctx.body = {
					suggs: res
				}
			}
			Function.prototype.constructor(res)()
		})
	} else if (/search\/product/.exec(ctx.request.url)) {
		await _client(opt, typeof ctx.request.body === "object" ? ctx.request.body : JSON.parse(ctx.request.body))
			.then(res => {
				ctx.body = res
			})
	}
})

app.listen(9000)

console.log("the server is starting at port 9000")

