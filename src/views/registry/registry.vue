<template>
  <div>
    <div>
      <input type="text" placeholder="请输入用户名" v-model="username" />
    </div>
    <div>
      <input type="password" placeholder="请输入密码" v-model="pwd" />
    </div>
    <button @click="Register">注册</button>
  </div>
</template>

<script>
// import axios from "axios";
import { registry } from "@/api/api";
export default {
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  methods: {
    async Register() {
      try {
        // let res = await axios.post("/api/user/registry", {
        //   phone: this.username,
        //   password: this.pwd
        // });
        let res = await registry({ phone: this.username, password: this.pwd });
        console.log(res);
        if (res.data.code == 1) {
          this.$router.go(-1);
        }
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>

<style>
</style>