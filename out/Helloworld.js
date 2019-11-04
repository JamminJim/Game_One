"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ccclass, property } = cc._decorator;
let Helloworld = class Helloworld extends cc.Component {
    constructor() {
        super(...arguments);
        this.label = null;
        this.text = "hello";
    }
    start() {
        // init logic
        this.label.string = this.text;
    }
};
__decorate([
    property(cc.Label)
], Helloworld.prototype, "label", void 0);
__decorate([
    property
], Helloworld.prototype, "text", void 0);
Helloworld = __decorate([
    ccclass
], Helloworld);
exports.default = Helloworld;
//# sourceMappingURL=Helloworld.js.map