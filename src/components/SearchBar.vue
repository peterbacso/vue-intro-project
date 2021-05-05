<template>
  <div class="container">
    <img class='title-gif' title="95 de ani de la nașterea Getei Brătescu" src="https://www.google.com/logos/doodles/2021/geta-bratescus-95th-birthday-6753651837108375.2-l.png" />
    <div class='input-box' v-bind:class="{ active: isActive }">
        <svg class='search-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
        <input type="text" class="search-input" @click="myFilter()">
        <svg class="mic-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z" fill="#4285f4"></path><path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path><path d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z" fill="#f4b400"></path><path d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z" fill="#ea4335"></path></svg>
        <span class="keyboard-icon"><img src="https://www.gstatic.com/inputtools/images/tia.png" tia_disable_swap="true" tia_field_name="q" jsname="JyIpdf" data-atf="0" tia_property="web"></span>
        <div class="search-history">
          <div class="border-history"></div>
          <ul class="history-list">
            <li v-for="item in history" :key="item.id">
              <div class="history-icon"></div>
              <p>{{item.text}}</p>
            </li>
          </ul>
        </div>
    </div>
    <div class="center-buttons">
        <input class="button" value="Căutare Google" type="submit">
        <input class="button" value="Mă simt norocos" type="submit">
    </div>
    <div class='lang'>
      Google oferit în:  
      <a v-for="lang in langs" :key="lang.id" :href="lang.link" >{{lang.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: function () {
    return {
      isActive: false,
      langs: [
        {
          id: 0,
          title: "English",
          link: "https://www.google.com/setprefs?sig=0_4ss-NBv-0K-0N43ss7YGPgMicQ0%3D&amp;hl=en&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwi0mab5qZHwAhXRAmMBHU9fDygQ2ZgBCA8"
        },
        {
          id: 1,
          title: "Magyar",
          link: "https://www.google.com/setprefs?sig=0_4ss-NBv-0K-0N43ss7YGPgMicQ0%3D&amp;hl=hu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwi0mab5qZHwAhXRAmMBHU9fDygQ2ZgBCA8"
        },
        {
          id: 2,
          title: "Deutsch",
          link: "https://www.google.com/setprefs?sig=0_4ss-NBv-0K-0N43ss7YGPgMicQ0%3D&amp;hl=de&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwi0mab5qZHwAhXRAmMBHU9fDygQ2ZgBCA8"
        }
      ],
      history: [
        {
          id: 0,
          text: "what is vue?"
        },
        {
          id: 1,
          text: "how to sell my kidney?"
        },
        {
          id: 2,
          text: "where is cluj?"
        },
        {
          id: 3,
          text: "am i an alcoholic?"
        }
      ]
    }
  },
  props: {
    msg: String,
  },
  methods: {
    inputClick(){
      console.log("clickkkk");
    },
    myFilter: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  // margin: 50px 15px 0;
  .title-gif {
      width: 400px;
      display: block;
      margin: 0 auto;
      border-radius: 20px
  }
  .input-box {
    display: flex;
    position: relative;
    width: 580px;
    margin: 30px auto 20px;
    &.active {
      .search-history {
        height: auto;
        width: 100%;
        position: absolute;
        top: 42px;
        background: #fff;
        box-shadow: 0 4px 6px rgba(32, 33, 36, .28);
        display: flex;
        flex-direction: column;
        list-style-type: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0 0 24px 24px;
        overflow: hidden;
        .border-history {
          border-top: 1px solid #e8eaed;
          margin: 0 20px 0 14px;
          padding-bottom: 4px;
        }
      }
      .search-input {
        border-color: rgba(223,225,229,0);
        box-shadow: 0 1px 6px rgba(32, 33, 36, .28);
        border-radius: 20px 20px 0 0;
        border: 1px solid white;
      }
      .history-list {
        display: block;
        margin-top: 10px;
        padding: 0;
        li {
          display: flex;
          padding: 7px 15px;
          cursor: pointer;
          &:hover {
            background-color: #eee;
          }
        }
        p {
          margin-block: 0;
        }
        .history-icon {
          background: url("https://www.google.com/images/searchbox/desktop_searchbox_sprites302_hr.webp") no-repeat 0 -21px;
          background-size: 20px;
          min-height: 20px;
          min-width: 20px;
          height: 20px;
          width: 20px;
          margin-right: 15px;
        }
      }
    }
    .search-icon {
      position: absolute;
      width: 20px;
      height: 100%;
      fill: #9AA0A6;
      left: 20px;
    }
    .mic-icon {
      position: absolute;
      width: 24px;
      height: 100%;
      right: 16px;
      cursor: pointer;
    }
    .keyboard-icon {
      position: absolute;
      right: 60px;
      cursor: pointer;
    }
    .keyboard-icon {
      img {
        padding: 15px 0;
      }
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
      &:hover {
        outline: 0;
        box-shadow: 0 1px 6px rgba(32, 33, 36, .28);
      }     
      &:focus {
        outline: 0;
      }
    }
    .history-list {
      display: none;    
    }
  }
  .center-buttons {
    margin: 0 auto;
    width: max-content;
    .button {
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
      &:hover {
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        background-color: #f8f9fa;
        border: 1px solid #dadce0;
        color: #202124;
      }
    }
  }
  .lang {
    margin: 20px auto 0;
    width: max-content;
    font-family: arial;
    font-size: 13px;
    a {
      text-decoration: none;
      margin-left: 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .input-box {
      margin-left: 20px;
      margin-right: 20px;
      width: auto;
      .search-input {
        width: 100%;
      }
    }
    .center-buttons .button {
        display: block;
    }
    .lang a {
        display: block;
        text-align: center;
        margin-top: 6px;
    }
  }
}
</style>
