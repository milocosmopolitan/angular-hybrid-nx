import { module } from '../angularjsapp';



export default module.component('hello', {
  template:  `
    <div style="background-color: yellow">
        <div>AngularJS A!</div>
        <div><a href="/angular_a">Go to Angular A</a></div>
        <div><a href="/angular_b">Go to Angular B</a></div>
        <div>Go to AngularJS A</div>
        <div><a href="/angularjs_b">Go to Angular JS B</a></div>
      </div>
      <h3>{{$ctrl.greeting}} solar sytem!</h3>
      <button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>
  `,
             
  controller: function() {
    this.greeting = 'hello';
    
    this.toggleGreeting = function() {
      this.greeting = (this.greeting === 'hello') ? 'whats up' : 'hello'
    }
  }
})