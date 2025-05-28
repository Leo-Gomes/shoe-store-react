export const FilterGroup = ({title, inputType, options}) => {

    return (
    <div className="text-sm mb-4">
      <h4 className="text-sm text-dark-gray-2 mb-3 font-bold">{title}</h4>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-3">
            <input
              type={inputType}
              value={option.value ?? option.text}
              name={title}
              className="w-[22px] h-[22px] accent-primary"
            />
            <span className="text-sm text-gray-700">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
            )
}