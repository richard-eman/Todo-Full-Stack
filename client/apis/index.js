import request from 'superagent'

export function getTasks() {
    return request.get('/')
        .then(res => {
            return res.body
        })
}