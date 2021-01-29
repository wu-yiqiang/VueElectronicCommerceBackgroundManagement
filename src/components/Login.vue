<!--Html-->
<template >
  <div class="main_box">
    <div class="login_box">
          <div class="logo-img">
            <img src="../assets/logo.png" alt="">
          </div>
    </div>
  </div>
</template>



<!--Js-->
<script>
export default  {}
</script>


<!--Css-->
<style lang="less" scoped>
  .main_box{
    position: relative;
    background-color: #00a0e9;
    .login_box{
      width: 450px;
      height: 300px;
      background-color: #fff;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .logo_img {
        width: 200px;
        height: 200px;
        border-radius: 100px ;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }



</style>
