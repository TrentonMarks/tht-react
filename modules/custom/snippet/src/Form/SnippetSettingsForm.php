<?php
/**
 * @file
 * Contains \Drupal\snippet\Form\SnippetSettingsForm
 */

namespace Drupal\snippet\Form;

use Drupal\Core\Form\ConfigFormBase;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Form\FormStateInterface;

/**
 * Defines a form to configure Snippet module settings
 */
class SnippetSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormID() {
    return 'snippet_settings';
  }

   /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
    'snippet.settings'
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, Request $request = NULL) {
    $types = node_type_get_names(); // array of Content types
    $config = $this->config('snippet.settings'); // current form settings

    /* Checkboxes input - User can select Content types */
    $form['snippet_types'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t('Enable the Snippet feature for the following content types:'),
      '#default_value' => $config->get('enabled_types'),
      '#options' => $types,
      '#description' => t('On the specified node types, the Snippet feature will be available that can be utilized while creating or editing nodes.'),
    ];
    $form['array_filter'] = ['#type' => 'value', '#value' => TRUE];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $enabled_types = array_filter($form_state->getValue('snippet_types')); // get field values
    sort($enabled_types); // sorts array

    /* Update the form's config object */
    $this->config('snippet.settings')
      ->set('enabled_types', $enabled_types)
      ->save();
      
    parent::submitForm($form, $form_state);
  }

}
