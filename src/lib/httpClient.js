import { isObject, warn } from './util'

const METHODS = ['OPTIONS', 'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'TRACE', 'CONNECT']

class httpClient {
    constructor() {
        this.xhr = wx.request
    }

    checkArguments(args) {
        if (!args.length)
            return false

        let originalParam = args[0]
        let param = Object.create(null)

        if (typeof originalParam === 'string' && originalParam.length) {
            param.url = originalParam
            return param
        } else if (isObject(originalParam)) {
            let method = (originalParam.method || 'GET').toUpperCase()

            if (!METHODS.includes(method)) {
                warn(`HttpClient request warning : Request method should be ${METHODS.join('/')}`)
                method = 'GET'
            }

            return Object.assign(param, originalParam, { method })
        }

        return false
    }

    request(...args) {

        let params = this.checkArguments(args)

        if (!params)
            throw new Error('HttpClient request error : Invalid parameters')

        return new Promise((resolve, reject) => {
            params['success'] = response => {
                if (response.statusCode === 200)
                    resolve(response.data)
                else
                    reject(response)
            }

            params['fail'] = reject

            this.xhr(params)
        })
    }
}

export default new httpClient()