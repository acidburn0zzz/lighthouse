/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Ensures <img> elements have alternate text or a role of none or presentation.
 * See base class in axe-audit.js for audit() implementation.
 */

import AxeAudit from './axe-audit.js';
import * as i18n from '../../lib/i18n/i18n.js';

const UIStrings = {
  /** Title of an accesibility audit that evaluates if all image elements have the alt HTML attribute to describe their contents. This title is descriptive of the successful state and is shown to users when no user action is required. */
  title: 'Image elements have `[alt]` attributes',
  /** Title of an accesibility audit that evaluates if all image elements have the alt HTML attribute to describe their contents. This title is descriptive of the failing state and is shown to users when there is a failure that needs to be addressed. */
  failureTitle: 'Image elements do not have `[alt]` attributes',
  /** Description of a Lighthouse audit that tells the user *why* they should try to pass. This is displayed after a user expands the section to see more. No character length limits. The last sentence starting with 'Learn' becomes link text to additional documentation. */
  description: 'Informative elements should aim for short, descriptive alternate text. ' +
      'Decorative elements can be ignored with an empty alt attribute. ' +
      '[Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-alt).',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);

class ImageAlt extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'image-alt',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['Accessibility'],
    };
  }
}

export default ImageAlt;
export {UIStrings};
