const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:1,color:'green'},
                {id:2,color:'blue'}
            ],
            sizes: [
                {id:1,size:'38'},
                {id:2,size:'40'},
                {id:3,size:'42'},
                {id:4,size:'45'}
            ]
        }
    }
})
