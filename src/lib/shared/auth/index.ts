export type FieldsError<Fields> = {
  [K in keyof Fields]: string[];
};

 
export type ActionResponse<Fields> = {
  message: string;
  success: boolean;
  errors?: FieldsError<Fields >;
  inputs:  Fields
}

