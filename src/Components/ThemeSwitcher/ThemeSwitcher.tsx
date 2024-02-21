
import { useTheme } from '../../providers/ThemeProvider';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Toggle Theme 
      <span>({theme})</span>
    </button>
  );
};

export default ThemeSwitcher;
