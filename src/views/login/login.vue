<template>
  <div>
    <div>
      <input type="text" placeholder="请输入用户名" v-model="username" />
    </div>
    <div>
      <input type="password" placeholder="请输入密码" v-model="pwd" />
    </div>
    <div v-if="show" @click="goToRegistry">注册</div>
    <button @click="sumbit">登录</button>
  </div>
</template>

<script>
// import axios from 'axios'
import { login } from "@/api/api";
export default {
  data() {
    return {
      username: "",
      pwd: "",
      show: false
    };
  },
  methods: {
    // sumbit(){
    //   console.log(this.username,this.pwd);
    //   axios.post('/api//user/login',{phone:this.username,password:this.pwd}).then((res)=>{
    //     console.log(res);
    //     if(res.data.code==1){
    //       window.localStorage.token = res.data.data.token
    //       this.$router.push('/index/home')
    //     }
    //   }).catch((e)=>{
    //     console.log(e);
    //   })
    // }
    async sumbit() {
      try {
        // let res = await axios.post('/api//user/login',{phone:this.username,password:this.pwd});
        let res = await login({ phone: this.username, password: this.pwd });
        console.log(res);
        if (res.data.code == 1) {
          window.localStorage.token = res.data.data.token;
          this.$router.push("/index/home");
        }
      } catch (e) {
        console.log(e.response);
        this.show = true;
        alert(e.response.data.msg);
      }
    },
    goToRegistry() {
      this.$router.push("/registry");
    }
  }
};
</script>

<style>
</style>