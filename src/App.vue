<template>
  <div id="app">
    <el-container v-if="token" class="mainCon">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
    <el-container v-else class="mainCon">
      <router-view></router-view>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      token: localStorage.getItem('user')
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 100%
}
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
.mainCon{
  height: 100%;
}
body > .el-container {
  margin-bottom: 40px;
  height: 100%
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
</style>
