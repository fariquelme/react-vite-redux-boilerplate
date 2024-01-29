type FallbackComponentProps = {
  message: string,
}

const FallbackComponent = ({ message }:FallbackComponentProps) => <div>
  <h1>Fallback Component</h1>
  <br />
  <h1>Application Error!</h1>
  {message && (<p>{message}</p>)}
</div>
export default FallbackComponent;
