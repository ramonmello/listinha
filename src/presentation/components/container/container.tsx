type Props = {
  className?: string
  children: React.ReactNode
}

const Container = ({ children, className }: Props) => (
  <div className="flex items-center">
    <div className={`w-full max-w-screen-lg mx-auto px-6 ${className}`}>
      {children}
    </div>
  </div>
)

export default Container
