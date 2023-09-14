
interface Props {
  children: any,
  color: string
}
export default function ColoredText({children, color}:Props)
{
  return(
    <span style={{
      color: color
    }}>
    {children}
    </span>
  )
}

