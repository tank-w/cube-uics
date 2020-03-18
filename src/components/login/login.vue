<template>
  <transition
    name="move"
  >
    <div class="login" v-if="visible">login</div>
  </transition>
</template>

<script>
import popupMixin from 'common/mixins/popup'
export default {
    mixins: [popupMixin],
    name: 'login',
    props: {
        logins: {
            type: Object
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
    .login
        position: fixed
        left: 0
        top: 0
        bottom: 48px
        z-index: 30
        width: 100%
        background: $color-white

</style>
