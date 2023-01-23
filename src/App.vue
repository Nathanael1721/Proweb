<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
// coding javascript disini

export default{
  data(){
    return{
      datasensor: "60",
      datasensor2: "80"
    }
  },
  created(){
    //this.getData()
  },
  methods:{
    async getData(){
      const data = await fetch("http://localhost/sensor1");
      const datajson = await data.json();
      this.datasensor = datajson.sensor1
      //this.datasensor = 100
    },
  }
}

</script>

<template>
  <div>
    Hello {{ datasensor }}
    <button @click="getData" class="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-xl">Ambil Data</button>&nbsp;
    <button @click="getData" class="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-3xl">Ambil Data 2</button>
  </div>
</template>

<style scoped>

</style>
