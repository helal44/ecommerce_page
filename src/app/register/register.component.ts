import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regform:FormGroup;

  title = 'formarray';  
  orderForm !: FormGroup;  
  items!: FormArray;  


  constructor( private fbulider:FormBuilder ){
    // this.regform=new FormGroup({
    //   name:new FormControl('ali',[Validators.required ]),
    //   email:new FormControl('helal@gmail.com',[Validators.required])
    // })

    this.regform=this.fbulider.group({
      name:[null,[Validators.required ,Validators.minLength(8) , Validators.maxLength(18)]],

      email:[null,[Validators.required,Validators.pattern(/^[A-Z].{8,15}(@gmail\.com)$/)]],

      username:[null,[Validators.required,Validators.pattern(/^\S*$/g)]],

      password:[null,[Validators.required,Validators.maxLength(8),Validators.maxLength(15),
        Validators.pattern(/^[\A-\Z]+(\@|\%|\*|\$|\#)+[a-z]+([1-9]+)$/)]],
      
      password2:[null,[Validators.required]]
    })

   

  }

  ngOnInit() {  
    this.orderForm = new FormGroup({  
      items: new FormArray([])  
    });  
  } 

  createItem(): FormGroup {  
    return this.fbulider.group({  
      name: '',  
      description: '',  
      price: ''  
    });  
  }

  addItem(): void {  
    this.items = this.orderForm.get('items') as FormArray;  
    this.items.push(this.createItem());  
  } 

  getControls() {
    return (this.orderForm.get('items') as FormArray).controls;
  }


  deleteitem(i:number){
     this.items.removeAt(i);
  }

  submitform(){

    console.log(this.regform);

  }

  
 

}
