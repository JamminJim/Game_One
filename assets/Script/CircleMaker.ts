// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class CircleMaker extends cc.Component {
  @property(cc.AnimationClip)
  anim_clip: cc.AnimationClip = null;

  @property(cc.Node)
  target: cc.Node = null;

  private ctx: cc.Graphics = null;
  private btn: cc.Button = null;
  private deltaT: number = 0;

  onLoad() {
    cc.director.getPhysicsManager().enabled = true;
  }
  start() {
    this.buildCircle();
    this.buildButton();

    //this.ctx = this.node.getComponent(cc.Graphics);

    /*     if (this.ctx == null) {
      this.ctx = this.node.addComponent(cc.Graphics);
    }
 */
    /*  this.ctx.moveTo(20, 100);
    this.ctx.lineTo(20, 20);
    this.ctx.lineTo(70, 20);
    this.ctx.fillColor = cc.Color.BLUE;
    this.ctx.fill(); */
  }

  private buildCircle(): void {
    if (this.ctx == null) {
      this.ctx = this.node.addComponent(cc.Graphics);
    }

    this.ctx.circle(0, 0, 30);
    this.ctx.fillColor = cc.Color.BLUE;
    this.ctx.fill();
  }

  private buildButton(): void {
    if (this.btn == null) {
      this.btn = this.node.addComponent(cc.Button);
      if (this.btn != null) {
        this.btn.node.on(cc.Node.EventType.MOUSE_DOWN, (event): void => {
          cc.log("Mouse Down");

          let anim: cc.Animation = this.ctx.getComponent(cc.Animation);
          if (anim == null) {
            anim = this.ctx.addComponent(cc.Animation);
          }
          anim.addClip(this.anim_clip);
          anim.play(this.anim_clip.name);
          this.deltaT = Date.now();
        });

        this.btn.node.on(cc.Node.EventType.MOUSE_UP, (event): void => {
          cc.log("Mouse Up");
          let delayTime = Date.now() - this.deltaT;
          this.ctx
            .getComponent(cc.Animation)
            .setCurrentTime(0, this.anim_clip.name);
          this.ctx.getComponent(cc.Animation).stop();

          let p: number = delayTime * 2000;
          this.target
            .getComponent(cc.RigidBody)
            .applyForceToCenter(new cc.Vec2(0, p), true);
          // this.target
          // .getComponent(cc.RigidBody)
          //.applyLinearImpulse(new cc.Vec2(0, 500), new cc.Vec2(0, 1), true);

          cc.log("Press Duraction" + delayTime);
        });
      }
    }
  }

  update(dt) {}
}
