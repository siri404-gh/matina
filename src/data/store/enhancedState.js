import state from './state';
import { pipe, updateProperty } from '../utils/helpers';
import { serverDateService } from '../../services/services';

export default () => {
  const date = serverDateService();

  return pipe(
    updateProperty([ 'app', 'date' ], date, state),
  );
};