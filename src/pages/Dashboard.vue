<template>
  <form @submit.prevent="addProduct">
    <div class="form-control">
      <label for="title">Product Title</label>
      <input type="text" id="title" name="title" v-model="title" />
    </div>
    <div class="form-control">
      <label for="price">Product Price</label>
      <input type="number" id="price" name="price" v-model="price" />
    </div>
    <div class="form-control">
      <label for="description">Product Description</label>
      <input
        type="text"
        id="description"
        name="description"
        v-model="description"
      />
    </div>
    <div class="form-control">
      <button>Add Product</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      price: "",
      description: "",
      validation: true,
    };
  },
  methods: {
    addProduct() {
      if (this.title === "" || !this.price === "" || this.description === "") {
        this.validation = false;
        alert("SpongeBob is sad :(");
        return;
      }
      this.validation = true;
      fetch(
        "https://vue-commerce-44193-default-rtdb.firebaseio.com/products.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.price,
            title: this.title,
            price: this.price,
            description: this.description,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              console.log(data);
            });
          } else {
            alert("SpongeBob is Sad :(");
          }
        })
        .catch(() => {
          alert("SpongeBob is sad :(");
        });

      this.title = "";
      this.price = "";
      this.description = "";
    },
  },
};
</script>
