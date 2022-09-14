import { Outlet } from 'react-router-dom';

// COMPONENTS
import { DefaultHeader } from './components/DefaultHeader';

// STYLES
import { WrapperDefaultLayout } from './styles';

export function DefaultLayout() {
  return (
    <WrapperDefaultLayout>
      <DefaultHeader />

      <Outlet />
    </WrapperDefaultLayout>
  );
}
