<template>
  <div id="app">
    <section id="topbar" class="d-none d-lg-block">
    <button type="button" id="mobile-nav-active">
      <i class="fa">点击</i>
    </button>
  </section>
    <header id="header">
      <div class="container">
        <div id="logo" class="pull-left">
          <h1>
            <a href="#body" class="scrollto">
              <span>
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </span>PARTY
            </a>
          </h1>
        </div>

        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li class="menu-active">
              <a href="#" @click="onScroll(0)">Home</a>
            </li>
            <li>
              <a href="#" @click="onScroll(640)">We Do</a>
            </li>
            <li>
              <a href="#" @click="onScroll(1280)">Who We</a>
            </li>
            <li>
              <a href="#portfolio">Gallery</a>
            </li>
            <li>
              <a href="#event">Events</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#price">Price</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section id="intro">
      <div class="intro-content">
        <h2>
          <span>Party Night</span>
          <br />Crazy Non-Stop Music Reload
        </h2>
        <div>
          <a href="#about" class="btn-get-started scrollto">Book Now</a>
        </div>
      </div>
      <div class="item" style="background-image: url('img/intro-carousel/1.jpg');"></div>
    </section>
    <section id="services">
      <div class="container">
        <div class="section-header">
          <h2>We Do</h2>
          <p>{{text}}</p>
        </div>

        <div class="box">
          <HelloWorld
            v-for="(todo,index ) in todos"
            :key="index"
            :title="todo.title"
            :text="todo.text"
          ></HelloWorld>
        </div>
      </div>
    </section>
    <whowe ></whowe>
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import whowe from "./components/who we.vue";
export default {
  name: "app",
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore",
      todos: [
        {
          title: "Organisation",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
        },
        {
          title: "Event Party",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
        },
        {
          title: "Music Galla",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla."
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(function() {
      // window.addEventListener("scroll", this.onScroll);
    });
  },
  methods: {
    onScroll(key) {
      let scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(1);
      // console.log(document.documentElement.scrollTop);
      let step = 0;
      if (scrolled < key) {
        smoothDown();
      } else {
        let newTotal = scrolled - key;
        step = newTotal / 800;
        smoothUp();
      }
      function smoothDown() {
        if (scrolled < key) {
          scrolled += step;
          step+=1/30;
          document.body.scrollTop = scrolled;
          document.documentElement.scrollTop = scrolled;
          setTimeout(smoothDown, 3);
        } else {
          document.body.scrollTop = key;
          document.documentElement.scrollTop = key;
        }
      }
      function smoothUp() {
        if (scrolled > key) {
          scrolled -= step;
          step+=1/30;
          document.body.scrollTop = scrolled;
          document.documentElement.scrollTop = scrolled;
          setTimeout(smoothUp, 3);
        } else {
          document.body.scrollTop = key;
          document.documentElement.scrollTop = key;
        }
      }
    },
    scrollTop() {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      let step = distance / 50;
      let total = 0;
      if (total < distance) {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothUp() {
        if (distance > 1) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = 1;
          document.documentElement.scrollTop = 1;
        }
      }
    }
  },
  components: {
    HelloWorld,
    whowe
  }
};
</script>

<style>
* {
  margin: 0 0;
  padding: 0 0;
}
#app {
}
#mobile-nav-toggle {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  margin: 20px 20px 0 0;
  border: 0;
  background: none;
  font-size: 24px;
  display: none;
  transition: all 0.4s;
  outline: none;
  cursor: pointer;
}

#mobile-nav-toggle i {
  color: #9C27B0;
}
body.mobile-nav-active {
  overflow: hidden;
}

body.mobile-nav-active #mobile-nav {
  left: 0;
}

body.mobile-nav-active #mobile-nav-toggle {
  color: #fff;
}
@media (max-width: 768px) {
  #nav-menu-container {
    display: none;
  }
}
@media (max-width: 768px) {
  #mobile-nav-toggle {
    display: inline;
  }
}
@media (max-width: 768px) {
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#mobile-nav-toggle {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
    margin: 20px 20px 0 0;
    border: 0;
    background: none;
    font-size: 24px;
    display: none;
    transition: all 0.4s;
    outline: none;
    cursor: pointer;
}
}
#topbar {
  background: linear-gradient(45deg, #E91E63 -132%, #0c2e8a 100%);
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  display: none !important;
}

