// import { ChangeEvent } from "react";
// import { SelectInputProps } from "./types";

// const RadioButtonInput = ({
//   name,
//   options,
//   type,
//   error,
//   label,
//   value,
//   onChange,
// ...rest
// }: SelectInputProps) => {
//   // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//   //   onChange({ ...event, target: { name, value: event.target.value } });
//   // };

//   return (
//     <div className="form-group">
//       {label && <label>{label}</label>}
//       {options.map(option => (
//         <div key={option.value}>
//           <input
//             type="radio"
//             id={option.value}
//             name={name}
//             value={option.value}
//             checked={value === option.value}
//             // onChange={handleChange}
//           />
//           <label htmlFor={option.value}>{option.label}</label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RadioButtonInput;
