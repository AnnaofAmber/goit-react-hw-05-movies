import { ColorRing } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        colors={['#F99417', '#d2cdfc', '#ffc374', '#d2cdfc', '#F99417']}
      />
    </div>
  );
};
