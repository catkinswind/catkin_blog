<template>
  <div id="app">
    <router-view></router-view>
    <div class="wrapper">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
  </div>
  </div>

</template>

<script>
export default {

};
</script>
<style lang="scss">
html,body{
  width: 100%;height: 100%;overflow-x: hidden;
  font-family:  Rubik,sans-serif;
}
.wrapper div {
  height: 1rem;
}
.box1 {
  width: 2rem;
  background-color: coral;
}
.box2 {
  width: 4rem;
  background-color: skyblue;
}
.box3 {
  width: 6rem;
  background-color: palegreen;
}
.box4 {
  width: 8rem;
  background-color: wheat;
}
.box5 {
  width: 10rem;
  background-color: darkred;
}

</style>
