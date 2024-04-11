import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
      this.error
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
        console.log(error, info.componentStack);

    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <h1>Ops, algo deu errado</h1>
        )
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary