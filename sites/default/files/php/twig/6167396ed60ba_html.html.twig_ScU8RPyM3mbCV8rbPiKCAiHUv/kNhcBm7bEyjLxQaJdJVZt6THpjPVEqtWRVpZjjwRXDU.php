<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/TH_base2/templates/html.html.twig */
class __TwigTemplate_d6be999ee7aebd3ea40b8a27cf4d0238edc567d4e5c8daa9d21a523185c092a0 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 33
        echo "<!DOCTYPE html>
";
        // line 34
        if (twig_get_attribute($this->env, $this->source, ($context["ie_enabled_versions"] ?? null), "ie8", [], "any", false, false, true, 34)) {
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("TH_base2/ie8"), "html", null, true);
            echo "
";
        }
        // line 37
        if ((twig_get_attribute($this->env, $this->source, ($context["ie_enabled_versions"] ?? null), "ie9", [], "any", false, false, true, 37) || twig_get_attribute($this->env, $this->source, ($context["ie_enabled_versions"] ?? null), "ie8", [], "any", false, false, true, 37))) {
            // line 38
            echo "  <!--[if lt IE 7]>     <html";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["html_attributes"] ?? null), "addClass", [0 => "no-js", 1 => "lt-ie9", 2 => "lt-ie8", 3 => "lt-ie7"], "method", false, false, true, 38), 38, $this->source), "html", null, true);
            echo "><![endif]-->
  <!--[if IE 7]>        <html";
            // line 39
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["html_attributes"] ?? null), "removeClass", [0 => "lt-ie7"], "method", false, false, true, 39), 39, $this->source), "html", null, true);
            echo "><![endif]-->
  <!--[if IE 8]>        <html";
            // line 40
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["html_attributes"] ?? null), "removeClass", [0 => "lt-ie8"], "method", false, false, true, 40), 40, $this->source), "html", null, true);
            echo "><![endif]-->
  <!--[if gt IE 8]><!--><html";
            // line 41
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["html_attributes"] ?? null), "removeClass", [0 => "lt-ie9"], "method", false, false, true, 41), 41, $this->source), "html", null, true);
            echo "><!--<![endif]-->
";
        } else {
            // line 43
            echo "<html";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["html_attributes"] ?? null), 43, $this->source), "html", null, true);
            echo ">
";
        }
        // line 45
        echo "  <head>
    <head-placeholder token=\"";
        // line 46
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 46, $this->source), "html", null, true);
        echo "\">
    <title>";
        // line 47
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->safeJoin($this->env, $this->sandbox->ensureToStringAllowed(($context["head_title"] ?? null), 47, $this->source), " | "));
        echo "</title>
    <css-placeholder token=\"";
        // line 48
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 48, $this->source), "html", null, true);
        echo "\">
    <js-placeholder token=\"";
        // line 49
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 49, $this->source), "html", null, true);
        echo "\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">

    <!-- Google Structured Data: LocalBusiness -->
    <script type=\"application/ld+json\">
    {
      \"@context\": \"https://schema.org\",
      \"@type\": \"ProfessionalService\",
      \"url\": \"https://tht3.turtlehut.dev\",
      \"name\": \"";
        // line 58
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["head_title_array"] ?? null), "name", [], "any", false, false, true, 58), 58, $this->source), "html", null, true);
        echo "\",
      \"legalName\": \"";
        // line 59
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["head_title_array"] ?? null), "name", [], "any", false, false, true, 59), 59, $this->source), "html", null, true);
        echo "\",
      \"description\": \"";
        // line 60
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["head_title_array"] ?? null), "slogan", [], "any", false, false, true, 60), 60, $this->source), "html", null, true);
        echo "\",
      \"slogan\": \"";
        // line 61
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["head_title_array"] ?? null), "slogan", [], "any", false, false, true, 61), 61, $this->source), "html", null, true);
        echo "\",
      \"email\": \"mail@turtlehut.com\",
      \"image\": \"https://tht3.turtlehut.dev/sites/default/files/logo.png\",
      \"telephone\": \"+12486174639\",
      \"address\": {
        \"@type\": \"PostalAddress\",
        \"streetAddress\": \"6241 Grand River Suite 300\",
        \"addressLocality\": \"Brighton\",
        \"addressRegion\": \"MI\",
        \"postalCode\": \"48114\",
        \"addressCountry\": \"US\"
      },
      \"openingHoursSpecification\": {
        \"@type\": \"OpeningHoursSpecification\",
        \"dayOfWeek\": [
          \"Monday\",
          \"Tuesday\",
          \"Wednesday\",
          \"Thursday\",
          \"Friday\"
        ],
        \"opens\": \"8:30\",
        \"closes\": \"5:00\"
      },
      \"areaServed\": [
        {
          \"@type\": \"City\",
          \"name\": \"Brighton\",
          \"sameAs\": \"https://en.wikipedia.org/wiki/Brighton,_Michigan\"
        },
        {
          \"@type\": \"City\",
          \"name\": \"Howell\",
          \"sameAs\": \"https://en.wikipedia.org/wiki/Howell,_Michigan\"
        },
        {
          \"@type\": \"City\",
          \"name\": \"Ann Arbor\",
          \"sameAs\": \"https://en.wikipedia.org/wiki/Ann_Arbor,_Michigan\"
        }
      ]
    }
    </script>

    <!-- Google Structured Data: Logo -->
    <script type=\"application/ld+json\">
    {
      \"@context\": \"https://schema.org\",
      \"@type\": \"Organization\",
      \"url\": \"https://tht3.turtlehut.dev\",
      \"logo\": \"https://tht3.turtlehut.dev/sites/default/files/logo.png\"
    }
    </script>

    <!-- Google Structured Data: BreadcrumbList -->
    <script type=\"application/ld+json\">
    {
      \"@context\": \"https://schema.org\",
      \"@type\": \"BreadcrumbList\",
        \"itemListElement\": [
          {
            \"@type\": \"ListItem\",
            \"position\": 1,
            \"name\": \"Service 1\",
            \"item\": \"https://tht3.turtlehut.dev/service-1\"
          },{
            \"@type\": \"ListItem\",
            \"position\": 2,
            \"name\": \"Hero Basic Page 1\",
            \"item\": \"https://tht3.turtlehut.dev/service-1/hero-basic-page-1\"
          },{
            \"@type\": \"ListItem\",
            \"position\": 1,
            \"name\": \"Service 2\",
            \"item\": \"https://tht3.turtlehut.dev/hero-basic-page-2\"
          },{
            \"@type\": \"ListItem\",
            \"position\": 2,
            \"name\": \"Hero Basic Page 2\",
            \"item\": \"https://tht3.turtlehut.dev/service-1/hero-basic-page-2\"
          }
        ]
    }
    </script>

    <!-- Structured Data: AboutPage -->
    ";
        // line 147
        if (((twig_get_attribute($this->env, $this->source, ($context["head_title_array"] ?? null), "title", [], "any", false, false, true, 147) == "About Us") || (twig_get_attribute($this->env, $this->source, ($context["head_title_array"] ?? null), "title", [], "any", false, false, true, 147) == "About"))) {
            // line 148
            echo "      <script type=\"application/ld+json\">
      {
        \"@context\": \"http://schema.org/\",
        \"@type\": \"AboutPage\",
        \"name\": \"";
            // line 152
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["head_title_array"] ?? null), "title", [], "any", false, false, true, 152), 152, $this->source), "html", null, true);
            echo "\",
        \"description\": \"Description of About page\",
        \"url\": https://tht3.turtlehut.dev/about-us
      }
      </script>
    ";
        }
        // line 158
        echo "
  </head>
  ";
        // line 160
        $context["classes"] = [];
        // line 161
        echo "  ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["user"] ?? null), "roles", [], "any", false, false, true, 161));
        foreach ($context['_seq'] as $context["_key"] => $context["role"]) {
            // line 162
            echo "    ";
            $context["classes"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["classes"] ?? null), 162, $this->source), [0 => ("role--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($context["role"], 162, $this->source)))]);
            // line 163
            echo "  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['role'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 164
        echo "
  ";
        // line 165
        $context["sidebar_first"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 165), 165, $this->source));
        // line 166
        echo "  ";
        $context["sidebar_second"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 166), 166, $this->source));
        // line 167
        echo "  <body";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null), 1 => (( !        // line 168
($context["is_front"] ?? null)) ? ("with-subnav") : ("")), 2 => ((        // line 169
($context["sidebar_first"] ?? null)) ? ("sidebar-first") : ("")), 3 => ((        // line 170
($context["sidebar_second"] ?? null)) ? ("sidebar-second") : ("")), 4 => ((((        // line 171
($context["sidebar_first"] ?? null) &&  !($context["sidebar_second"] ?? null)) || (($context["sidebar_second"] ?? null) &&  !($context["sidebar_first"] ?? null)))) ? ("one-sidebar") : ("")), 5 => (((        // line 172
($context["sidebar_first"] ?? null) && ($context["sidebar_second"] ?? null))) ? ("two-sidebars") : ("")), 6 => ((( !        // line 173
($context["sidebar_first"] ?? null) &&  !($context["sidebar_second"] ?? null))) ? ("no-sidebar") : ("")), 7 => ((        // line 174
($context["node_type"] ?? null)) ? (("node--type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["node_type"] ?? null), 174, $this->source)))) : ("")), 8 => (( !        // line 175
($context["root_path"] ?? null)) ? ("path-frontpage") : (("path-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["root_path"] ?? null), 175, $this->source)))))], "method", false, false, true, 167), 167, $this->source), "html", null, true);
        // line 176
        echo ">
    <div id=\"skip\">
      <a href=\"#main-menu\" class=\"visually-hidden focusable skip-link\">
        ";
        // line 179
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Skip to main navigation"));
        echo "
      </a>
    </div>
    ";
        // line 182
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_top"] ?? null), 182, $this->source), "html", null, true);
        echo "
    ";
        // line 183
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page"] ?? null), 183, $this->source), "html", null, true);
        echo "
    ";
        // line 184
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_bottom"] ?? null), 184, $this->source), "html", null, true);
        echo "
    <js-bottom-placeholder token=\"";
        // line 185
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 185, $this->source), "html", null, true);
        echo "\">
    ";
        // line 186
        if (twig_get_attribute($this->env, $this->source, ($context["browser_sync"] ?? null), "enabled", [], "any", false, false, true, 186)) {
            // line 187
            echo "      <script id=\"__bs_script__\">
      document.write(\"<script async src='http://";
            // line 188
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["browser_sync"] ?? null), "host", [], "any", false, false, true, 188), 188, $this->source), "html", null, true);
            echo ":";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["browser_sync"] ?? null), "port", [], "any", false, false, true, 188), 188, $this->source), "html", null, true);
            echo "/browser-sync/browser-sync-client.js'><\\/script>\".replace(\"HOST\", location.hostname));
      </script>
    ";
        }
        // line 191
        echo "  </body>
