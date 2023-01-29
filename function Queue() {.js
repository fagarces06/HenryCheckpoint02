function Queue() {
    this.array = [];
  }
  
  Queue.prototype.enqueue = function(elemento) {
    return this.array.push(elemento);
  }
  
  Queue.prototype.dequeue = function() {
    return this.array.shift();
  }
  
  Queue.prototype.size = function() {
    return this.array.length;
  }
  
  function Stack(){
    this.array = [];
  }
  
  Stack.prototype.push = function(elemento){
    this.array.push(elemento);
  };
  
  Stack.prototype.pop = function(){
    return this.array.pop();
  };
  
  Stack.prototype.size = function () {
    return this.array.length;
  };
  
  

  LinkedList.prototype.add = function(valor) {
    var nuevoNodo = new Node(valor);
  
    if(!this.head){
      this.head = nuevoNodo;
    } else {
      var tailActual = this.head;
      while (tailActual.next !== null) {
        tailActual = tailActual.next;
      }
      tailActual.next = nuevoNodo;
    }
  }
  
  LinkedList.prototype.remove = function() {
    if(!this.head){
      return undefined;
    }
  
    if(this.head.next === null){
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }
  
    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
  }
  
  LinkedList.prototype.search = function(arg) {
    var nodoActual = this.head;
  
    if(nodoActual === null){
      return null;
    }
  
    while (nodoActual !== null) {
      if(typeof arg === "function"){
        if(arg(nodoActual.value)){
          return nodoActual.value;
        }
      } else if(nodoActual.value === arg){
          return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }
  
    return null;
  }
  
  function Node(valor){
    this.value = valor;
    this.next = null;
  }
  
  function BinarySearchTree(valor) {
    this.value = valor;
    this.left = null;
    this.right = null;
  }
  
  BinarySearchTree.prototype.insert = function(value) {
  
    if(value < this.value){
      if(this.left === null){
        var newTree = new BinarySearchTree(value);
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
    } else {
      if(this.right === null){
        var newTree = new BinarySearchTree(value);
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    }
  }
  
  BinarySearchTree.prototype.size = function() {
    if(this.value === null){
      return 0;
    }
  
    if(this.left === null && this.right === null){
      return 1;
    }
  
    if(this.left === null){
      return 1 + this.right.size();
    }
  
    if(this.right === null){
      return 1 + this.left.size();
    }
  
    return 1 + this.left.size() + this.right.size();
  }

function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.count = function() {
    // Tu código aca:
    if (!this.head) return 0;
    let current = this.head;  
    console.log(current)
    let sumador = 0;
    while(current){
      sumador += current.value;
      current=current.next;
    }
    console.log(sumador)
  }




  LinkedList.prototype.simplifyList = function () { 
    // Tu código aca:   
     if(!this.head) return false;
     let current = this.head;
     let datos = [];//matriz para guardar los datos  
     while (current){
       datos.push(current.value)
       current = current.next;    
     }  
     //datos guardados en la matriz, ahora a chequearla
    const matrizReducida = new Set(datos);
    let result = [...matrizReducida];
    current = this.head;
    this.head.value = result[0];
    result.shift()  
     while (current.next){       
         current.next.value = result[0]
         result.shift()   
         current = current.next;        
     }  
   }
   
   


lista = new LinkedList();
  lista.add(2);
  lista.add(5);
  lista.add(1);
  lista.add(5);
  lista.add(7);
  lista.add(2);
  console.log(lista.sortList());
  




LinkedList.prototype.simplifyList = function () { 
    // Tu código aca:
    let current = this.head;
    let listanueva = new LinkedList;
    listanueva.add(current)
    while(current.next){    
      if(!listanueva.search(current.next.value)){
        listanueva.add(current.next)
      }else {
        listanueva.remove(current.next);
      }
      current = current.next;
    }  
  }



  function mayorMenorOIgual(numFijo) {
    // Tu código aca:
    let parametro = 0;
    return function(dato){
      if (numFijo === null || numFijo === undefined) return [];
      parametro += numFijo;
      if (parametro === 10){
        dato = 10;
      } else if (parametro < 10){
        dato = "la suma es menor a 10";
      } else if (parametro > 10){
        dato = "la suma es mayor a 10";            
      }
      return dato;
    }  
  }
  var sumaCinco = mayorMenorOIgual(5);
  var sumaDiez = mayorMenorOIgual(10);
  console.log(sumaCinco(2))
  console.log(sumaCinco(5))
  console.log(sumaCinco(11))
  console.log(sumaDiez(2))
  console.log(sumaDiez(11))
  var clousureNull = mayorMenorOIgual(null);
  var clousureUndefined = mayorMenorOIgual(undefined);
  console.log(mayorMenorOIgual(null))
  console.log(undefined)
  
  /*
   expect(sumaCinco(2)).toBe("la suma es menor a 10");
    expect(sumaCinco(5)).toBe(10);
    expect(sumaCinco(11)).toBe("la suma es mayor a 10");
    expect(sumaDiez(2)).toBe("la suma es mayor a 10");
    expect(sumaDiez(11)).toBe("la suma es mayor a 10");
  */
