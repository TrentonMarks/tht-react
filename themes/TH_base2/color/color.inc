<?php

/**
 * @file
 * Lists available colors and color schemes for the TH_base2 theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'primary_light' => t('Primary Light'),
    'primary_dark' => t('Primary Dark'),
    'contrast' => t('Contrast'),
    'neutral' => t('Neutral'),
    'neutral_40' => t('Neutral 40'),
    'neutral_20' => t('Neutral 20'),
    'snippet_bg' => t('Snippet Background'),
    'snippet_title' => t('Snippet Title'),
    'snippet_text' => t('Snippet Text'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Turtlehut (default)'),
      'colors' => [
        'primary_light' => '#abc6be',
        'primary_dark' => '#608995',
        'contrast' => '#df7027',
        'neutral' => '#34373c',
        'neutral_40' => '#33373c',
        'neutral_20' => '#34373d',
        'snippet_bg' => '#f0f0f0',
        'snippet_title' => '#333333',
        'snippet_text' => '#222222',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'css/color/color.css',
  ],

  // Files to copy.
  'copy' => [
    'logo.png',
  ],

  // Preview files.
  'preview_library' => 'TH_base2/color.preview',
  'preview_html' => 'color/preview.html',

  // Attachments.
  '#attached' => [
    'drupalSettings' => [
      'color' => [
        // Put the logo path into JavaScript for the live preview.
        'logo' => theme_get_setting('logo.url', 'TH_base2'),
      ],
    ],
  ],
];
