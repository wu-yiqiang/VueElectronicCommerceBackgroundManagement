<!--Html-->
<template >
  <div class="main_box">
    <div class="login_box">
      <div class="logo-img">
        <img src="../assets/user2.jpg" alt="">
      </div>
      <div class="input_frame">
        <el-input  placeholder="请输入内容"></el-input>
        <el-input  placeholder="请输入密码"></el-input>
        <div class="confirmbutton">
          <el-button >重置</el-button>
          <el-button type="primary">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>



<!--Js-->
<script>
export default  {

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
    }
  }

.input_frame {
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-25%);

  .el-input:nth-child(2){
    margin-top: 20px;
  }
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
