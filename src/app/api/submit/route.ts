type iForm = Record<string, string>;

const handleFormData = (formData: FormData) => {
  const keys = ['name', 'email', 'tel', 'site', 'budgetMedia'];

  const objForm: iForm = keys.reduce((acc, key) => {
    const value = formData.get(key);
    acc[key] = typeof value === 'string' ? value : '';
    return acc;
  }, {} as iForm);

  return objForm;
};

export function handleEmpty(formData: FormData) {
  const isEmpty = Object.values(handleFormData(formData)).some(
    (value) => value === ''
  );
  return isEmpty;
}

export default function save(formData: FormData): Promise<iForm | void> {
  const formIsEmpty = handleEmpty(formData);

  return new Promise<iForm | void>((resolve, reject) => {
    try {
      if (formData && !formIsEmpty) {
        const objForm = handleFormData(formData);
        setTimeout(() => {
          resolve(objForm);
          console.log('Send', objForm);
        }, 2000);
      } else {
        reject(
          'Erro! formData é nulo ou indefinido ou o formulário está vazio.'
        );
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
}
