//val & ref
class Node {
    constructor(val) {
        this.val=val;
        this.next=null;
    }
}
// let first=new Node("Hi");
// first.next=new Node("there")
class SinglyLinkedList {
    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    traverse(){
        var current = this.head;
        while (current) {
current=current.next;            
        }
    }

push(val){

let newNode = new Node(val);
   if (!this.head) {
this.head=newNode;
this.tail=this.head;
       
   } 
   else{
       this.tail.next=newNode;
       this.tail=newNode;
   } 
    this.length++;
    return this;
}

pop(val){
 if(!this.head) return undefined;
 var current = this.head;
 var newTail=current;
 while(current.next){
    newTail=current;
    current=current.next;
 }
   this.tail=newTail;
   this.tail.next=null;
   this.length--;
   if (this.length===0) {
      this.head=null;
      this.tail=null;
   }
   return current;
 
}
}

let list1= new SinglyLinkedList();