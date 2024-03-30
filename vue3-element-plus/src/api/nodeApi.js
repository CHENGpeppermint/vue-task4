import request from '@/utils/request'
import { VUE_APP_BASE_API } from '../../public/config'

// 获取二维码
export function get_Code (data) {
  return request({
    baseURL: VUE_APP_BASE_API,
    url: '/string',
    method: 'get',
    params: data
  })
}
// 登录
export function post_Login (data) {
  return request({
    baseURL: VUE_APP_BASE_API,
    url: '/login',
    method: 'post',
    data: data
  })
}
// 获取文件列表
export function get_filelist (data) {
  return request({
    baseURL: VUE_APP_BASE_API,
    url: '/filelist',
    method: 'get',
    params: data
  })
}
// 删除文件
export function del_file (data) {
  return request({
    baseURL: VUE_APP_BASE_API,
    url: '/delfile',
    method: 'post',
    data: data
  })
}


