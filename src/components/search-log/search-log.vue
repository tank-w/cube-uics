<template>
    <div class="search" v-show="visible">
        <search-tab></search-tab>
    </div>
</template>

<script type="text/ecmascript-6">
    import popupMixin from 'common/mixins/popup'
    import SearchTab from 'components/search-tab/search-tab'
    export default {
        mixins: [popupMixin],
        name: 'search',
        props: {
            search: {
                type: String
            }
        },
        // computed: {
        //     tabs() {
        //         return [
        //         {
        //             label: '全部'
        //         },
        //         {
        //             label: '成功'
        //         },
        //         {
        //             label: '查询中'
        //         }
        //         ]
        //     }
        // },
        components: {
            SearchTab
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
    .search
        position: fixed
        left: 0
        top: 0
        bottom: 48px
        z-index: 30
        width: 100%
        background: $color-white
</style>
