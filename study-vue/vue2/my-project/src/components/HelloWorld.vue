<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="userProvidedHtml"/>
    <div v-html="userProvidedHtml"></div>
    <button v-on:click="send">CLICK</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      userProvidedHtml: ''
    }
  },
  created: function () {
    // alert('a');
  },
  methods: {
    send: function () {
      alert("test");
    }

  }
  
}
</script>