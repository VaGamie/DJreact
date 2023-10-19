import './App.scss'
import axios from 'axios';
import React from 'react';

class App extends React.Component{
  state = {
    details: [],
    username: '',
    school: ''
  }
  



  componentDidMount(){
    
    let data;
    axios.get('http://localhost:8000/school/').then(res =>{
      data = res.data
      this.setState({
        details:data
      });
      
      
    }).catch(err => <div>Error</div>)
    
    
    
 
  }
 

  
  
   // componentDidMount(){
  //   let data;
  //   axios.get('http://localhost:8000').then(res => {
  //     data = res.data;
  //     this.setState({
  //       details: data
  //     });
  //   }).catch(error =>  <div>Error</div> )
  // }

  sending = async(e) => {
    e.preventDefault()
    try{

      for (var i of this.state.details){
        console.log(`this is ${JSON.stringify(i.name)}`)
        console.log(this.state.username)
        if (`"${this.state.username.trim()}"` === JSON.stringify(i.name).trim() && JSON.stringify(i.school_name) === `"${this.state.school}"`){
          console.log('already in')
          break
        }
        if (`"${this.state.username.trim()}"` != JSON.stringify(i.name) && i === this.state.details[this.state.details.length -1] || `"${this.state.username.trim()}"` === JSON.stringify(i.name) && `"${this.state.school}"` != JSON.stringify(i.school_name) && i === this.state.details[this.state.details.length -1] ){
          const response = await axios.post('http://localhost:8000/school/', { name: this.state.username, school_name: this.state.school})
          alert(JSON.stringify(response.data))
          break
        }


        
      } 
    } catch(err){
      alert(JSON.stringify(err))
    }


  }
  

  watchnamechange = ((e) => {
    this.setState({username: e.target.value})
  })

  watchschoolchange = ((e) => {
    this.setState({school:e.target.value})
  })


  // sending(){
  //   let data;
  //   axios.post(('http://localhost:8000/school/', {name:"Alex", school_name:"Laurel"})).then(res => {
  //     alert(res)
  //   }).catch(err => {
  //     alert(err)
  //   })
  //   }




 
  render(){
    return(
      <div>
        <h1 className="bruh">Data</h1>
        <hr></hr>
        <div>
          <form className='form'>
            <input
            className='name_field'
            value={this.state.username}
            onChange={this.watchnamechange}
            placeholder='Enter your name'
            />
            <input
            className='school_field'
            value={this.state.school}
            placeholder='Enter your school'
            onChange={this.watchschoolchange}
            />
            <button type='submit'  onClick={this.sending} >Send Here</button>
          </form>
        </div>
        <div>
        {this.state.details.map((output, id) => (
          <div className='lst' key={id}>
            <h2>{output.name}</h2>
            <h3>{output.school_name}</h3>
            <p>{`created: ${output.todays_date}`}</p>

          </div>
        ))}  
        
        </div>
        
        {/* {this.state.details.map((output, id) => (
          <div key={id}>
            <div class="table">
              <h2>{output.employee}</h2>
              <h3>{output.department}</h3>
              <p>{`Manager: ${output.manager}`}</p>
              
            </div>
          </div>
        ))} */}
      </div>
 
    )
  };
};
export default App;








// import React from 'react';
// import axios from 'axios';

// class YourComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       schoolName: '',
//     };
//   }

//   sendDataToDjango = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/school/', { name: this.state.name, school_name: this.state.schoolName });
//       alert(JSON.stringify(response.data));
//     } catch (error) {
//       alert(JSON.stringify(error));
//     }
//   };

//   handleNameChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleSchoolNameChange = (event) => {
//     this.setState({ schoolName: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           value={this.state.schoolName}
//           onChange={this.handleSchoolNameChange}
//           placeholder="School Name"
//         />
//         <button onClick={this.sendDataToDjango}>Send Data to Django</button>
//       </div>
//     );
//   }
// }

// export default YourComponent;
