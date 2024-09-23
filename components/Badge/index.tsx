interface BadgeProps {
  children: string | React.ReactNode
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'danger-subtle' | 'warning' | 'info' | 'light' | 'dark'
}

export default function Badge({ children, type = 'secondary' }: BadgeProps) {
  if (type === 'primary') {
    return (
      <span className="badge bg-primary">{children}</span>
    )
  }

  if (type === 'success') {
    return (
      <span className="badge bg-success">{children}</span>
    )
  }

  if (type === 'danger') {
    return (
      <span className="badge bg-danger">{children}</span>
    )
  }

  if (type === 'danger-subtle') {
    return (
      <span className="badge bg-danger-subtle text-danger">{children}</span>
    )
  }

  if (type === 'warning') {
    return (
      <span className="badge bg-warning">{children}</span>
    )
  }

  if (type === 'info') {
    return (
      <span className="badge bg-info">{children}</span>
    )
  }

  if (type === 'light') {
    return (
      <span className="badge bg-light text-dark">{children}</span>
    )
  }

  if (type === 'dark') {
    return (
      <span className="badge bg-dark">{children}</span>
    )
  }

  return (
    <span className="badge bg-secondary">{children}</span>
  )
}