<template>
  <div class="header">
    <a class="link" href="https://www.google.ro/imghp?hl=ro&amp;authuser=0&amp;ogbl">Gmail</a>
    <a class="link" href="https://www.google.ro/imghp?hl=ro&amp;authuser=0&amp;ogbl">Imagini</a>
    <a class="icon" aria-label="Aplicații Google" href="https://www.google.ro/intl/ro/about/products">
      <svg fill="#5f6368" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
    </a>
    <img class="profile" src="https://lh3.googleusercontent.com/ogw/ADGmqu9Aidhc4t_L1uz2ely6Fx8U34_9wlj7oNE66rp-BQ=s32-c-mo">
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: absolute;
  top: 16px;
  right: 18px; 
  display: flex;
  .profile {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    &:hover {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, .15);
      cursor: pointer;
    }
  }
  .link {
    text-decoration: none;
    color: #3c4043;
    line-height: 36px;
    margin-right: 15px;
    font-family: arial;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  }
  .icon {
    color: #5f6368;
    width: 30px;
    height: 30px;
    margin: 0 15px 0 0; 
    padding: 3px;
    :hover {
      background-color: rgba(60, 64, 67, 0.08);
      border-radius: 50%;
    }
  }
}
</style>