</html>
";
    }

    public function getTemplateName()
    {
        return "themes/TH_base2/templates/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  299 => 191,  291 => 188,  288 => 187,  286 => 186,  282 => 185,  278 => 184,  274 => 183,  270 => 182,  264 => 179,  259 => 176,  257 => 175,  256 => 174,  255 => 173,  254 => 172,  253 => 171,  252 => 170,  251 => 169,  250 => 168,  248 => 167,  245 => 166,  243 => 165,  240 => 164,  234 => 163,  231 => 162,  226 => 161,  224 => 160,  220 => 158,  211 => 152,  205 => 148,  203 => 147,  114 => 61,  110 => 60,  106 => 59,  102 => 58,  90 => 49,  86 => 48,  82 => 47,  78 => 46,  75 => 45,  69 => 43,  64 => 41,  60 => 40,  56 => 39,  51 => 38,  49 => 37,  44 => 35,  42 => 34,  39 => 33,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/TH_base2/templates/html.html.twig", "/Users/trentonmarks/Sites/devdesktop/tht-react/themes/TH_base2/templates/html.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 34, "set" => 160, "for" => 161);
        static $filters = array("escape" => 35, "safe_join" => 47, "merge" => 162, "clean_class" => 162, "render" => 165, "t" => 179);
        static $functions = array("attach_library" => 35);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set', 'for'],
                ['escape', 'safe_join', 'merge', 'clean_class', 'render', 't'],
                ['attach_library']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
