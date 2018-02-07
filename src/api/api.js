import request from 'superagent';



class api{


  static fetchQuestions() {
    return new Promise((resolve, reject) => {
      request.
      get( 'https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple').
      set('Accept', 'application/json').
      end((error, res) => {
        error ? reject(error) : resolve(res);
      });
    });
  }



}

export default api;
