<template>
    <div>
        <br>
        <form class="col-md-12">
            <span class="text-center mb-4 other-account" style="color:red">All the fields with * are mandatory </span>
            <div class="form-group row p-10">
                <label for="productName" class="col-sm-4 col-form-label">Product Name*</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" v-model="Others.productName" />
                </div>
            </div>
            <div class="form-group row p-10">
                <label for="noOFDaysUsed" class="col-sm-4 col-form-label ">No Of Days Used</label>
                <div class="col-sm-6">
                    <input type="number" min="0" class="form-control" v-model="Others.daysUsed" />
                </div>
            </div>
            <div class="form-group row p-10">
                <label for="qtnAvailable" class="col-sm-4 col-form-label">Qty Available*</label>
                <div class="col-sm-6">
                    <input type="number" value="1" class="form-control" v-model="Others.qtyAvailable">
                </div>
            </div>
            <div class="form-group row p-10">
                <label for="price" class="col-sm-4 col-form-label">Price*</label>
                <div class="col-sm-6">
                    <input type="number" value="0" class="form-control" v-model="Others.price" />
                </div>
            </div>
            <div class="form-group row p-10">
                <label for="description" class="col-sm-4 col-form-label ">Product Description</label>
                <div class="col-sm-6">
                    <input type="text" class="form-control" v-model="Others.description" />
                </div>
            </div>
            <br>
            <div class="form-group row p-10">
                <label for="formFileMultiple" class="col-sm-4 form-label">Multiple files input*</label>
                <div class="col-sm-6">
                    <input type="file" id="myFile" class="form-control" name="filename" multiple @change="onFileSelected">
                </div>
            </div>
        </form>
        <div style="text-align:center">
            <button type="submit" v-on:click="RegisterProduct" :disabled="isDisabled" class="btn btn-primary b1">SUBMIT</button>
        </div>
    </div>

</template>
<script>
import axios from "axios";
import Vue from 'vue';
import formData from 'form-data';


export default ({
    name: "Others",

    data() {
        
        return Vue.observable({
            formdata: new formData(),
            Others: {
                productName: "",
                price:"",
                daysUsed: "",
                qtyAvailable: "",
                description: "",
                images: "",
                studentId: "",
                status:"",
                phoneNumber:""

            },
            imgArry: [],
            file:'false'
        });
    },

    computed:
    {
        isDisabled()
       {
        return this.Others.productName ==='' || this.Others.price==='' || this.Others.qtyAvailable==='' || this.file==='false';
       }
    },
    methods: {

        onFileSelected(event) {
            this.file= 'true';
            this.image = event.target.files;
            console.log(this.image, 'img')
            // this.formdata.append('images',this.image)
            console.log(event.target.files.length, "size")
            let size = event.target.files.length
            if (size == 1) {
                this.formdata.append('images', this.image[0])
            }
            else {
                console.log("Inside", size)
                for (let i = 0; i < size; i++) {

                    this.imgArry[i] = this.image[i];

                    console.log(this.imgArry[i], "insides for")
                     this.formdata.append('images', this.imgArry[i]);
                }

               // this.formdata.append('images[]', this.imgArry);
                /* this.imgArry.forEach(function (element) {
                     console.log("index ", element);
                 });*/

            }
            this.formdata.forEach(function (value, key) {
                console.log(key + ": image" + JSON.stringify(value));
            });
        },

        RegisterProduct(Others) {
            this.Others.studentId= sessionStorage.getItem('user');
            this.Others.status='Available'
            this.formdata.append('miscellenous', JSON.stringify(this.Others));
            this.$axios
                .post("http://localhost:8082/miscellenous/addProduct", this.formdata)
                .then((res) => {
                    if (res.status == 200) {
                        console.log("success")
                        alert("Successfully uploaded the product");
                        window.location.reload();
                    }
                    else {
                        this.data = res;
                        console.log(this.data);
                        //document.getElementById("paragraph").innerHTML = this.data.data;
                    }

                });
        }

    },
});
</script>
<style>

.p-10 {
	  padding-bottom: 10px;
	}
</style>