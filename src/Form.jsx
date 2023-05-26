import React,{useState} from 'react'

const Form = () => {
  const [formData,setFormData]=useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    gender:""
  })
  const handle=(e)=>{
   const name=e.target.name;
   const value=e.target.value;
   setFormData({...formData,[name]:value})
  }
  const submit=(e)=>{
    e.preventDefault();
    console.log(formData);
    alert("Hogya")
  }
  return (
    <div className='forms'>
      <h1>Login Form!</h1>
        <form onSubmit={submit}>
            <label>First Name:<span>*</span>
              <br/>
                <input type="text" name='first_name' value={formData.first_name} onChange={handle}/>
            </label>
            
            <label>Last Name:<span>*</span>
              <br/>
                <input type="text" name='last_name' value={formData.last_name} onChange={handle}/>
            </label>
            
            <label>Email:<span>*</span>
              <br/>
                <input type="email" name='email' value={formData.email} onChange={handle}/>
            </label>
            
            <label>Password:<span>*</span>
              <br/>
                <input type="password" name='password' value={formData.password} onChange={handle}/>
            </label>
            
            <label>Gender:<span>*</span>
              <br/>
                <select name='gender' value={formData.gender} onChange={handle}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>

                </select>
            </label>
            
            <button type='submit' >Submit</button>
        </form>
    </div>
    
  )
}

export default Form