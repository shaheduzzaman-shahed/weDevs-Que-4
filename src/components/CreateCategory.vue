<template>
  <b-modal
    v-model="modalShow"
    id="create-category-modal"
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
        <b-button type="submit" class="m-1" variant="primary">Add Category</b-button>
      </div>
    </b-form>
    <b-button class="mt-3" block @click="$bvModal.hide('create-category-modal')">Cancel</b-button>
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
        name: "",
      },
    };
  },

  methods: {
    hideModal() {
      this.$emit("hideModal", this.form.name);
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch('addCategory', this.form)
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