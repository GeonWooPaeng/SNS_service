import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

//axios를 좀 더 편하게 쓰기 위해 만드는 것
const fetcher = async (method, url, ...rest) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};
/*
...rest를 사용하는 이유
.get, .delete는 url뒤에 option이 오는데
.post, .put은 url뒤에 변경한 data가 오기는 것을 다 받아주기 위함

get: axios.get(url[, config])
delete: axios.delete(url[, config])
post: axios.post(url, data[, config])
put: axios.put(url, data[, config])
*/

export default fetcher;
