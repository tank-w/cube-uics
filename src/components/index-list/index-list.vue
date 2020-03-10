<template>
    <div class="app_list">
        <ul class="app_list_ul">
            <li class="list_li"><div class="list_div" >应用1</div></li>
            <li class="list_li"><div class="list_div" >应用2</div></li>
            <li class="list_li"><div class="list_div" >应用3</div></li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/mixin"
    @import "~common/stylus/variable"
    .app_list_ul
        width:100%
        flex-wrap:wrap
        display:flex
    .list_li
        width:42%
        height:50px
        line-height:50px
        padding:4% 2% 4% 4%
        text-align:center
    .list_div
        border:1px solid #ccc
</style>
