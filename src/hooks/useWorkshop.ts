import { useSelector } from 'react-redux';
import { WorkshopState } from '../store/workshop';

export default function () {
  const workshops = useSelector(
    (state: { workshop: WorkshopState }) => state.workshop,
  );
  return workshops;
}
