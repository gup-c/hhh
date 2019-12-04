<template>
  <div>
    <input type="text" placeholder="搜索" class="input" v-model="user" @keyup.enter="btn()"/>
    <div v-for="item in list" :key="item.id" class="list">
      <div class="left">
        <h3>{{item.name}}</h3>
        <p>{{item.title}}</p>
      </div>
      <div class="right">
        <span>{{item.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {
          name:'我的同桌',
          time:'17.00',
          id:0,
          title:'作业没做完'
        },
        {
          name:'我的前桌',
          time:'17.00',
          id:1,
          title:'作业'
        },
        {
          name:'不行',
          time:'17.00',
          id:2,
          title:'没做完'
        },
        {
          name:'你的',
          time:'17.00',
          id:3,
          title:'做完'
        },
        {
          name:'他',
          time:'17.00',
          id:4,
          title:'没'
        }
      ],
      user:'',
      arr:[]
    }
  },
  methods:{
    btn(){
      this.arr = JSON.parse(JSON.stringify(this.list))
      let obj =this.arr.filter(item=>item.name.includes(this.user))
      console.log(obj);
      this.arr = obj
      console.log(this.arr);
      this.user = ''
      return this.arr
      
    }
  }
}
</script>

<style>

</style>