#topbar .contact-info a {
  line-height: 1;
  color: #acacac;
}

#topbar .contact-info a:hover {
  color: #E91E63;
}

#topbar .contact-info i {
  color: #E91E63;
  padding: 4px;
}
.contact-info.float-left {
    color: #acacac;
}
#topbar .contact-info .fa-phone {
  padding-left: 20px;
  margin-left: 20px;
  border-left: 1px solid #e9e9e947;
}

#topbar .social-links a {
  color: #E91E63;
  padding: 4px 12px;
  display: inline-block;
  line-height: 1px;
  border-left: 1px solid #e9e9e924;
}

#topbar .social-links a:hover {
  color: #E91E63;
}

#topbar .social-links a:first-child {
  border-left: 0;
}

#header {
  height: 84px;
  transition: all 0.5s;
  margin: 0 0;
  padding: 0 0;
  z-index: 997;
  background: #09040c;
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);
}
#header {
  width: 100%;
  position: fixed;
}
#header #logo h1 {
  font-size: 28px;
  margin: 0 0 0 0;
  margin-left: 12%;
  padding: 0;
  line-height: 84px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}

#header #logo h1 a {
  color: #ff377b;
  line-height: 84px;
  display: inline-block;
}

#header #logo h1 a span {
  /* color: #e448ff; */
  margin-right: 8px;
}

#header #logo img {
  padding: 0;
  margin: 0;
}
@media (max-width: 768px) {
  #header {
    padding: 20px 0;
    height: 74px;
  }
  #header #logo h1 {
    font-size: 34px;
  }
  #header #logo img {
    max-height: 40px;
  }
}
a {
  height: 84px;
  line-height: 84px;
  text-decoration: none;
  outline: none;
  color: #9f6ab9;
  transition: 0.5s;
}
a:hover,
a:active,
a:focus {
  color: #f50c8b;
  outline: none;
  text-decoration: none;
}
.nav-menu,
.nav-menu * {
  margin: 0;
  padding: 0;

  list-style: none;
}
.nav-menu ul {
  position: absolute;
  display: none;
  top: 0px;
  left: 0;
  z-index: 99;
}
.nav-menu li {
  margin-right: 20px;
  position: relative;
  white-space: nowrap;
}

.nav-menu > li {
  float: left;
}

.nav-menu li:hover > ul,
.nav-menu li.sfHover > ul {
  display: block;
}

.nav-menu ul ul {
  height: 84px;
  top: 0;
  left: 100%;
}

.nav-menu ul li {
  height: 84px;
  line-height: 84px;
  min-width: 180px;
}
#nav-menu-container {
  width: 45%;
  margin-right: 8%;
  height: 84px;
  margin-top: -84px;
  position: relative;
  float: right;
}
#intro {
  width: 100%;
  height: 100vh;

  position: relative;
  background: url("../img/intro-carousel/1.jpg") 0 84px no-repeat;
  background-size: cover;
}

#intro .intro-content {
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 14%;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

#intro .intro-content h2 {
  color: #ff377b;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
}

#intro .intro-content h2 span {
  color: #ff377b;
  font-size: 64px;
  text-transform: uppercase;
  font-family: "Russo One", sans-serif;
}
#intro .intro-content .btn-get-started {
  margin: 10px 10px;
  padding: 10px 20px;
  background: transparent;
  border: 2px solid #ff377b;
  color: #ff377b;
}

#intro .intro-content .btn-get-started:hover {
  background: none;
  color: #fff;
  background: #ff377b;
  border: 2px solid #ff377b;
}
#services {
  width: 100%;
  background: #280045;
  display: flex;
  margin: 0 auto;
}
#services .container {
  color: #e9125a;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  font-size: 20px;
  text-align: center;
}
#services .container h2 {
  margin: 0 auto;
  width: 180px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 3px solid #e9125a;
}
#services p {
  color: #c393c7;
  font-size: 16px;
  width: 70%;
  margin: 0 auto;
}
#services .box {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
