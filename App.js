// App.js
import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'bootstrap';
// import data from './databricks_instances_config.json'
// var config = {}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // project_name_list: [],
      // instance_types_list: [],
      // app_name_list: [],
      project_name = '',
      instance_type = '',
      app_name = '',
      branch_name = '',
      project_names: [],
      instance_types: [],
      app_names: [],
      branch_names: [],
      isInstanceDisabled: true,
      isAppDisabled: true,
      isBranchDisabled: true
    };
  }

  componentDidMount() {
    // let project_name_list = ['DataEngineering', '7EIAccounting'];
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then( 
        (result) => {
          this.setState({project_names: this.gererate_dropdown_data(result['project_name_list'])});
        }, (error) => {
          // this.setState({ isLoaded: true, error });
          console.log('Error')
          this.setState({project_names: this.gererate_dropdown_data([])});
        }
      );
  }

  onProjectSelect = (e) => {
    // console.log(e['value']);
    // let instance_type_list = ['dev', 'prod'];
    this.setState({instance_type: e['value']});
    // this.setState({instance_types: this.gererate_dropdown_data(instance_type_list)})
    fetch("https://api.example.com/items")
    .then(res => res.json())
    .then( 
      (result) => {
        this.setState({instance_types: this.gererate_dropdown_data(result['instance_type_list'])});
      }, (error) => {
        // this.setState({ isLoaded: true, error });
        console.log('Error')
        this.setState({instance_types: this.gererate_dropdown_data([])});
      }
    );
    this.setState({isInstanceDisabled: false})
  }

  onInstanceSelect = (e) => {
    // let app_name_list = ['BIT', 'FIS'];
    this.setState({app_name: e['value']});
    fetch("https://api.example.com/items")
    .then(res => res.json())
    .then( 
      (result) => {
        this.setState({app_names: this.gererate_dropdown_data(result['app_names_list'])});
      }, (error) => {
        // this.setState({ isLoaded: true, error });
        console.log('Error')
        this.setState({app_names: this.gererate_dropdown_data([])});
      }
    );
    this.setState({isAppDisabled: false})
  }

  onAppSelect = (e) => {
    // let branch_name_list = ['master', 'dev'];
    this.setState({branch_name: e['value']});
    fetch("https://api.example.com/items")
    .then(res => res.json())
    .then( 
      (result) => {
        this.setState({branch_names: this.gererate_dropdown_data(result['branch_names_list'])});
      }, (error) => {
        // this.setState({ isLoaded: true, error });
        console.log('Error')
        this.setState({branch_names: this.gererate_dropdown_data([])});
      }
    );
    this.setState({isBranchDisabled: false})
  }

  gererate_dropdown_data = (data_list) => {
    let dropdown_data = data_list.map(function(data_name) {
      return { label: data_name, value: data_name }
    });
    return dropdown_data;
  }

  onCompareClick = (e) => {
    fetch("url",
    { 
        method: "POST",
        headers: { "Content-Type": "application/json",'Authorization': 'Bearer ' + window.localStorage["Access_Token"]},
        body:data
    }).then(response => response.blob()).then(response => ...*your code for download*... )
  }

  render() {
    return( <div className="container">
      <div className="row" style={{padding:'5px'}}>
        {/* <div className="col-md-4"></div> */}
        <div className="col-md-4">
          <Select options={ this.state.project_names } onChange={this.onProjectSelect}/>
        </div>
        {/* <div className="col-md-4"></div> */}
      </div>
      <div className="row" style={{padding:'5px'}}>
        {/* <div className="col-md-4"></div> */}
        <div className="col-md-4">
          <Select options={ this.state.instance_types } onChange={this.onInstanceSelect} isDisabled={this.state.isInstanceDisabled}/>
        </div>
        {/* <div className="col-md-4"></div> */}
      </div>
      <div className="row" style={{padding:'5px'}}>
        {/* <div className="col-md-4"></div> */}
        <div className="col-md-4">
          <Select options={ this.state.app_names } onChange={this.onAppSelect} isDisabled={this.state.isAppDisabled}/>
        </div>
        {/* <div className="col-md-4"></div> */}
      </div>
      <div className="row" style={{padding:'5px'}}>
        {/* <div className="col-md-4"></div> */}
        <div className="col-md-4">
          <Select options={ this.state.branch_names } isDisabled={this.state.isBranchDisabled}/>
        </div>
        {/* <div className="col-md-4"></div> */}
      </div>
      <div className="row" style={{padding:'5px'}}>
        {/* <div className="col-md-4"></div> */}
          <div className="col-md-4">
            <button onClick={this.onCompareClick}>Compare</button>
          </div>
        {/* <div className="col-md-4"></div> */}
      </div>
    </div> );
  }
}

export default App;
