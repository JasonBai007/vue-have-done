import Vue from 'vue'
import { Row, Col, Button, Input, Select, Option, DatePicker } from 'element-ui'
import App from './App'
import router from './router'
import 'animate.css/animate.min.css';

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(DatePicker.name, DatePicker)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
