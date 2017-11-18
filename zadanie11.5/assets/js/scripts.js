$( () => {
  function Button(text) {
    this.text = text || 'Hello';
  }
  
  Button.prototype = {
    create: function() {
      this.element = document.createElement('button');
      this.body = document.createTextNode(this.text);
      this.element.appendChild(this.body);
      this.element.onclick = () => {
        alert(this.text);
      }
      document.body.appendChild(this.element);
    }
  }

  let btn1 = new Button('Hello!');
  btn1.create();

} );
