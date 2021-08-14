<template>
  <div>
    <!-- <el-radio v-model="radio"  
    			    v-for="(item, index) in currentField.options"
        		  :key="item.optionLabel + item.optionValue + currentField.id.toString()"
        		  :label="index">
      {{ item.optionValue }}
    </el-radio> -->

    <el-radio v-model="radio"  
    			    v-for="(item, index) in currentField.options"
        		  :key="currentField.id.toString() + item + index.toString()"
        		  :label="index">
      {{ item }}
    </el-radio>
  </div>
</template>


<script>
  export default {
    name: 'RadioButton',
    props: ['currentField'],
    data() {
    	return {
    		radio: '1'
    	}
    }
  }
</script>