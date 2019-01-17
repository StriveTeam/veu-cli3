<template>
  <div class="home">
    <s-table
      :columns="columns"
      :data="tableData"
      ref="clist"
      height="auto">
    </s-table>
  </div>
</template>
<script>
// @ is an alias to /src
import { getTableData } from '@/api/data';
export default {
  name: 'home',
  components: {},
  data () {
    const _this = this;
    return {
      columns: [
        {
          label: '台号',
          prop: 'seatsnums'
        },
        {
          label: '开台时间',
          prop: 'open_time'
        },
        {
          label: '闭台时间',
          prop: 'close_time'
        },
        {
          label: '总金额',
          prop: 'pay_sum_money',
          render (h, { row }) {
            return (<div class="allRight">{row.pay_sum_money}</div>);
          },
          sort: true
        },
        {
          label: '销售',
          prop: 'sales_name',
          oprate: 'filter',
          filteData: {
            search: true,
            mutiple: true,
            get filters () {
              // return _this.$store.state.order.saleslist;
              return [];
            }
          }
        },
        {
          label: '客户',
          render (h, { row }) {
            return (
              <div>
                <div>
                  {row.username}
                </div>
                <div>
                  {row.mobile_hid}
                </div>
              </div>
            );
          }
        },
        {
          label: '收银人',
          prop: 'cashier_names'
        },
        {
          label: '操作',
          render (h, ctx) {
            return (
              <div class="commo-detail-button"
                onClick={
                  () => {
                    _this.$router.push(`/order/orderinfo/${ctx.row.seats_log_id}`);
                  }
                }>
                查看详情
              </div>
            );
          }
        }
      ],
      tableData: []
    };
  },
  created () {
    getTableData().then(res => {
      console.log(res);
      this.tableData = res.data.list;
    });
  },
  methods: {},
  mounted () {}
};
</script>
