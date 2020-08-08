<template>
    <div class="loginImage">
    <el-image src="./static/login.jpg" placeholder >
    </el-image>
      <el-col id="loginDiv">
        <div style="margin:50px;">
          <el-col>登陆</el-col>
        <el-form  :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px">
            <el-form-item style="margin-top: 40px;" label="账号" prop="userName" >
              <el-input type="userName" v-model="ruleForm.userName"  size="mini"></el-input>
            </el-form-item>
            <el-form-item label="密码"  prop="passWord" >
              <el-input type="passWord" v-model="ruleForm.passWord"  show-password size="mini"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click="submitForm('ruleForm')">提交</el-button>
              <el-button size="mini" @click="registered">注册</el-button>
            </el-form-item>
        </el-form>
        </div>
      </el-col>
    </div>
</template>
<style>
  #loginDiv{
    width:400px;
    height: 300px;
    background-color: white;
    position: absolute;
    left: 60%;
    top: 30%;
    /*z-index: 1000;*/
  }
  .loginImage{
    /*background: url("./static/login.jpg") no-repeat;*/
    margin: 0 auto;
    height: 800px;
    /*background-size: 100% 100%;*/

  }
</style>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          userName: '',
          passWord: ''
        },
        rules: {
          userName: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          }
        });
      },
      registered() {
        this.$router.push("");
      }
    }
  }
</script>

