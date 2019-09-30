import { configure, addDecorator } from '@storybook/react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../src/css/variables.css';
import '../src/css/typography.css';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
