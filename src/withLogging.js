export default function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Props reçues :", props);
    return <WrappedComponent {...props} />;
  };
}
