import axios from '@/libs/api.request';

export const getTableData = () => {
  return axios.request({
    url: 'http://rap2api.taobao.org/app/mock/123081/tableDemoData',
    method: 'get'
  });
};
