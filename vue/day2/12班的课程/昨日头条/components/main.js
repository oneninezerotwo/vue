Vue.component('xmain', {
    props: ['channel', 'skill'],
    data() {
        return {
        }
    },
    template: `
        <div v-text="channel"></div>
    `,
    watch: {
        channel() {
            console.log(this.channel)
        }
    }
})