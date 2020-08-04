<template>
  <div class="home">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="username">{{username}}</span>
    </el-header>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户信息卡</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div :key="o" class="text item">
          用户账号: {{userInfo.username}}
        </div>
        <div :key="o" class="text item">
          用户密码: {{userInfo.password}}
        </div>
        <div :key="o" class="text item">
          真实姓名: {{userInfo.realname}}
        </div>
        <div :key="o" class="text item">
          证件号码: {{userInfo.idType}}
        </div>
      </el-card>
    </el-main>
  </div>
</template>

<script>

    import ElMain from "element-ui/packages/main/src/main";
    import {mapState} from 'vuex';

    export default {
      data (){
        return {

        }
      },
      components: {ElMain},
      name: "userlist",
      computed: {
      /*  username (){
          return this.$store.state.userInfo.username
        },*/
        ...mapState({
          userInfo: state => state.userInfo,
          username: state => state.userInfo.username
        })
      }
    }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .home {
    width: 100%;
  }
  .username {
    font-size: 20px;
    color: #409EFF;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

</style>
