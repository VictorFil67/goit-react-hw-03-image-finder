// import axios from 'axios';
import { api } from './api';

// export async function getImages(skip, limit) {
//   const { data } = await api(
//     `/?q=cat&page=1&key=40694680-72f66d22c7844ca43ae47eff1&image_type=photo&orientation=horizontal&per_page=${limit}`
//   );
//   return data;
// }
export const getImages = async configParams => {
  const { data } = await api(`&image_type=photo&orientation=horizontal`, {
    params: {
      q: 'cat',
      // per_page: 10,
      // page: 1,
      ...configParams,
    },
  });
  // console.log(data);
  // console.log(data.hits);
  // console.log(data.hits[0].id);
  return data;
  // export const getImages = async (q, limit) => {
  //   const { data } = await api(
  //     `?q=${q}&page=1&key=40694680-72f66d22c7844ca43ae47eff1&image_type=photo&orientation=horizontal&per_page=${limit}`
  //   );
  //   console.log(data);
  //   console.log(data.hits);
  //   console.log(data.hits[0].id);
  //   return data;
  // const res = await axios.get(
  //   `/?q=cat&page=1&key=40694680-72f66d22c7844ca43ae47eff1&image_type=photo&orientation=horizontal&per_page=${limit}`
  // );
  // console.log(res.data.hits);
  // return res;
};
