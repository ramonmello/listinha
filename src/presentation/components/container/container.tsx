const Container = ({ children }) => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="flex flex-col justify-between h-80">{children}</div>
  </div>
)

export default Container
