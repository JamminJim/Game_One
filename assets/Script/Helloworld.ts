const { ccclass, executeInEditMode, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
  private ctx: cc.Graphics = null;

  start() {
    // init logic
    //this.buildButton();
  }

  /*
  private drawCircle(): void {}

  private buildButton(): void {
    let nn: cc.Node = new cc.Node();

    if (nn != null) {
      nn.width = 400;
      nn.height = 400;
      this.ctx = nn.addComponent(cc.Graphics);
      this.ctx = nn.getComponent(cc.Graphics);
      if (this.ctx != null) {
        this.ctx.circle(200, 200, 50);
        this.ctx.lineWidth = 3;
        this.ctx.fillColor = cc.Color.RED;
        this.ctx.stroke();
        this.ctx.fill();
        this.node.addChild(new cc.Node());
      } else {
        cc.log("Unable to obtain cc.Graphic component");
      }
    }
  }

  update(dt) {
    this.ctx.circle(200, 200, 50);
    this.ctx.lineWidth = 3;
    this.ctx.fillColor = cc.Color.RED;
    this.ctx.stroke();
    this.ctx.fill();
  }
  */
}
