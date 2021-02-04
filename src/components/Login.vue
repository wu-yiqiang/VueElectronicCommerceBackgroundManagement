<!--Html-->
<template >
  <div class="main_box">
    <div class="login_box">
      <div class="logo-img">
        <img src="../assets/user2.jpg" alt="">
      </div>
      <el-form :model="loginInfoForm" :rules="loginInfoRules" ref="loginInfoRef" >
        <el-form-item  prop="username">
          <el-input  placeholder="请输入内容"  prefix-icon="iconfont icon-user" v-model="loginInfoForm.username"></el-input>
        </el-form-item>
        <el-form-item  prop="password" >
          <el-input  placeholder="请输入密码" type="password" prefix-icon="iconfont icon-lock_fill" v-model="loginInfoForm.password"></el-input>
        </el-form-item>

        <div class="confirmbutton">
          <el-button @click="loginInforesetForm()">重置</el-button>
          <el-button type="primary" @click="loginInfoSubmitForm()">提交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>



<!--Js-->
<script>
export default  {
  data(){
    return {
      loginInfoForm:{
        username:"admin",
        password:"123456",
      },
      //校验规则
      loginInfoRules:{
          username:[{required:true,message:"请输入用户名！"},{min:5,max:12,message:"用户名在5-12个字符之间！"}],                  //用户名校验
          password:[{required:true,message:"请输入密码！"},{min:6,max:16,message:"密码在6-16个字符之间！"}]                  //密码校验
      }
    }
  },
  methods:{
    loginInforesetForm(){
      //重置登录用户名和密码
      this.$refs.loginInfoRef.resetFields()
    },
     loginInfoSubmitForm(){
      //校验用户名和密码
        this.$refs.loginInfoRef.validate(async (valid) => {
          if (valid) {
              //验证成功，进行后续登录
            //发送请求进行登录
            const {data:res}=await this.$http.post("login",this.loginInfoForm)
            
            if(res.meta.status!=200) return this.$message.error(res.meta.msg)
            this.$message.success("登录成功");
            //将登录成功返回的数据存储到本地的sessionstorage中
            window.sessionStorage.setItem("loginToken",res.data.token)
            
            //进行路由跳转
            this.$router.push("/home")
            
          } else {
            //验证失败，显示提交失败
            this.$message.error("登录名或密码错误！！！");
            return 
          }
        });
    
    },
  }
}
</script>


<!--Css-->
<style lang="less" scoped>
  .main_box{
    position: relative;
    height: 100%;
    width: 100%;
    background-color:#2C5976;
    .login_box{
      width: 600px;
      height: 400px;
      background-color: #FFFFFF;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, -50%);
      .logo-img {
        width: 150px;
        height: 150px;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-175%);
        img{
          width: 100%;
          height: 100%;
          border-radius: 75px;
        }

      }
      .el-form{
        width: 100%;
        margin-top: 20px;
        margin-left: 100px;
        margin-right: 100px;
        .el-input{
          margin-top: 20px;
         
        }
        .confirmbutton{
          display: flex;
          justify-content: center;
          .el-button{
            margin-top: 20px;
          }
        }
        .input_frame {
          position: absolute;
          top: 50%;
          left:50%;
          transform: translate(-50%,-25%);
          .confirmbutton{
            margin:0 auto;
            margin-top: 20px;
          .el-button:nth-child(1){
            float: left;
          }
          .el-button:nth-child(2){
              float: right;
            }
          }

        }
     }
    }
  }





</style>
