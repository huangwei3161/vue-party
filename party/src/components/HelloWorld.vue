<template>
  <div id="card">
    <div class="box wow fadeInLeft">
      <div class="icon">
        <i class="fa fa-diamond"></i>
      </div>
      <div class="content">
        <h4 class="title">
        <a href>{{title}}</a>
      </h4>
      <p
        class="description"
      >{{text}}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title:String,
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card {
  width: 350px;
  height: 350px;
  margin:20px 30px;
  padding: 60px 0 0 0;
}

#card .box {
  height: 230px;
  padding: 20px;
  margin-bottom: 40px;
  background: #fff;
  transition: 0.4s;
  /* border: 1px solid #ff377b; */
  position: relative;
  overflow: hidden;
  border-radius: 25px;
}
#card .box:after {
    content: '';
    width: 80px;
    height: 80px;
    background: #ff377b;
    position: absolute;
    top: -30px;
    border-radius: 50%;
    right: -30px;
}
#card .box:hover {
  box-shadow: 0px 0px 30px rgba(73, 78, 92, 0.15);
  transform: translateY(-10px);
}
.content{
  display: flex;
  flex-direction: column;
}
</style>
