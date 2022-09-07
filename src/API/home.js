import request from '@/utils/request'

export const slideshowApi = () => {
  return request({
    url: '/home/swiper'
  })
}
export function RentingHouseApi() {
  return request({
    url: '/home/groups',
    params: {
      limit: 4
    }
  })
}
