<template>
    <div class="center" v-show="visible">
        center
    </div>
</template>

<script type="text/ecmascript-6">
    import popupMixin from 'common/mixins/popup'
    export default {
        mixins: [popupMixin],
        name: 'center',
        props: {
            centers: {
                type: String
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
    .center
        position: fixed
        left: 0
        top: 0
        bottom: 48px
        z-index: 30
        width: 100%
        background: $color-white
</style>
