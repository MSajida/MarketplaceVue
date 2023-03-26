<template>
    <div class="page-content page-container" id="page-content">
        <h1>ADS Items</h1>
        <div class="row card-container">
            <div class="col mb-4" v-for="c in this.data.data.adsPageItems" :key="c.id">
                <div class="row">
                    <div class="a1">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div>
                            <img :src="getimgURL(c)" class="img-radius" alt="User-Profile-Image" height="190" width="190"
                                id="image1" />
                            <h5 class="card-title">{{ c.productName }}</h5>
                            <p class="card-text" style="color: blue">${{ c.price }}</p>
                            <p class="card-text" style="color: rebeccapurple">{{ c.description }}</p>
                            <p class="card-text" style="color: royalblue">{{ c.qtyAvailable }} Available</p>
                            <p class="card-text">Product is {{c.status}}</p>
                            <font-awesome-icon @click="update(c.id,c.category)" icon="edit" />
                            &nbsp;&nbsp;
                            <font-awesome-icon @click = "deleteAdd(c.id,c.category)" icon="trash" color="red" />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#/home">Home</a>
    </div>
</template>
<script>

import Vue from 'vue';
//import formData from 'form-data';
export default {
    name: "UserAds",
    mounted() {
        this.electronics();
    },
    data() {
        return Vue.observable({

            data: null,
            Electronics: {
                subcategory: "",
                category:"",
                productName: "",
                modelName: "",
                price: "",
                dimensions: "",
                daysUsed: "",
                qtyAvailable: "",
                description: "",
                images: [],
                studentId: "",
                status:""
            }

        });
    },
    methods: {

        async deleteAdd(id, category){
            console.log("inside delete" , id, category)
            await this.$axios
                .delete(
                    "http://52.22.24.58:8082/"+category+"/delete/"+id
                )

                .then((res) => {
                    if (res.status == 200) {
                        this.data = res;
                        alert("Successfully deleted the product")
                        this.electronics();
                        console.log(JSON.stringify(this.data), "response after delete")

                    }
                });

        },
        update(id, category){
            console.log("inside update", id, category)
            if(category=='electronics')
            {
              window.sessionStorage.setItem("electronicId", id);
               //window.location.href="/#/UpdateElectronics"
               this.$router.push("/UpdateElectronics")
            }
            if(category=='clothing')
            {
                window.sessionStorage.setItem("clothingId", id);
                //window.location.href="/#/UpdateClothing"
                this.$router.push("/UpdateClothing")
            }
            if(category=='household')
            {
                window.sessionStorage.setItem("householdId", id);
                //window.location.href="/#/UpdateHousehold"
                this.$router.push("/UpdateHousehold")
            }
            if(category=='automobiles')
            {
                window.sessionStorage.setItem("automobileId", id);
                //window.location.href="/#/UpdateAutomobiles"
                this.$router.push("/UpdateAutomobiles")
                
            }
            if(category=='miscellenous')
            {
                window.sessionStorage.setItem("miscellenousId", id);
                //window.location.href="/#/UpdateOthers"
                this.$router.push("/UpdateOthers")

            }
            
        },

        async electronics() {

            this.Electronics.studentId = sessionStorage.getItem('user');
            console.log('id is', this.Electronics.studentId);
            await this.$axios
                .get(
                    "http://52.22.24.58:8082/ads/" + this.Electronics.studentId
                )

                .then((res) => {
                    if (res.status == 200) {
                        this.data = res;
                        console.log(JSON.stringify(this.data.data.adsPageItems), "data")
                    }
                });

        },

        getimgURL(c) {

            let img = c.images.split(" ")[0]
            console.log("cccc " + img)
            return img
        },

    },
};
</script>
<style scoped>
.mycarousel {
    width: 90%;
    margin-left: 10px
}

.a1 {

    height: 450px;
    width: 400px;
}

.card {
    flex: 1;
    /* make the cards take up equal space */
}
</style>
