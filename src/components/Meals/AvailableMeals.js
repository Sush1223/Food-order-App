import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Vada Paav",
    description: "Mumbai Speciality",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Fish Rice",
    description: "Goa specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Aloo Paratha",
    description: "Punajabi Desi",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Rice Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;