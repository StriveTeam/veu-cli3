<template>
  <div class="home">
    <s-table
      :columns="consumeColumns"
      :data="consumeData"
      ref="clist"
      height="auto">
    </s-table>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {},
  data () {
    return {
      consumeColumns: [
        {
          label: '桌台号',
          prop: 'seatsnums',
          width: '100'
        },
        {
          label: '支付时间',
          prop: 'create_time',
          width: '160'
        },
        {
          label: '业务类型',
          prop: 'type_name',
          width: '120'
        },
        {
          label: '卡号',
          prop: 'income_type_user_num',
          width: '140'
        },
        {
          label: '持卡人',
          prop: 'sale_name',
          width: '100'
        },
        {
          label: '宴请客户',
          prop: 'username',
          width: '180'
        },
        {
          label: '宴请金额',
          width: '120',
          render (h, ctx) {
            return (<div class="allRight" style = "" > {ctx.row.money} </div>)
          }
        }
      ],
      consumeData: []
    }
  }
}
</script>
