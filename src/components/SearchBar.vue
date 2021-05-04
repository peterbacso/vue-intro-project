<template>
  <div class="container">
    <img class='title-gif' title="Ziua Pământului 2021" src="https://www.google.com/logos/doodles/2021/earth-day-2021-6753651837108909-vacta.gif" />
    <div class='input-box'>
        <svg class='search-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
        <input type="text" class='search-input'>
        <svg class="mic-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path><path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path><path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path><path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path></svg>
        <span class="keyboard-icon"><img src="https://www.gstatic.com/inputtools/images/tia.png" tia_disable_swap="true" tia_field_name="q" jsname="JyIpdf" data-atf="0" tia_property="web"></span>
    </div>
    <div class="center-buttons">
        <input class="button" value="Căutare Google" type="submit">
        <input class="button" value="Mă simt norocos" type="submit">
    </div>
    <div class='lang'>
        Google oferit în:  
        <a href="https://www.google.com/setprefs?sig=0_4ss-NBv-0K-0N43ss7YGPgMicQ0%3D&amp;hl=en&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwi0mab5qZHwAhXRAmMBHU9fDygQ2ZgBCA8">English</a>
        <a href="https://www.google.com/setprefs?sig=0_4ss-NBv-0K-0N43ss7YGPgMicQ0%3D&amp;hl=hu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwi0mab5qZHwAhXRAmMBHU9fDygQ2ZgBCBA">Magyar</a>
        <a href="https://www.google.com/setprefs?sig=0_4ss-NBv-0K-0N43ss7YGPgMicQ0%3D&amp;hl=de&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwi0mab5qZHwAhXRAmMBHU9fDygQ2ZgBCBE">Deutsch</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    margin: 50px 15px 0;
}
.title-gif {
    width: 300px;
    display: block;
    margin: 0 auto;
    border-radius: 20px
}
.input-box {
    display: flex;
    position: relative;
    width: 580px;
    margin: 30px auto 20px;
}
.input-box .search-icon {
    position: absolute;
    width: 20px;
    height: 100%;
    fill: #9AA0A6;
    left: 20px;
}
.input-box .mic-icon {
    position: absolute;
    width: 24px;
    height: 100%;
    right: 16px;
    cursor: pointer;
}
.input-box .keyboard-icon {
    position: absolute;
    right: 60px;
    cursor: pointer;
}

.input-box .keyboard-icon img {
    padding: 15px 0;
}
.search-input {
    width: 580px;
    display: block;
    color: rgba(0, 0, 0, .87);
    padding: 0 100px 0 50px;
    height: 42px;
    border-radius: 20px;
    border: 1px solid #E5E6EA;
    font-family: arial;
    font-size: 14px;
}
.search-input:hover, .search-input:focus  {
    outline: 0;
    box-shadow: 0 1px 6px rgba(32, 33, 36, .28);
}
.center-buttons {
    margin: 0 auto;
    width: max-content;
}
.center-buttons .button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: arial;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
}
.center-buttons .button:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    background-color: #f8f9fa;
    border: 1px solid #dadce0;
    color: #202124;
}
.lang {
    margin: 20px auto 0;
    width: max-content;
    font-family: arial;
    font-size: 13px;
}
.lang a {
    text-decoration: none;
    margin-left: 5px;
}
.lang a:hover {
    text-decoration: underline;
}
</style>
