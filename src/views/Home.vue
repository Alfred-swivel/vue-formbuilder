<template>
  <div class="main__wrapper">
    <el-container>


      <!-- Json window in the left -->
      <el-aside class="wrapper--snippet" width="20vw">
        <pre>{{ formJson }}</pre>
      </el-aside>


      <!-- Form builder in the middle -->
      <div class="wrapper--forms-area" >
        <el-main :style="cssProps" class="form__scrollArea">

          <!-- Form top bar -->      
          <div class="form__topBar">
            <!-- FormId editor -->
            <div style="margin-left:auto">
              ID
              <input class="topBar__input"
                      list="formIdList"
                      placeholder="Enter form ID"
                      v-model="formJsonId" 
                      required>

              <datalist id="formIdList">
                <option v-for="(item, index) in formMetaData"
                        :key="index + item.filename"
                        :value="item.filename"
                        :label="item.filename">
                </option>
              </datalist>
            </div>
            <!-- </div> -->
            <!-- FormName editor -->
            <!-- <div>
              Name
              <input class="topBar__input" 
                      v-model="formJson.formName" 
                      placeholder="Enter form name"
                      required>
            </div> -->

            <!-- VersionId editor -->
            <div>
              Version ID
              <input class="topBar__input"
                      list="formVersionIdList" 
                      placeholder="Enter version ID"
                      v-model="form.versionId" 
                      required>

              <datalist id="formVersionIdList">
                <option v-for="(item, index) in selectedFormVersions"
                        :key="index + item"
                        :value="item"
                        :label="item">
                </option>
              </datalist>
              <!-- <input class="topBar__input" 
                      type="number" 
                      min="1"
                      placeholder="Enter version ID"
                      v-model.number="form.versionId" 
                      required> -->
            </div>
            <!-- Title editor -->
            <div>
              Title
              <input class="topBar__input" 
                      v-model="form.name" 
                      placeholder="Enter form name"
                      required> 
            </div>
            <!-- Background image editor-->
            <div>
              Background Image
              <input class="topBar__input" 
                      v-model="form.backgroundImage" 
                      placeholder="Enter image url"
                      required> 
            </div>
            <!-- Form color editor-->
            
            <div style="margin-right:auto; display:flex; align-items:center;">
              Color Theme
              <el-color-picker class="topBar__colorEditor" v-model="form.color"></el-color-picker>
            </div>
            <!-- for testing -->
            <!-- <div style="margin-right:auto">
              Count
              <input class="topBar__input" 
                      type="number"
                      v-model="count" 
                      placeholder="Enter count"> 
            </div>  -->
          </div>


          <center>
            <!-- Form name editor -->
            <input class="form__editFormText" 
                    v-model="form.name" 
                    placeholder="Enter form name">

            <!-- Deploy button -->
            <div style="margin-bottom:5vh">
                <el-button @click="deployForm()"
                           class="form__deployButton">
                  Deploy
                </el-button>

                <el-button @click="loadForm()"
                           class="form__deployButton">
                  Load
                </el-button>
            </div>
          </center>

          <!-- Show add new page button if there are no pages -->
          <center v-if="pages.length==0">
            <el-button @click="addNewPage(null)" class="form__addPageButton">
              + ADD NEW PAGE
            </el-button>
          </center>



          <!-- dynamic generate form pages -------------------- dynamic generate form pages -->  
          <!-- dynamic generate form pages -------------------- dynamic generate form pages -->  
          <!-- dynamic generate form pages -------------------- dynamic generate form pages -->  
          <div v-for="(page, index) in pages"
              :key="index"
              v-bind="page">
              
            <!-- Page top bar -->
            <div class="form__pageTopBar">
              <label class="form__pageLabel">
                Page {{index+1}}  
              </label>
                                
              <el-button @click="setDynamic(page)"
                          class="form__isDynamicFalse"
                          :class="{ 'form__isDynamicTrue': page.isDynamic == true }">
                Dynamic
              </el-button>

              <input class="form__editPageText" 
                      v-model="page.name" 
                      placeholder="Enter page name">            
              

              <el-button @click="clonePage(page)"
                          class="form__clonePageButton">
                Clone
              </el-button>

              <el-button @click="deletePage(page)"
                          class="form__deletePageButton">
                Delete
              </el-button>
            </div>

            
            <div class="wrapper--forms-feasible">
              <!-- Show empty state if the page is empty -->
              <div v-if="page.content.length == 0" class="emptyState">         
                <p>Drag one element to get started</p>
              </div>

              <draggable :list="page.content"
                        class="dragArea" 
                        :options="sortElementOptions">

                <!-- The form elements starts (on the right) -->
                <div v-for="(form, index) in page.content" 
                    :key="index" 
                    v-bind="form"
                    class="form__group"
                    :class="{ 'is--active': form === activeForm  }">

                  <!-- Field blocks in the page -->
                  <span class="form__selectedlabel">{{ form.type }}</span>
                  <div @click="editElementProperties(form)">
                    <label class="form__label" v-model="form.name" v-show="form.name != '' || form.name != null">{{ form.name }}</label>

                    <component :is="form.type"
                              :currentField="form" 
                              class="form__field">
                    </component>

                    <small class="form__helpblock" v-model="form.helpBlockText" v-show="form.hasOwnProperty('helpBlockText')">{{ form.helpBlockText }} </small>
                    <!-- <small class="form__helpblock" v-model="form.hints.en">{{ form.hints.en }} </small> -->
                  </div>

                  <!-- Actions list -->
                  <div class="form__actiongroup">
                    <el-button circle size="mini" type="primary" icon="el-icon-rank" class="form__actionitem--move"></el-button>

                    <el-button-group class="form__actionlist">
                      <el-button size="mini" 
                                type="primary" 
                                icon="el-icon-plus" 
                                @click="cloneElement(index, form, page)"
                                v-show="!form.isUnique"></el-button>
                      <el-button size="mini" 
                                type="primary" 
                                icon="el-icon-delete" 
                                @click="deleteElement(index, page)"></el-button>
                    </el-button-group>
                  </div>
                </div>
              </draggable>

            </div>
              
            <!-- Add new page button -->
            <center>
              <el-button @click="addNewPage(page)" class="form__addPageButton">
                + ADD NEW PAGE
              </el-button>
            </center>

          </div>

        </el-main>
      </div>


      <!-- Draggable elements window in the right -->
      <el-aside class="wrapper--sidebar" width="20vw">
        <el-tabs type="border-card" v-model="activeTabForFields">
          <el-tab-pane name="elements" label="Elements">
            <elements></elements>
          </el-tab-pane>

          <el-tab-pane name="properties" label="Properties">
            <properties v-show="Object.keys($store.activeForm).length > 0"></properties>
          </el-tab-pane>

          <el-tab-pane name="designs" label="Styles">
            <theming></theming>
          </el-tab-pane>
        </el-tabs>
      </el-aside>

    </el-container>
  </div>
