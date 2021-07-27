var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue!',
    seen: true,
    counter: 0
  },
  methods:{
    increment: function(){
      return this.counter += 1
    }
  }
})
