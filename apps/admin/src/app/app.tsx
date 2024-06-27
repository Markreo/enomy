// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

export function App() {
  const envName = import.meta.env.VITE_ENV_NAME;
  return (
    <div className={'bg-green-base'}>
      __{envName}.
      <NxWelcome title="admin" />
    </div>
  );
}

export default App;
