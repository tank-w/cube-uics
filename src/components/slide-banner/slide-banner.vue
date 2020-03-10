<template>
  <div>
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
          return {
          items: [
              {
              url: 'http://www.didichuxing.com/',
              image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
              },
              {
              url: 'http://www.didichuxing.com/',
              image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
              },
              {
              url: 'http://www.didichuxing.com/',
              image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
              }
          ]
          }
      },
      methods: {
          changePage(current) {
          // console.log('当前轮播图序号为:' + current)
          },
          clickHandler(item, index) {
          }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
</style>
