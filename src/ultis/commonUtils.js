/* Call API with token */
const callApi =  (
  url,
  config,
  onRequestFinish,
  onRequestSuccess,
  onRequestFailure) => {
    
  if(!localStorage.getItem('USER_ACCESS_TOKEN')) {
    return
  }

  fetch(url, config)
    .then(response => {
      onRequestFinish && onRequestFinish();
      if (config.isFileDownload) {
        onRequestSuccess && onRequestSuccess(response);
        return null;
      }
      else {
        return response.json();
      }
    })
    .then((data) => {
      if (data && !config.isFileDownload) {
        data && onRequestSuccess && onRequestSuccess(data);
      }
    })
    .catch((err) => {
      onRequestFinish && onRequestFinish();
      onRequestFailure && onRequestFailure('NETWORK_ERROR');
    });
};

const callApiNoToken = (url,
  config,
  onRequestFinish,
  onRequestSuccess,
  onRequestFailure) => {
    fetch(url, config)
      .then(response => {
        onRequestFinish && onRequestFinish();
        if (config.isFileDownload) {
          onRequestSuccess && onRequestSuccess(response);
          return null;
        }
        else {
          return response.json();
        }
      })
      .then((data) => {
        if (data && !config.isFileDownload) {
          onRequestSuccess && onRequestSuccess(data);
        }
      })
      .catch((err) => {
        onRequestFinish && onRequestFinish();
        onRequestFailure && onRequestFailure('NETWORK_ERROR');
      });
  };

export { 
  callApi, 
  callApiNoToken 
};