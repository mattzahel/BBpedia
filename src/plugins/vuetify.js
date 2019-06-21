import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#085b2b',
    success: '#68AF33',
    info: '#0993CD',
    error: '#FE2712'
  }
})
