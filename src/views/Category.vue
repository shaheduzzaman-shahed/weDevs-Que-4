<template>
  <div class="">
    <b-button @click="modalShow = !modalShow">Create Category</b-button>
  <br><br>
    <CreateCategory v-if="modalShow" v-on:hideModal="hideModal"></CreateCategory>
    <EditCategory v-if="editModalShow" v-on:hideModal="hideModal" :category="editCategory"></EditCategory>

    <div v-if="categories.length > 0" class="col-md-6 m-auto">
      <b-table striped hover :items="categories" :fields="fields">
        <template v-slot:cell(categories)="data">
          <label v-for="(cat, index) in data.value" :key="index">{{cat}},</label>
        </template>
        <template v-slot:cell(Action)="data">
          <b-button variant="danger" @click="removeCategory(data.item.id)">Delete</b-button>
          <b-button variant="info" class="ml-1" @click="editModal(data.item)">Edit</b-button>
        </template>
      </b-table>
    </div>
    <div v-else class="col-md-6 m-auto bg-info p-1">No Categories!</div>
  </div>
</template>


<script>
import CreateCategory from "../components/CreateCategory";
import EditCategory from "../components/EditCategory";
export default {
  name: "post",
  components: {
    CreateCategory,
    EditCategory
  },
  data() {
    return {
      modalShow: false,
      editModalShow: false,
      fields: ["name","Action"],
      categories: [],
      editCategory:{}
    };
  },
  created() {
    this.categories = this.$store.getters.getCategories;
  },

  methods: {
    removeCategory(id) {
      this.$store.dispatch("deleteCategory", id);
    },
    hideModal() {
      this.modalShow = false;
      this.editModalShow = false;
    },
    editModal(category){
      this.editModalShow = !this.editModalShow;
      this.editCategory = category;
    }
  },
  computed: {},
};
</script>