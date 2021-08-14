<template>
  <div class="main__wrapper">
    <el-container>
      <el-main :style="cssProps">

        <div class="wrapper--snippet">
          <pre>{{ formJson }}</pre>
        </div>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { FormBuilder } from '@/components/form_elements/formbuilder'

  export default {
    name: 'Publish',
    store: ['formJson', 'form', 'forms', 'themingVars'],
    components: FormBuilder.$options.components,
    mounted() {
      for(var i=0; i<vm.$store.numberOfPage; i++){
        vm.$store.form[`page${i+1}`] = vm.$store.pages[i];
      }
    },
    computed: {
      cssProps() { 
        // Return an object that will generate css properties key 
        // to match with the themingVars
        // 
        // Example output: { '--theme-primary-color': this.themingVars.primaryColor }
        var result = {},
            themingVars = this.themingVars;

        for (var v in themingVars) {
          if (themingVars.hasOwnProperty(v)) {
            var newV = "--theme-" + _.kebabCase(v),
                suffix = "";

            // Add px to the value if the default value contain 'px'
            if (_.includes(newV, 'size'))         suffix = "px"
            else if (_.includes(newV, 'margin'))  suffix = "px"
            else if (_.includes(newV, 'radius'))  suffix = "px"

            result [newV] = themingVars[v] + suffix;
          } 
        }   

        return result;
      }
    }
  }
</script>