<template>
    <div class="footer">
        <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler">
        </cube-tab-bar>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      selectedLabel: {},
      selectedCenter: {},
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '查询记录',
        icon: 'cubeic-vip'
      }, {
        label: '个人中心',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler(label) {
      if (label === '首页') {
        this._hideAll()
      } else if (label === '查询记录') {
        this.selectedSearch = label
        this._showSearch()
        this._hideCenter()
      } else {
        this.selectedCenter = label
        this._hideSearch()
        this._showCenter()
      }
    },
    _showSearch() {
      this.searchComp = this.searchComp || this.$createSearch({
        $props: {
          search: 'selectedSearch'
        }
      })
      this.searchComp.show()
    },
    _hideSearch() {
        this.searchComp = this.searchComp || this.$createSearch({
          $props: {
            search: 'selectedSearch'
          }
        })
        this.searchComp.hide()
    },
    _showCenter() {
      this.centerComp = this.centerComp || this.$createCenter({
        $props: {
          centers: 'selectedCenter'
        }
      })
      this.centerComp.show()
    },
    _hideCenter() {
      this.centerComp = this.centerComp || this.$createCenter({
        $props: {
          center: 'selectedCenter'
        }
      })
      this.centerComp.hide()
    },
    _hideAll() {
      this.searchComp.hide()
      this.centerComp.hide()
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
    .footer
        border-top:1px solid #ccc
        position:fixed
        left:0px
        bottom:0px
        width:100%
</style>
