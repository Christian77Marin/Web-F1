import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'driver-container',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {



  @Prop() name: string;
  @Prop() age: string;
  @Prop() team: string;
  @Prop() picture: string;
  @Prop() global: string;


  render() {
let position: string;
if(this.global === "1"){
  position = "🥇";
}else if(this.global === "2"){
  position = "🥈";
}else if(this.global === "3"){
  position = "🥉";
}else{
  position = this.global;
}


  return <div class="dc-container">
     <div class="dc-header">
      <h4>Driver Card</h4>
     </div>
    <div class="dc-body">
    <img class="cd-img" src={this.picture}></img>
    <p>Name</p>
    <p class="data">{this.name}</p>
    <p>Age</p>
    <p class="data">{this.age}</p>
    <p>Team</p>
    <p class="data">{this.team}</p>
    <p>Global Ranking</p>
    <p class="data">{position}</p>

    </div>
   </div>
  }
}
