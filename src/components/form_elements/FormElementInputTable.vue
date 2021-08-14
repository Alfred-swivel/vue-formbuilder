<template>
    <div>
    	<el-button type="primary" class="form__button">{{ currentField.buttonLabel }}</el-button>
      <el-table>
      </el-table>
    </div>
</template>

<script>
  export default {
    name: 'InputTable',
    props: ['currentField']
  }
</script>