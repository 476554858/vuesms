<template>
  <div class="login">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
      <h1 class="title">
        <li class="el-icon-setting"></li>
        vuexms登录
      </h1>
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 8, message: '长度在 5 到 8 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
      /*    this.axios.post('/api/login',{a:1,b:2})
            .then(response => {
              console.log('获取到的数据',response)
            })*/
          let username = _this.loginForm.username;
          let password = _this.loginForm.password;
          this.axios.get('http://121.196.120.104:8080/user/login?phone='+username+'&passWord='+password)
            .then(response => {
              console.log(response)
              let data = response.data;
              if(data.msg == 'success'){
                let userInfo = {username:"admin",password:"111",realname:"张三",idType:"111111111111"}
                //保存用户信息
                _this.$store.commit('SAVE_USERINFO',userInfo)

                 _this.$message({
                    message: '登录成功',
                    type: 'success'
                  });
                 _this.$router.push('/')
              }else{
                _this.$message.error('登录失败');
              }

            })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  html, body, #app, .login {
    height: 100%;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-form{
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0px 45px 10px 10px;
  }
  .el-form .title {
    font-size: 22px;
    color: #333;
    font-weight: bold;
    padding: 20px 0 20px 60px;
  }
</style>
