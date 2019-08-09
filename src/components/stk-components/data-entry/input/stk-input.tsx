import { Component, h, Prop, State, Listen, Event,EventEmitter } from "@stencil/core";
import { Validator, defaultValidator, ValidatorEntry } from '../../../../validators/validator';
import { getValidator } from '../../../../validators/validator.factory';

export type inputType =
  | "text"
  | "textarea"
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
  @Prop({ reflect: true }) rows: number = 4;
  @Prop({ reflect: true }) step: number = 1;
  @Prop({ reflect: true }) min: number ;
  @Prop({ reflect: true }) max: number ;
  @Prop({ reflect: true }) orientation: string ;//horizontal(same row) or vertical(same column)
  @Prop({ reflect: true }) label: string;
  @State() clear: boolean=false;
  @State() orientationclass: string="";
  textInput!: HTMLInputElement;



  @Prop() validator: Array<string | ValidatorEntry | Validator<string>>;

  @Event() changed: EventEmitter<string>;

  _validator: Validator<string> = defaultValidator;

  componentWillLoad() {
    this._validator = getValidator<string>(this.validator);
  }

  componentWillUpdate() {
    this._validator = getValidator<string>(this.validator);
  }

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
  }


  render() {
    if (this.orientation==="horizontal") 
      this.orientationclass="label-stk-input-"+this.type
    return this.renderInput();
  }


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
                    params: { min:this.min, max:this.max, required:this.required,
                              message:[{type:"min-val",message:"el valor minimo es "+ this.min },
                                       {type:"max-val",message:"el valor máximo es "+ this.max }]
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

      case "textarea":
        return (
          <textarea
            value={!this.value ? this.defaultValue : this.value}
            placeholder={this.placeholder}
            rows={this.rows}
            disabled={this.disabled}
            class="stk-input"
          />
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
                params: { min:this.min, max:this.max, required:this.required,
                          message:[{type:"min-val",message:"el valor minimo es "+ this.min },
                                   {type:"max-val",message:"el valor máximo es "+ this.max }]
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
                  params: { min:this.min, max:this.max, required:this.required,
                            message:[{type:"min-val",message:"el valor minimo es "+ this.min },
                                     {type:"max-val",message:"el valor máximo es "+ this.max }]
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
            validator={[
              {
               name: 'length',
                options: {
                  params: { min:this.min, max:this.max, required:this.required,
                            message:[{type:"min-val",message:"el valor minimo es "+ this.min },
                                     {type:"max-val",message:"el valor máximo es "+ this.max }]
                          } 
                }
              }
              ]}
          />
          </div>
      );

      case "number":
        return (
          <div
            class={{
              "stk-input-number": true,
              "stk-input-number-disabled": this.disabled
            }}
          >
            <div class="stk-input-number-handler-wrap">
              <span
                unselectable={true}
                role="button"
                aria-label="Increase Value"
                aria-disabled="false"
                class="stk-input-number-handler stk-input-number-handler-up "
              >
                <i class="fa fa-chevron-up" />
              </span>
              <span
                unselectable={true}
                role="button"
                aria-label="Decrease Value"
                aria-disabled="false"
                class="stk-input-number-handler stk-input-number-handler-down "
              >
                <i class="fas fa-chevron-down" />
              </span>
            </div>
            <div
              class="stk-input-number-input-wrap"
              role="spinbutton"
              aria-valuemin={this.min}
              aria-valuemax={this.max}
              aria-valuenow={!this.value ? this.defaultValue : this.value}
            >
              <input
                type="number"
                class="stk-input-number-input"
                autocomplete="off"
                min={this.min}
                max={this.max}
                step={this.step}
                value={!this.value ? this.defaultValue : this.value}
                disabled={this.disabled}
              />
            </div>
          </div>
        );

        case "integer":
          return (
              <span class="stk-input-affix-wrapper">
                <input
                  type="number"
                  class="stk-input"
                  min={this.min}
                  max={this.max}
                  step={this.step}
                  value={!this.value ? this.defaultValue : this.value}
                  placeholder={this.placeholder}
                  disabled={this.disabled}
                  ref={(el) => this.textInput = el as HTMLInputElement}
                />
                <span class="stk-input-suffix" >
                 {!this.clear
                  ? <i class="fa fa-times-circle" onClick={this.handleClearText}/>
                  : <i class=""/>
                 }
               </span>
              </span>
        );
      default:
        break;
    }
  }
}

