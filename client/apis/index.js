import request from 'superagent'

export function getTasks() {
    return request.get('list')
        .then(res => {
            return res.body
        })
}