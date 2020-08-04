<template>
  <div class="index">
<!--{{$store.state.userInfo}}-->

    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
     <!--   <div class="top-text">
          <h1 class="title">vuexms - 管理系统</h1>
        </div>-->
        <el-menu default-active="/" :default-openeds="['1']" router  background-color="#545c64" text-color="#fff">
          <el-menu-item style="background: #333" index="/"><li class="el-icon-setting"></li>vuex系统首页</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>账号管理</template>
            <el-menu-item-group>
              <el-menu-item index="userlist">账号列表</el-menu-item>
              <el-menu-item index="useradd">添加账号</el-menu-item>
              <el-menu-item index="passwordedit">修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
   <!--     <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>-->
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>





</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
      }
    }
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-menu {
    border-right: 0px;
  }
  .el-aside {
    background-color: #545c64 !important;
  }

  html, body, #app, .index {
    height: 100%;
  }
  .el-container {
    height: 100% !important;
  }

  .top-text {
    text-align: center;
    padding: 40px 0px;
    background-color: #333;
  }

  .top-text .title {
    color: #fff;
    font-weight: bold;
  }
</style>
