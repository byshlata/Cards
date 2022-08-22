export type CustomInputType = {
  name?: string;
  type: InputType;
  error?: boolean;
  disabled?: boolean;
  value: any;
  onChange: (value: string) => void;
  onClick?: () => void;
};

export type InputType = 'search' | 'password' | 'simple';
