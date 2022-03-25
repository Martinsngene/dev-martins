const Textarea = ({
  label,
  labelId,
  name,
  textAreaId,
  className,
  containerStyles,
}) => {
  return (
    <div className={containerStyles}>
      <label className="text-[12px] text-[#555] font-[400]" htmlFor={labelId}>
        {label}
      </label>
      <textarea
        className={`border border-[#555] py-[1.2rem] rounded-[4px] mt-[1rem] w-full outline-none font-bold ${className}`}
        name={name}
        id={textAreaId}
      ></textarea>
    </div>
  );
};

export default Textarea;
