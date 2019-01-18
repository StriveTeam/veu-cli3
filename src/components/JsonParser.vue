<template>
  <div class="jsonParse">
    <div class="jsonBox">
      <div class="source el-textarea">
        <div class="textRows">
          <div v-for="(item, index) in textRows" :key="index">{{item}}</div>
        </div>
        <textarea autocomplete="off" class="el-textarea__inner" v-model="source" @change="checkJson"></textarea>
      </div>
    </div>
    <div class="resultBox">
      <pre id="result" class="result el-textarea__inner" :class="{'pass': checkFlag === true, 'fail': !checkFlag}">{{result}}</pre>
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
      checkFlag: -1,
      textRows: []
    };
  },
  created () {},
  methods: {
    checkJson () {
      try {
        const checkFlagText = jsonlint.parse(this.source);
        if (checkFlagText) {
          this.source = JSON.stringify(checkFlagText, null, '  ');
          document.getElementById('result').innerHTML = 'Json is valid!';
          this.checkFlag = true;
        }
      } catch (e) {
        this.checkFlag = false;
        document.getElementById('result').innerHTML = e;
        // this.result = e;
      }
    }
  },
  mounted () {},
  watch: {
    source: _.debounce(
      function () {
        this.checkJson();
      }, 600)
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
  .result {
    display: none;
  }
  .pass {
    height: 40px;
    color: #42b941;
    background: #ddfbdd;
    border: 1px solid #258625;
    display: block;
  }
  .fail {
    height: 90px;
    color: #930;
    border: 1px solid #c50606;
    display: block;
  }
}
textarea { width: 100%; }
</style>
