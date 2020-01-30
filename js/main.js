import myInfo from './header.vue'
import interactive from './interactive.vue'
import slider from './slider.vue'
import Vue from 'vue'

new Vue({
    el: '#myInfo',
    
    render: b => b(myInfo)
    
  })

  new Vue({
    el: '#interactive',
    
    render: b => b(interactive)
    
  })


  new Vue({
    el: '#slider',
    
    render: b => b(slider)
    
  })


