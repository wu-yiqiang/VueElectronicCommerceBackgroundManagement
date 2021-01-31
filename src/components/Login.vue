<!--Html-->
<template >
  <div class="main_box">
    <div class="login_box">
      <div class="logo-img">
        <img src="../assets/user2.jpg" alt="">
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
        <el-form-item  props="ruleForm.username">
          <el-input  placeholder="请输入内容"  prefix-icon="iconfont icon-user" ></el-input>
        </el-form-item>
        <el-form-item  props="ruleForm.password">
          <el-input  placeholder="请输入密码"  prefix-icon="iconfont icon-lock_fill"></el-input>
        </el-form-item>

        <div class="confirmbutton">
          <el-button >重置</el-button>
          <el-button type="primary">提交</el-button>
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
      ruleForm:{
        username:"",
        password:"",
      },
      //校验规则
      rules:[

      ]
    }
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
        width: 80%;
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
      }
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



</style>
