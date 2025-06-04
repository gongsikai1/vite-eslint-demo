import axios from 'axios';
import { ElMessage } from "element-plus"

const PRODUCT_ADD = ({ name }) => axios.post(`https://www.demo.com/api/product/add`, {
  name,
}).then(res => res.data.data)

export default {
  PRODUCT: {
    ADD: PRODUCT_ADD,
  },
}
