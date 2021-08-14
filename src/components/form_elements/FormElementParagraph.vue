<template>
  <div>
    <el-input
      type="textarea"
      :rows="2"
      :placeholder="currentField.isPlaceholderVisible ? currentField.placeholder : ''"
      v-model="textarea">
    </el-input>
  </div>

  <!-- <editor-content :editor="editor" /> -->
</template>


<script>
  // import { Editor, EditorContent } from '@tiptap/vue-3'
  // import StarterKit from '@tiptap/starter-kit'  

  export default {
    name: 'Paragraph',
    props: ['currentField'],
    // components: {
    //   EditorContent,
    // },

    data() {
      // return {
      //   editor: null,
      // }
      return {
    		textarea: ''
    	}
    },

    // mounted() {
    //   this.editor = new Editor({
    //     content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
    //     extensions: [
    //       StarterKit,
    //     ],
    //   })
    // },

    // beforeUnmount() {
    //   this.editor.destroy()
    // },
  }
</script>