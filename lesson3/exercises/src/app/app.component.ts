import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffStatus=true;
  upButtonStatus=true;
  downButtonStatus=true;
  leftButtonStatus=true;
  rightButtonStatus=true;

  takeOffClicked()
  {
    
    if(confirm("confirm shuttle is ready for take-off?"))
    {
      this.message="Shuttle in Flight";
      this.color='blue';
      this.height=10000;
      this.takeOffStatus=false;
    }
  }

  landButtonClicked(rocketImg)
  {
    alert('The shuttle is landing. Landing gear engaged.');
    this.message="The Shuttle has landed";
      this.color='green';
      this.height=0;
      this.width=0;
      rocketImg.style.bottom='0px';
      this.takeOffStatus=true;
      rocketImg.style.bottom = '0px';
    rocketImg.style.left = '0px';
  }

  abortButtonClicked(rocketImg)
  {
    if(confirm("Are you sure you want to abort the mission?"))
    {
      this.message="SMission Aborted";
      this.color='red';
      this.height=0;
      this.width=0;
      this.takeOffStatus=true;
      rocketImg.style.bottom = '0px';
    rocketImg.style.left = '0px';
    } 
  }

rocketMoved(rocketImg,direction)
{
  
  if(direction==='right')
  {
    let movement=parseInt(rocketImg.style.left)+10+'px';
    rocketImg.style.left=movement;
    this.width=this.width+10000;
    this.checkRocketPosition();
  }
  else if(direction==='left')
  {
    let movement=parseInt(rocketImg.style.left)-10+'px';
    rocketImg.style.left=movement;
    this.width=this.width-10000;
    this.checkRocketPosition();
  }
  else if(direction==='up')
  {
    let movement=parseInt(rocketImg.style.bottom)+10+'px';
    rocketImg.style.bottom=movement;
    this.height=this.height+10000;
    this.checkRocketPosition();
  }
  else if(direction==='down')
  {
    let movement=parseInt(rocketImg.style.bottom)-10+'px';
    rocketImg.style.bottom=movement;
    this.height=this.height-10000;
    this.checkRocketPosition();
  }
}

checkRocketPosition()
{
  if(this.width>=450000||this.width<0||this.height>=340000||this.height<0)
  {
    this.color='orange';
    if(this.width>=450000)
      this.rightButtonStatus=false;
    else if(this.width<0)
      this.leftButtonStatus=false;
    if(this.height>=340000)
      this.upButtonStatus=false;
    else if(this.height<0)
      this.downButtonStatus=false;

  }
  else 
  {
    this.color='blue';
    this.rightButtonStatus=true;
    this.leftButtonStatus=true;
    this.upButtonStatus=true;
    this.downButtonStatus=true;
  }
}

}
