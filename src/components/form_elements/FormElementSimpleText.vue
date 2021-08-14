<template>
    <div>
    	<!-- <el-input 
    		:placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''">	
    	</el-input> -->
      <!-- <el-input 
    		:placeholder="currentField.hints==null ? currentField.hints.en : ''">	
    	</el-input> -->
      <el-input>
      </el-input>
    </div>
</template>

<script>
  export default {
    name: 'SimpleText',
    props: ['currentField']
  }
</script>