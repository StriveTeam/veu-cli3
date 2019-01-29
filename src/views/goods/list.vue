<template>
  <s-table
    :columns="columns"
    :data="tableData"
    ref="clist"
    height="auto">
  </s-table>
</template>
<script>
// @ is an alias to /src
import { getGoodsList } from '@/api/goods';
export default {
  name: 'goods_list',
  components: {},
  data () {
    return {
      val: '',
      columns: [
        {
          label: 'name',
          prop: 'name'
        },
        {
          label: 'create_Time',
          prop: 'create_time'
        },
        {
          label: 'update_Time',
          prop: 'update_time'
        },
        {
          label: 'price',
          prop: 'price',
          render (h, { row }) {
            return (<div class="allRight">￥{row.price}</div>);
          }
        },
        {
          label: 'onSale',
          prop: 'onsale'
        },
        {
          label: '操作',
          render (h, ctx) {
            return (
              <div class="operate">
                <span>修改</span> | <span>查看</span>
              </div>
            );
          }
        }
      ],
      tableData: []
    };
  },
  created () {
    getGoodsList().then(res => {
      console.log(res);
      this.tableData = res.data.goods;
    });
  },
  methods: {},
  mounted () {
    this.val = 'aaaa';
  }
};
</script>
<style lang="scss">
.operate {
  span {
    color: #1ba2f5;
    cursor: pointer;
  }
}
</style>
>
