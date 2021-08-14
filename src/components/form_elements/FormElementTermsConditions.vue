<template>
  <div>
    <!-- <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item, index) in currentField.options"
              :key="item.optionLabel + item.optionValue + currentField.id.toString()"
              :label="index"
              class="checkboxList">
        {{ item.optionValue }}
      </el-checkbox>
    </el-checkbox-group> -->

    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item, index) in currentField.options"
              :key="currentField.id.toString() + item + index"
              :label="index"
              class="checkboxList">
        {{ item }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>


<script>
  export default {
    name: 'TermsConditions',
    props: ['currentField'],
    data() {
    	return {
    		checkList: [0]
    	}
    }
  }
</script>

<style scoped>
  .checkboxList{
    width: 100%;
    margin: auto;
  }
</style>