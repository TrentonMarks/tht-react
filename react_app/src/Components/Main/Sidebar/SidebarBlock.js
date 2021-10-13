import React from 'react'; // import React

export default class SidebarBlock extends React.Component {

  render() {
    let sidebar = this.props.sidebar;
    /* let webform = this.props.webform;
       Webform YAML object. Find module to convert YAML to JSON. */
    return (
      <div id="block-rightcolumncta--3" className="contextual-region block-block-content block-rightcolumncta--3">
        { /* Sidebar content */ }
        <div
          className="basic__body"
          dangerouslySetInnerHTML={{__html: sidebar.attributes.body.value}}
        />
        { /* Webform content */ }
        <div className="basic__webform">
          <div>
            <form className="webform-submission-form webform-submission-add-form webform-submission-contact-us-form webform-submission-contact-us-add-form webform-submission-contact-us-block_content-6-form webform-submission-contact-us-block_content-6-add-form js-webform-details-toggle webform-details-toggle contextual-region" data-drupal-selector="webform-submission-contact-us-block-content-6-add-form-3" action="http://travel-destinations.dd:8083/webform_rest/submit" method="post" id="webform-submission-contact-us-block-content-6-add-form--3" acceptCharset="UTF-8" data-drupal-form-fields="edit-name--3,edit-email--3,edit-phone--3,edit-questions-comments--3,edit-what-is-5-and-5-added-together---3,edit-actions-submit--3">
              <div className="webform-elements" data-drupal-selector="edit-elements">
                <div className="js-form-item form-item js-form-type-textfield form-item-name js-form-item-name form-no-label">
                  <label htmlFor="edit-name--3" className="visually-hidden js-form-required form-required">Name</label>
                  <input data-drupal-selector="edit-name" type="text" id="edit-name--3" name="name" size="60" maxLength="255" placeholder="Name*" className="form-text required" required="required" aria-required="true" />
                </div>
                <div className="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">
                  <label htmlFor="edit-email--3" className="visually-hidden js-form-required form-required">Email</label>
                  <input data-drupal-selector="edit-email" type="email" id="edit-email--3" name="email" size="60" maxLength="254" placeholder="Email*" className="form-email required" required="required" aria-required="true" />
                </div>
                <div className="js-form-item form-item js-form-type-textfield form-item-phone js-form-item-phone form-no-label">
                  <label htmlFor="edit-phone--3" className="visually-hidden">Phone</label>
                  <input data-drupal-selector="edit-phone" type="text" id="edit-phone--3" name="phone" size="60" maxLength="255" placeholder="Phone" className="form-text" />
                </div>
                <div className="js-form-item form-item js-form-type-textarea form-item-questions-comments js-form-item-questions-comments form-no-label">
                  <label htmlFor="edit-questions-comments--3" className="visually-hidden js-form-required form-required">Questions/Comments</label>
                  <div>
                    <textarea data-drupal-selector="edit-questions-comments" id="edit-questions-comments--3" name="questions_comments" rows="5" cols="60" placeholder="Questions/Comments*" className="form-textarea required" required="required" aria-required="true"></textarea>
                  </div>
                </div>
                <div className="js-form-item form-item js-form-type-textfield form-item-what-is-5-and-5-added-together- js-form-item-what-is-5-and-5-added-together-">
                  <label htmlFor="edit-what-is-5-and-5-added-together---3" className="js-form-required form-required">What is 5 and 5 added together?*</label>
                  <input pattern="^10" data-webform-pattern-error="Incorrect" data-drupal-selector="edit-what-is-5-and-5-added-together-" type="text" id="edit-what-is-5-and-5-added-together---3" name="what_is_5_and_5_added_together_" size="60" maxLength="255" className="form-text required" required="required" aria-required="true" />
                </div>
                <div data-drupal-selector="edit-actions" className="form-actions webform-actions js-form-wrapper form-wrapper" id="edit-actions--5">
                  <input className="webform-button--submit button button--primary js-form-submit form-submit" data-drupal-selector="edit-actions-submit-3" type="submit" id="edit-actions-submit--3" name="op" value="Send message" />
                </div>
              </div>
              <input autoComplete="off" data-drupal-selector="form-g5pnccfcz9rfwwtijomlopasagrtk4fbsfl7usu0bgi" type="hidden" name="form_build_id" value="form-G5PnccFCZ9RfwwtiJOmLopasAGrTk4FBSFL7uSu0bGI" />
              <input data-drupal-selector="edit-webform-submission-contact-us-block-content-6-add-form-form-token-3" type="hidden" name="form_token" value="hIgJvkwxZDU4EX4iLZfDnKwk3gOgJXQlt5bNTNB4SJo" />
              <input data-drupal-selector="edit-webform-submission-contact-us-block-content-6-add-form-3" type="hidden" name="form_id" value="webform_submission_contact_us_block_content_6_add_form" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
