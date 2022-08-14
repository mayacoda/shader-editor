import { ErrorInfo, Component } from 'react'
import type { PropsWithChildren } from 'react'

export class ErrorBoundary extends Component {
  state: { hasError: boolean } = { hasError: false }

  constructor(public props: PropsWithChildren) {
    super(props)
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
