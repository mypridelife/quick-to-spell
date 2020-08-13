<template>
  <div class="about ">
    <h1 class="u-text">This is an about page</h1>
    <input placeholder="我是红色的！" />
    1px
    <div class="mExample"></div>
    <div class="mExample2"></div>
  </div>
</template>

<style scoped lang="scss" type="text/css">
.u-text {
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}

.mExample {
  margin: 10px 0;
  height: 0.5px;
  width: 500px;
  background: #333;
}
.mExample2 {
  margin: 10px 0;
  height: 0.25px;
  width: 500px;
  background: #333;
}
</style>
