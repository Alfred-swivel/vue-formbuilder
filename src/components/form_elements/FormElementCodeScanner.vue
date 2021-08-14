<template>
    <div>
    	<el-button type="primary" class="form__button">{{ currentField.buttonLabel }}</el-button>
    </div>
</template>

<script>
  export default {
    name: 'CodeScanner',
    props: ['currentField']
  }
</script>