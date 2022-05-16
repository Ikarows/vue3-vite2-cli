// 设置根字体大小（rem）
export default (function () {
  const _self = window
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  _self.width = 375 // 设置默认最大宽度
  // 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
  _self.fontSize = 37.5 // 默认字体大小
  _self.widthProportion = function () {
    var device_width = document.getElementsByTagName('html')[0].offsetWidth
    var p = device_width / _self.width
    return p
  }
  _self.changePage = function () {
    var rem = _self.widthProportion() * _self.fontSize
    document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:' + rem + 'px !important')
  }
  _self.changePage()
  window.addEventListener(
    'resize',
    function () {
      _self.changePage()
    },
    false
  )
})()
