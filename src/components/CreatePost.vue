<template>
  <b-modal
    v-model="modalShow"
    id="create-post-modal"
    size="lg"
    title="Create Post"
    @hidden="hideModal"
    hide-footer
  >
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Title:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.title" required placeholder="Enter Post Title"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Description:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.description"
          required
          placeholder="Enter Post Details"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-3" label="Select Categories:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.categories"
          :options="categories"
          required
          multiple
          :select-size="5"
          value-field="name"
          text-field="name"
        ></b-form-select>
      </b-form-group>

      <div class="text-center">
        <b-button type="submit" class="m-1" variant="primary">Create Post</b-button>
        <b-button type="reset" variant="danger">Reset Form</b-button>
      </div>
    </b-form>
    <b-button class="mt-3" block @click="$bvModal.hide('create-post-modal')">Cancel</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "CreatePost",
  props: {},
  data() {
    return {
      modalShow: true,
      form: {
        title: "",
        description: "",
        categories: [],
      },
      categories: [],
    };
  },
  created() {
    this.categories = this.$store.getters.getCategories;
  },
  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('addPost', this.form)
      this.hideModal();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.description = "";
      this.form.categories = [];
    },
  },
};
</script>

<style>
</style>