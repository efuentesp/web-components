import { Component, h, Prop, State, Listen, Event,EventEmitter } from "@stencil/core";
import { Validator, defaultValidator, ValidatorEntry } from '../../../../validators/validator';
import { getValidator } from '../../../../validators/validator.factory';

@Component({
  tag: "stk-input-text-area",
  styleUrl: "stk-input.css",
  shadow: false
})

export class StkInputTextArea {
  @Prop({ reflect: true }) defaultValue: string;
  @Prop({ mutable:true })  value: string ;
  @Prop({ reflect: true }) placeholder: string;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) allowClear: boolean = false;
  @Prop({ reflect: true }) maxLength: number;
  @Prop({ reflect: true }) rows: number;
  @State() clear: boolean=false;

  textInput!: HTMLTextAreaElement;
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
    return (
        <div>
        <span class="stk-input-affix-wrapper">
          <span class="stk-input-prefix">
            <i class="fa fa-font" />
          </span>
         <textarea
           value={!this.value ? this.defaultValue : this.value}
           placeholder={this.placeholder}
           rows={this.rows}
           disabled={this.disabled}
           class="stk-input"
           ref={(el) => this.textInput = el as HTMLTextAreaElement}
           onInput={(ev) => this.handleChange(ev)}
         />
         <span class="stk-input-suffix" >
           {!this.clear
             ? <i class="fa fa-times-circle" onClick={this.handleClearText}/>
             : <i class=""/>
           }
         </span>
        </span>
           {!this._validator.validate(this.value) ? 
            <span class="validation-error">{this._validator.errorMessage}</span>
            : null}
        </div>
  );     
  }

}
