 
  export const successHandler = res => {
    console.log(res)
    return Promise.resolve(res.data);
  };
  
  export const errorHandler = error => {
    return Promise.reject(error.response && error.response.data && (error.response.data.errors || error.response.data.message));
  };