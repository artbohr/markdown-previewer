import React, {Component} from 'react';
import marked from 'marked';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "I am using __markdown__."
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({markdown: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 id="box_title">Markdown</h1>
            <form>
              <textarea rows="26" value={this.state.markdown} onChange={this.handleChange}/>
            </form>
          </div>
          <div className="col-md-6">
            <h1 id="box_title">Output</h1>
            <p dangerouslySetInnerHTML={{
              __html: marked(this.state.markdown)
            }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
