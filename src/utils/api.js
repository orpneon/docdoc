import axios from 'axios'
const API_URL = '/'

function buildParams (paramsObject) {
  return Object.keys(paramsObject)
    .map(key => {
      let resultValue = paramsObject[key]

      if (typeof resultValue === 'object') {
        resultValue = JSON.stringify(paramsObject[key])
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(resultValue)}`
    })
    .join('&')
}

/**
 * Производим запрос к методу API
 * @param  {String} action      метод API
 * @param  {String} method      метод HTTP
 * @param  {Object} params      параметры запроса
 * @param  {String} root        имя свойства объекта response
 */
export function request (action, method, params = {}, root) {
  const data = method === 'post' ? params : buildParams(params)
  const path = `${API_URL}${action}.php`
  const url = method === 'post' ? path : `${path}?${data}`

  return new Promise((resolve, reject) => {
    return axios({ method, url, data })
      .then(response => resolve(root ? response.data[root] : response.data))
      .catch(reject)
  })
}
