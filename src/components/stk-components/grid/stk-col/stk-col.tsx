import { Component, h, Prop } from "@stencil/core";

export type StkSpan =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24";

@Component({
  tag: "stk-col",
  styleUrl: "stk-col.css",
  shadow: false
})
export class StkCol {
  @Prop({ reflectToAttr: true }) span: StkSpan = null;
  @Prop({ reflectToAttr: true }) xs: StkSpan = null;
  @Prop({ reflectToAttr: true }) sm: StkSpan = null;
  @Prop({ reflectToAttr: true }) md: StkSpan = null;
  @Prop({ reflectToAttr: true }) lg: StkSpan = null;
  @Prop({ reflectToAttr: true }) xl: StkSpan = null;
  @Prop({ reflectToAttr: true }) offset: StkSpan = null;
  @Prop({ reflectToAttr: true }) xsOffset: StkSpan = null;
  @Prop({ reflectToAttr: true }) smOffset: StkSpan = null;
  @Prop({ reflectToAttr: true }) mdOffset: StkSpan = null;
  @Prop({ reflectToAttr: true }) lgOffset: StkSpan = null;
  @Prop({ reflectToAttr: true }) xlOffset: StkSpan = null;

  render() {
    return (
      <div
        class={{
          "stk-col": true,
          "stk-col-1": this.span == "1",
          "stk-col-2": this.span == "2",
          "stk-col-3": this.span == "3",
          "stk-col-4": this.span == "4",
          "stk-col-5": this.span == "5",
          "stk-col-6": this.span == "6",
          "stk-col-7": this.span == "7",
          "stk-col-8": this.span == "8",
          "stk-col-9": this.span == "9",
          "stk-col-10": this.span == "10",
          "stk-col-11": this.span == "11",
          "stk-col-12": this.span == "12",
          "stk-col-13": this.span == "13",
          "stk-col-14": this.span == "14",
          "stk-col-15": this.span == "15",
          "stk-col-16": this.span == "16",
          "stk-col-17": this.span == "17",
          "stk-col-18": this.span == "18",
          "stk-col-19": this.span == "19",
          "stk-col-20": this.span == "20",
          "stk-col-21": this.span == "21",
          "stk-col-22": this.span == "22",
          "stk-col-23": this.span == "23",
          "stk-col-24": this.span == "24",
          "stk-col-offset-1": this.offset == "1",
          "stk-col-offset-2": this.offset == "2",
          "stk-col-offset-3": this.offset == "3",
          "stk-col-offset-4": this.offset == "4",
          "stk-col-offset-5": this.offset == "5",
          "stk-col-offset-6": this.offset == "6",
          "stk-col-offset-7": this.offset == "7",
          "stk-col-offset-8": this.offset == "8",
          "stk-col-offset-9": this.offset == "9",
          "stk-col-offset-10": this.offset == "10",
          "stk-col-offset-11": this.offset == "11",
          "stk-col-offset-12": this.offset == "12",
          "stk-col-offset-13": this.offset == "13",
          "stk-col-offset-14": this.offset == "14",
          "stk-col-offset-15": this.offset == "15",
          "stk-col-offset-16": this.offset == "16",
          "stk-col-offset-17": this.offset == "17",
          "stk-col-offset-18": this.offset == "18",
          "stk-col-offset-19": this.offset == "19",
          "stk-col-offset-20": this.offset == "20",
          "stk-col-offset-21": this.offset == "21",
          "stk-col-offset-22": this.offset == "22",
          "stk-col-offset-23": this.offset == "23",
          "stk-col-offset-24": this.offset == "24",

          "stk-col-xs-1": this.xs == "1",
          "stk-col-xs-2": this.xs == "2",
          "stk-col-xs-3": this.xs == "3",
          "stk-col-xs-4": this.xs == "4",
          "stk-col-xs-5": this.xs == "5",
          "stk-col-xs-6": this.xs == "6",
          "stk-col-xs-7": this.xs == "7",
          "stk-col-xs-8": this.xs == "8",
          "stk-col-xs-9": this.xs == "9",
          "stk-col-xs-10": this.xs == "10",
          "stk-col-xs-11": this.xs == "11",
          "stk-col-xs-12": this.xs == "12",
          "stk-col-xs-13": this.xs == "13",
          "stk-col-xs-14": this.xs == "14",
          "stk-col-xs-15": this.xs == "15",
          "stk-col-xs-16": this.xs == "16",
          "stk-col-xs-17": this.xs == "17",
          "stk-col-xs-18": this.xs == "18",
          "stk-col-xs-19": this.xs == "19",
          "stk-col-xs-20": this.xs == "20",
          "stk-col-xs-21": this.xs == "21",
          "stk-col-xs-22": this.xs == "22",
          "stk-col-xs-23": this.xs == "23",
          "stk-col-xs-24": this.xs == "24",
          "stk-col-xs-offset-1": this.xsOffset == "1",
          "stk-col-xs-offset-2": this.xsOffset == "2",
          "stk-col-xs-offset-3": this.xsOffset == "3",
          "stk-col-xs-offset-4": this.xsOffset == "4",
          "stk-col-xs-offset-5": this.xsOffset == "5",
          "stk-col-xs-offset-6": this.xsOffset == "6",
          "stk-col-xs-offset-7": this.xsOffset == "7",
          "stk-col-xs-offset-8": this.xsOffset == "8",
          "stk-col-xs-offset-9": this.xsOffset == "9",
          "stk-col-xs-offset-10": this.xsOffset == "10",
          "stk-col-xs-offset-11": this.xsOffset == "11",
          "stk-col-xs-offset-12": this.xsOffset == "12",
          "stk-col-xs-offset-13": this.xsOffset == "13",
          "stk-col-xs-offset-14": this.xsOffset == "14",
          "stk-col-xs-offset-15": this.xsOffset == "15",
          "stk-col-xs-offset-16": this.xsOffset == "16",
          "stk-col-xs-offset-17": this.xsOffset == "17",
          "stk-col-xs-offset-18": this.xsOffset == "18",
          "stk-col-xs-offset-19": this.xsOffset == "19",
          "stk-col-xs-offset-20": this.xsOffset == "20",
          "stk-col-xs-offset-21": this.xsOffset == "21",
          "stk-col-xs-offset-22": this.xsOffset == "22",
          "stk-col-xs-offset-23": this.xsOffset == "23",
          "stk-col-xs-offset-24": this.xsOffset == "24",

          "stk-col-sm-1": this.sm == "1",
          "stk-col-sm-2": this.sm == "2",
          "stk-col-sm-3": this.sm == "3",
          "stk-col-sm-4": this.sm == "4",
          "stk-col-sm-5": this.sm == "5",
          "stk-col-sm-6": this.sm == "6",
          "stk-col-sm-7": this.sm == "7",
          "stk-col-sm-8": this.sm == "8",
          "stk-col-sm-9": this.sm == "9",
          "stk-col-sm-10": this.sm == "10",
          "stk-col-sm-11": this.sm == "11",
          "stk-col-sm-12": this.sm == "12",
          "stk-col-sm-13": this.sm == "13",
          "stk-col-sm-14": this.sm == "14",
          "stk-col-sm-15": this.sm == "15",
          "stk-col-sm-16": this.sm == "16",
          "stk-col-sm-17": this.sm == "17",
          "stk-col-sm-18": this.sm == "18",
          "stk-col-sm-19": this.sm == "19",
          "stk-col-sm-20": this.sm == "20",
          "stk-col-sm-21": this.sm == "21",
          "stk-col-sm-22": this.sm == "22",
          "stk-col-sm-23": this.sm == "23",
          "stk-col-sm-24": this.sm == "24",
          "stk-col-sm-offset-1": this.smOffset == "1",
          "stk-col-sm-offset-2": this.smOffset == "2",
          "stk-col-sm-offset-3": this.smOffset == "3",
          "stk-col-sm-offset-4": this.smOffset == "4",
          "stk-col-sm-offset-5": this.smOffset == "5",
          "stk-col-sm-offset-6": this.smOffset == "6",
          "stk-col-sm-offset-7": this.smOffset == "7",
          "stk-col-sm-offset-8": this.smOffset == "8",
          "stk-col-sm-offset-9": this.smOffset == "9",
          "stk-col-sm-offset-10": this.smOffset == "10",
          "stk-col-sm-offset-11": this.smOffset == "11",
          "stk-col-sm-offset-12": this.smOffset == "12",
          "stk-col-sm-offset-13": this.smOffset == "13",
          "stk-col-sm-offset-14": this.smOffset == "14",
          "stk-col-sm-offset-15": this.smOffset == "15",
          "stk-col-sm-offset-16": this.smOffset == "16",
          "stk-col-sm-offset-17": this.smOffset == "17",
          "stk-col-sm-offset-18": this.smOffset == "18",
          "stk-col-sm-offset-19": this.smOffset == "19",
          "stk-col-sm-offset-20": this.smOffset == "20",
          "stk-col-sm-offset-21": this.smOffset == "21",
          "stk-col-sm-offset-22": this.smOffset == "22",
          "stk-col-sm-offset-23": this.smOffset == "23",
          "stk-col-sm-offset-24": this.smOffset == "24",

          "stk-col-md-1": this.md == "1",
          "stk-col-md-2": this.md == "2",
          "stk-col-md-3": this.md == "3",
          "stk-col-md-4": this.md == "4",
          "stk-col-md-5": this.md == "5",
          "stk-col-md-6": this.md == "6",
          "stk-col-md-7": this.md == "7",
          "stk-col-md-8": this.md == "8",
          "stk-col-md-9": this.md == "9",
          "stk-col-md-10": this.md == "10",
          "stk-col-md-11": this.md == "11",
          "stk-col-md-12": this.md == "12",
          "stk-col-md-13": this.md == "13",
          "stk-col-md-14": this.md == "14",
          "stk-col-md-15": this.md == "15",
          "stk-col-md-16": this.md == "16",
          "stk-col-md-17": this.md == "17",
          "stk-col-md-18": this.md == "18",
          "stk-col-md-19": this.md == "19",
          "stk-col-md-20": this.md == "20",
          "stk-col-md-21": this.md == "21",
          "stk-col-md-22": this.md == "22",
          "stk-col-md-23": this.md == "23",
          "stk-col-md-24": this.md == "24",
          "stk-col-md-offset-1": this.mdOffset == "1",
          "stk-col-md-offset-2": this.mdOffset == "2",
          "stk-col-md-offset-3": this.mdOffset == "3",
          "stk-col-md-offset-4": this.mdOffset == "4",
          "stk-col-md-offset-5": this.mdOffset == "5",
          "stk-col-md-offset-6": this.mdOffset == "6",
          "stk-col-md-offset-7": this.mdOffset == "7",
          "stk-col-md-offset-8": this.mdOffset == "8",
          "stk-col-md-offset-9": this.mdOffset == "9",
          "stk-col-md-offset-10": this.mdOffset == "10",
          "stk-col-md-offset-11": this.mdOffset == "11",
          "stk-col-md-offset-12": this.mdOffset == "12",
          "stk-col-md-offset-13": this.mdOffset == "13",
          "stk-col-md-offset-14": this.mdOffset == "14",
          "stk-col-md-offset-15": this.mdOffset == "15",
          "stk-col-md-offset-16": this.mdOffset == "16",
          "stk-col-md-offset-17": this.mdOffset == "17",
          "stk-col-md-offset-18": this.mdOffset == "18",
          "stk-col-md-offset-19": this.mdOffset == "19",
          "stk-col-md-offset-20": this.mdOffset == "20",
          "stk-col-md-offset-21": this.mdOffset == "21",
          "stk-col-md-offset-22": this.mdOffset == "22",
          "stk-col-md-offset-23": this.mdOffset == "23",
          "stk-col-md-offset-24": this.mdOffset == "24",

          "stk-col-lg-1": this.lg == "1",
          "stk-col-lg-2": this.lg == "2",
          "stk-col-lg-3": this.lg == "3",
          "stk-col-lg-4": this.lg == "4",
          "stk-col-lg-5": this.lg == "5",
          "stk-col-lg-6": this.lg == "6",
          "stk-col-lg-7": this.lg == "7",
          "stk-col-lg-8": this.lg == "8",
          "stk-col-lg-9": this.lg == "9",
          "stk-col-lg-10": this.lg == "10",
          "stk-col-lg-11": this.lg == "11",
          "stk-col-lg-12": this.lg == "12",
          "stk-col-lg-13": this.lg == "13",
          "stk-col-lg-14": this.lg == "14",
          "stk-col-lg-15": this.lg == "15",
          "stk-col-lg-16": this.lg == "16",
          "stk-col-lg-17": this.lg == "17",
          "stk-col-lg-18": this.lg == "18",
          "stk-col-lg-19": this.lg == "19",
          "stk-col-lg-20": this.lg == "20",
          "stk-col-lg-21": this.lg == "21",
          "stk-col-lg-22": this.lg == "22",
          "stk-col-lg-23": this.lg == "23",
          "stk-col-lg-24": this.lg == "24",
          "stk-col-lg-offset-1": this.lgOffset == "1",
          "stk-col-lg-offset-2": this.lgOffset == "2",
          "stk-col-lg-offset-3": this.lgOffset == "3",
          "stk-col-lg-offset-4": this.lgOffset == "4",
          "stk-col-lg-offset-5": this.lgOffset == "5",
          "stk-col-lg-offset-6": this.lgOffset == "6",
          "stk-col-lg-offset-7": this.lgOffset == "7",
          "stk-col-lg-offset-8": this.lgOffset == "8",
          "stk-col-lg-offset-9": this.lgOffset == "9",
          "stk-col-lg-offset-10": this.lgOffset == "10",
          "stk-col-lg-offset-11": this.lgOffset == "11",
          "stk-col-lg-offset-12": this.lgOffset == "12",
          "stk-col-lg-offset-13": this.lgOffset == "13",
          "stk-col-lg-offset-14": this.lgOffset == "14",
          "stk-col-lg-offset-15": this.lgOffset == "15",
          "stk-col-lg-offset-16": this.lgOffset == "16",
          "stk-col-lg-offset-17": this.lgOffset == "17",
          "stk-col-lg-offset-18": this.lgOffset == "18",
          "stk-col-lg-offset-19": this.lgOffset == "19",
          "stk-col-lg-offset-20": this.lgOffset == "20",
          "stk-col-lg-offset-21": this.lgOffset == "21",
          "stk-col-lg-offset-22": this.lgOffset == "22",
          "stk-col-lg-offset-23": this.lgOffset == "23",
          "stk-col-lg-offset-24": this.lgOffset == "24",

          "stk-col-xl-1": this.xl == "1",
          "stk-col-xl-2": this.xl == "2",
          "stk-col-xl-3": this.xl == "3",
          "stk-col-xl-4": this.xl == "4",
          "stk-col-xl-5": this.xl == "5",
          "stk-col-xl-6": this.xl == "6",
          "stk-col-xl-7": this.xl == "7",
          "stk-col-xl-8": this.xl == "8",
          "stk-col-xl-9": this.xl == "9",
          "stk-col-xl-10": this.xl == "10",
          "stk-col-xl-11": this.xl == "11",
          "stk-col-xl-12": this.xl == "12",
          "stk-col-xl-13": this.xl == "13",
          "stk-col-xl-14": this.xl == "14",
          "stk-col-xl-15": this.xl == "15",
          "stk-col-xl-16": this.xl == "16",
          "stk-col-xl-17": this.xl == "17",
          "stk-col-xl-18": this.xl == "18",
          "stk-col-xl-19": this.xl == "19",
          "stk-col-xl-20": this.xl == "20",
          "stk-col-xl-21": this.xl == "21",
          "stk-col-xl-22": this.xl == "22",
          "stk-col-xl-23": this.xl == "23",
          "stk-col-xl-24": this.xl == "24",
          "stk-col-xl-offset-1": this.xlOffset == "1",
          "stk-col-xl-offset-2": this.xlOffset == "2",
          "stk-col-xl-offset-3": this.xlOffset == "3",
          "stk-col-xl-offset-4": this.xlOffset == "4",
          "stk-col-xl-offset-5": this.xlOffset == "5",
          "stk-col-xl-offset-6": this.xlOffset == "6",
          "stk-col-xl-offset-7": this.xlOffset == "7",
          "stk-col-xl-offset-8": this.xlOffset == "8",
          "stk-col-xl-offset-9": this.xlOffset == "9",
          "stk-col-xl-offset-10": this.xlOffset == "10",
          "stk-col-xl-offset-11": this.xlOffset == "11",
          "stk-col-xl-offset-12": this.xlOffset == "12",
          "stk-col-xl-offset-13": this.xlOffset == "13",
          "stk-col-xl-offset-14": this.xlOffset == "14",
          "stk-col-xl-offset-15": this.xlOffset == "15",
          "stk-col-xl-offset-16": this.xlOffset == "16",
          "stk-col-xl-offset-17": this.xlOffset == "17",
          "stk-col-xl-offset-18": this.xlOffset == "18",
          "stk-col-xl-offset-19": this.xlOffset == "19",
          "stk-col-xl-offset-20": this.xlOffset == "20",
          "stk-col-xl-offset-21": this.xlOffset == "21",
          "stk-col-xl-offset-22": this.xlOffset == "22",
          "stk-col-xl-offset-23": this.xlOffset == "23",
          "stk-col-xl-offset-24": this.xlOffset == "24"
        }}
      >
        <slot />
      </div>
    );
  }
}