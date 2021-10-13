<?php

/**
 * @file
 * Contains Drupal\overseer\Form\OverseerFAQSettingsForm.
 */

namespace Drupal\overseer\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;

class OverseerFAQSettingsForm extends ConfigFormBase {
  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'overseer.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'overseer_settings';
  }

  /**
   * {@inheritdoc}
   */
   public function buildForm(array $form, FormStateInterface $form_state) {
     $config = $this->config('overseer.settings'); // current form settings

     /* Query all FAQ pages */
     $db = \Drupal::database(); // Drupal database
     $query_node_data = $db->query("SELECT * FROM {node_field_data} WHERE type = 'faq'"); // query for all FAQ pages
     $faq_pages = $query_node_data->fetchAll(); // run query

     /* Form Description */
     $form['description'] = array(
       '#type' => 'item',
       '#title' => $this->t('Overseer settings'),
       '#description' => $this->t('Override the Hero image for the FAQ page. Clear caches after saving for changes to take effect.'),
     );

     /* Loop: Create a set of fields for each FAQ page */
     foreach ($faq_pages as $page) {
       $nid = $page->nid; // node id

       /* Get URL to current FAQ page */
       $current_node_path = '/node/'.$nid; // FAQ page's path by its nid
       $query_path_data = $db->query("SELECT * FROM {path_alias} WHERE path = '$current_node_path'"); // query for FAQ page's path alias
       $path = $query_path_data->fetchAll(); // run query

       /* Form Details */
       $form['faq_page-'.$nid] = array(
         '#id' => 'faq_page-'.$nid,
         '#type' => 'details',
         '#title' => $this->t($page->title),
         '#description' => $this->t('<a href="'.$path[0]->alias.'">View page</a>'), // link to FAQ page
         '#open' => TRUE,
       );

       /* File upload field for Hero image */
       $form['faq_page-'.$nid][$nid] = array(
         '#type' => 'managed_file',
         '#name' => 'Hero',
         '#title' => $this->t('Hero image'),
         '#default_value' => $config->get($nid),
         '#description' => $this->t('One file only. 10 MB limit. Allowed types: png gif jpg jpeg.'),
         '#upload_validators' => array(
           'file_validate_extensions' => ['gif png jpg jpeg'],
           'file_validate_size' => [25600000],
         ),
         '#theme' => 'image_widget',
         '#preview_image_style' => 'thumbnail',
         '#upload_location' => 'public://',
         '#required' => FALSE,
       );

       /* Alt text field */
       $form['faq_page-'.$nid]['alt_text-'.$nid] = array(
         '#type' => 'textfield',
         '#title' => $this->t('Hero alt text'),
         '#default_value' => $config->get('alt_text-'.$nid),
         '#description' => $this->t('Short description of the image used by screen readers and displayed when the image is not loaded. This is important for accessibility.'),
       );

       /* Title */
       $form['faq_page-'.$nid]['title-'.$nid] = array(
         '#type' => 'textfield',
         '#title' => $this->t('Title'),
         '#default_value' => $config->get('title-'.$nid),
       );

       /* Body */
       $form['faq_page-'.$nid]['body-'.$nid] = array(
         '#type' => 'textarea',
         '#title' => $this->t('Body'),
         '#default_value' => $config->get('body-'.$nid),
       );
     }

     return parent::buildForm($form, $form_state);
   }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    /* Query all FAQ pages */
    $db = \Drupal::database();
    $query = $db->query("SELECT * FROM {node_field_data} WHERE type = 'faq'");
    $result = $query->fetchAll();

    /* Loop: Through each existing FAQ page */
    foreach ($result as $value) {
      $hero_image = $form_state->getValue($value->nid); // get field value

      /* Set Hero image's status in database from temporary to permanent */
      if(!empty($hero_image)) {
        $file = File::load($hero_image[0]); // load the object of the image file by it's fid
        $file->setPermanent(); // set the status flag permanent of the image file object
        $file->save(); // save the file in database ("managed_file" table)
      }

      /* Update the form's config object */
      $this->config('overseer.settings')
        ->set($value->nid, $form_state->getValue([$value->nid]))
        ->set('alt_text-'.$value->nid, $form_state->getValue(['alt_text-'.$value->nid]))
        ->set('title-'.$value->nid, $form_state->getValue(['title-'.$value->nid]))
        ->set('body-'.$value->nid, $form_state->getValue(['body-'.$value->nid]))
        ->save();
    }

    parent::submitForm($form, $form_state);
  }
}
