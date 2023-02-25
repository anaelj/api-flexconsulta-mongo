export function checkBase64(value) {
      const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
      const rsltImg = base64regex.test(value);
      if (!rsltImg) throw new Error("Base64 invválido");
      return true
}