type iForm = Record<string, string>;

export default function save(formData: iForm): Promise<iForm> {
  return new Promise((resolve, reject) => {
    if (formData) {
      const objForm: iForm = formData;
      setTimeout(() => {
        console.log(objForm);
        resolve(objForm);
        console.log('Send', objForm);
      }, 2000);
    } else {
      console.error('Erro! formData é nulo ou indefinido.');
      reject('Erro! formData é nulo ou indefinido.');
    }
  });
}
