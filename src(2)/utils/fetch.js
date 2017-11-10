/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */
function obj2String (obj, arr = [], idx = 0) {
  for (let item in obj) {
    arr[idx++] = [item, obj[item]]
  }
  return new URLSearchParams(arr).toString()
}

/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 */
function commonFetcdh (url, options, method = 'GET') {
  let searchStr = obj2String(options)
  if (options.file) {
    searchStr = options.file
  }
  console.log(searchStr)
  let initObj = {}
  if (method === 'GET') { // 如果是GET请求，拼接url
    url += '?' + searchStr
    initObj = {
      method: method,
      credentials: 'include'
    }
  } else {
    if (typeof searchStr === 'string') {
      initObj = {
        method: method,
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: searchStr
      }
    } else {
      initObj = {
        method: method,
        headers: new Headers({
          'contentType': false,
          'processData': false,
          'Accept': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'Content-Type': 'multipart/form-data; boundary'
        }),
        body: searchStr
      }
    }
  }
  // if (!initObj.headers.headers.has('content-type') && options.body && typeof options.body.getBoundary === 'function') {
  //     headers.set('content-type', '; boundary=' + options.body.getBoundary());
  // }
  return fetch(url, initObj).then((res) => {
    return res.json()
  })
}

export default {
  /**
   * GET请求
   * @param url 请求地址
   * @param options 请求参数
   */
  GET (url, options) {
    return commonFetcdh(url, options, 'GET')
  },

  /**
   * POST请求
   * @param url 请求地址
   * @param options 请求参数
   */
  POST (url, options) {
    return commonFetcdh(url, options, 'POST')
  }
}
