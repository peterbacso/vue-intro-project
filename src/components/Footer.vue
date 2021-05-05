<template>
  <div class="footer">
    <div class='up-footer'>
      <p class='country'>România</p>
    </div>
    <div class='sub-footer'>
      <div class='left'>
        <a class='sub-footer-text'>Despre</a>
        <a class='sub-footer-text'>Publicitate</a>
        <a class='sub-footer-text'>Companii</a>
        <a class='sub-footer-text'>Cum functionează căutarea</a>
      </div>
      <div class='right'>
        <a class='sub-footer-text'>Confidențialitate</a>
        <a class='sub-footer-text'>Termeni</a>
        <a class='sub-footer-text'>Setări</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #F2F2F2;
  .up-footer {
    height: 50px;
    border-bottom: 1px solid #dadce0;
    .country {
      display: flex;
      margin-left: 30px;
      color: rgba(0,0,0,.54);
      font-family: arial;
      font-size: 15px;
      margin-block: 0;
      line-height: 50px;
    }
  }
  .sub-footer {
    .right {
      float: right;
      .sub-footer-text {
        margin-left: 0;
        margin-right: 30px;
      }
    }
    .left {
      float: left;
    }
    .sub-footer-text {
      margin-left: 30px;
      color: rgba(0,0,0,.54);
      font-family: arial;
      font-size: 14px;
      margin-block: 0;
      line-height: 50px;
      display: inline-block;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .up-footer {
      text-align: center;
    }
    .up-footer .country {
      display: block;
      margin: 0;
    }
  }
  @media only screen and (max-width: 900px) {
    .up-footer, .sub-footer {
        height: auto;
    }
    .sub-footer {
      .right, .left {
        float: none;
        margin: 0 auto;
        width: fit-content;
      }
      .left a:first-child, .right a:last-child {
        margin: 0;
      }
    }
  }
}
</style>
