<template>
  <div>
    <!-- <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item, index) in currentField.options"
              :key="item.optionLabel + item.optionValue + currentField.id.toString()"
              :label="index">
        {{ item.optionValue }}
      </el-checkbox>
    </el-checkbox-group> -->

    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item, index) in currentField.options"
              :key="currentField.id.toString() + item + index.toString()"
              :label="index">
        {{ item }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>


<script>
  export default {
    name: 'Checkbox',
    props: ['currentField'],
    data() {
    	return {
    		checkList: [0]
    	}
    }
  }
</script>