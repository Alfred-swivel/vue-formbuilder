<template>
  <div class="el-tabs__inner">
    <el-row :gutter="10" class="row-bg" >
      <draggable :list="fields"
                 :clone="clone"
                 class="dragArea"
                 :options="dropElementOptions"                
                 @start="onStart">
        <el-col :span="12" 
                :class="{ 'is-disabled': checkStopDragCondition(field) }"
                v-for="(field, index) in fields" 
                :key="index">
          <el-button class="button__sidebar" 
                     type="info">
            <!-- {{ field.text }} -->
            {{ field.name }}
          </el-button>
        </el-col>
      </draggable>
    </el-row>
  </div>
</template>

<script>
  import { FormBuilder } from '@/components/form_elements/formbuilder'
  import draggable       from 'vuedraggable'

  export default {
    name: 'Elements',
    store: ['form', 'pages', 'activeForm'],
    components: { draggable },
    data() {
      return {
        fields: FormBuilder.$data.fields,
        dropElementOptions: FormBuilder.$data.dropElementOptions,
      };
    },
    methods: {
      clone(field){
        // return clonedField;
        var clonedField = _.cloneDeep(field);
        clonedField.id = vm.$store.form.fieldAutoId;
        vm.$store.form.fieldAutoId++;
        vm.$store.activeForm = clonedField;

        return clonedField;
      },
      onStart(){
        // console.log("start liao")
      },
      checkStopDragCondition(field){
        // var form = this.forms,
        //     formArray = [];

        // for (var key in form) {
        //   formArray.push(form[key]['type'])
        // }

        // // Check if the fieldname exist in formArray
        // // And when the field.isUnique too
        // return _.includes(formArray, field.name) && field.isUnique;

        return false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button__sidebar {
    width: 100%;
    margin-bottom: 10px;
    background: lightslategray;

    .is-disabled & {
      opacity: 0.4;
    }
  }
  
  // Display this ghost in <main> only
  .wrapper--forms-area .sortable__ghost {
    position: relative;
    width: 100%;
    border-bottom: 2px solid black;
    margin-top: 2px;
    margin-bottom: 2px;
    
    [type="button"] {
      display: none;
    }

    &:before {
      content: "Drag it here";
      background-color: black;
      color: white;
      position: absolute;
      left: 50%;
      font-size: 10px;
      border-radius: 10px;
      line-height: 15px;
      padding: 0 10px;
      top: -6px;
      transform: translateX(-50%);
    }
  }
</style>