export default {
    // update(context,playload){
    //     context.commit('changeInfo');
    //     console.log(playload.message);
    //     playload.success(context.state.info);
    // }
    update(context, playload) {
        context.commit('changeInfo');
        console.log(playload);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('时间到了')
                resolve();
            }, 1000);
        });
    }
}