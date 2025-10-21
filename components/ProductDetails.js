app.component('productDetails',
    {
        prop:{
            details: {
                type: Array,
            required: true
        }
        },
        template:
         /*html*/
        `<div classs="ProductDetails"> 
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
        </div>`
        

    }
)