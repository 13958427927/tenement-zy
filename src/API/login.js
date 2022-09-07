// login 所有接口
import request from '@/utils/request'

// export function usersLogin(value) {
//   return axios({
//     url: '/user/login',
//     method: 'POST',
//     data: value
//   })
// }

export const usersLogin = (value) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: value
  })
}
