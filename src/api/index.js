import request from '@/utils/request';

export function queryAllAlbum(params) {
  return request({
    method: 'get',
    url: '/queryAllAlbum',
    params
  })
}