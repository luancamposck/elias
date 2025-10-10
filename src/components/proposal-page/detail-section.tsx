interface DetailSectionProps {
  title: string
  description?: string
  items: string[]
}

const DetailSection = ({ title, description, items }: DetailSectionProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      {description && <p className="mb-6">{description}</p>}
      <ul className="list-disc list-inside mb-6 space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default DetailSection
