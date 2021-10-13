<?php

/**
 * @file
 * Contains Drupal\overseer\Form\OverseerSiteSettingsForm.
 */

namespace Drupal\overseer\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;

class OverseerSiteSettingsForm extends ConfigFormBase {
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

    /* Current Form Settings */
    $config = $this->config('overseer.settings');

    /* Form Description */
    $form['description'] = array(
      '#type' => 'item',
      '#title' => $this->t('Overseer settings'),
      '#description' => $this->t('Any fields saved in this form will override all other site settings.'),
    );

    /* Site Details */
    $form['site_details'] = array(
      '#id' => 'site_details',
      '#type' => 'details',
      '#title' => $this->t('Site Details'),
      '#open' => TRUE,
    );

    /* Site name */
    $form['site_details']['site_name'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('Site name'),
      '#default_value' => $config->get('site_name'),
    );

    /* Site slogan */
    $form['site_details']['site_slogan'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('Slogan'),
      '#default_value' => $config->get('site_slogan'),
    );

    /* Site email address */
    $form['site_details']['site_email'] = array(
      '#type' => 'email',
      '#title' => $this->t('Email address'),
      '#default_value' => $config->get('site_email'),
      '#description' => $this->t('The From address in automated emails sent during registration and new password requests, and other notifications. (Use an address ending in your site\'s domain to help prevent this email being flagged as spam).'),
    );

    /* Webform: Contact Us */
    $form['webform'] = array(
      '#id' => 'webform',
      '#type' => 'details',
      '#title' => $this->t('Webform: Contact Us'),
      '#open' => TRUE,
    );

    /* Webform's email address */
    $form['webform']['webform_email'] = array(
      '#type' => 'email',
      '#title' => $this->t('Email address'),
      '#default_value' => $config->get('webform_email'),
      '#description' => $this->t('Webform\'s To address for emails sent from the Contact Us webform.'),
    );

    /* Theme */
    $form['theme'] = array(
      '#id' => 'theme',
      '#type' => 'details',
      '#title' => $this->t('Theme Images'),
      '#open' => TRUE,
    );

    /* Theme logo */
    $form['theme']['logo'] = array(
      '#type' => 'managed_file',
      '#name' => 'logo',
      '#title' => $this->t('Upload logo image'),
      '#default_value' => $config->get('logo'),
      '#theme' => 'image_widget',
      '#preview_image_style' => 'thumbnail',
      '#upload_location' => 'public://'
    );

    /* Theme favicon */
    $form['theme']['favicon'] = array(
      '#type' => 'managed_file',
      '#name' => 'favicon',
      '#title' => $this->t('Upload favicon image'),
      '#default_value' => $config->get('favicon'),
      '#theme' => 'image_widget',
      '#preview_image_style' => 'thumbnail',
      '#upload_location' => 'public://'
    );

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    /* Get submitted form values */
    $site_name = $form_state->getValue(['site_name']);
    $slogan = $form_state->getValue(['site_slogan']);
    $email = $form_state->getValue(['site_email']);
    $webform_email = $form_state->getValue(['webform_email']);
    $logo = $form_state->getValue(['logo']);
    $favicon = $form_state->getValue(['favicon']);

    /* Update the form's config object */
    $this->config('overseer.settings')
      ->set('site_name', $site_name)
      ->set('site_slogan', $slogan)
      ->set('site_email', $email)
      ->set('webform_email', $webform_email)
      ->set('logo', $logo)
      ->set('favicon', $favicon)
      ->save();

    /* Configure site's name */
    if (!empty($site_name)) {
      \Drupal::service('config.factory')->getEditable('system.site')
        ->set('name', $site_name)
        ->save();
    }

    /* Configure site's slogan */
    if (!empty($slogan)) {
      \Drupal::service('config.factory')->getEditable('system.site')
        ->set('slogan', $slogan)
        ->save();
    }

    /* Configure site's email */
    if (!empty($email)) {
      \Drupal::service('config.factory')->getEditable('system.site')
        ->set('mail', $email)
        ->save();
    }

    /* Configure webform's email */
    if (!empty($webform_email)) {
      \Drupal::service('config.factory')->getEditable('webform.webform.contact')
        ->set('handlers.email.settings.to_mail', $webform_email)
        ->save();
    }

    /* Configure theme's logo image */
    if (!empty($logo)) {

      /* Set logo image's status in database from temporary to permanent */
      $file = File::load($logo[0]); // load the object of the image file by it's fid
      $file->setPermanent(); // set the status flag permanent of the image file object
      $file->save(); // save the file in database ( "managed_file" table)

      /* Fetch path of logo image from database */
      $db = \Drupal::database(); // Drupal database
      $query = $db->query("SELECT * FROM {file_managed} WHERE fid = $logo[0]"); // query for logo
      $result = $query->fetchAll(); // run query
      $logo_path = $result[0]->uri; // path to logo

      \Drupal::service('config.factory')->getEditable('idyll.settings')
        ->set('logo.use_default', FALSE)
        ->set('logo.path', $logo_path)
        ->save();
    }

    /* Configure theme's favicon image */
    if (!empty($favicon)) {

      /* Set favicon image's status in database from temporary to permanent */
      $file = File::load($favicon[0]); // load the object of the image file by it's fid
      $file->setPermanent(); // set the status flag permanent of the image file object
      $file->save(); // save the file in database ( "managed_file" table)

      /* Fetch path of favicon image from database */
      $db = \Drupal::database(); // Drupal database
      $query = $db->query("SELECT * FROM {file_managed} WHERE fid = $favicon[0]"); // query for favicon
      $result = $query->fetchAll(); // run query
      $favicon_path = $result[0]->uri; // path to favicon

      \Drupal::service('config.factory')->getEditable('idyll.settings')
        ->set('favicon.use_default', FALSE)
        ->set('favicon.path', $favicon_path)
        ->save();
    }

    parent::submitForm($form, $form_state);
  }

}
