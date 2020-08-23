<template>
  <div class="about">
    <b-button @click="createModalShow = !createModalShow">Create Post</b-button>
  <br><br>
    <CreatePost v-if="createModalShow" v-on:hideModal="hideModal"></CreatePost>
    <EditPost v-if="editModalShow" v-on:hideModal="hideModal" :post="editPost"></EditPost>
    <div v-if="posts.length > 0" class="col-md-8 m-auto">
      <b-table striped hover :items="posts" :fields="fields">
        <template v-slot:cell(categories)="data">
          <label v-for="(cat, index) in data.value" :key="index">{{cat}}{{data.value[index+1] ? ', ' : null}} </label>
        </template>
        <template v-slot:cell(Action)="data">
          <b-button variant="danger" @click="removePost(data.item.id)">Delete</b-button>
          <b-button variant="info" class="ml-1" @click="editModal(data.item)">Edit</b-button>
        </template>
      </b-table>
    </div>
    <div v-else class="col-md-6 m-auto bg-info p-1">No Posts!</div>
  </div>
</template>


<script>
import CreatePost from "../components/CreatePost";
import EditPost from "../components/EditPost";
export default {
  name: "post",
  components: {
    CreatePost,
    EditPost
  },
  data() {
    return {
      createModalShow: false,
      editModalShow: false,
      fields: ["title", "description", "categories", "Action"],
      posts: [],
      editPost: {}
    };
  },
  created() {
    this.posts = this.$store.getters.getPosts;
  },

  methods: {
    removePost(id) {
        this.$bvModal.msgBoxConfirm('Are you sure you want to Delete?',{
          title: 'Confirm Delete!',
          okVariant: 'danger',
          okTitle: 'YES',
        })
          .then(value => {
             value ?
            this.$store.dispatch("deletePost", id)
            : null
          })
          .catch(err => {
            console.log(err)
          })
    },
    hideModal() {
      this.modalShow = false;
      this.editModalShow = false,
      this.createModalShow = false
    },
    editModal(post){
      this.editModalShow = !this.editModalShow;
      this.editPost = post;
    }
  },
  computed: {},
};
</script>