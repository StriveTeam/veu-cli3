<template>
  <div class="jsonParse">
    <div class="jsonBox">
      <el-input type="textarea" class="source" v-model="source" @change="checkJson"></el-input>
    </div>
    <div class="resultBox">
      <el-input type="textarea" class="result" v-model="result" :class="{'pass': checkFlag, 'fail': !checkFlag}"></el-input>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import jsonlint from '@/libs/jsonlint';
import _ from 'lodash';
export default {
  name: 'jsonparse',
  components: {},
  data () {
    return {
      source: '',
      result: '',
      checkFlag: false
    };
  },
  created () {},
  methods: {
    checkJson () {
      try {
        const checkFlagText = jsonlint.parse(this.source);
        if (checkFlagText) {
          this.source = JSON.stringify(checkFlagText, null, '  ');
          this.result = 'Json is valid!';
          this.checkFlag = true;
        }
      } catch (e) {
        this.checkFlag = false;
        this.result = e;
      }
    }
  },
  mounted () {},
  watch: {
    source: _.debounce(
      function () {
        this.checkJson();
      }, 1000)
  }
};
</script>
<style lang="scss">
.jsonParse{
  line-height: 30px;
  .jsonBox, .resultBox{
    padding: 10px 20px
  }
  .source{
    .el-textarea__inner{
      height: 400px;
    }
  }
  .pass {
    .el-textarea__inner{
      height: 90px;
      color: #42b941;
      background: #ddfbdd;
      border: 1px solid #258625;
    }
  }
  .fail {
    .el-textarea__inner{
      height: 90px;
      color: #930;
      border: 1px solid #c50606;
    }
  }
}
textarea { width: 100%; }
</style>
