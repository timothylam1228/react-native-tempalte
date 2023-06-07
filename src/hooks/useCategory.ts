import { useSelector } from 'react-redux';
import { CategoryState } from '../store/category';

export default function () {
  const categories = useSelector(
    (state: { category: CategoryState }) => state.category,
  );
  return categories;
}
