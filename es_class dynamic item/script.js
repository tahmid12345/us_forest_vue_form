var app = new Vue({
  el: "#app",
  data: {
    message: "",
    fullData: [],
    es_class: "provisioning",
  },
  methods: {
    // ---------------------------- add item ----------------------

    send() {
      let formData = {
        subes_item: subes_item.value,
        subes_name: subes_name.value,
        subes_quantity: subes_quantity.value,
        subes_quantity_unit: subes_quantity_unit.value,
        subes_value: subes_value.value,
        subes_value_unit: subes_value_unit.value,
        subes_validation: subes_validation.value,
      };

      this.fullData.push(formData);
    },

    // ---------------------------- add item ----------------------

    // --------------------- remove item --------------------------

    removeItem(index) {
      this.fullData.splice(index, 1);
    },

    // --------------------- remove item --------------------------

    // ----------------- edit ----------------------------------

    editItem(index) {
      let data = this.fullData[index];
      edit_id.value = index;
      edit_subes_item.value = data.subes_item;
      edit_subes_name.value = data.subes_name;
      edit_subes_quantity.value = data.subes_quantity;
      edit_subes_quantity_unit.value = data.subes_quantity_unit;
      edit_subes_value.value = data.subes_value;
      edit_subes_value_unit.value = data.subes_value_unit;
      edit_subes_validation.value = data.subes_validation;

      edit_form_class.style.display = "inline";
    },

    edit() {
      let edit_id_var = edit_id.value;

      this.fullData[edit_id_var].subes_item = edit_subes_item.value;
      this.fullData[edit_id_var].subes_name = edit_subes_name.value;
      this.fullData[edit_id_var].subes_quantity = edit_subes_quantity.value;
      this.fullData[edit_id_var].subes_quantity_unit =
        edit_subes_quantity_unit.value;
      this.fullData[edit_id_var].subes_value = edit_subes_value.value;
      this.fullData[edit_id_var].subes_value_unit = edit_subes_value_unit.value;
      this.fullData[edit_id_var].subes_validation = edit_subes_validation.value;

      edit_form_class.style.display = "none";
    },

    // ----------------- edit ----------------------------------
  },

  mounted() {
    // --------------- edit mounted ---------------------------
    edit_form_class.style.display = "none";

    // --------------- edit mounted ---------------------------
  },
});
