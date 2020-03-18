import { createAPI } from 'cube-ui'
import Vue from 'vue'
import SearchLog from 'components/search-log/search-log'
import Center from 'components/center/center'
import Login from 'components/login/login'
createAPI(Vue, SearchLog)
createAPI(Vue, Center)
createAPI(Vue, Login)
