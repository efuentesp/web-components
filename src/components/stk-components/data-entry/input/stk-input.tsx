import { Component, h, Prop, State, Event,EventEmitter } from "@stencil/core";
import { Validator, defaultValidator, ValidatorEntry } from '../../../../validators/validator';
import { getValidator } from '../../../../validators/validator.factory';

export type inputType =
  | "text"
  | "text-area"
  | "password"
  | "number"
  | "integer"
  | "currency"
  | "percentage"
  | "email"
  | "phone"

@Component({
  tag: "stk-input",
  styleUrl: "stk-input.css",
  shadow: false
})

export class StkInput {
  @Prop({ reflect: true }) type: inputType;
  @Prop({ reflect: true }) defaultValue: string;
  @Prop({ mutable:true })  value: string ;
  @Prop({ reflect: true }) placeholder: string = "";
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) required: boolean;
  @Prop({ reflect: true }) allowClear: boolean = false;
  @Prop({ reflect: true }) maxLength: number;
  @Prop({ reflect: true }) rows: number ;
  @Prop({ reflect: true }) step: number ;
  @Prop({ reflect: true }) min: number ;
  @Prop({ reflect: true }) max: number ;
  @Prop({ reflect: true }) minsize: number ;
  @Prop({ reflect: true }) maxsize: number ;
  @Prop({ reflect: true }) orientation: string ;//horizontal(same row) or vertical(same column)
  @Prop({ reflect: true }) label: string;
  @Prop({ reflect: true }) validations: string;
  @State() clear: boolean=false;
  @State() orientationclass: string="";
  textInput!: HTMLInputElement;

  @Prop() validator: Array<string | ValidatorEntry | Validator<string>>;

  @Event() changed: EventEmitter<string>;

  _validator: Validator<string> = defaultValidator;

  componentWillLoad() {
    //this.parseValidationsProp(this.validations)
    //console.log(this.validator)
    this._validator = getValidator<string>(this.validator);
    //console.log(this.validations);
    

  }

  componentWillUpdate() {
    this._validator = getValidator<string>(this.validator);
  }

  /*
  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.changed.emit(this.value);
  }


  @Listen('keydown')
  handleKeyDown(){
    if (this.textInput.value!==null)
      this.clear=false
    else
      this.clear=true
    
  }

  handleClearText = () => {
    this.clear=!this.clear;
    this.textInput.value=null;
  } */

  parseValidationsProp(validations: string) {
    if (validations) this.validator = JSON.parse(validations);

  }

  render() {
    if (this.orientation==="horizontal") 
      this.orientationclass="label-stk-input-"+this.type
    return this.renderInput();
  }

  /*
  validator={[
                {
                 name: 'length',
                  options: {
                    params: { min:this.minsize, max:this.maxsize,
                              message:[{type:"min-val",message:"El número mínimo de caracteres es "+ this.minsize },
                                       {type:"max-val",message:"El número máximo de caracteres es "+ this.maxsize }]
                            } 
                  }
                }
                ]}
  */
  renderInput() {
    switch (this.type) {
      case "text":
        if (this.allowClear && !this.disabled) {
          return (
             <div >
              {this.required ? 
                <label > { this.label } <font color="red"> *</font> </label>
               :<label> { this.label } </label>
              }
              <stk-input-text
              value={!this.value ? this.defaultValue : this.value}
              placeholder={this.placeholder}
              disabled={this.disabled}
              class={this.orientationclass} 
              validator={[
                {
                 name: 'length',
                  options: {
                    params: { min:this.minsize, max:this.maxsize,
                              message:[{type:"min-val",message:"El número mínimo de caracteres es "+ this.minsize },
                                       {type:"max-val",message:"El número máximo de caracteres es "+ this.maxsize }]
                            } 
                  }
                }
                ]}
              />
            </div>
          );
        } else {
          return (
            <div>
              {this.required ? 
                <label > { this.label } <font color="red"> *</font> </label>
               :<label > { this.label } </label>
              }
            <input
              type="text"
              value={!this.value ? this.defaultValue : this.value}
              placeholder={this.placeholder}
              disabled={this.disabled}
              class="stk-input"
            />
            </div>
          );
        }
    
      case "text-area":
          return (
            <div>
            {this.required ? 
              <label> { this.label } <font color="red"> *</font> </label>
             :<label> { this.label } </label>
            }
            <stk-input-text-area
                  value={!this.value ? this.defaultValue : this.value}
                  placeholder={this.placeholder}
                  disabled={this.disabled}
                  class={this.orientationclass} 
                  rows={this.rows}
                  validator={[ {
                    name: 'lines',
                    options: {
                     params: { rows:this.rows,
                               message:"El número máximo de renglones es de "+ this.rows 
                     } 
                    }
                   }]}
            />
            </div>
        );    

      case "password":
        return (
          <div>
          {this.required ? 
            <label> { this.label } <font color="red"> *</font> </label>
           :<label> { this.label } </label>
          }
          <stk-input-password
          value={!this.value ? this.defaultValue : this.value}
          placeholder={this.placeholder}
          disabled={this.disabled}
          class={this.orientationclass} 
          validator={[
            {
             name: 'length',
              options: {
                params: { min:this.minsize, max:this.maxsize,
                  message:[{type:"min-val",message:"El número mínimo de caracteres es "+ this.minsize },
                           {type:"max-val",message:"El número máximo de caracteres es "+ this.maxsize }]
                } 
              }
            }
            ]}
          />
          </div>
        );

    
      case "email":
        return (
          <div>
          {this.required ? 
            <label> { this.label } <font color="red"> *</font> </label>
           :<label> { this.label } </label>
          }
          <stk-input-email
                value={!this.value ? this.defaultValue : this.value}
                placeholder={this.placeholder}
                disabled={this.disabled}
                class={this.orientationclass} 
                validator={['email']}
          />
          </div>
      );     

      case "phone":
        return (
          <div>
            {this.required ? 
              <label> { this.label } <font color="red"> *</font> </label>
             :<label> { this.label } </label>
            }
            <stk-input-phone
             value={!this.value ? this.defaultValue : this.value}
             placeholder={this.placeholder}
             disabled={this.disabled}
             class={this.orientationclass} 
             validator={[
              {
               name: 'length',
                options: {
                  params: { min:this.minsize, max:this.maxsize, 
                    message:[{type:"min-val",message:"El número mínimo de caracteres es "+ this.minsize },
                             {type:"max-val",message:"El número máximo de caracteres es "+ this.maxsize }]
                  }  
                }
              }
              ]}
            />
          </div>
       );  

      case "currency":
          return (
          <div>
            {this.required ? 
              <label> { this.label } <font color="red"> *</font> </label>
             :<label> { this.label } </label>
            }
          <stk-input-currency
            value={!this.value ? this.defaultValue : this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            class={this.orientationclass}
            step={this.step}
            validator={[
              {
               name: 'min-max',
                options: {
                  params: { min:this.min, max:this.max,
                            message:[{type:"min-val",message:"El valor mínimo es "+ this.min },
                                     {type:"max-val",message:"El valor máximo es "+ this.max }]
                          } 
                }
              }
              ]}
          />
          </div>
      );


      case "number":
          return (
          <div>
            {this.required ? 
              <label> { this.label } <font color="red"> *</font> </label>
             :<label> { this.label } </label>
            }
          <stk-input-number
            value={!this.value ? this.defaultValue : this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            class={this.orientationclass}
            step={this.step}
            validator={[
              {
               name: 'min-max',
                options: {
                  params: { min:this.min, max:this.max,
                            message:[{type:"min-val",message:"El valor mínimo es "+ this.min },
                                     {type:"max-val",message:"El valor máximo es "+ this.max }]
                          } 
                }
              }
              ]}
          />
          </div>
      );

      case "integer":
          return (
          <div>
            {this.required ? 
              <label> { this.label } <font color="red"> *</font> </label>
             :<label> { this.label } </label>
            }
          <stk-input-integer
            value={!this.value ? this.defaultValue : this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            class={this.orientationclass}
            step={this.step}
            validator={[
              {
               name: 'min-max',
                options: {
                  params: { min:this.min, max:this.max,
                            message:[{type:"min-val",message:"El valor mínimo es "+ this.min },
                                     {type:"max-val",message:"El valor máximo es "+ this.max }]
                          } 
                }
              },
              'integer'
              ]}
          />
          </div>
      );
      default:
        break;
    }
  }
}

