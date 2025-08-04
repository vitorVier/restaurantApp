import axios from 'axios';

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const api = async (): Promise<ProductProps[]> => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  
  return response.data.meals.map((meal: any, index: number) => ({
    id: parseInt(meal.idMeal),
    title: meal.strMeal,
    description: `Delicioso prato de ${meal.strMeal.toLowerCase()}`,
    price: Math.floor(Math.random() * 50) + 20, // Preços entre 20-70
    image: meal.strMealThumb,
    category: 'Frutos do Mar' // Ou use meal.strCategory
  }));
};

export type { ProductProps };