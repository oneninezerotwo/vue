Vue.component('xheader',{
    data(){
        return {}
    },
    template:`
        <header id="indexHeader" class="index--toutiaoribao">
            <div class="top_bar">
                <div class="abs_m"><a href="#" class="refresh_title btn"></a>
                    <div class="refreshBtn-container "><i class="refresh_btn"></i></div>
                </div>
                <div class="abs_l"><a href="javascript:;" class="msg-box">
                        <div class="circle"></div>
                    </a></div>
                <div class="abs_r"><a href="https://m.toutiao.com/search/?need_open_window=1" class="btn search"></a>
                </div>
            </div>
        </header>
    `
})