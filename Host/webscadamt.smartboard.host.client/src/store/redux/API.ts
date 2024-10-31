export const getTemplateAPI = async (rejectWithValue: (data: any) => {}) => {
  const response = await fetch('/api/backupSettings');
  console.log('===> response', response);
  const data = await response.json();
  console.log('===> data', data);
  if (!response.ok) {
    rejectWithValue(data);
  } else {
    return data;
  }
};

// {
//   text: ''
// }
