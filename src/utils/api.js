// import Code from './code'

let _prefix

// 根据服务器地址去判断api前缀
if (process.env.Node.ENV === 'production') {
    // 生产地址
    _prefix = '$host'
} else if (process.env.Node.ENV === 'UAT' ) {
    // UAT地址
    _prefix = '$host' 
} else {
    //本地地址
    _prefix = '$host'
}

const Api = {
    WEB_BASE: '$host',
    parameter: 'parameter',
    // 查询图片列表
    QUERY_PIC_LIST: _prefix + '/static/screenshots',
    // 查询参数列表
    PARAM_LIST: _prefix + 'param/list',
    // 新增参数列表
    PARAM_ADD: _prefix + 'param/add',
    // 修改参数列表
    PARAM_UPDATE: _prefix + 'param/update',
    // 删除参数列表
    PARAM_DELETE: _prefix + 'param/delete'
}

export default Api