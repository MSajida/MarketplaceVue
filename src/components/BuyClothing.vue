<template>
    <div class="page-content page-container" id="page-content">

        <h1>Clothing List</h1>

        <div class="row card-container">
            <div class="col mb-4" v-for="c in this.data.data" :key="c.clothingid">
                <div class="row">
                    <div class="a1">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div>
                            <carousel class="mycarousel" :perPage="1" :navigationEnabled="true" :paginationEnabled="true">
                                <slide v-for="(image, index) in c.images" :key="index">
                                    <img :src="image" class="img-radius" alt="User-Profile-Image" height="190" width="190"
                                        id="image1" />
                                </slide>
                            </carousel>

                            <h5 class="card-title">{{ c.productName }}</h5>
                            <p class="card-text" v-if="c.price" style="color: blue">${{ c.price }}</p>
                            <p class="card-text" v-if="c.description" style="color: rebeccapurple">{{ c.description }}</p>
                            <p class="card-text"  v-if="c.size" style="color: gray">Size: {{ c.size }}</p>
                            <p class="card-text" v-if="c.daysUsed" style="color: rebeccapurple">{{ c.daysUsed }} Days used</p>
                            <p class="card-text" v-if="c.qtyAvailable " style="color: royalblue">{{ c.qtyAvailable }} Available</p>
                            <font-awesome-icon icon="phone" class="rotate-icon" style="color: green;"/> 
                            <span style="margin-left:7px; color: darkslateblue;">{{c.phoneNumber}}</span>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/Home">Home</router-link>
    </div>
</template>
<script>

import Vue from 'vue';
import { Carousel, Slide } from 'vue-carousel';
import formData from 'form-data';
export default {
    name: "BuyClothing",
    components: {
        Carousel,
        Slide
    },
    mounted() {
        this.clothing();
    },
    data() {
        return Vue.observable({

            formdata: new formData(),

            data: null,
            Clothing: {
                subcategory: "",
                productName: "",
                price: "",
                size: "",
                daysUsed: "",
                qtyAvailable: "",
                description: "",
                phoneNumber:"",
                images: ""
            }

        });
    },
    methods: {

        async clothing() {
            console.log("234r")
            await this.$axios
                .get(
                    "http://52.22.24.58:8082/clothing/clothes"
                )

                .then((res) => {
                    if (res.status == 200) {
                        this.data = res;
                        console.log(this.data.data, "data")
                        for (let i = 0; i < this.data.data.length; i++) {
                            let imageurl = this.getimgsURL(this.data.data[i])
                            var s = imageurl.split(" ")
                            let len = s.length
                            console.log(s.length, " leng")
                            var url = []
                            if (len == 1)
                                url = s
                            else {
                                for (let j = 0; j < len - 1; j++) {
                                    console.log(s[j] + "   image in s")
                                    console.log(JSON.stringify(this.data.data[i].images) + "   image data")
                                    url[j] = s[j]
                                    console.log(JSON.stringify(url[j]) + " post  image data")
                                }
                            }
                            this.data.data[i].images = url
                        }
                    }
                });

        },

        getimgURL(c) {

            let img = c.images.split(" ")[0]
            console.log("cccc " + img)
            return img
        },

        getimgsURL(c) {
            var imgsarrz = c.images
            console.log("multiple images" + imgsarrz)
            return imgsarrz
        }
    },
};
</script>
<style scoped>
.mycarousel {
    width: 90%;
    margin-left: 10px
}

.a1 {

    height: 500px;
    width: 400px;
}

.rotate-icon {
  transform: rotate(90deg); /* Apply rotation to the icon */
}

.card {
    flex: 1;
    /* make the cards take up equal space */
}
</style>
