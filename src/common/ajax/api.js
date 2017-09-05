/**
 * 服务端请求接口配置, get参数中均传：userid, token
 * key:接口名称
 * value:接口配置 string/object，url,method
 */
export default {
  // 初始化，触发im发送消息
  // 参数 type：1:初始化 2：点击热词
  'pushim': 'pushim',
  // 点赞 参数：回答id：aid, 消息id：msgId
  'praise': {
    method: 'post',
    url: 'praise'
  },
}