</template>

<script>
  import { FormBuilder }  from '@/components/form_elements/formbuilder'
  const axios = require('axios');

  export default {
    name: 'Home',
    store: ['formJson', 'form', 'pages', 'activeForm', 'activeTabForFields', 'themingVars', 'formMetaData', 'selectedFormVersions'],

    data() {
      return {
        sortElementOptions: FormBuilder.$data.sortElementOptions,
        formJsonId: vm.$store.formJson.formId,
      };
    },

    watch: {
      formJsonId: function () {
        console.log("formJsonId changed");
        vm.$store.formJson.formId = this.formJsonId;
        vm.$store.form.id = this.formJsonId;

        vm.$store.selectedFormVersions = [];
        const selectedForm = vm.$store.formMetaData.find(x => x.filename === this.formJsonId);

        if (selectedForm != null) {
          vm.$store.selectedFormVersions = _.cloneDeep(selectedForm.versionId);
          console.log(vm.$store.selectedFormVersions);
        }
      },
    },

    computed: {
      cssProps() { 
        // Return an object that will generate css properties key 
        // to match with the themingVars
        // 
        // Example output: { '--theme-primary-color': this.themingVars.primaryColor }
        var result = {},
            themingVars = this.themingVars;

        for (var v in themingVars) {
          if (themingVars.hasOwnProperty(v)) {
            var newV = "--theme-" + _.kebabCase(v),
                suffix = "";

            // Add px to the value if the default value contain 'px'
            if (_.includes(newV, 'size'))         suffix = "px"
            else if (_.includes(newV, 'margin'))  suffix = "px"
            else if (_.includes(newV, 'radius'))  suffix = "px"

            result [newV] = themingVars[v] + suffix;
          } 
        }   

        console.log("result", result)

        return result;
      },
    },

    created(){
      this.loadFormMetaData();
    },

    mounted(){
      // console.log("form ->", this.forms)
      vm.$store.activeForm = [];
      console.log("activeform ->", this.activeForm)

      vm.$store.form.pages = vm.$store.pages;
      // update formJson
      vm.$store.formJson.format = vm.$store.form;
    },

    components: FormBuilder.$options.components,

    methods: {
      deleteElement(index, page){
        FormBuilder.deleteElement(index, page)
      },

      cloneElement(index, form, page){
        FormBuilder.cloneElement(index, form, page)
      },

      editElementProperties(form){
        FormBuilder.editElementProperties(form)
      },

      addNewPage(page){
        var newPage = {
          "id": vm.$store.form.pageAutoId,
          "name": "page",
          "isDynamic": false,
          "content": [],
        }   

        if (page==null) {
          vm.$store.pages.push(newPage);
        } else {
          var pageIndex = vm.$store.pages.indexOf(page);
          console.log(pageIndex);
          vm.$store.pages.splice(pageIndex+1, 0, newPage);
        }

        vm.$store.form.numberOfPage++;
        vm.$store.form.pageAutoId++;
      },

      deletePage(page){
        var pageIndex = vm.$store.pages.indexOf(page);
        console.log(pageIndex);
        // check if the page is dynamic
        var isDynamicPage = vm.$store.pages[pageIndex].isDynamic;
        if (isDynamicPage) {
          vm.$store.form.numberOfDynamicPage--;
        }

        vm.$store.pages.splice(pageIndex, 1);
        vm.$store.form.numberOfPage--;
      },

      clonePage(page){
        var pageIndex = vm.$store.pages.indexOf(page);
        var clonePage = _.cloneDeep(page);
        // for (var key in clonePage.content) {
        //   clonePage.content[key].id = vm.$store.fieldAutoId;
        //   vm.$store.fieldAutoId++;
        // }
        clonePage.content.forEach((field, index)=>{
          field.id = vm.$store.form.fieldAutoId;
          vm.$store.form.fieldAutoId++;
        });        
        clonePage.id = vm.$store.form.pageAutoId;
        vm.$store.pages.splice(pageIndex+1, 0, clonePage);
        vm.$store.form.numberOfPage++;
        vm.$store.form.pageAutoId++;
      },

      setDynamic(page){
        var pageIndex = vm.$store.pages.indexOf(page);
        console.log(pageIndex);

        var isDynamicPage = vm.$store.pages[pageIndex].isDynamic;
        if (isDynamicPage) {
          vm.$store.form.numberOfDynamicPage--;
        } else {
          vm.$store.form.numberOfDynamicPage++;          
        }
        vm.$store.pages[pageIndex].isDynamic = !vm.$store.pages[pageIndex].isDynamic;
      },

      async deployForm(){
        if (confirm(`Deploy Form? \n\nform Id:   ${vm.$store.formJson.formId} \nversion Id:   ${vm.$store.form.versionId}`)){
          const response = await axios.post('http://192.168.1.196:3003/saveForm', vm.$store.formJson);
          // console.log(response);
          console.log(response);

          if (response.status == '201') {
            loadFormMetaData();
            alert("deploy successfully!");
          } else {
            alert("deploy failed!");
          }
        } else {
          console.log("deployForm() cancelled");
        }
        // axios.post('http://192.168.50.1:3000/saveForm', {
        //   formJson,
        // })
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
      },

      async loadForm(){
        if (confirm(`Load Form? Current form will be dismissed. \n\nform Id:   ${vm.$store.formJson.formId} \nversion Id:   ${vm.$store.form.versionId}`)){
          const response = await axios.get('http://192.168.1.196:3003/loadForm', {params: {formId: vm.$store.formJson.formId, versionId: vm.$store.form.versionId}});
          console.log(response);

          if (response.status == '200' && response.data != -1) {
            const loadedForm = _.cloneDeep(response.data);

            vm.$store.form = loadedForm;
            vm.$store.formJson.formId = loadedForm.id;
            vm.$store.formJson.formName = loadedForm.name;
            vm.$store.formJson.format = vm.$store.form;
            vm.$store.pages = loadedForm.pages;
            this.formJsonId = loadedForm.id;
            
            alert("load successfully!");          
          } else {
            alert("load failed! Please enter correct formId and versionId.");
          }

        } else {
          console.log("loadForm() cancelled");
        }

        // if (confirm(`Load Form? \n\nform Id:   ${vm.$store.formJson.formId} \nversion Id:   ${vm.$store.form.versionId}`)){
        //   vm.$store.formJson = _.cloneDeep(vm.$store.formToLoad);
        //   vm.$store.form = vm.$store.formJson.format;
        //   vm.$store.pages = vm.$store.form.pages;
        //   this.formJsonId = vm.$store.formJson.formId;
        //   alert("load successfully!");
        // } else {
        //   console.log("loadForm() cancelled");
        // }
      },

      async loadFormMetaData(){
        const response = await axios.post('http://192.168.1.196:3003/loadFormMetaData', {});
        console.log(response);

        if (response.status == '201') {
          console.log("load successfully!");
        } else {
          console.log(response.error);
        }

        const metaData = _.cloneDeep(response.data);
        vm.$store.formMetaData = metaData.results;
        console.log(vm.$store.formMetaData);        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main__wrapper {
    width: 100%;
    height: 100%;
  }

  .form__scrollArea {
    height: 87vh;
    overflow: auto;
  }

  .form__scrollArea::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #3D4652;
    border-radius: 10px;
    background-color: #21262c;
  }

  .form__scrollArea::-webkit-scrollbar {
    width: 12px;
    background-color: #3D4652;
  }

  .form__scrollArea::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #69778c;
  }

  .form__scrollArea::-webkit-scrollbar-corner {
    background: #21262c;
  }

  // ...@at-root
  // .form__scrollArea::-webkit-scrollbar-track
  // {
  //   box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  //   border-radius: 10px;
  //   background-color: #F5F5F5;
  // }

  // .form__scrollArea::-webkit-scrollbar
  // {
	// width: 12px;
	// background-color: #F5F5F5;
  // }

  // .form__scrollArea::-webkit-scrollbar-thumb
  // {
	// border-radius: 10px;
	// box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	// background-color: #555;
  // }
// ...

  .emptyState {
    position: relative;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .form__topBar {
    height: 5vh;
    background: lightgray;
    font-size: 14px;
    // background: #0b0f15;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: {
      left: 0.5vw;
      right: 0.5vw;
    };
    margin-bottom: 4vh;

    .topBar__input {
      width: 7vw;
      height: 3vh;
      border: 1px solid rgb(200, 200, 200);
      border-radius: 4px;
      padding-left: 2px;
      margin-left: 2px;
      margin-right: 18px;

      &:focus {
        outline: none;
      }

      &:hover {
        border-color: rgb(160, 160, 160);
      }
    }

    .topBar__colorEditor {
      border: 1px solid rgb(200, 200, 200);
      border-radius: 4px;
      margin-left: 4px;
      margin-right: 18px;

      &:hover {
        border-color: rgb(160, 160, 160);
      }
    }
  }

  .form__editFormText {
    height: 3vh;
    width: 20vw;
    color: white;
    background: transparent;
    border-radius: 7px;
    border-color: transparent;
    font-size: 17px;
    text-align: center;
    position: relative;
    margin: {
      top: 3vh;
      bottom: 3vh;
    };

    &:focus {
      outline: none;
    }
  }

  .form__editFormText::placeholder{
    color: lightgray;
  }

  .form__deployButton {
    width: 100px;
    background: coral;
    color: white;
    border-radius: 3px;
    border-color: transparent;
    padding: 10px;
    position: relative;
    align-self: center;
    vertical-align: middle;
    margin-left: 2px;
    margin-right: 2px;
    //margin: auto;

    &:hover {
        // background: #0b0f15;
        background: rgb(169, 84, 54);
    }
  }

  .form__pageTopBar {
    width: 38vw;
    height: fit-content;
    display: flex;
    font-size: 14px;
    margin: auto;
    margin-bottom: 0.2vh;
  }

  .form__pageLabel {
    height: fit-content;
    width: fit-content;
    color: lightgray;
    align-self: center;
    padding-top: 2px;
    margin-right: 3px;
  }

  .form__editPageText {
    width: 6vw;
    color: lightgray;
    background: transparent;
    border-color: transparent;
    font-size: 14px;
    text-align: center;
    padding: 2px;
    margin-left: auto;

    &:focus {
      outline: none;
    }
  }

  .form__editPageText::placeholder{
    color: lightgray;
  }

  .form__isDynamicFalse {
    width: fit-content;
    height: fit-content;
    background: rgb(170, 0, 0);
    color: white;
    border-radius: 4px;
    border-color: transparent;
    padding: 5px;
    font-size: 10px;
    position: relative;

    &:hover {
        background: rgb(130, 0, 0);
    }
  }

  .form__isDynamicTrue {
    width: fit-content;
    height: fit-content;
    background: rgb(0, 120, 0);
    color: white;
    border-radius: 4px;
    border-color: transparent;
    padding: 5px;
    font-size: 10px;
    position: relative;

    &:hover {
        background: rgb(0, 90, 0);
    }
  }

  .form__clonePageButton {
    width: fit-content;
    height: fit-content;
    background: gray;
    color: white;
    border-radius: 4px;
    border-color: transparent;
    padding: 5px;
    font-size: 10px;
    position: relative;
    margin-left: auto;

    &:hover {
        // background: #0b0f15;
        background: rgb(70, 70, 70);
    }
  }

  .form__deletePageButton {
    width: fit-content;
    height: fit-content;
    background: gray;
    color: white;
    border-radius: 4px;
    border-color: transparent;
    padding: 5px;
    font-size: 10px;
    position: relative;
    margin-left: 3px;

    &:hover {
        // background: #0b0f15;
        background: rgb(80, 80, 80);
    }
  }

  .form__addPageButton {
    width: fit-content;
    background: transparent;
    color: white;
    border-radius: 7px;
    border-color: transparent;
    padding: 10px;
    margin-top: 6vh;
    margin-bottom: 4vh;
    &:hover {
        background: #0b0f15;
    }
  }

  .dragArea {
    max-width: 30vw;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    min-height: 40vh;
    z-index: 2;
  } 

  .form__selectedlabel {
    display: none;
    background: lighten(black, 20%);
    padding: 3px 5px;
    color: white;
    font-size: 10px;
    position: absolute;
    top: -17px;
    right: 15px;
  }
  
  .form__actionitem--move {
    position: absolute;
    right: -14px;
    top: 50%;
    transform: translateY(-50%);
    visibility: hidden;
    
    &:active, &:focus, &:hover {
      border-color: lighten(black, 50%);
      background: lighten(black, 50%);
    }
  }

  .form__actionlist {
    position: absolute;
    margin-top: 10px;
    visibility: hidden;
    z-index: 3;
    right: 0;
    box-shadow: 4px 4px 0 0 lighten(black, 80%);
    border-radius: 2px;
  }

  .form__group {
    margin-bottom: 25px;
    border: 2px solid transparent;
    position: relative;

    &:hover {
      border-color: lighten(black, 80%);

      .form__actionitem--move {
        visibility: visible;
      }
    }

    &.is--active {
      border-color: lighten(black, 50%);
      background: lighten(black, 95%);

      .form__actionlist { visibility: visible; }
      .form__selectedlabel { display: inline-block; }
    }
  }

  .sortable__ghost {
    position: relative;
    width: 100%;
    border-bottom: 2px solid black;
    margin-top: 2px;
    margin-bottom: 2px;
    
    [type="button"] {
      display: none;
    }

    &:before {
      content: "Drag it here";
      background-color: black;
      color: white;
      position: absolute;
      left: 50%;
      font-size: 10px;
      border-radius: 10px;
      line-height: 15px;
      padding: 0 10px;
      top: -6px;
      transform: translateX(-50%);
    }
  }


</style>
