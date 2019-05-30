# 生命周期

View (VM) View(舞台)->Model(演员)

|||V|M||
|-|-|-|-|-|-|
|beforeCreate|演员还没到目的地|undefined|undefined|创建前|
|created|演员到目的地(化妆，备稿)|undefined|title:"京剧"|创建后 放ajax请求|
|beforeMount|演员登台前|`<p>{{title}}</p>`虚拟模板|title:"京剧"|挂载前 改模板改虚拟DOM|
|mounted|演员登台后|`<p>京剧</p>`真实DOM解构|title:"京剧"|挂载后 配合refs改真实DOM不建议操作真实DOM|
|beforeUpdate|演员表演前|`<p>京剧</p>`|title:"粤剧"|更新前|
|updated|演员表演后|`<p>粤剧</p>`|title:"粤剧"|更新后|
|activated|演员在聚光灯下|||活跃|
|deactivated|演员不在聚光灯下|||不活跃|
|beforeDestroy|演员离场前|||销毁前 配合`<keep-alive><component>,v-if,<router-view>`|
|destroyed|演员离场后|||销毁后 配合`<keep-alive><component>,v-if,<router-view>`|
|errorCaptured|演员犯错被捕捉到||