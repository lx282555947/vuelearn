const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '算法导论',
                date: '2006-9',
                price: 85,
                purchase: 1
            },
            {
                id: 2,
                name: 'unix编程艺术',
                date: '2006-2',
                price: 59,
                purchase: 1
            },
            {
                id: 3,
                name: '编程珠玑',
                date: '2008-10',
                price: 39,
                purchase: 1
            },
            {
                id: 4,
                name: '代码大全',
                date: '2006-3',
                price: 128,
                purchase: 1
            },
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '￥' + price.toFixed(2);
        // },
        increase(index) {
            console.log(index + '增加了');
            this.books[index].purchase = this.books[index].purchase + 1;
        },
        decrease(index) {
            let num = this.books[index].purchase;
            if (num === 0) {
                return;
            }
            this.books[index].purchase = this.books[index].purchase - 1;
        },
        remove(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            return this.books.reduce((pre, curr) => pre + curr.price, 0);
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }
})
