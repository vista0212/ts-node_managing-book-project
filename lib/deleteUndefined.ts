export const deleteUndefiend: (object: Object) => Object = object => {
  Object.entries(object).forEach(([key, value]) => {
    if(value === undefined) {
      delete object[key];
    }
   })

   return object;
}