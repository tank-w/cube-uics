<template>
    <div class="center" v-show="visible">
        <div class="center_top">
            <div class="c_img"></div>
            <div class="c_user">123123123</div>
        </div>
        <div class="content">
            <div>余额：0.00币</div>
            <div class="chongzhi">
            <cube-button @click="showAlert">充值</cube-button>
            </div>
            <div class="log">余额记录</div>
            <div class="outlogin">
                <cube-button @click="outlogin('logins')" ref="logins">退出登陆</cube-button>
            </div>
        </div>
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
        },
        data() {
            return {
                logins: [],
                selectedLogin: {}
            }
        },
        methods: {
            showAlert() {
            this.dialog = this.$createDialog({
                type: 'prompt',
                title: '充值',
                prompt: {
                value: '',
                placeholder: '请输入充值金额'
                },
                onConfirm: (e, promptValue) => {
                this.$createToast({
                    type: 'warn',
                    time: 1000,
                    txt: `Prompt value: ${promptValue || ''}`
                }).show()
                }
            }).show()
            },
            _showLogin() {
                this.loginComp = this.loginComp || this.$createLogin({
                    $props: {
                        logins: 'selectedLogin'
                    }
                })
                console.log(this.loginComp)
                this.loginComp.show()
            },
            outlogin(logins) {
                this.selectedLogin = logins
                this._showLogin()
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
    .center_top
        padding:10px
        display: flex
        flex-direction: row
    .c_img
        width:60px
        height:60px
        border-radius:360px
        background:#f0ff00
    .c_user
        margin-left:10px
        height:20px
        padding-top:40px
    .content
        padding:10px
        margin-top:30px
    .chongzhi
        margin-top:20px
    .log
        height:40px
        color:#e8864c
        line-height:40px
    .outlogin
        margin-top:30px
        text-align:center
        line-height:40px
        height:40px
        background:#ccc
</style>
