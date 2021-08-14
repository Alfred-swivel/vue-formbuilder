<template>
    <div>
    	<el-button type="primary" class="form__button">{{ currentField.buttonLabel }}</el-button>
    </div>
</template>

<script>
  export default {
    name: 'CameraImage',
    props: ['currentField']
  }
</script>