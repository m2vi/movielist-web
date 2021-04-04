interface output {
  obj: object;

  key: string;
  title: string;
  actors: string;
  description: string;
  fsk: number;
  images: object;
  keywords: string;
  rating: number;
  type: number;
  director: string;
  topics: string;
  languages: any;
  publisher: string;
}

class output {
  constructor(obj: object) {
    this.obj = obj;
  }
}

const jsonAll = (obj: string) => {
  obj = JSON.parse(obj);
  let output = {};

  try {
  } catch (err) {}
};

export default jsonAll;
