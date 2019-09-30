<template>
  <div class="boxx">
    <div class="title1">
      <div class="line">
        <h2>OUR EVENTS</h2>
      </div>
    </div>
    <div class="text">{{title}}</div>
    <div class="box1" v-for="(item,index) in itemstr" :key="index">
      <div class="leftSec">
        <p>
          9.30 - 10.30 AM
          <br />Workshop
        </p>
      </div>
      <div class="rightSec">
        <h4 class="title">
          <a href>{{item.shop}}</a>
        </h4>
        <p class="description">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data: function() {
    return {
      title1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore",
      list: ["Entrance", "Lunch & Snacks", "Custom Badge", "Certificate"],
      itemstr: [
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla.",
          shop: "Marketing"
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla.",
          shop: "Marketing"
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla.",
          shop: "Marketing"
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla.",
          shop: "Marketing"
        },
        {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla.",
          shop: "Marketing"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxx {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 0;
  height: 780px;
  background: #280045;
  padding: 90px 50px;
  color: #ffffff9c;
}
.title1 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #e91e63;
  height: 126px;
}
.line {
  height: 40px;
  border-bottom: 1px solid #e91e63;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  position: absolute;
  height: 80px;
  margin-top: 120px;
  text-align: center;
}
.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 178px;
  border: 1px solid #e91e63;
}
.leftSec {
  float: left;
  width: 234px;
  height: 80px;
  background: #e91e63;
  color: #fff;
  text-align: center;
  padding: 15px;
  transform: translateX(-60px);
  text-align: center;
}
.rightSec {
  float: right;
  width: 793px;
  transform: translateY(-20px);
}
h4 {
  color: #be0445;
}
.rightSec > h4 {
  color: #be0445;
}
</style>
