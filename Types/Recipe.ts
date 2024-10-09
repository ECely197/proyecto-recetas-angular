interface Recipe {
  _id: string;
  img: string;
  title: string;
  description: string;
  times: {
    preparation: string;
    cooking: string;
    total: string;
  };
  instructions: string[];
  preparation: string[];
  nutritionalValues: {
    calories: number;
    carbohydrates: string;
    protein: string;
    fat: string;
  };
}

export default Recipe;
