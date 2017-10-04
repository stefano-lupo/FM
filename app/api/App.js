import Http from './HTTP';

export default class App extends Http {

  constructor(url, tokenSource) {
    console.log(`Constructing Generic instance with token ${tokenSource}\n`);
    super(url, tokenSource);
  };

  getCategories() {
    return (
      this.get('/categories')
    );
  }
}

