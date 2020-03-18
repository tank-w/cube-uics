<template>
    <div class="all_search">
        <cube-input
        v-model="value"
        :placeholder="placeholder"
        :type="type"
        :clearable="clearable"
        @input="getFocus"
        ></cube-input>
        <div class="all_list">
            <div class="list_ul">
                <div class="list_sn">订单号：WJ12312312312313</div>
                <div class="list_time">2020-03-11</div>
            </div>
            <div class="list_ul">
                <div class="list_sn">订单号：WJ12312312312313</div>
                <div class="list_time">2020-03-11</div>
            </div>
            <div class="list_ul">
                <div class="list_sn">订单号：WJ12312312312313</div>
                <div class="list_time">2020-03-11</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'searchall',
    data() {
      return {
        value: '',
        placeholder: '请输入单号',
        type: 'text',
        clearable: {
          visible: true,
          blurHidden: true
        }
      }
    },
    methods: {
        getFocus() {
            console.log('输入值变化时，发送请求')
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
    .all_search
        padding:10px
    .all_list
        flex-direction: column
    .list_ul
        border-bottom:1px solid #ccc
    .list_sn
        height:40px
        line-height:40px
    .list_time
        height:30px
        line-height:30px
</style>
