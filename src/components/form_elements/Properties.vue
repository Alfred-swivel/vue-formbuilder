<template>
	<div class="el-tabs__inner">
		<el-form :model="fieldProperties" 
				 :rules="rules" 
				 :label-position="labelPosition"
				 ref="fieldProperties">

			
			<!-- Show only when 'isPlacehodlerVisible' key exist -->
			<!-- <el-form-item label="Placeholder" 
						  v-show="activeForm.hasOwnProperty('isPlaceholderVisible')">
		    	<el-switch v-model="activeForm.isPlaceholderVisible"></el-switch>
		    	<el-input v-show="activeForm.isPlaceholderVisible" 
		    			  v-model="activeForm.placeholder">
		    		{{activeForm.placeholder}}
		    	</el-input>
		  	</el-form-item> -->

			<!-- 
		  	<el-form-item label="Code view" 
						  v-show="activeForm.hasOwnProperty('fieldText')">
		    	<el-input v-model="activeForm.fieldText"
		    			  type="textarea"
		    			  :rows="10">
		    		{{activeForm.fieldText}} 
		    	</el-input>
		  	</el-form-item> -->



			<!-- 27/7/2021 -->
		  	<el-form-item label="Label" 
		  				  v-show="activeForm.hasOwnProperty('name')">
		    	<el-input v-model="activeForm.name">{{activeForm.name}}</el-input>
		  	</el-form-item>

			<el-form-item label="Button label" 
						  v-show="activeForm.hasOwnProperty('buttonLabel')">
		    	<el-input v-model="activeForm.buttonLabel">
		    		{{activeForm.buttonLabel}}
		    	</el-input>
		  	</el-form-item>

			<el-form-item label="Help-block text" 
		  				  v-show="activeForm.hasOwnProperty('helpBlockText')">
		    	<el-input v-model="activeForm.helpBlockText">
		    		{{activeForm.helpBlockText}}
		    	</el-input>
		  	</el-form-item>

			<el-form-item label="Auto Suggestion URL" 
							v-show="activeForm.hasOwnProperty('autoSuggestionURL') && activeForm.type=='SimpleText'">
				<el-input v-model="activeForm.autoSuggestionURL">
					{{activeForm.autoSuggestionURL}}
				</el-input>
			</el-form-item>

			<el-form-item label="Regular Expression" 
							v-show="activeForm.hasOwnProperty('regExp')">
				<el-input v-model="activeForm.regExp">
					{{activeForm.regExp}}
				</el-input>
			</el-form-item>

			<el-form-item label="Link to page" 
		  				  v-show="activeForm.hasOwnProperty('linkToPageId')">
		    	<el-input-number v-model="activeForm.linkToPageId">
					{{activeForm.linkToPageId}}
				</el-input-number>
		  	</el-form-item>

			<el-form-item label="Min" 
		  				  v-show="activeForm.hasOwnProperty('min')">
		    	<el-input-number v-model="activeForm.min">
					{{activeForm.min}}
				</el-input-number>
		  	</el-form-item>

			<el-form-item label="Max" 
		  				  v-show="activeForm.hasOwnProperty('max')">
		    	<el-input-number v-model="activeForm.max">
					{{activeForm.max}}
				</el-input-number>
		  	</el-form-item>

			<el-form-item label="Max rating" 
		  				  v-show="activeForm.hasOwnProperty('maxRating')">
		    	<el-input-number v-model="activeForm.maxRating">
					{{activeForm.maxRating}}
				</el-input-number>
		  	</el-form-item>		


			<el-form-item label="Required field?" 
						  v-show="activeForm.hasOwnProperty('isRequired')">
		    	<el-switch v-model="activeForm.isRequired"></el-switch>
		  	</el-form-item>

			<el-form-item label="Readonly field?" 
						  v-show="activeForm.hasOwnProperty('isReadonly')">
		    	<el-switch v-model="activeForm.isReadonly"></el-switch>
		  	</el-form-item>

			<el-form-item label="Hidden field?" 
						  v-show="activeForm.hasOwnProperty('isHidden')">
		    	<el-switch v-model="activeForm.isHidden"></el-switch>
		  	</el-form-item>

			<el-form-item label="Is Default?" 
						  v-show="activeForm.hasOwnProperty('defaultValue')">
		    	<el-switch v-model="activeForm.defaultValue"></el-switch>
		  	</el-form-item>

			


		  	<!-- <el-form-item label="Options" v-show="activeForm.options">
	  			<ul>
			  		<li v-for="(item, index) in activeForm.options"
			  			:key="index"
			  			class="properties__optionslist">

			  			<el-row v-show="item.optionLabel!='Select Item'" :gutter="5">
						  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
						  	<el-input v-model="item.optionValue">{{item.optionValue}}</el-input>
						  </el-col>
						  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="3">
						  	<el-button @click="deleteOption(activeForm.options, index)" 
				  				   v-show="activeForm.options.length > 1">
			            		<i class="el-icon-error"></i>
			          		</el-button>
						  </el-col>
						</el-row>
			  		</li>
		  		</ul>
				
				<el-button type="text" @click="addOption(activeForm.options)">
		            <i class="el-icon-plus"></i>
		            Add more
		        </el-button>
		  	</el-form-item> -->


			<el-form-item label="Options" v-show="activeForm.options">
	  			<ul>
			  		<li v-for="(item, index) in activeForm.options"
			  			:key="index"
			  			class="properties__optionslist">

			  			<el-row v-show="item!='Select Items'" :gutter="5">
						  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
						  	<el-input v-model="activeForm.options[index]">{{item}}</el-input>
						  </el-col>
						  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="3">
						  	<el-button @click="deleteOption(activeForm.options, index)" 
				  				   v-show="activeForm.options.length > 1">
			            		<i class="el-icon-error"></i>
			          		</el-button>
						  </el-col>
						</el-row>
			  		</li>
		  		</ul>
				
				<el-button type="text" @click="addOption(activeForm.options)">
		            <i class="el-icon-plus"></i>
		            Add more
		        </el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'Properties',
		store: ['activeForm'], // Get the form data from Home
		data(){
			return {
				labelPosition: 'top',
				fieldProperties: {},
				rules: {}
			}
		},
		methods: {
			deleteOption(option, index){
				this.$delete(option, index)
			},

			addOption(option){
				option.push("new option")
				// let count = option.length + 1;
				// option.push("option " + count)

				// option.push({
				// 	optionLabel: "option " + count,
				// 	optionValue: "option " + count
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.properties__optionslist {
		margin-bottom: 5px;
	}
</style>