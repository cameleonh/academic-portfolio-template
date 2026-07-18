import Link from 'next/link'

type LinkButtonProps = {
  readonly href: string
  readonly children: React.ReactNode
  readonly external?: boolean
  readonly filled?: boolean
  readonly className?: string
}

export default function LinkButton({
  href,
  children,
  external = false,
  filled = false,
  className = '',
}: LinkButtonProps) {
  const buttonClassName = `link-btn${filled ? ' link-btn--filled' : ''} ${className}`

  if (external) {
    return (
      <a
        href={href}
        className={buttonClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={buttonClassName}>
      {children}
    </Link>
  )
}
