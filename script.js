

const { createApp } = Vue

  createApp({
    data() {
      return {
        mailList: [],
        mailListReady: false
      }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                //console.log(response);
                this.mailList.push(response.data.response);
                if (i == 9){
                    this.mailListReady = true;
                }
            })
        }
    }
  }).mount('#app')