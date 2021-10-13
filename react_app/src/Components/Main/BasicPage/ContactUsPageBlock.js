import React from 'react'; // import React

export default class ContactUsPageBlock extends React.Component {

  render() {

    return (
      <div>
        <div id="block-th-base2-page-title" className="contextual-region block-core block-th-base2-page-title">
          <h1>
            <span>Contact Us</span>
          </h1>
        </div>
        <div id="block-th-base2-content" className="block-system block-th-base2-content">
          <article data-history-node-id="34" className="contextual-region node" about="/contact-us">
            <div className="content">
              <div className="webform__body">
                <p>Have any questions, comments, or concerns? </p>
                <p>We invite you to reach out via the contact form below. One of our friendly service representatives will follow up as soon as possible! </p>
                <p>We also offer 24/7 emergency services, so in the event of an emergency, please feel free to call outside business hours.</p>
              </div>
              <div className="webform__webform">
                <form className="webform-submission-form webform-submission-add-form webform-submission-contact-us-form webform-submission-contact-us-add-form webform-submission-contact-us-node-34-form webform-submission-contact-us-node-34-add-form js-webform-details-toggle webform-details-toggle contextual-region" data-drupal-selector="webform-submission-contact-us-node-34-add-form" action="http://travel-destinations.dd:8083/webform_rest/submit" method="post" id="webform-submission-contact-us-node-34-add-form" acceptCharset="UTF-8" data-drupal-form-fields="edit-name,edit-email,edit-phone,edit-questions-comments,edit-what-is-5-and-5-added-together-,edit-actions-submit">
                  <div className="webform-elements" data-drupal-selector="edit-elements">
                    <div className="js-form-item form-item js-form-type-textfield form-item-name js-form-item-name form-no-label">
                      <label htmlFor="edit-name" className="visually-hidden js-form-required form-required">Name</label>
                      <input data-drupal-selector="edit-name" type="text" id="edit-name" name="name" size="60" maxLength="255" placeholder="Name*" className="form-text required" required="required" aria-required="true"></input>
                    </div>
                    <div className="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">
                      <label htmlFor="edit-email" className="visually-hidden js-form-required form-required">Email</label>
                      <input data-drupal-selector="edit-email" type="email" id="edit-email" name="email" size="60" maxLength="254" placeholder="Email*" className="form-email required" required="required" aria-required="true"></input>
                    </div>
                    <div className="js-form-item form-item js-form-type-textfield form-item-phone js-form-item-phone form-no-label">
                      <label htmlFor="edit-phone" className="visually-hidden">Phone</label>
                      <input data-drupal-selector="edit-phone" type="text" id="edit-phone" name="phone" size="60" maxLength="255" placeholder="Phone" className="form-text"></input>
                    </div>
                    <div className="js-form-item form-item js-form-type-textarea form-item-questions-comments js-form-item-questions-comments form-no-label">
                      <label htmlFor="edit-questions-comments" className="visually-hidden js-form-required form-required">Questions/Comments</label>
                      <div>
                        <textarea data-drupal-selector="edit-questions-comments" id="edit-questions-comments" name="questions_comments" rows="5" cols="60" placeholder="Questions/Comments*" className="form-textarea required" required="required" aria-required="true">
                        </textarea>
                      </div>
                    </div>
                    <div className="js-form-item form-item js-form-type-textfield form-item-what-is-5-and-5-added-together- js-form-item-what-is-5-and-5-added-together-">
                      <label htmlFor="edit-what-is-5-and-5-added-together-" className="js-form-required form-required">What is 5 and 5 added together?*</label>
                      <input pattern="^10" data-webform-pattern-error="Incorrect" data-drupal-selector="edit-what-is-5-and-5-added-together-" type="text" id="edit-what-is-5-and-5-added-together-" name="what_is_5_and_5_added_together_" size="60" maxLength="255" className="form-text required" required="required" aria-required="true"></input>
                    </div>
                    <div data-drupal-selector="edit-actions" className="form-actions webform-actions js-form-wrapper form-wrapper" id="edit-actions">
                      <input className="webform-button--submit button button--primary js-form-submit form-submit" data-drupal-selector="edit-actions-submit" type="submit" id="edit-actions-submit" name="op" value="Send message"></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

}
