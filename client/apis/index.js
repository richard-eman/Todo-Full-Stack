import request from 'superagent'

export function getTasks() {
    return request.get('list')
        .then(res => {
            console.log("getTasks api", res.body)
            return res.body
        })
}