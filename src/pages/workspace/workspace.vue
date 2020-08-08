<template>
  <div style="width: 100%;height: 100%">

    <div style="height: 100px;"></div>
    <div>
      <div style="height: 40px;padding-left: 20px;">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="工作台" name="first">工作台</el-tab-pane>
          <el-tab-pane label="报表" name="second">报表</el-tab-pane>
          <el-tab-pane label="配置中心" name="third">配置中心</el-tab-pane>
          <el-tab-pane label="仙人模式" name="fourth">仙人模式</el-tab-pane>
        </el-tabs>
      </div>
    </div>
      <div  class="menu-botton">
        <div >
          <ul v-show="activeName == 'first'">
            <router-link to="/login">测试</router-link>
          </ul>
          <ul v-show="activeName == 'second'">
            <li>测试</li>
          </ul>
          <ul v-show="activeName == 'third'">
            <li>测试</li>
          </ul>
          <ul v-show="activeName == 'fourth'">
            <li>测试</li>
          </ul>
        </div>

      </div>
      <div class="menu-view" style="height: 600px;width:89%;background-color:red">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  export default {

    name: 'workspace',
    data() {
      return {
        msg: '',
        activeName:'first',
      };
    },
    methods:{
      handleClick(tab, event){
        console.log(tab,event)
      }
    }
  };
</script>

<style>
  @import "./../../../static/workspace.css";
    .menu-botton {
       height: 600px;
      width:10%;
      display: inline-block;
      float: left;
    }
    .menu-view{
      height: 100%;
      display: inline-block;

    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;
    }

</style>
