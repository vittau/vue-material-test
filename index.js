//var Vue = require('vue/dist/vue.min');
var Vue = require('vue/dist/vue');
var VueMaterial = require('vue-material');

Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  orange: {
    primary: 'orange',
    accent: 'green'
  },
  gold: {
    primary: 'amber',
    accent: 'blue-grey'
  }
});

Vue.material.setCurrentTheme('gold');

new Vue({
  el: '#file-list'
});