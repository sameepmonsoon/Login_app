// conver image into base64

export default function converToBase64(file: File) {
  return new Promise((resolve: any, reject: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
