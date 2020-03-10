import { createAPI } from 'cube-ui'
import Vue from 'vue'
import SearchLog from 'components/search-log/search-log'
import Center from 'components/center/center'
createAPI(Vue, SearchLog)
createAPI(Vue, Center)
