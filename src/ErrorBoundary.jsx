import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class ErrorBoundary extends Component {
 
    state = { hasError: false };
  

  static getDerivedStateFromError(error) {
    
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong <Link to="/">click to go to home page</Link>.</h1>;
    }

    return this.props.children; 
  }
}
