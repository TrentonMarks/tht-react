<?php

namespace Drupal\snippet;

use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Access controller for the Snippet entity.
 *
 * @see \Drupal\snippet\Entity\Snippet.
 */
class SnippetAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\snippet\Entity\SnippetInterface $entity */

    switch ($operation) {

      case 'view':

        if (!$entity->isPublished()) {
          return AccessResult::allowedIfHasPermission($account, 'view unpublished snippet entities');
        }


        return AccessResult::allowedIfHasPermission($account, 'view published snippet entities');

      case 'update':

        return AccessResult::allowedIfHasPermission($account, 'edit snippet entities');

      case 'delete':

        return AccessResult::allowedIfHasPermission($account, 'delete snippet entities');
    }

    // Unknown operation, no opinion.
    return AccessResult::neutral();
  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermission($account, 'add snippet entities');
  }


}
