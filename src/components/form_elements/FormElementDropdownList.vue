<template>
  <div>
    <!-- <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in currentField.options"
        :key="item.optionLabel + item.optionValue + currentField.id"
        :value="item.optionValue"
        :label="item.optionValue">
      </el-option>
    </el-select> -->

    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="(item, index) in currentField.options"
        :key="currentField.id.toString() + item + index.toString()"
        :value="item"
        :label="item"
        v-show="item!='Select Items'">
      </el-option>
    </el-select>

  </div>
</template>


<script>
  export default {
    name: 'DropdownList',
    props: ['currentField'],
    data(){
    	return {
    		value: ""
    	}
    }
  }
</script>