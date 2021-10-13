<?php

namespace Drupal\snippet\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\Core\Entity\EntityPublishedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining Snippet entities.
 *
 * @ingroup snippet
 */
interface SnippetInterface extends ContentEntityInterface, EntityChangedInterface, EntityPublishedInterface, EntityOwnerInterface {

  /**
   * Add get/set methods for your configuration properties here.
   */

  /**
   * Gets the Snippet name.
   *
   * @return string
   *   Name of the Snippet.
   */
  public function getName();

  /**
   * Sets the Snippet name.
   *
   * @param string $name
   *   The Snippet name.
   *
   * @return \Drupal\snippet\Entity\SnippetInterface
   *   The called Snippet entity.
   */
  public function setName($name);

  /**
   * Gets the Snippet creation timestamp.
   *
   * @return int
   *   Creation timestamp of the Snippet.
   */
  public function getCreatedTime();

  /**
   * Sets the Snippet creation timestamp.
   *
   * @param int $timestamp
   *   The Snippet creation timestamp.
   *
   * @return \Drupal\snippet\Entity\SnippetInterface
   *   The called Snippet entity.
   */
  public function setCreatedTime($timestamp);

}
