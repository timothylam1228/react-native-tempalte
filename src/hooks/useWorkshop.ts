import { useSelector } from 'react-redux';
import { WorkshopPayload } from '../store/workshop';

export default function () {
  const workshops = useSelector(
    (state: { workshop: WorkshopPayload[] }) => state.workshop,
  );
  return workshops;
}
