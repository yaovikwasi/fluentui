import { FluentDesignSystem } from '../fluent-design-system.js';
import { TextArea } from './text-area.js';
import { styles } from './text-area.styles.js';
import { template } from './text-area.template.js';

/**
 * The Fluent Text Element.
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-text-area\>
 */
export const definition = TextArea.compose({
  name: `${FluentDesignSystem.prefix}-text-area`,
  template,
  styles,
});
