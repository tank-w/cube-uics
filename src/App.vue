<template>
  <div id="app">
    <slide-banner></slide-banner>
    <index-list></index-list>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import SlideBanner from 'components/slide-banner/slide-banner'
  import IndexList from 'components/index-list/index-list'
  import BottomNav from 'components/bottom-nav/bottom-nav'
  export default {
    name: 'App',
    components: {
      SlideBanner,
      IndexList,
      BottomNav
    }
  }
</script>

<style lang="stylus">

</style>
