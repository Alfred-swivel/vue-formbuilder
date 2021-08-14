<template>
  <div class="main__wrapper">
    <el-container>
      <!-- background area -->
      <div class="preview--background">
        <el-main :style="cssProps">


          <!-- action bar -->
          <div class="preview--action-bar">
            Width
            <input v-model="deviceWidth" 
                   class="action-bar__input" 
                   placeholder="deviceWidth">              

            Height
            <input v-model="deviceHeight" 
                   class="action-bar__input" 
                   placeholder="deviceHeight"> 
          </div>


          <!-- iframe flutter app -->
          <div class="iframe__wrapper" :style="{ width: deviceWidth + 'px', height: deviceHeight + 'px'}">
            <iframe              
              :src="'http://192.168.50.106:8080/#/'"
              width="100%"
              height="100%"
              frameborder="0" >
            </iframe>
          </div>


          <!-- form preview window -->
          <!-- <div class="preview--wrapper" :style="{ width: deviceWidth + 'px', height: deviceHeight + 'px', paddingLeft: paddingHorizontal + 'px', paddingRight: paddingHorizontal + 'px', paddingTop: paddingVertical + 'px', paddingBottom: paddingVertical + 'px'}">
            <div v-for="(form, index) in forms" 
                :key="index" 
                v-bind="form"
                class="form__group">
              <label class="form__label" v-model="form.label" v-show="form.hasOwnProperty('label')">{{ form.label }}</label>

              <component :is="form.fieldType"
                          :currentField="form"
                        class="form__field">
              </component>

              <small class="form__helpblock" 
              v-model="form.helpBlockText" 
              v-show="form.isHelpBlockVisible">
                {{ form.helpBlockText }} 
              </small>
            </div>
          </div> -->
        </el-main>
      </div>

    </el-container>
  </div>
</template>


<script>
  import { FormBuilder } from '@/components/form_elements/formbuilder'

  export default {
    name: 'Publish',
    store: ['forms', 'themingVars'],
    components: FormBuilder.$options.components,
    data(){
			return {
				deviceWidth: 350,
				deviceHeight: 600,
        paddingHorizontal: 30,
        paddingVertical: 80,
			}
		},
    watch: {
      deviceWidth: function (val) {
        this.paddingHorizontal = val * 0.1
      },
      deviceHeight: function (val) {
        this.paddingVertical = val * 0.1
      }
    },
    methods: {
      resizeFrame: function (event){
        deviceWidth = getElementById("width").value;
        deviceHeight = getElementById("height").value;
        console.log(deviceWidth);
        console.log(deviceHeight);
      }
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

        return result;
      }
    }
  }
</script>


<style lang="scss" scoped> 
  .main__wrapper {
    height: 100%;
  }

  .preview--action-bar {
    width: 100%;
    height: fit-content;
    background: lightgray;
    font-size: 15px; 
    padding: {
      left: 1vw;
      top: 1vh;
      bottom: 1vh;
    };
    margin-bottom: 5vh;
    .action-bar__input {
      height: 25px;
      margin-right: 15px;
      border: 1px solid lightgrey;
    }
  }

  // .preview--background {
  //   width: 100%;
  //   height: 100%;
  //   background: #10171f;
  //   overflow-y: auto;
  //   padding-bottom: 10vh;
  //   margin: {
  //       left: 20px;
  //       right: 20px
  //   }
  // } 

  .iframe__wrapper {
    min-width: 350px;
    min-height: 600px;
    background: lightgray;
    margin: auto;
  }

  // .preview--wrapper {
  //   min-width: 300px;
  //   min-height: 500px;
  //   background: #EFE8D4;
  //   border: 1px solid black;
  //   box-shadow: 0 5px 17px 4px rgba(78, 78, 78, 0.2);
  //   border-radius: 7px;
  //   overflow: auto;
  //   margin: auto;
  // }

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
  }

  .form--text-deploy {
    width: fit-content;
    background: rgb(118, 132, 149);
    color: white;
    font-size: 20px;
    border-radius: 5px;
    padding: {
        top: 7px;
        bottom: 7px;
        left: 5px;
        right: 5px
    }
    ;
    margin: {
        top: 3vh;
        bottom: 4vh;
        left: 46vw;
        right: auto;
    }
    ;
    &:hover {
        background: lightsteelblue;
        color: black;
    }
  } 

</style>