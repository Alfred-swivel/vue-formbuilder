<template>
    <!-- <div>
    	<el-input 
    		:placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''">	
    	</el-input>
    </div> -->
    <div>
    	<el-button type="primary" class="form__button">{{ currentField.buttonLabel }}</el-button>
    </div>
</template>

<script>
  export default {
    name: 'Signature',
    props: ['currentField']
  }
</script>