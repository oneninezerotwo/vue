Vue.component('xnav', {
    data() {
        return {
            name: "yao",
            channels: [{
                title: "推荐",
                channel: "__all__"
            }, {
                title: "视频",
                channel: "video"
            }, {
                title: "热点",
                channel: "news_hot"
            }, {
                title: "社会",
                channel: "news_society"
            }, {
                title: "娱乐",
                channel: "news_entertainment"
            }, {
                title: "军事",
                channel: "news_military"
            }, {
                title: "科技",
                channel: "news_tech"
            }, {
                title: "汽车",
                channel: "news_car"
            }, {
                title: "房产",
                channel: "news_house"
            }, {
                title: "yao",
                channel: "yao"
            }],
            // 频道默认打色值
            channelIndex: 0
        }
    },
    template: `
        <div class="top_menu_bar ">
            <div class="top_menu_more">
                <div class="list_shadow"></div><a class="more_btn" href="javascript:void(0)"><span
                        class="cross"></span></a>
            </div>
            <div class="top_menu_list">
                <a @click="selectChannel(index)" :test="channelIndex" :test2="index" v-for="(channel ,index) in channels" href="javascript:void(0)"
                    :data-channel="channel.channel" :data-query="'channel='+channel.channel" :class="{
                        'cur': channelIndex == index
                    }" class="btn"
                    v-text="channel.title"></a>
            </div>
            <xmain :skill="channels" :channel="channelIndex"></xmain>
        </div>
    `,
    methods: {
        selectChannel(index) {
            // console.log(index)
            this.channelIndex = index;
        }
    }
})