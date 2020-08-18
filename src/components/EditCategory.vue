<template>
  <b-modal
    v-model="modalShow"
    id="edit-category-modal"
    size="lg"
    title="Create Category"
    @hidden="hideModal"
    hide-footer
  >
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.name" required placeholder="Enter Category Name"></b-form-input>
      </b-form-group>
      

      <div class="text-center">
        <b-button type="submit" class="m-1" variant="primary">Update Category</b-button>
      </div>
    </b-form>
    <b-button class="mt-3" block @click="$bvModal.hide('edit-category-modal')">Cancel</b-button>
  </b-modal>
</template>

<script>
export default {
  name: "CreatePost",
  props: {
      category: {
          type: Object,
          required: true
      }
  },
  data() {
    return {
      modalShow: true,
      form: {
          id: this.category.id,
        name: this.category.name,
      },
    };
  },

  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('editCategory', this.form)
      this.hideModal();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
    },
  },
};
</script>

<style>
</style>