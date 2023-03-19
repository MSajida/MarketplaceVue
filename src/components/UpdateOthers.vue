<template>
    <div>
        <br>
        <form class="offset-lg-3 col-md-6">
            <div class="form-group row ">
                <label for="category" class="col-sm-5 col-form-label">Category</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" v-model="this.category" readonly />
                </div>
            </div>
            <div class="form-group row">
                <label for="productName" class="col-sm-5 col-form-label">Product Name</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" v-model="Others.productName" />
                </div>
            </div>
            <div class="form-group row">
                <label for="noOFDaysUsed" class="col-sm-5 ">No Of Days Used</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" v-model="Others.daysUsed" />
                </div>
            </div>
            <div class="form-group row">
                <label for="qtnAvailable" class="col-sm-5">Qty Available</label>
                <div class="col-sm-5">
                    <input type="number" value="1" v-model="Others.qtyAvailable">
                </div>
            </div>
            <div class="form-group row">
                <label for="price" class="col-sm-5 ">Price</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" v-model="Others.price" />
                </div>
            </div>
            <div class="form-group row">
                <label for="description" class="col-sm-5 ">Product Description</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" v-model="Others.description" />
                </div>
            </div>
            <br>
        </form>
            <br>
        <div style="text-align:center">
            <button type="submit" v-on:click="UpdateProduct" class="btn btn-primary b1">SUBMIT</button>
        </div>
    </div>
</template>

<script>

import Vue from 'vue';
import formData from 'form-data';

export default ({
    name: "UpdateOthers",
    mounted() {
        this.productId=  sessionStorage.getItem("miscellenousId");
        this.getData(this.productId);
    },

    data() {
        return Vue.observable({
            formdata: new formData(),
            productId: "",
            category: "Others",
            Others: {
                productName: "",
                price:"",
                daysUsed: "",
                qtyAvailable: "",
                description: "",
                images: "",
            },

        });
    },
    methods: {

        UpdateProduct(Electronics) {
            this.Others.id= this.productId;
            this.$axios
            .put("http://localhost:8082/miscellenous/updateMisc",this.Others)
                .then((res) => {
                    if (res.status == 200) {
                        this.data = res;

                        console.log(this.data)
                        this.Others = this.data.data
                        this.category= 'Others'
                        alert("Successfully updated the product");
                        window.location.href="/#/Ads"

                    }
                    else {
                        this.data = res;
                        console.log(this.data);

                    }

                });
        },
        async getData(id) {
            
            this.$axios
                .get(
                    "http://localhost:8082/miscellenous/product/" + id
                )
                .then((res) => {
                    if (res.status == 200) {
                        this.data = res;

                        console.log(this.data)
                        this.Others = this.data.data
                        this.category= 'Others'

                    }
                    else {
                        this.data = res;
                        console.log(this.data);

                    }

                });
        }

    },
});

</script>