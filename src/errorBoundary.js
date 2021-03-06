//this component is copy pasted from reach docs
import React, { Component } from 'react';
import './errorBoundary.css'
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    // display fallback ui
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
      // You can also log the error to an error reporting service
      console.error(error);
    }
  
    render() {
      if (this.state.errorInfo) {
        return (
          <section>
            <div class="container">
              <div class="child-elem">
                <h1>uh uh we have a small issue</h1>
              </div>
              <div class="child-elem">
               please refresh the page the map will appear:)
              </div>
            </div>
          </section>
        )
      } 
     // Normally, just render children
      return this.props.children;
    }  
  }
  
  export default ErrorBoundary;