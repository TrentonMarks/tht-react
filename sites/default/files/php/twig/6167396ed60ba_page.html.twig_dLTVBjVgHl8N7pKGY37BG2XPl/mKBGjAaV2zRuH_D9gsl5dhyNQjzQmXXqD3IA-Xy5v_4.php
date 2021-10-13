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

/* themes/TH_base2/templates/page.html.twig */
class __TwigTemplate_d079d1a30067026955d3ad1064a9abe2054c95e56edec75e8d3823b5c4c98b65 extends \Twig\Template
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
        // line 1
        $context["main_menu"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 1), 1, $this->source));
        // line 2
        $context["secondary_menu"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 2), 2, $this->source));
        // line 3
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "layout-container", 1 => (((        // line 5
($context["main_menu"] ?? null) || ($context["secondary_menu"] ?? null))) ? ("with-navigation") : ("")), 2 => ((        // line 6
($context["secondary_menu"] ?? null)) ? ("with-subnav") : (""))], "method", false, false, true, 3), 3, $this->source), "html", null, true);
        // line 7
        echo ">

  <!-- ______________________ HEADER _______________________ -->

    <nav id=\"top-top-nav\" class=\"menu\">
      <div class=\"container\">
        ";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "top_navigation", [], "any", false, false, true, 13), 13, $this->source), "html", null, true);
        echo "
      </div>
    </nav><!-- /#toptopnav -->


  ";
        // line 18
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 18)) {
            // line 19
            echo "    <header id=\"header\">
      <div class=\"container\">
        <div id=\"header-region\">
          ";
            // line 22
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
            echo "
        </div>
        <nav id=\"service-menu\" class=\"menu\">
          <div class=\"container\">
            ";
            // line 26
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "service_menu", [], "any", false, false, true, 26), 26, $this->source), "html", null, true);
            echo "
          </div>
        </nav><!-- /#navigation -->
      </div>
    </header><!-- /#header -->
  ";
        }
        // line 32
        echo "
    <div id=\"page-hero\" class=\"hero\">
      <div class=\"container\">
        ";
        // line 35
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "hero", [], "any", false, false, true, 35), 35, $this->source), "html", null, true);
        echo "
      </div>
    </div><!-- /#Hero -->

  <!-- ______________________ MAIN _______________________ -->

  <div id=\"main\">
    <div class=\"container\">

      <div id=\"main-top\">
        <div class=\"container\">
          ";
        // line 46
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_top", [], "any", false, false, true, 46), 46, $this->source), "html", null, true);
        echo "
        </div>
      </div><!-- /#main-top -->

      <div id=\"content-wrapper\">
        <section id=\"content\">

          <div id=\"content-header\">

            ";
        // line 55
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 55), 55, $this->source), "html", null, true);
        echo "

            ";
        // line 57
        if ($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 57))) {
            // line 58
            echo "              <div id=\"highlighted\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 58), 58, $this->source), "html", null, true);
            echo "</div>
            ";
        }
        // line 60
        echo "
            ";
        // line 61
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 61, $this->source), "html", null, true);
        echo "

            ";
        // line 63
        if (($context["title"] ?? null)) {
            // line 64
            echo "              <h1 class=\"title\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 64, $this->source), "html", null, true);
            echo "</h1>
            ";
        }
        // line 66
        echo "
            ";
        // line 67
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 67, $this->source), "html", null, true);
        echo "
            ";
        // line 68
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 68), 68, $this->source), "html", null, true);
        echo "

            ";
        // line 70
        if (($context["tabs"] ?? null)) {
            // line 71
            echo "              <div class=\"tabs\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["tabs"] ?? null), 71, $this->source), "html", null, true);
            echo "</div>
            ";
        }
        // line 73
        echo "
            ";
        // line 74
        if (($context["action_links"] ?? null)) {
            // line 75
            echo "              <ul class=\"action-links\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["action_links"] ?? null), 75, $this->source), "html", null, true);
            echo "</ul>
            ";
        }
        // line 77
        echo "
          </div><!-- /#content-header -->

          <div id=\"content-area\">
            ";
        // line 81
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 81), 81, $this->source), "html", null, true);
        echo "
          </div>

        </section><!-- /#content -->

        ";
        // line 86
        if ($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 86))) {
            // line 87
            echo "          <aside id=\"sidebar-first\" class=\"column sidebar first\">
            ";
            // line 88
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 88), 88, $this->source), "html", null, true);
            echo "
          </aside><!-- /#sidebar-first -->
        ";
        }
        // line 91
        echo "
        ";
        // line 92
        if ($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 92))) {
            // line 93
            echo "          <aside id=\"sidebar-second\" class=\"column sidebar second\">
            ";
            // line 94
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 94), 94, $this->source), "html", null, true);
            echo "
          </aside><!-- /#sidebar-second -->
        ";
        }
        // line 97
        echo "
      </div><!-- /#content-wrapper -->

      <div id=\"main-bottom\">
        <div class=\"container\">
          ";
        // line 102
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_bottom", [], "any", false, false, true, 102), 102, $this->source), "html", null, true);
        echo "
        </div>
      </div><!-- /#main-bottom -->

    </div><!-- /.container -->
  </div><!-- /#main -->

  <!-- ______________________ TESTIMONIALS _______________________ -->

    <div id=\"testimonials\" class=\"testimonials\">
      <div class=\"container\">
        ";
        // line 113
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "testimonials", [], "any", false, false, true, 113), 113, $this->source), "html", null, true);
        echo "
      </div>
    </div><!-- /#testimonials -->

  <!-- ______________________ FOOTER _______________________ -->

  ";
        // line 119
        if ($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 119))) {
            // line 120
            echo "    <footer id=\"footer\">
      <div class=\"container\">
        <div id=\"footer-region\">
          ";
            // line 123
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 123), 123, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    </footer><!-- /#footer -->
  ";
        }
        // line 128
        echo "
  ";
        // line 129
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "th_code", [], "any", false, false, true, 129)) {
            // line 130
            echo "    <footer id=\"th_code\">
      <div class=\"container\">
        <div id=\"th_code-region\">
          ";
            // line 133
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "th_code", [], "any", false, false, true, 133), 133, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    </footer><!-- /#footer -->
  ";
        }
        // line 138
        echo "
</div><!-- /.layout-container -->
";
    }

    public function getTemplateName()
    {
        return "themes/TH_base2/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  280 => 138,  272 => 133,  267 => 130,  265 => 129,  262 => 128,  254 => 123,  249 => 120,  247 => 119,  238 => 113,  224 => 102,  217 => 97,  211 => 94,  208 => 93,  206 => 92,  203 => 91,  197 => 88,  194 => 87,  192 => 86,  184 => 81,  178 => 77,  172 => 75,  170 => 74,  167 => 73,  161 => 71,  159 => 70,  154 => 68,  150 => 67,  147 => 66,  141 => 64,  139 => 63,  134 => 61,  131 => 60,  125 => 58,  123 => 57,  118 => 55,  106 => 46,  92 => 35,  87 => 32,  78 => 26,  71 => 22,  66 => 19,  64 => 18,  56 => 13,  48 => 7,  46 => 6,  45 => 5,  43 => 3,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/TH_base2/templates/page.html.twig", "/Users/trentonmarks/Sites/devdesktop/tht-react/themes/TH_base2/templates/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 1, "if" => 18);
        static $filters = array("render" => 1, "escape" => 3);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['render', 'escape'],
                []
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
