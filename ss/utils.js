const json2query = json => {
    if (Object.entries(json.entries).length)return ''
    let q = ""
    for ({key, value} in json) {
        q += `${key}=${value}`
    }
    return q
}
console.log(json2query({a: 1}))