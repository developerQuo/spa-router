type RouteProps = {
    path: string
    component: JSX.Element
  }
  
  export function Route(props: RouteProps): JSX.Element | undefined {
    const {pathname} = window.location
    if (pathname === props.path) {
      return props.component
    }
  }
  
  export function Router(props: { children: JSX.Element[] }) {
    const {pathname} = window.location
    const rendered = props.children.find((child) => 
      (child.props as RouteProps).path == pathname
    )
    console.log(pathname)
    console.log(rendered)
    return rendered
  }
  