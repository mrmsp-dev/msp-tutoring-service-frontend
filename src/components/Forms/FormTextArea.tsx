import { Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  maxLength?: number;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
  maxLength,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <ReactQuill
            theme='snow'
            value={value}
            onChange={onChange}
            className='bg-white rounded-xl '
          />
          // <Input.TextArea
          //   rows={rows}
          //   placeholder={placeholder}
          //   {...field}
          //   defaultValue={value}
          //   maxLength={maxLength}
          // />
        )}
      />
    </div>
  );
};

export default FormTextArea;
