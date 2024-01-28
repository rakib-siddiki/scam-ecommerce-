import cn from '../utils/cn'

interface IProps {
  className?: string
  title: string
}
const SectionTitle: React.FC<IProps> = ({ title, className }) => {
  return (
    <>
      <h3 className={cn(`text-primary-900 text-center`, className)}>{title}</h3>
    </>
  )
}

export default SectionTitle
